import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL is not defined in the environment variables.')
      return NextResponse.json(
        { status: 'error', message: 'Server configuration error. GOOGLE_SCRIPT_URL is missing.' },
        { status: 500 }
      )
    }

    // Forward the request to Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact', // Explicitly set type to distinguish in Apps Script
        ...data
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Google Apps Script responded with error status:', response.status, errText)
      return NextResponse.json(
        { status: 'error', message: 'Failed to record contact inquiry. Google service returned an error.' },
        { status: 502 }
      )
    }

    const text = await response.text()
    let result
    try {
      result = JSON.parse(text)
    } catch {
      result = { status: 'success', message: text }
    }

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Error forwarding contact inquiry:', error)
    return NextResponse.json(
      { status: 'error', message: error.message || 'Internal server error occurred.' },
      { status: 500 }
    )
  }
}
