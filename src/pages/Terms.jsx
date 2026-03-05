'use client'

import { useState, useEffect } from 'react'
import Reveal from '@/components/Reveal'

/* ─── Shared UI Primitives ─── */

const SectionLabel = ({ n }) => (
  <span className="font-mono text-[10px] text-brand uppercase tracking-[0.12em] block mb-2.5">
    SECTION {n}
  </span>
)

const H2 = ({ children }) => (
  <h2 className="font-syne text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
    {children}
  </h2>
)

const H3 = ({ children }) => (
  <h3 className="font-syne text-lg font-bold text-white/90 mt-6 mb-2.5">
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

const ContactCard = ({ title, rows }) => (
  <div className="bg-[#111118] border border-white/10 rounded-2xl p-8 mt-8 shadow-2xl">
    <h4 className="font-syne text-lg font-extrabold text-white mb-6 uppercase tracking-tight">{title}</h4>
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
              <span className="text-white/80 font-medium">{row[1]}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const DocSection = ({ id, num, title, children }) => (
  <Reveal as="section" id={id} className="mb-16 pb-16 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
    <SectionLabel n={num} />
    <H2>{title}</H2>
    {children}
  </Reveal>
)

/* ═══════════════════════════════════════════
   TERMS & CONDITIONS CONTENT
═══════════════════════════════════════════ */

export default function Terms() {
  const [activeHash, setActiveHash] = useState('')

  const TNC_LINKS = [
    { href: '#tnc-intro', label: '1. Introduction' },
    { href: '#tnc-definitions', label: '2. Definitions' },
    { href: '#tnc-services', label: '3. Our Services' },
    { href: '#tnc-eligibility', label: '4. Eligibility' },
    { href: '#tnc-obligations', label: '5. Client Obligations' },
    { href: '#tnc-payment', label: '6. Payment Terms' },
    { href: '#tnc-ip', label: '7. Intellectual Property' },
    { href: '#tnc-confidential', label: '8. Confidentiality' },
    { href: '#tnc-liability', label: '9. Limitation of Liability' },
    { href: '#tnc-termination', label: '10. Termination' },
    { href: '#tnc-dispute', label: '11. Dispute Resolution' },
    { href: '#tnc-governing', label: '12. Governing Law' },
    { href: '#tnc-changes', label: '13. Changes to Terms' },
    { href: '#tnc-contact', label: '14. Contact' },
  ]

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) current = sec.id
      })
      setActiveHash(current)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="bg-[#0f141a] text-white/90 selection:bg-brand selection:text-ink">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand/5 blur-[120px]" />
        <div className="absolute inset-0 bg-grid bg-[size:40px_40px]" />
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <Reveal className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-brand uppercase font-bold">Standard Agreement</span>
          </Reveal>

          <Reveal>
            <h1 className="font-syne text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[0.9]">
              Terms & <span className="text-brand">Conditions</span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
              These terms define the professional relationship between 4KMedia LLP and our valued clients. We believe in clear, mutual expectations for a successful partnership.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-center gap-2 justify-center">
            <div className="font-mono text-[11px] text-white/30 tracking-widest uppercase flex items-center gap-3 bg-white/5 px-6 py-2.5 rounded-xl border border-white/10">
              Last Updated: Feb 25, 2026
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 relative">

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-32 h-fit space-y-8 z-20">
            {/* Navigation Links */}
            <nav className="hidden lg:block">
              <h5 className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em] mb-6 px-4">Agreement Sections</h5>
              <ul className="space-y-1">
                {TNC_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${activeHash === link.href.slice(1)
                        ? 'bg-brand/10 text-brand border-l-2 border-brand'
                        : 'text-white/40 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Help Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand/20 to-brand/5 border border-brand/20 text-center">
              <p className="text-xs text-white/80 font-medium mb-4 italic">Need more details?</p>
              <a href="/contact" className="inline-block text-[10px] font-bold uppercase tracking-widest text-ink bg-brand px-6 py-2.5 rounded-lg hover:scale-105 transition-transform">
                Contact Ops
              </a>
            </div>
          </aside>

          {/* DOCUMENT BODY */}
          <div className="relative min-w-0">

            <DocSection id="tnc-intro" num="01" title="Introduction & Acceptance">
              <P>These Terms and Conditions ("Terms") constitute a legally binding agreement between <strong className="text-white">4KMedia LLP</strong> (hereinafter referred to as "4KMedia," "we," "us," or "our"), a Limited Liability Partnership registered under the Limited Liability Partnership Act, 2008, with its registered office at 3-13-745, Bharath Nagar, Mansoorabad, LB Nagar, Hyderabad, Telangana – 500074, India, and you ("Client," "User," or "you").</P>
              <P>By accessing our website at <strong className="text-white">www.4kmedia.in</strong>, engaging our services, or entering into a Service Agreement with us, you confirm that you have read, understood, and agree to be bound by these Terms.</P>
              <Box variant="yellow">
                These Terms are governed by and construed in accordance with the laws of India, including but not limited to the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023</strong>.
              </Box>
            </DocSection>

            <DocSection id="tnc-definitions" num="02" title="Definitions">
              <DocTable
                headers={['Term', 'Meaning']}
                rows={[
                  ['<strong>"Services"</strong>', 'All digital marketing, branding, website development, video production, social media management, and performance marketing.'],
                  ['<strong>"Agreement"</strong>', 'The Service Agreement or proposal accepted by the Client, read together with these Terms.'],
                  ['<strong>"Content"</strong>', 'All text, graphics, images, videos, and data delivered or shared under a Service engagement.'],
                  ['<strong>"Working Days"</strong>', 'Monday to Friday, excluding public holidays in Telangana, India.'],
                ]}
              />
            </DocSection>

            <DocSection id="tnc-services" num="03" title="Scope of Services">
              <P>4KMedia provides comprehensive digital solutions including:</P>
              <DocList items={[
                'Digital Marketing — SEO, Social Media, Performance Marketing (Meta & Google Ads)',
                'Website & Technology — WordPress, Shopify, Custom Development, UI/UX Design',
                'Brand Identity — Logo Design, Brand Guidelines, Packaging',
                'Video Production — Brand Films, Social Media Reels, Ad Creatives',
                'Government & Compliance — Trademark, GST, MSME/Udyam, GeM Registration Assistance',
              ]} />
              <Box variant="red">
                <strong>Important:</strong> Brand registration and government scheme assistance are facilitation services only. We are not a law firm and do not provide legal advice. Final responsibility for filings rests with the Client.
              </Box>
            </DocSection>

            <DocSection id="tnc-eligibility" num="04" title="Eligibility & Use">
              <P>By engaging our services, you represent that you are at least 18 years of age and have the legal capacity to enter into a binding contract.</P>
            </DocSection>

            <DocSection id="tnc-obligations" num="05" title="Client Obligations">
              <H3>5.1 Cooperation</H3>
              <DocList items={[
                'Provide accurate information and brand assets in a timely manner',
                'Designate a primary point of contact with decision-making authority',
                'Respond to communications within 3 Working Days',
              ]} />
              <H3>5.2 Prohibited Use</H3>
              <P>Clients shall not use our services for any illegal, obscene, defamatory, or harmful content or to infringe on third-party intellectual property.</P>
            </DocSection>

            <DocSection id="tnc-payment" num="06" title="Payment Terms">
              <H3>6.1 Fees</H3>
              <P>Fees are as per the Service Proposal. GST at applicable rates is charged additionally. Payments are due in INR unless otherwise specified.</P>
              <H3>6.2 Schedule</H3>
              <DocList items={[
                'Project-based: 50% advance, 50% upon completion',
                'Monthly retainer: Due by the 5th of each month',
                'Ad Spend: Paid directly to platforms by the Client',
              ]} />
              <P>Late payments attract a charge of 2% per month after a 7-day grace period.</P>
            </DocSection>

            <DocSection id="tnc-ip" num="07" title="Intellectual Property">
              <H3>7.1 Client Rights</H3>
              <P>Upon full payment, ownership of final deliverables created specifically for the Client vests in the Client.</P>
              <H3>7.2 Agency Rights</H3>
              <P>4KMedia retains rights to proprietary methodologies, internal tools, and preliminary drafts. We reserve the right to display completed work in our professional portfolio.</P>
            </DocSection>

            <DocSection id="tnc-confidential" num="08" title="Confidentiality">
              <P>Both parties agree to protect non-public business information for 3 years post-termination.</P>
            </DocSection>

            <DocSection id="tnc-liability" num="09" title="Limitation of Liability">
              <Box variant="yellow">
                4KMedia does not guarantee specific results (leads, revenue, rankings) as these depend on factors outside our control like market conditions and platform algorithms.
              </Box>
              <P>Our total aggregate liability is limited to the fees paid by the Client in the preceding 3 months.</P>
            </DocSection>

            <DocSection id="tnc-termination" num="10" title="Term & Termination">
              <P>Retainers require 30 days' written notice for termination. Project work may only be terminated by paying for all work completed to date.</P>
            </DocSection>

            <DocSection id="tnc-dispute" num="11" title="Dispute Resolution">
              <P>We prioritize amicable negotiation. Unresolved disputes shall be settled through mediation or arbitration in Hyderabad, India.</P>
            </DocSection>

            <DocSection id="tnc-governing" num="12" title="Governing Law">
              <P>Governed by the laws of the Republic of India. Courts of Hyderabad, Telangana have exclusive jurisdiction.</P>
            </DocSection>

            <DocSection id="tnc-changes" num="13" title="Changes to Terms">
              <P>We reserve the right to update these terms. Material changes will be notified via email.</P>
            </DocSection>

            <DocSection id="tnc-contact" num="14" title="Contact Us">
              <ContactCard
                title="4KMedia LLP — Official Contact"
                rows={[
                  [<IconEmail />, 'Notice Email', 'mailto:team@4kmedia.in', 'team@4kmedia.in'],
                  [<IconPhone />, 'Head Office', null, '+91 99899 58238'],
                  [<IconLocation />, 'Address', null, '3-13-745, Mansoorabad, LB Nagar, Hyderabad'],
                ]}
              />
            </DocSection>

            {/* Back to top */}
            <div className="mt-20 pt-10 border-t border-white/5 text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 mx-auto text-white/40 hover:text-brand transition-colors font-mono text-xs uppercase tracking-widest"
              >
                <span className="group-hover:-translate-y-1 transition-transform">↑</span> Back to the top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
