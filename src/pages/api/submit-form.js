const { google } = require('googleapis')
const fs = require('fs')
const path = require('path')

const CONTACT_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_CONTACT_SPREADSHEET_ID || '1d5gWT7vx2COSdu99DrR4Dr7QQWdBkviopObT8UiyDSc'
const CAREERS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_CAREERS_SPREADSHEET_ID || '1rCldUPLbuzJ6f9CYUNi0DgY-o_Y7le1I2wBsgk_eTlE'
const CONTACT_SHEET_NAME = process.env.GOOGLE_SHEETS_CONTACT_SHEET_NAME || 'Contact'
const CAREERS_SHEET_NAME = process.env.GOOGLE_SHEETS_CAREERS_SHEET_NAME || 'Careers'

const LOCAL_CREDENTIAL_FILES = [
  'google-credentials.json',
  'service-account.json',
  'credentials.json',
].map((fileName) => path.join(process.cwd(), fileName))

const loadCredentialsFromPath = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Google Sheets credentials file not found at ${filePath}`)
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch (error) {
    throw new Error(`Unable to parse credentials file at ${filePath}: ${error.message}`)
  }
}

const loadCredentials = () => {
  const rawJson = process.env.GOOGLE_SHEETS_CREDENTIALS_JSON
  const credentialsPath = process.env.GOOGLE_SHEETS_CREDENTIALS_PATH

  let credentials

  if (rawJson) {
    try {
      credentials = JSON.parse(rawJson)
    } catch (error) {
      throw new Error(`Invalid GOOGLE_SHEETS_CREDENTIALS_JSON: ${error.message}`)
    }
  } else if (credentialsPath) {
    const resolvedPath = path.isAbsolute(credentialsPath)
      ? credentialsPath
      : path.join(process.cwd(), credentialsPath)

    credentials = loadCredentialsFromPath(resolvedPath)
  } else {
    for (const candidate of LOCAL_CREDENTIAL_FILES) {
      if (fs.existsSync(candidate)) {
        credentials = loadCredentialsFromPath(candidate)
        break
      }
    }
  }

  if (!credentials) {
    throw new Error(
      'Missing Google Sheets credentials. Set GOOGLE_SHEETS_CREDENTIALS_JSON, GOOGLE_SHEETS_CREDENTIALS_PATH, or add a service account JSON file at google-credentials.json, service-account.json, or credentials.json in the project root.'
    )
  }

  // Check if this is an OAuth2 Client ID file (which contains 'web' or 'installed' objects) instead of a Service Account Key
  if (credentials.web || credentials.installed) {
    throw new Error(
      'The loaded credentials file appears to be an OAuth 2.0 Client ID (Web/Installed application) rather than a Google Service Account key. For backend server-to-server API access (like appending form data), you must use a Service Account. Please create a Google Service Account, download its JSON key file, and use it instead.'
    )
  }

  // Validate required Service Account fields
  if (credentials.type !== 'service_account' || !credentials.client_email || !credentials.private_key) {
    throw new Error(
      'Invalid credentials format. The credentials JSON must be a Google Service Account key containing "type": "service_account", "client_email", and "private_key".'
    )
  }

  return credentials
}

const getSheetsClient = async () => {
  const credentials = loadCredentials()
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  const client = await auth.getClient()
  return google.sheets({ version: 'v4', auth: client })
}

const buildRow = (formType, data) => {
  // Use Asia/Kolkata (IST) to format a clean date/time timestamp string
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  if (formType === 'careers') {
    return [
      timestamp,
      data.full_name || '',
      data.email || '',
      data.phone || '',
      data.portfolio || '',
      data.role || '',
      data.resume || '',
    ]
  }

  return [
    timestamp,
    data.name || '',
    data.email || '',
    data.phone || '',
    data.location || '',
    data.website || '',
    data.service || '',
    data.sub_service || '',
    data.message || '',
  ]
}

const ensureSheetExistsAndWriteHeaders = async (sheets, spreadsheetId, sheetName, formType) => {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
  })

  const sheetsList = spreadsheet.data.sheets || []
  const sheetExists = sheetsList.some(
    (s) => s.properties.title.toLowerCase() === sheetName.toLowerCase()
  )

  let actualSheetName = sheetName
  if (sheetExists) {
    const matchingSheet = sheetsList.find(
      (s) => s.properties.title.toLowerCase() === sheetName.toLowerCase()
    )
    actualSheetName = matchingSheet.properties.title
  } else {
    // Create the sheet since it does not exist
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      },
    })
    actualSheetName = sheetName
  }

  // Check if sheet is empty by reading the first row
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${actualSheetName}!A1:Z1`,
  })

  const firstRow = response.data.values ? response.data.values[0] : null

  const headers = formType === 'careers'
    ? ['Timestamp', 'Full Name', 'Email', 'Phone', 'Portfolio URL', 'Role Name', 'Resume URL']
    : ['Timestamp', 'Name', 'Email', 'Phone', 'Location', 'Website', 'Service', 'Sub Service', 'Message']

  if (!firstRow || firstRow.length === 0) {
    // Write headers
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${actualSheetName}!A1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers],
      },
    })
  }

  return actualSheetName
}

const appendRow = async (spreadsheetId, sheetName, formType, values) => {
  const sheets = await getSheetsClient()
  const actualSheetName = await ensureSheetExistsAndWriteHeaders(sheets, spreadsheetId, sheetName, formType)
  return sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${actualSheetName}!A1`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [values],
    },
  })
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  const { formType, data } = req.body || {}
  if (!formType || typeof data !== 'object') {
    return res.status(400).json({ error: 'Invalid request payload.' })
  }

  const spreadsheetId = formType === 'careers' ? CAREERS_SPREADSHEET_ID : CONTACT_SPREADSHEET_ID
  const sheetName = formType === 'careers' ? CAREERS_SHEET_NAME : CONTACT_SHEET_NAME

  try {
    const values = buildRow(formType, data)
    await appendRow(spreadsheetId, sheetName, formType, values)
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Google Sheets API error:', error)
    return res.status(500).json({ error: error.message || 'Failed to submit to Google Sheets.' })
  }
}
