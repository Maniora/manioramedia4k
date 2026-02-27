'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import Lottie from 'lottie-react'
import { servicesData } from '../constants/servicesData'

const ServiceCard = ({ id, title, description, image, points, index }) => (
  <Reveal as="div" className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-[#f7e839]/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer">
    {/* Full-bleed image */}
    <div className="relative h-[420px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
      />
      {/* Base gradient — stronger on mobile so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/70 to-[#0a0d12]/10 md:via-[#0a0d12]/60 md:to-transparent" />
      {/* Hover tint (desktop only) */}
      <div className="absolute inset-0 bg-[#f7e839]/0 md:group-hover:bg-[#f7e839]/5 transition-colors duration-500" />
    </div>

    {/* Number badge */}
    <div className="absolute top-5 left-5">
      <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white/70">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>

    {/* Content overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      {/* Feature tags — visible on mobile, fade out on desktop hover */}
      <div className="flex flex-wrap gap-2 mb-3 transition-all duration-300 md:group-hover:opacity-0 md:group-hover:-translate-y-2">
        {points.slice(0, 2).map((point, idx) => (
          <span key={idx} className="text-xs text-white/60 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {point}
          </span>
        ))}
      </div>

      <h3 className="text-white font-bold text-2xl leading-tight mb-2 drop-shadow-lg">
        {title}
      </h3>

      {/* Description — always visible on mobile, slides in on desktop hover */}
      <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-4 md:text-white/0 md:group-hover:text-white/75 md:max-h-0 md:group-hover:max-h-20 md:overflow-hidden md:mb-0 md:group-hover:mb-4 transition-all duration-400 ease-out">
        {description}
      </p>

      {/* Action buttons — always visible on mobile, animate in on desktop */}
      <div className="flex gap-3 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 ease-out">
        <Link
          href={`/services/${id}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#f7e839] text-[#0a0d12] text-sm font-bold hover:bg-white transition-colors duration-200"
          onClick={e => e.stopPropagation()}
        >
          Explore Service
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </Link>
        <a
          href="/contact"
          className="px-4 py-3 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200 whitespace-nowrap"
          onClick={e => e.stopPropagation()}
        >
          Get Quote
        </a>
      </div>
    </div>
  </Reveal>
)




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
    <main className="relative min-h-screen" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
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
                  image={service.img}
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

      {/* More Services Coming Soon */}
      <section className="py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-4">
                More <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Services</span> Coming Soon...
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-white/70 text-lg">
                We're working on expanding our offerings. Stay tuned for new specialized solutions to help your business grow!
              </p>
            </Reveal>
          </div>
          <div className="flex justify-center mt-10">
            <div className="max-w-md w-full flex flex-col items-center">
              <div className="w-64 h-64 mb-6">
                <ComingSoonAnimation />
              </div>
              <span className="text-white/70 text-lg font-medium">Exciting new services are on the way!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="bg-gradient-to-r from-[#1a1f26] to-[#2d3748] rounded-2xl p-12 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-4">Ready to <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Accelerate Your Growth?</span></h3>
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
    </main>
  );
};

export default Services

