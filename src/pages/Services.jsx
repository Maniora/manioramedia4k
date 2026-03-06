'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import Lottie from 'lottie-react'
import { servicesData } from '../constants/servicesData'
import * as LucideIcons from 'lucide-react'

const ServiceCard = ({ id, title, description, iconName, points, index }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.CircleHelp;

  return (
    <Reveal as="div" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d12]/40 hover:bg-[#0a0d12]/80 hover:border-[#f7e839]/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(247,232,57,0.1)] cursor-pointer flex flex-col justify-between min-h-[440px] p-8">

      {/* Top area: Badge and Icon */}
      <div className="flex justify-between items-start mb-8">
        {/* Number badge */}
        <span className="text-xl font-bold text-white/20 group-hover:text-[#f7e839]/40 transition-colors duration-300">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Icon container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1f26] to-[#0a0d12] border border-white/10 flex items-center justify-center text-white/80 group-hover:from-[#f7e839] group-hover:to-[#f5d428] group-hover:text-black group-hover:border-[#f7e839] transition-all duration-500 shadow-lg group-hover:shadow-[0_0_30px_rgba(247,232,57,0.4)] group-hover:-rotate-3 group-hover:scale-110">
          <Icon strokeWidth={1.5} size={32} />
        </div>
      </div>

      {/* Content area */}
      <div className="flex-grow">
        <h3 className="text-white font-bold text-2xl leading-tight mb-4 group-hover:text-[#f7e839] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {points.slice(0, 2).map((point, idx) => (
            <span key={idx} className="text-xs text-white/50 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full group-hover:text-white/80 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              {point}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto">
        <Link
          href={`/services/${id}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-white/80 text-sm font-semibold hover:bg-[#f7e839] hover:text-[#0a0d12] transition-colors duration-300 border border-white/10 hover:border-[#f7e839]"
          onClick={e => e.stopPropagation()}
        >
          Explore Service
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </Link>
        <a
          href="/contact"
          className="px-4 py-3 rounded-xl border border-white/10 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-white transition-colors duration-300 whitespace-nowrap"
          onClick={e => e.stopPropagation()}
        >
          Get Quote
        </a>
      </div>
    </Reveal>
  );
};






const ProcessStep = ({ number, title, description }) => (
  <Reveal as="div" className="text-center">
    <div className="h-16 w-16 grid place-items-center rounded-full bg-gradient-to-br from-[#f7e839] to-[#f5d428] text-[#11181f] font-bold text-xl mb-4 mx-auto">
      {number}
    </div>
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <p className="text-white/70 text-sm leading-relaxed">{description}</p>
  </Reveal>
)

// Coming Soon Animation Component
const ComingSoonAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the animation data from the public directory
    fetch('/assets/illustrations/comingsoon.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load animation:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f7e839]"></div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f7e839]/10 to-[#f7e839]/5 rounded-full">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#f7e839] rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#11181f]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-[#f7e839] text-sm font-semibold">Coming Soon</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
      />
    </div>
  );
};

const Services = () => {
  return (
    <div className="relative" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
      <AnimatedIllustrations />

      {/* Hero Section */}
      <section className="relative py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                Our Services
              </span>
            </Reveal>
            <Reveal>
              <h1 className="font-extrabold tracking-tight text-5xl mb-6">
                <span className="text-white">Comprehensive </span>
                <span className="text-[#f7e839]">Digital Solutions</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                End-to-end digital marketing services designed to drive growth, enhance visibility,
                and deliver measurable results for your business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service, index) => (
              <div key={service.t} id={service.id}>
                <ServiceCard
                  id={service.id}
                  title={service.t}
                  description={service.d}
                  iconName={service.iconName}
                  points={service.pts}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-15 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            </Reveal>
            <Reveal>
              <p className="text-white/70 text-lg">
                A structured approach to ensure every project delivers maximum impact and measurable results.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ProcessStep
              number="01"
              title="Discovery & Strategy"
              description="Deep dive into your business goals, audience, and competitive landscape to develop a tailored strategy."
            />
            <ProcessStep
              number="02"
              title="Planning & Execution"
              description="Detailed project planning with clear milestones, followed by precise implementation of strategies."
            />
            <ProcessStep
              number="03"
              title="Optimization & Testing"
              description="Continuous monitoring, A/B testing, and optimization to maximize performance and ROI."
            />
            <ProcessStep
              number="04"
              title="Reporting & Growth"
              description="Comprehensive reporting with insights and recommendations for ongoing growth and improvement."
            />
          </div>
        </div>
      </section>

      {/* Customised Services */}
      <section className="py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                  Made Just for You
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  <span className="text-[#f7e839]">Customised</span> Services
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  We get it - your business isn't like everyone else's. So why settle for a cookie-cutter plan? Tell us what you need, and we'll build something that actually fits.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  title: "We start with your goals",
                  desc: "We listen first — your goals shape everything we do."
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                  title: "You pick what works for you",
                  desc: "Pick only what you need — no forced bundles, no wasted spend."
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  ),
                  title: "You see real progress",
                  desc: "Clear reports, plain language, numbers that actually mean something."
                },
              ].map((item) => (
                <Reveal key={item.title} as="div" className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:border-[#f7e839]/40 hover:bg-white/10 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#f7e839]/10 border border-[#f7e839]/20 flex items-center justify-center mx-auto mb-4 text-[#f7e839]">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="text-center">
                <p className="text-white/50 text-sm mb-5">Have something specific in mind? Let's have a conversation.</p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-[0_0_20px_rgba(247,232,57,0.4)] transition-all duration-300"
                >
                  Let's Talk
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
            <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-4">Ready to <span className="text-[#f7e839]">Accelerate Your Growth?</span></h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your objectives and create a customized strategy that aligns with your business goals and delivers tangible results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold hover:shadow-lg transition-all duration-200">
                  Get Custom Proposal
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
export default Services

