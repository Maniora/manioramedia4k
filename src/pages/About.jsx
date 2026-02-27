'use client'

import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import AnimatedIllustrations from '../components/AnimatedIllustrations';
import FaqItem from '../components/FaqItem';

// Count up hook
function useCountUp(to, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start;
    let animationFrame;
    const target = typeof to === 'number' ? to : 0;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const currentValue = Math.floor(progress * target);
      setValue(currentValue);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, duration]);

  return value;
}

// Stats Section Component
const StatsSection = () => {
  // Stats config
  const stats = [
    { n: 4, suffix: '+ Years', l: 'Industry Experience', d: 'Deep expertise in digital transformation', duration: 2200 },
    { n: 10, suffix: '+', l: 'Projects Delivered', d: 'Successful campaigns across various industries', duration: 2200 },
    { n: 98, suffix: '%', l: 'Client Retention', d: 'Long-term partnerships built on trust', duration: 2200 },
    { n: 12, suffix: 'x', l: 'Average ROI', d: 'Return on investment for our clients', duration: 2200 },

  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {stats.map((s, idx) => {
        // Use count up for each stat
        const count = useCountUp(s.n, s.duration);
        return (
          <Reveal key={s.l} as="div" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-8 text-center hover-lift transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#f7e839] mb-2">
              {count}
              {typeof s.suffix === 'string' && <span>{s.suffix}</span>}
            </div>
            <div className="text-white font-semibold mb-2">{s.l}</div>
            <div className="text-white/60 text-sm">{s.d}</div>
          </Reveal>
        );
      })}
    </div>
  );
};

