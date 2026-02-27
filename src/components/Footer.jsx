'use client'

import Link from 'next/link'

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-white/60 hover:text-[#f7e839] transition-all duration-200 text-sm"
    >
      {children}
    </Link>
  </li>
)

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 grid place-items-center rounded-lg bg-white/5 border border-white/10 hover:bg-[#f7e839] hover:border-[#f7e839] hover:text-[#11181f] transition-all duration-300 group"
    aria-label={label}
  >
    <div className="group-hover:scale-110 transition-transform duration-200">
      {icon}
    </div>
  </a>
)

const Footer = () => (
  <footer className="bg-[#0a0c10] border-t border-white/10">
    <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <img src="/assets/logo2.png" alt="4kMedia" className="h-12 w-auto rounded-lg" />
            <span className="text-xl font-bold text-white">4KMEDIA</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
            Zero to viral, we make it happen. Performance-driven digital marketing partner.
          </p>
          <div className="flex gap-3">
            <SocialIcon href="https://instagram.com/4kmediax" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>} label="Instagram" />
            <SocialIcon href="https://www.linkedin.com/company/4kmedia-in" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.6" /></svg>} label="LinkedIn" />
            <SocialIcon href="https://youtube.com/@4kmediax" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M10 9l5 3-5 3V9z" fill="currentColor" /></svg>} label="YouTube" />
            <SocialIcon href="https://wa.me/919989958238" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.148-.669-1.612-.916-2.207-.242-.58-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.209 5.077 4.374.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" /><path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.463 3.484 1.34 4.997L2 22l5.104-1.334c1.462.799 3.11 1.237 4.9 1.237 5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 17.995c-1.627 0-3.22-.438-4.59-1.267l-.328-.195-3.032.792.808-2.956-.213-.304c-.83-1.186-1.267-2.573-1.267-4.01 0-4.135 3.362-7.497 7.497-7.497s7.497 3.362 7.497 7.497-3.362 7.497-7.497 7.497z" fill="currentColor" /></svg>} label="WhatsApp" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-3">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Our Services</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-3">
            <FooterLink href="/services">Social Media Marketing</FooterLink>
            <FooterLink href="/services">Website Development</FooterLink>
            <FooterLink href="/services">Performance Marketing</FooterLink>
            <FooterLink href="/services">UI/UX Design</FooterLink>
            <FooterLink href="/services">AI Video Production</FooterLink>
            <FooterLink href="/services">Brand Identity</FooterLink>
            <FooterLink href="/services">Event Organisation</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Industries</h4>
          <ul className="space-y-3">
            <FooterLink href="/services">Manufacturers</FooterLink>
            <FooterLink href="/services">D2C Brands</FooterLink>
            <FooterLink href="/services">Startups</FooterLink>
            <FooterLink href="/services">SMEs</FooterLink>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
          <ul className="space-y-5 text-sm">
            <li>
              <a href="mailto:team@4kmedia.in" className="block text-white font-bold text-base hover:text-[#f7e839] transition-colors mb-1">team@4kmedia.in</a>
              <span className="text-white/50">Email Support</span>
            </li>
            <li>
              <a href="tel:+919989958238" className="block text-white font-bold text-base hover:text-[#f7e839] transition-colors mb-1">+91 99899 58238</a>
              <span className="text-white/50">Mon-Fri, 9AM-6PM IST</span>
            </li>
            <li>
              <span className="block text-white font-bold text-base mb-1">Hyderabad, India</span>
              <span className="text-white/50">Based in India, Serving Globally</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} 4KMEDIA LLP. All rights reserved. | CIN - ACV-0899 </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
