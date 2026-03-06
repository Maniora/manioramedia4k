"use client"
import LegalLayout from '@/components/LegalLayout'
import Reveal from '@/components/Reveal'

/* ─── Shared UI Primitives ─── */

const SectionLabel = ({ n }) => (
  <span className="font-mono text-[10px] text-brand uppercase tracking-[0.12em] block mb-2.5">
    SECTION {n}
  </span>
)

const H2 = ({ children }) => (
  <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
    {children}
  </h2>
)

const H3 = ({ children }) => (
  <h3 className="text-lg font-bold text-white/90 mt-6 mb-2.5">
    {children}
  </h3>
)

const P = ({ children }) => (
  <p className="text-[15px] text-white/60 leading-relaxed mb-4">
    {children}
  </p>
)

const DocList = ({ items }) => (
  <ul className="space-y-4 my-4">
    {items.map((item, i) => (
      <li key={i} className="flex gap-4 text-sm text-white/60 leading-relaxed">
        <span className="text-brand shrink-0 mt-1">→</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Box = ({ variant = 'yellow', children }) => {
  const styles = {
    yellow: "bg-brand/5 border-brand/20 border-l-brand text-white/80",
    red: "bg-red-500/5 border-red-500/20 border-l-red-500 text-red-300",
    cyan: "bg-cyan-500/5 border-cyan-500/20 border-l-cyan-500 text-cyan-300",
  }
  return (
    <div className={`border-l-4 rounded-r-xl p-5 my-6 text-sm leading-relaxed ${styles[variant]}`}>
      {children}
    </div>
  )
}

const DocTable = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6 border border-white/10 rounded-xl bg-white/5">
    <table className="w-full text-left text-sm border-collapse">
      <thead>
        <tr className="border-b border-white/10 bg-white/5">
          {headers.map((h, i) => (
            <th key={i} className="p-4 font-mono text-[10px] uppercase tracking-wider text-brand">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {rows.map((row, ri) => (
          <tr key={ri} className="hover:bg-white/5 transition-colors">
            {row.map((cell, ci) => (
              <td key={ci} className="p-4 text-white/60 align-top" dangerouslySetInnerHTML={{ __html: cell }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

/* ─── Icons ─── */
const IconEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
)
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
)
const IconLocation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
)
const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
)
const IconSuitcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
)
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
)

const ContactCard = ({ title, rows }) => (
  <div className="bg-[#111118] border border-white/10 rounded-2xl p-8 mt-4 shadow-2xl">
    <h4 className="text-lg font-extrabold text-white mb-6 uppercase tracking-tight">{title}</h4>
    <div className="space-y-4">
      {rows.map((row, i) => (
        <div key={i} className="flex items-start gap-4 text-sm border-b border-white/5 pb-4 last:border-0 last:pb-0">
          <span className="text-brand w-6 shrink-0 pt-0.5">{row[0]}</span>
          <div className="flex flex-col">
            <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{row[1]}</span>
            {row[2] ? (
              <a href={row[2]} target={row[2].startsWith('http') ? '_blank' : undefined}
                className="text-brand hover:underline transition-all font-medium">
                {row[3] || row[1]}
              </a>
            ) : (
              <span className="text-white/80 font-medium">{row[3] || row[1]}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const DocSection = ({ id, num, title, children }) => (
  <section id={id} className="doc-section mb-16 pb-16 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
    <Reveal>
      <SectionLabel n={num} />
      <H2>{title}</H2>
      {children}
    </Reveal>
  </section>
)

/* ═══════════════════════════════════════════
   PRIVACY POLICY CONTENT
   Refactored for LegalLayout
═══════════════════════════════════════════ */

export default function Privacy() {
  const PP_SECTIONS = [
    { id: 'pp-intro', label: '1. Introduction' },
    { id: 'pp-collect', label: '2. Data We Collect' },
    { id: 'pp-how', label: '3. How We Collect' },
    { id: 'pp-purpose', label: '4. Purpose of Use' },
    { id: 'pp-share', label: '5. Data Sharing' },
    { id: 'pp-retention', label: '6. Data Retention' },
    { id: 'pp-rights', label: '7. Your Rights (DPDP Act)' },
    { id: 'pp-security', label: '8. Data Security' },
    { id: 'pp-cookies', label: '9. Cookies' },
    { id: 'pp-third', label: '10. Third-Party Links' },
    { id: 'pp-children', label: '11. Children\'s Privacy' },
    { id: 'pp-grievance', label: '12. Grievance Officer' },
    { id: 'pp-changes', label: '13. Policy Changes' },
  ]

  return (
    <LegalLayout activeNav="pp" sections={PP_SECTIONS}>
      <div className="relative min-w-0">

        <DocSection id="pp-intro" num="01" title="Introduction">
          <P>This Privacy Policy ("Policy") describes how <strong className="text-white">4KMedia LLP</strong> ("4KMedia," "we," "us," or "our"), registered at 3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India, collects, uses, processes, stores, and protects your personal data when you visit <strong className="text-white">www.4kmedia.in</strong> or engage with our services.</P>
          <P>This Policy is published in compliance with:</P>
          <DocList items={[
            'The Digital Personal Data Protection Act, 2023 (DPDP Act)',
            'The Information Technology Act, 2000 and IT (Amendment) Act, 2008',
            'The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011',
            'The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021',
          ]} />
          <Box variant="yellow">By using our Platform or engaging our services, you acknowledge that you have read and understood this Policy and consent to the collection and use of your data as described herein. If you do not agree, please do not use our Platform or services.</Box>
        </DocSection>

        <DocSection id="pp-collect" num="02" title="Personal Data We Collect">
          <H3>2.1 Data You Provide Directly</H3>
          <DocTable
            headers={['Category', 'Examples', 'When Collected']}
            rows={[
              ['Identity Data', 'Full name, business name', 'Contact forms, service onboarding'],
              ['Contact Data', 'Email address, mobile number, WhatsApp number', 'Enquiry forms, service agreements'],
              ['Business Data', 'Company name, GSTIN, business type, industry', 'Client onboarding, invoicing'],
              ['Financial Data', 'Bank account details, UPI ID (for payment processing only)', 'Invoice and payment processing'],
              ['Content Data', 'Images, videos, brand assets, copy provided by you', 'Project delivery'],
              ['Communication Data', 'Emails, WhatsApp messages, call records', 'Ongoing client communication'],
            ]}
          />
          <H3>2.2 Data Collected Automatically</H3>
          <DocList items={[
            'IP address and approximate geographic location',
            'Browser type, version, and device information',
            'Pages visited, time spent, links clicked, and referral source',
            'Cookie identifiers and session data',
          ]} />
          <H3>2.3 Sensitive Personal Data</H3>
          <P>Under the IT Rules 2011, Sensitive Personal Data or Information (SPDI) includes financial information, biometric data, passwords, and health data. 4KMedia does not intentionally collect SPDI beyond what is strictly necessary for service delivery. Where SPDI is collected, explicit consent is obtained.</P>
        </DocSection>

        <DocSection id="pp-how" num="03" title="How We Collect Your Data">
          <DocList items={[
            'Directly from you — when you fill a contact form, send us an email or WhatsApp message, book a consultation, or enter a service agreement',
            'Automatically — via cookies, Google Analytics, and similar tracking technologies',
            'From third parties — Meta Business Suite, Google Ads Manager, LinkedIn Campaign Manager',
            'Social media platforms — when you interact with our accounts or pages',
          ]} />
        </DocSection>

        <DocSection id="pp-purpose" num="04" title="Purpose & Legal Basis">
          <DocTable
            headers={['Purpose', 'Legal Basis']}
            rows={[
              ['Providing and delivering our services', 'Contractual necessity / Consent'],
              ['Sending invoices and processing payments', 'Contractual necessity / Legal obligation'],
              ['Responding to your enquiries and communications', 'Legitimate interest / Consent'],
              ['Analysing website usage to improve our Platform', 'Legitimate interest'],
              ['Complying with legal and regulatory obligations', 'Legal obligation'],
              ['Portfolio and case study usage (with consent)', 'Consent'],
            ]}
          />
          <Box variant="cyan">Under the DPDP Act 2023, we process your personal data only for purposes that are necessary, specific, and for which your consent has been obtained.</Box>
        </DocSection>

        <DocSection id="pp-share" num="05" title="Data Sharing & Disclosure">
          <P>4KMedia does not sell, rent, or trade your personal data to any third party. We may share your data in limited circumstances:</P>
          <H3>5.1 Service Providers (Data Processors)</H3>
          <DocList items={[
            'Zoho Corporation — CRM, project management, email campaigns',
            'Google LLC — Analytics, Google Ads, Gmail',
            'Meta Platforms Inc. — Ad management',
            'Payment Processors — RBI-regulated payment gateways',
          ]} />
          <H3>5.2 Legal Disclosure</H3>
          <P>We may disclose your data if required by law, court order, or government authority under the IT Act 2000 or any other applicable Indian law.</P>
          <Box variant="red">Where your data is processed outside India, we ensure appropriate safeguards are in place as required under the DPDP Act, 2023.</Box>
        </DocSection>

        <DocSection id="pp-retention" num="06" title="Data Retention">
          <DocTable
            headers={['Data Type', 'Retention Period']}
            rows={[
              ['Client service and project data', '7 years (GST/tax compliance)'],
              ['Financial records and invoices', '8 years (Income Tax Act, 1961)'],
              ['Communication records', '3 years from last interaction'],
              ['Website analytics data', '26 months'],
            ]}
          />
        </DocSection>

        <DocSection id="pp-rights" num="07" title="Your Rights (DPDP Act 2023)">
          <DocList items={[
            'Right to Information — Know what data we hold and how it is processed',
            'Right to Correction — Request correction of inaccurate data',
            'Right to Erasure — Request deletion of data no longer necessary',
            'Right to Withdraw Consent — Withdraw processing consent at any time',
            'Right to Grievance Redressal — Raise concerns with our Grievance Officer',
          ]} />
          <P>To exercise these rights, send a request to <strong className="text-white">team@4kmedia.in</strong>. We will respond within <strong className="text-white">30 days</strong>.</P>
        </DocSection>

        <DocSection id="pp-security" num="08" title="Data Security">
          <P>4KMedia implements reasonable technical and organisational security measures in accordance with the IT Rules, 2011.</P>
          <DocList items={[
            'SSL/TLS encryption for all data transmitted',
            'Access controls limiting data to authorised team members only',
            'Secure password policies and two-factor authentication',
          ]} />
          <Box variant="red">No method of transmission over the internet is 100% secure. In the event of a breach, we will notify affected individuals and authorities as required by law.</Box>
        </DocSection>

        <DocSection id="pp-cookies" num="09" title="Cookies & Tracking">
          <DocTable
            headers={['Cookie Type', 'Purpose', 'Duration']}
            rows={[
              ['Essential Cookies', 'Platform functionality', 'Session'],
              ['Analytics Cookies', 'Google Analytics', 'Up to 2 years'],
              ['Marketing Cookies', 'Meta Pixel, Google Ads', 'Up to 90 days'],
            ]}
          />
        </DocSection>

        <DocSection id="pp-third" num="10" title="Third-Party Links">
          <P>Our Platform may contain links to third-party sites. 4KMedia accepts no responsibility or liability for their privacy policies. We encourage you to review their policies.</P>
        </DocSection>

        <DocSection id="pp-children" num="11" title="Children's Privacy">
          <P>Our services are not directed at individuals under 18 years. If we become aware that a minor has provided data without consent, we will delete it promptly.</P>
        </DocSection>

        <DocSection id="pp-grievance" num="12" title="Grievance Officer">
          <P>In accordance with the Information Technology Act, 2000, the IT (Intermediary Guidelines) Rules 2021, and the Digital Personal Data Protection Act, 2023, 4KMedia has designated a Grievance Officer to address complaints regarding data processing and privacy concerns.</P>
          <ContactCard
            title="Grievance Officer — 4KMedia LLP"
            rows={[
              [<IconUser />, 'Name', null, 'Dabbikar Krishnakanth'],
              [<IconSuitcase />, 'Designation', null, 'Director & Grievance Officer'],
              [<IconEmail />, 'Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
              [<IconPhone />, 'Phone', null, '+91 99899 58238'],
              [<IconLocation />, 'Address', null, '3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074'],
              [<IconClock />, 'Resolution Time', null, 'Within 30 days of receipt of complaint'],
            ]}
          />
          <P>If you are not satisfied with our response, you may escalate to the Data Protection Board of India (once constituted under the DPDP Act, 2023) or approach the adjudicating officer under the IT Act, 2000.</P>
        </DocSection>

        <DocSection id="pp-changes" num="13" title="Policy Changes">
          <P>We may update this Policy periodically. Material changes will be notified via email or a prominent notice on our Platform at least 14 days before taking effect.</P>
        </DocSection>


      </div>
    </LegalLayout>
  )
}