const About = () => (
  <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
    <AnimatedIllustrations />
    {/* Hero Section */}
    <section className="relative py-15 bg-[#0a0f15]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              About Our Agency
            </span>
          </Reveal>
          <Reveal>
            <h1 className="font-extrabold tracking-tight text-5xl mb-6">
              <span className="text-white">We Turn Digital
                Presence into </span>
              <span className="text-[#f7e839]">Real Growth.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              4KMEDIA is a <span className='font-bold'>performance-driven AI digital agency</span> based in Hyderabad, India. We help manufacturers, SMEs, startups and women entrepreneurs build brands, generate leads, and scale revenue — through strategy that's <span className='font-bold'>measurable, not guesswork.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-15 bg-[#06060a]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Reveal>
            <h2 className="text-4xl font-bold text-center text-white mb-8">By the <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Numbers</span></h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg">Our track record speaks to our commitment to delivering exceptional results for our clients.</p>
          </Reveal>
        </div>
        {/* Animated Stats with count up effect */}
        <StatsSection />
      </div>
    </section>

    {/* Journey Section — Two Column */}
    <section className="py-15 bg-[#0a0f15]">
      <div className="container mx-auto px-4 ">
        <Reveal>
          <div className="text-center">
            <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              Our Story
            </span>
          </div>
        </Reveal>

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <Reveal>
            <h2 className="text-4xl font-bold text-center text-white mb-8">Built From a Real Problem, <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Not a Business Plan.</span></h2>
          </Reveal>

          {/* Two columns */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — Story text */}
            <Reveal>
              <div className="space-y-6 text-white/75 text-[17px] leading-relaxed">
                <p>
                  4KMEDIA was born out of frustration. We watched <strong className="text-white font-semibold">brilliant Indian businesses</strong> — manufacturers with world-class products, women entrepreneurs with real talent, small businesses with genuine value — struggle to grow because they had no credible digital presence.
                </p>
                <p>
                  They were either invisible online, spending on agencies that delivered reports instead of results, or completely dependent on Amazon and foreign marketplaces that ate 30–40% of their margins.
                </p>
                <p>
                  We started with one belief: <strong className="text-white font-semibold">digital marketing should create measurable business outcomes, not just impressions and likes.</strong> Every strategy we build, every campaign we run, every website we launch is tied to a real business metric — leads, sales, revenue.
                </p>
                <p>
                  Today, powered by AI tools and a proprietary Zoho-based workflow system, we deliver enterprise-quality results for growing Indian businesses — at a price that makes sense for where they are right now.
                </p>
              </div>
            </Reveal>

            {/* Right — Timeline */}
            <Reveal>
              <div className="relative">
                {/* Vertical line — thicker */}
                <div className="absolute left-[13px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#f7e839] via-[#f7e839]/30 to-transparent" />

                <div className="space-y-10">
                  {[
                    {
                      year: '2021',
                      title: '4KMedia LLP Founded',
                      desc: 'Started in Hyderabad with a focus on social media and brand identity for local businesses.',
                      accent: '#f7e839',
                      current: false,
                    },
                    {
                      year: '2022',
                      title: 'Performance Marketing Launch',
                      desc: 'Expanded into Meta and Google Ads. First clients achieving 8–12x ROI on ad spend.',
                      accent: '#f7e839',
                      current: false,
                    },
                    {
                      year: '2023',
                      title: 'Manufacturer Niche Identified',
                      desc: 'Discovered the massive gap — lakhs of Indian manufacturers with no digital presence. Built first manufacturer growth system.',
                      accent: '#f7e839',
                      current: false,
                    },
                    {
                      year: '2024',
                      title: 'Women Entrepreneur Initiative',
                      desc: 'Launched free trial programme for women-led businesses. Partnered with government scheme guidance for MSME, Mudra and Startup India.',
                      accent: '#f7e839',
                      current: false,
                    },
                    {
                      year: '2025–26',
                      title: 'AI-Powered Agency Model',
                      desc: 'Fully integrated AI into content, video, web development and campaign management. 70% faster delivery, higher quality, same price.',
                      accent: '#22d3ee',
                      current: true,
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-12">
                      {/* Dot */}
                      <div
                        className="absolute left-0 top-1 w-7 h-7 rounded-full border-[3px] flex items-center justify-center"
                        style={{
                          borderColor: item.accent,
                          backgroundColor: item.current ? item.accent : '#0a0f15',
                          boxShadow: item.current ? `0 0 16px ${item.accent}90, 0 0 4px ${item.accent}` : `0 0 0 3px ${item.accent}20`
                        }}
                      >
                        {/* Inner dot */}
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: item.current ? '#0a0f15' : item.accent }}
                        />
                      </div>
                      {/* Content */}
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.accent }}>{item.year}</p>
                      <h3 className="text-white font-bold text-lg mb-1.5">{item.title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>


    {/* Mission & Vision Section */}
    <section className="py-16 bg-[#06060a]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center">
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                Mission & Vision
              </span>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold text-center text-white mb-8">Driven by Purpose, <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Defined by Results.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="group bg-[#11151c] rounded-2xl p-8 border border-white/[0.08] h-full hover:border-[#f7e839]/40 hover:shadow-[0_0_40px_rgba(247,232,57,0.08)] transition-all duration-400 cursor-default">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-0.5 bg-[#f7e839] group-hover:w-10 transition-all duration-300" />
                  <span className="text-[#f7e839] text-xs font-bold uppercase tracking-widest">Mission</span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-5 group-hover:text-[#f7e839] transition-colors duration-300">
                  Deliver Growth That<br />You Can Measure
                </h3>
                <p className="text-white/55 text-[15px] leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                  To deliver performance-focused digital solutions that combine AI, creativity and strategy — helping Indian brands enhance visibility, increase conversions, and achieve sustainable growth through transparent reporting and long-term partnerships built on trust.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="group bg-[#11151c] rounded-2xl p-8 border border-white/[0.08] h-full hover:border-[#22d3ee]/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] transition-all duration-400 cursor-default">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-0.5 bg-[#22d3ee] group-hover:w-10 transition-all duration-300" />
                  <span className="text-[#22d3ee] text-xs font-bold uppercase tracking-widest">Vision</span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-5 group-hover:text-[#22d3ee] transition-colors duration-300">
                  India's Leading<br />AI Growth Agency
                </h3>
                <p className="text-white/55 text-[15px] leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                  To become India's most trusted performance-driven AI digital agency — empowering manufacturers, SMEs and women entrepreneurs to compete globally, build lasting brands, and achieve measurable digital success without depending on foreign platforms.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* Brand Partners Section */}
    <section className="py-15 relative bg-[#0a0f15]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Brand Partners
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Brand Partners</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We collaborate with top brands to deliver innovative solutions and measurable growth.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="brand-marquee flex gap-10 items-center"
            style={{
              width: 'max-content',
              minWidth: '100%',
              willChange: 'transform'
            }}
          >
            {/* Double logo sets for seamless infinite scroll */}
            {[
              {
                src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                alt: "Brand 1"
              },
              {
                src: "/assets/brandLogos/hustleLogo.avif",
                alt: "Brand 2"
              },
              {
                src: "/assets/brandLogos/zeck.png",
                alt: "Brand 3"
              },
              {
                src: "/assets/brandLogos/auxo.avif",
                alt: "Brand 4"
              }
            ].concat([
              {
                src: "/assets/brandLogos/ManiorawhiteLogo.webp",
                alt: "Brand 1"
              },
              {
                src: "/assets/brandLogos/hustleLogo.avif",
                alt: "Brand 2"
              },
              {
                src: "/assets/brandLogos/zeck.png",
                alt: "Brand 3"
              },
              {
                src: "/assets/brandLogos/auxo.avif",
                alt: "Brand 4"
              }
            ]).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain opacity-80 transition"
                draggable="false"
              />
            ))}
          </div>
          <style>
            {`
              .brand-marquee {
                display: flex;
                flex-wrap: nowrap;
                animation: brand-marquee-scroll 20s linear infinite;
              }
              @keyframes brand-marquee-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .brand-marquee img:last-child {
                margin-right: 0 !important;
              }
            `}
          </style>
        </div>
      </div>
      {/* Marquee animation keyframes */}
      <style>
        {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
      </style>
    </section>


    {/* Values Section */}
    <section className="py-16 bg-[#06060a]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-3">
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                Our Values
              </span>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl font-bold text-center text-white mb-6">
              What We <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Stand For</span>
            </h2>
          </Reveal>
          <p className="text-white/55 text-[17px] mb-12 max-w-xl mx-auto text-center leading-relaxed">
            These aren't wall posters. These are the principles that drive every campaign, every client call, every deliverable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Results Over Vanity',
                desc: "We don't celebrate follower counts and impressions. We celebrate leads, conversions and revenue. Every KPI we track maps to real business growth.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Radical Transparency',
                desc: "Weekly reports. Real numbers. No hiding behind jargon. You always know exactly what we're doing, why we're doing it, and what result it's driving.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                    <path d="M17.5 14v6M14.5 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'AI-First Execution',
                desc: 'We use AI tools across content, video, web and ads — not to replace human thinking, but to execute faster, test more, and deliver better work at lower cost.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: 'Long-Term Partnership',
                desc: "98% client retention doesn't happen by accident. We build relationships, not transactions. Your success is literally our only business model.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'India-First Thinking',
                desc: 'We specifically serve Indian manufacturers, SMEs and entrepreneurs who are underserved by the industry. We understand the Indian market — its challenges and its massive potential.',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'People Before Profit',
                desc: 'Term insurance for all employees. Outcome-based 5-hour productive work. Remote-first. We believe happy, rested people do better creative work — and our results prove it.',
              },
            ].map((v) => (
              <Reveal key={v.title} as="div" className="group bg-[#11151c] border border-white/[0.08] rounded-2xl p-7 hover:border-[#f7e839]/30 hover:shadow-[0_0_30px_rgba(247,232,57,0.07)] transition-all duration-300">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-[#f7e839] to-[#e8d800] text-[#11181f] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(247,232,57,0.3)] transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#f7e839] transition-colors duration-300">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 bg-[#0a0f15]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                FAQ
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">
                Questions <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">People Actually Ask</span>
              </h2>
              <p className="text-white/55 text-[16px] leading-relaxed">
                Honest answers, no sales jargon.
              </p>
            </div>
          </Reveal>

          {/* Accordion */}
          <Reveal>
            <div>
              {[
                {
                  question: "How quickly can you start working on my project?",
                  answer: "Typically within 3–5 business days of signing. We do a discovery call first, understand your goals, and then kick off with a 30-day action plan. No waiting around."
                },
                {
                  question: "Do you work with manufacturers and product businesses?",
                  answer: "Yes — this is actually our speciality. We've built growth systems specifically for Indian manufacturers who want to sell direct, reduce marketplace dependency, and build their own brand online."
                },
                {
                  question: "What does a typical monthly retainer include?",
                  answer: "It depends on the plan, but most retainers include: strategy calls, content creation, ad management, weekly reporting, CRM updates, and dedicated account management. No hidden charges."
                },
                {
                  question: "Can you help with government registrations like MSME, GST or Trademark?",
                  answer: "Yes. We're one of the very few agencies that offer end-to-end business formalisation support — from Udyam/MSME and GST registration to Trademark filing, Startup India recognition, and GeM portal setup."
                },
                {
                  question: "Do you offer one-time projects or only retainers?",
                  answer: "Both. You can hire us for a one-time website, a single ad campaign, or a full-year retainer. We'll recommend what makes sense based on your goals and budget."
                },
                {
                  question: "What reporting do you provide?",
                  answer: "You get a weekly performance snapshot and a detailed monthly report — with real numbers, campaign breakdowns, lead counts, and clear next-step recommendations. No vanity metrics."
                },
              ].map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  delay={index * 60}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </Reveal>

          {/* Bottom CTA */}
          <Reveal>
            <div className="text-center mt-10">
              <p className="text-white/40 text-sm mb-4">Still have questions?</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#f7e839] font-semibold text-sm hover:underline underline-offset-4 transition-all"
              >
                Talk to our team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-15 bg-[#06060a]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Transform Your Digital </span>Presence?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a tailored strategy that drives measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a href="/careers" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200">
                Work with us...
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
);

export default About;