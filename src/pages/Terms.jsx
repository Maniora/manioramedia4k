'use client'

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
   TERMS & CONDITIONS CONTENT
   Refactored for LegalLayout
═══════════════════════════════════════════ */

export default function Terms() {
  const TNC_SECTIONS = [
    { id: 'tnc-intro', label: '1. Introduction' },
    { id: 'tnc-definitions', label: '2. Definitions' },
    { id: 'tnc-services', label: '3. Our Services' },
    { id: 'tnc-eligibility', label: '4. Eligibility' },
    { id: 'tnc-obligations', label: '5. Client Obligations' },
    { id: 'tnc-payment', label: '6. Payment Terms' },
    { id: 'tnc-ip', label: '7. Intellectual Property' },
    { id: 'tnc-confidential', label: '8. Confidentiality' },
    { id: 'tnc-liability', label: '9. Limitation of Liability' },
    { id: 'tnc-termination', label: '10. Termination' },
    { id: 'tnc-dispute', label: '11. Dispute Resolution' },
    { id: 'tnc-governing', label: '12. Governing Law' },
    { id: 'tnc-changes', label: '13. Changes to Terms' },
    { id: 'tnc-contact', label: '14. Contact' },
  ]

  return (
    <LegalLayout activeNav="tnc" sections={TNC_SECTIONS}>
      <div className="relative min-w-0">

        <DocSection id="tnc-intro" num="01" title="Introduction & Acceptance">
          <P>These Terms and Conditions ("Terms") constitute a legally binding agreement between <strong className="text-white">4KMedia LLP</strong> (hereinafter referred to as "4KMedia," "we," "us," or "our"), a Limited Liability Partnership registered under the Limited Liability Partnership Act, 2008, with its registered office at 3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India, and you ("Client," "User," or "you").</P>
          <P>By accessing our website at <strong className="text-white">www.4kmedia.in</strong>, engaging our services, or entering into a Service Agreement with us, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please discontinue use of our website and services immediately.</P>
          <Box variant="yellow">
            These Terms are governed by and construed in accordance with the laws of India, including but not limited to the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, the <strong>Digital Personal Data Protection Act, 2023</strong>, the <strong>Indian Contract Act, 1872</strong>, and other applicable laws.
          </Box>
        </DocSection>

        <DocSection id="tnc-definitions" num="02" title="Definitions">
          <DocTable
            headers={['Term', 'Meaning']}
            rows={[
              ['"Services"', 'All digital marketing, branding, website development, video production, social media management, performance marketing, brand registration assistance, event organisation, and any other services offered by 4KMedia.'],
              ['"Agreement"', 'The Service Agreement or proposal accepted by the Client, read together with these Terms.'],
              ['"Content"', 'All text, graphics, images, videos, data, and other material created, delivered or shared under a Service engagement.'],
              ['"Confidential Information"', 'Any non-public business, technical, financial or personal information disclosed by either party in connection with Services.'],
              ['"Working Days"', 'Monday to Friday, excluding public holidays observed in Telangana, India.'],
              ['"Platform"', 'The website www.4kmedia.in and any associated subdomains or applications.'],
            ]}
          />
        </DocSection>

        <DocSection id="tnc-services" num="03" title="Scope of Services">
          <P>4KMedia provides the following categories of services, subject to individual Service Agreements and project scopes agreed in writing:</P>
          <DocList items={[
            'Digital Marketing — SEO, Social Media Marketing, Performance Marketing (Meta Ads, Google Ads), Content Marketing, Email Marketing, WhatsApp Marketing, Online Reputation Management',
            'Website & Technology — Website Development (WordPress, Shopify, custom), UI/UX Design, Landing Page Development, E-commerce Development, Website Maintenance',
            'Brand Identity — Logo Design, Brand Guidelines, Packaging Design, Marketing Collateral, Pitch Deck Design',
            'Video Production — Brand Films, Social Media Reels, Ad Creatives, AI-assisted Video Editing',
            'Brand Registration Assistance — Trademark Filing, MSME/Udyam Registration, GST Registration, Company/LLP Incorporation, FSSAI, GeM Portal, Startup India/DPIIT Recognition, Mudra Loan Guidance',
            'Event Organisation — Corporate Events, Brand Activations, Virtual/Hybrid Events',
            'AI-Powered Services — AI Content Creation, AI Video Editing, AI Chatbot Setup, AI-Assisted Advertising',
          ]} />
          <Box variant="red">
            <strong>Important:</strong> Brand registration, trademark, GST, and government scheme assistance provided by 4KMedia are facilitation and guidance services only. We are not a law firm, chartered accountancy firm, or licensed legal practitioner. We do not provide legal advice. For legal or regulatory matters, please consult a qualified professional. Final responsibility for filings and compliance rests with the Client.
          </Box>
          <P>Specific deliverables, timelines, revisions, and fees for each engagement shall be detailed in the applicable Service Proposal or Agreement signed by both parties.</P>
        </DocSection>

        <DocSection id="tnc-eligibility" num="04" title="Eligibility & Account Use">
          <P>By engaging our services or using our Platform, you represent and warrant that:</P>
          <DocList items={[
            'You are at least 18 years of age or have reached the age of majority in your jurisdiction',
            'You have the legal capacity and authority to enter into a binding contract',
            'If acting on behalf of a company or entity, you are duly authorised to bind that entity to these Terms',
            'The information you provide to us is accurate, current, and complete',
            'Your use of our services does not violate any applicable law or regulation',
          ]} />
          <P>4KMedia reserves the right to refuse service to any person or entity at its sole discretion, without obligation to provide reasons.</P>
        </DocSection>

        <DocSection id="tnc-obligations" num="05" title="Client Obligations">
          <H3>5.1 Cooperation & Material Provision</H3>
          <DocList items={[
            'Provide accurate, complete, and timely information, access credentials, brand assets, and approvals as reasonably required',
            'Designate a primary point of contact who has authority to approve deliverables and make decisions',
            'Respond to communication within 3 Working Days unless otherwise agreed',
            'Review and approve or request revisions on deliverables within the timeframes specified in the project timeline',
          ]} />
          <H3>5.2 Prohibited Use</H3>
          <P>The Client shall not use 4KMedia\'s services or Platform to:</P>
          <DocList items={[
            'Violate any applicable Indian or international law or regulation',
            'Promote or distribute content that is obscene, defamatory, fraudulent, harassing, or harmful',
            'Infringe upon the intellectual property rights of any third party',
            'Engage in spam, phishing, or any form of deceptive marketing',
            'Distribute malware, viruses, or any harmful code',
            'Violate the guidelines of any third-party platform (Meta, Google, LinkedIn, etc.)',
          ]} />
          <Box variant="red">
            Violation of prohibited use provisions may result in immediate suspension of services without refund and may be reported to appropriate authorities under the Information Technology Act, 2000.
          </Box>
        </DocSection>

        <DocSection id="tnc-payment" num="06" title="Payment Terms">
          <H3>6.1 Fees & Invoicing</H3>
          <P>Fees for services shall be as agreed in the Service Proposal. All amounts are in Indian Rupees (INR) unless otherwise stated. GST at applicable rates shall be charged in addition to the service fee on all invoices. Invoices shall be issued as per the schedule agreed in the Service Agreement (monthly, milestone-based, or project-based).</P>
          <H3>6.2 Payment Schedule</H3>
          <DocList items={[
            'Project-based work: 50% advance payment before commencement, 50% balance upon completion prior to final file delivery',
            'Monthly retainer services: Payment due by the 5th of each month for that month\'s services',
            'Performance marketing management: Monthly fee due in advance; ad spend to be deposited directly into respective ad accounts by the Client',
          ]} />
          <H3>6.3 Late Payment</H3>
          <P>Payments not received within 7 days of the due date shall attract a late payment charge of 2% per month on the outstanding amount. 4KMedia reserves the right to suspend active services without liability if payment remains outstanding beyond 14 days of the due date.</P>
          <H3>6.4 Refund Policy</H3>
          <DocList items={[
            'Advance payments are non-refundable once project work has commenced',
            'If 4KMedia fails to commence work within the agreed timeline through no fault of the Client, a full refund of the advance will be issued',
            'Monthly retainer fees paid in advance are non-refundable for the current billing period',
            'Refunds, if applicable, shall be processed within 15 Working Days via the original payment method',
          ]} />
          <P>Ad spend budgets paid to third-party platforms (Meta, Google, etc.) are managed by 4KMedia on behalf of the Client but are the Client\'s funds. 4KMedia does not guarantee advertising results and is not liable for platform policy changes affecting campaign performance.</P>
        </DocSection>

        <DocSection id="tnc-ip" num="07" title="Intellectual Property Rights">
          <H3>7.1 Client-Owned IP</H3>
          <P>Upon receipt of full and final payment for a deliverable, all intellectual property rights in the final deliverable created specifically for the Client under that engagement shall vest in the Client. This includes logos, website designs, brand assets, and custom-created content.</P>
          <H3>7.2 4KMedia-Retained IP</H3>
          <P>The following remain the exclusive property of 4KMedia at all times:</P>
          <DocList items={[
            'Proprietary methodologies, frameworks, workflows, and internal tools (including Zoho-based delivery system)',
            'All preliminary concepts, drafts, unused designs, and rejected proposals',
            'Pre-existing templates, code libraries, and design elements incorporated into deliverables (licensed to Client for use, not owned)',
            'All content on the www.4kmedia.in Platform including text, images, and branding',
          ]} />
          <H3>7.3 Portfolio Rights</H3>
          <P>4KMedia reserves the right to display work completed for Clients in its portfolio, case studies, social media, and marketing materials, unless the Client requests confidentiality in writing prior to project commencement.</P>
          <H3>7.4 Client Warranties</H3>
          <P>The Client warrants that all materials, logos, images, text, and other content provided to 4KMedia for use in services are either owned by the Client or properly licensed, and do not infringe any third-party intellectual property rights. The Client shall indemnify 4KMedia against all claims arising from breach of this warranty.</P>
        </DocSection>

        <DocSection id="tnc-confidential" num="08" title="Confidentiality">
          <P>Both parties agree to maintain the confidentiality of the other party\'s Confidential Information and to use it solely for the purpose of fulfilling obligations under the Service Agreement. This obligation shall survive the termination of the Agreement for a period of 3 years.</P>
          <P>Confidential Information does not include information that: (a) is or becomes publicly available through no breach of this Agreement; (b) was already known to the receiving party prior to disclosure; (c) is independently developed without reference to the Confidential Information; or (d) must be disclosed by law or order of a competent authority.</P>
          <Box variant="cyan">
            4KMedia shall maintain appropriate technical and organisational measures to protect Client data and confidential information from unauthorised access, disclosure, or loss, in accordance with the Digital Personal Data Protection Act, 2023.
          </Box>
        </DocSection>

        <DocSection id="tnc-liability" num="09" title="Limitation of Liability & Disclaimer">
          <H3>9.1 No Guarantee of Results</H3>
          <P>Digital marketing results depend on multiple factors outside 4KMedia\'s control including market conditions, platform algorithm changes, client industry, ad spend levels, and product/service quality. 4KMedia does not guarantee specific outcomes such as a defined number of leads, revenue figures, follower counts, or search rankings, unless explicitly committed to in a written performance-based agreement.</P>
          <H3>9.2 Limitation of Liability</H3>
          <P>To the maximum extent permitted by applicable Indian law, 4KMedia\'s total aggregate liability to the Client arising from or in connection with the Services shall not exceed the total fees paid by the Client in the 3 months immediately preceding the event giving rise to the claim.</P>
          <P>4KMedia shall not be liable for any:</P>
          <DocList items={[
            'Indirect, incidental, special, consequential, or punitive damages',
            'Loss of profit, revenue, business, or goodwill',
            'Loss or corruption of data',
            'Damages arising from third-party platform (Meta, Google, etc.) policy changes, account suspensions, or algorithm updates',
            'Delays caused by Client failure to provide required approvals, assets, or information',
            'Force majeure events including natural disasters, government actions, internet outages, or pandemics',
          ]} />
          <H3>9.3 Website Disclaimer</H3>
          <P>The Platform and its content are provided "as is" without warranty of any kind. While we strive to keep information accurate and current, 4KMedia makes no warranties regarding the completeness, accuracy, reliability, or availability of the Platform or its content.</P>
        </DocSection>

        <DocSection id="tnc-termination" num="10" title="Term & Termination">
          <P>10.1 Termination by Client</P>
          <P>The Client may terminate ongoing retainer services by providing 30 days\' written notice via email to <strong className="text-white">team@4kmedia.in</strong>. Fees for the notice period are payable in full. Project-based work may not be terminated after commencement without forfeiture of the advance payment.</P>
          <P>10.2 Termination by 4KMedia</P>
          <P>4KMedia may terminate services immediately, without notice or refund, in cases of:</P>
          <DocList items={[
            'Non-payment of outstanding invoices beyond 14 days of due date',
            'Client breach of these Terms or the Service Agreement',
            'Client requesting services that are illegal, unethical, or violate platform policies',
            'Abusive, threatening, or harassing behaviour towards 4KMedia team members',
          ]} />
          <P>10.3 Effect of Termination</P>
          <P>Upon termination, 4KMedia shall deliver all completed work for which payment has been received. All unpaid amounts become immediately due. Sections on Intellectual Property, Confidentiality, Limitation of Liability, and Governing Law shall survive termination.</P>
        </DocSection>

        <DocSection id="tnc-dispute" num="11" title="Dispute Resolution">
          <H3>11.1 Amicable Resolution</H3>
          <P>In the event of any dispute, claim, or controversy arising out of or relating to these Terms or the Services, the parties shall first attempt to resolve the matter amicably through good faith negotiations within 30 days of written notice of the dispute.</P>
          <H3>11.2 Mediation</H3>
          <P>If the dispute cannot be resolved amicably, the parties agree to attempt resolution through mediation under the Mediation Act, 2023, before initiating formal legal proceedings.</P>
          <H3>11.3 Arbitration</H3>
          <P>If mediation fails, disputes shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996 (as amended). The arbitration shall be conducted by a sole arbitrator mutually agreed upon by both parties, or in the absence of agreement, appointed by the High Court of Telangana. The seat and venue of arbitration shall be <strong className="text-white">Hyderabad, Telangana, India</strong>. The language of arbitration shall be English. The arbitral award shall be final and binding.</P>
        </DocSection>

        <DocSection id="tnc-governing" num="12" title="Governing Law & Jurisdiction">
          <P>These Terms and any dispute arising from them shall be governed by and construed in accordance with the laws of the Republic of India. Subject to the arbitration clause above, the courts of <strong className="text-white">Hyderabad, Telangana</strong> shall have exclusive jurisdiction over any matters arising from these Terms.</P>
          <P>Key applicable laws include:</P>
          <DocList items={[
            'The Information Technology Act, 2000 and IT (Amendment) Act, 2008',
            'The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021',
            'The Digital Personal Data Protection Act, 2023 (DPDP Act)',
            'The Indian Contract Act, 1872',
            'The Consumer Protection Act, 2019',
            'The Trade Marks Act, 1999',
            'The Copyright Act, 1957',
            'The Goods and Services Tax Act, 2017',
          ]} />
        </DocSection>

        <DocSection id="tnc-changes" num="13" title="Changes to These Terms">
          <P>4KMedia reserves the right to modify these Terms at any time. Material changes will be notified via email to existing Clients at least 14 days before taking effect. Continued use of our services after such notice constitutes acceptance of the updated Terms. The current version of these Terms is always available at <strong className="text-white">www.4kmedia.in/terms</strong>.</P>
          <P>The date of the most recent revision is indicated at the top of this document.</P>
        </DocSection>

        <DocSection id="tnc-contact" num="14" title="Contact for Legal Queries">
          <ContactCard
            title="4KMedia LLP — Legal Contact"
            rows={[
              [<IconEmail />, 'Legal Contact Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
              [<IconPhone />, 'Phone', null, '+91 99899 58238'],
              [<IconLocation />, 'Address', null, '3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India'],
              [<IconGlobe />, 'Website', 'https://www.4kmedia.in', 'www.4kmedia.in'],
              [<IconClock />, 'Response Time', null, 'Within 3 Working Days'],
            ]}
          />
        </DocSection>
      </div>
    </LegalLayout>
  )
}
