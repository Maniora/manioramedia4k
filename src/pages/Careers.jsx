'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Reveal from '../components/Reveal'
import AnimatedIllustrations from '../components/AnimatedIllustrations'
import CareersForm from '../components/CareersForm'
import JourneyAnimation from '../components/JourneyAnimation'
import SalaryAnimation from '../components/SalaryAnimation'
import HealthAnimation from '../components/HealthAnimation'
import LearningAnimation from '../components/LearningAnimation'
import OutdoorAnimation from '../components/OutdoorAnimation'
import FoodAnimation from '../components/FoodAnimation'
import WorklifeAnimation from '../components/WorklifeAnimation'
import TermInsuranceAnimation from '../components/TermInsuranceAnimation'
import FlexibleAsyncAnimation from '../components/FlexibleAsyncAnimation'
import HolidaysAnimation from '../components/HolidaysAnimation'
import Link from 'next/link'
import { jobsData } from '../constants/jobsData'



const BenefitCard = ({ title, children, icon }) => (
  <Reveal as="div" className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover-lift transition-all duration-300">
    <div className="flex items-center gap-3 mb-3">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-[#f7e839] text-[#11181f]">
        {icon}
      </div>
      <h4 className="font-semibold text-white text-lg">{title}</h4>
    </div>
    <p className="text-white/70 text-sm leading-relaxed">{children}</p>
  </Reveal>
)

const StatCard = ({ number, label }) => (
  <Reveal as="div" className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-[#f7e839] mb-2">{number}</div>
    <div className="text-white/70 text-sm uppercase tracking-wider">{label}</div>
  </Reveal>
)

const Careers = () => {

  return (
    <div className="relative" style={{ background: 'linear-gradient(135deg, #11181f 0%, #0d1117 100%)' }}>
      <AnimatedIllustrations />

      {/* Hero Section */}
      <section className="relative py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex justify-center">
              <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 text-white">
                Life at 4KMEDIA
              </span>
            </div>
          </Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h1 className="font-extrabold tracking-tight text-5xl mb-6">
                <span className="text-white">Build Your Career at </span>
                <span className="text-[#f7e839]">4KMEDIA</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-2xl font-semibold text-white/90 mb-3">
                Not Everyone Fits Here. And That's Intentional.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
                We hire people who take responsibility, work independently, and deliver consistently.
                A 100% remote company built for people who value ownership, clarity, and real impact.
              </p>
            </Reveal>
            <Reveal>
              <a
                href="#open-positions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#f7e839] to-[#f5d428] text-[#11181f] font-semibold text-lg hover:shadow-[0_0_24px_rgba(247,232,57,0.4)] transition-all duration-300"
              >
                View Open Roles
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Life at 4KMEDIA */}
      <section className="py-12 md:py-14 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-4">
                Built for People Who{' '}
                <span className="bg-gradient-to-r from-[#f7e839] to-[#f5d428] bg-clip-text text-transparent">
                  Deliver
                </span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-white/70 text-lg">
                We don't offer perks to impress. We offer what actually matters for people who value ownership and clear outcomes.
              </p>
            </Reveal>
          </div>

          <div className="py-2">
            <div className="space-y-6 md:space-y-7 max-w-6xl mx-auto">

              {/* 1. 100% Remote Work — illustration left */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <WorklifeAnimation />
                    </div>
                  </div>
                  <div className="p-5 md:p-6 order-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M12 3c-2.4 2.8-3.5 5.6-3.5 9s1.1 6.2 3.5 9" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M12 3c2.4 2.8 3.5 5.6 3.5 9s-1.1 6.2-3.5 9" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M3 12h18" stroke="#f7e839" strokeWidth="1.8" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">100% Remote Work</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Work from anywhere without compromising responsibility or performance. We believe great work is not tied to a physical office.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 2. 5-Day Work Week — illustration right */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="p-5 md:p-6 order-2 lg:order-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="17" rx="2" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M3 9h18" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M8 2v3M16 2v3" stroke="#f7e839" strokeWidth="1.8" strokeLinecap="round" />
                          <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#f7e839" />
                          <rect x="11" y="13" width="3" height="3" rx="0.5" fill="#f7e839" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">5‑Day Work Week</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      We operate on a structured five‑day work model focused on sustainable performance. Rest is treated as a productivity tool, not a luxury.
                    </p>
                  </div>
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <SalaryAnimation />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 3. Flexible & Async Communication — FlexibleAsyncAnimation (left) */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <FlexibleAsyncAnimation />
                    </div>
                  </div>
                  <div className="p-5 md:p-6 order-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16v12H4z" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M4 8l8 5 8-5" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Flexible & Async Communication</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      We respect deep work and different working rhythms. Clear documentation and async updates reduce unnecessary meetings.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 4. Health Insurance — illustration right */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="p-5 md:p-6 order-2 lg:order-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l6 3v5c0 5-3.5 9-6 12-2.5-3-6-7-6-12V5l6-3z" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9 12h6M12 9v6" stroke="#f7e839" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Health Insurance Coverage</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      We provide group health insurance to protect you against unexpected medical expenses. Dependent coverage is available as per policy terms.
                    </p>
                  </div>
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <HealthAnimation />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 5. Term Life Insurance — TermInsuranceAnimation (left) */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <TermInsuranceAnimation />
                    </div>
                  </div>
                  <div className="p-5 md:p-6 order-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l6 3v5c0 5-3.5 9-6 12-2.5-3-6-7-6-12V5l6-3z" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9 12l2 2 4-4" stroke="#f7e839" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Term Life Insurance up to ₹1 Crore</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Your family's financial security matters to us. Eligible employees receive term insurance coverage subject to policy conditions.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 6. 30 Paid Leave Days — illustration right */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="p-5 md:p-6 order-2 lg:order-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M12 7v5l3 3" stroke="#f7e839" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">30 Paid Leave Days Annually</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Take time off to recharge, reset, and avoid burnout. We encourage planned breaks, not guilt‑driven overwork.
                    </p>
                  </div>
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <OutdoorAnimation />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 7. Paid Public & Festival Holidays — FoodAnimation (festive celebrations) */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <HolidaysAnimation />
                    </div>
                  </div>
                  <div className="p-5 md:p-6 order-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="#f7e839" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Paid Public & Festival Holidays</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      In addition to annual leave, national and festival holidays are fully paid. We respect cultural and personal time.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 8. Learning & Upskilling — illustration right */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="p-5 md:p-6 order-2 lg:order-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M2 17l10 5 10-5" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M2 12l10 5 10-5" stroke="#f7e839" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Learning & Upskilling Support</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      We support continuous learning through access to courses, tools, and skill development resources. Growth here is tied to competence, not tenure.
                    </p>
                  </div>
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1 lg:order-2">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <LearningAnimation />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 9. Company Outings & Team Celebrations — illustration left */}
              <Reveal>
                <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative flex justify-center items-center h-52 sm:h-60 md:h-64 lg:h-64 xl:h-72 bg-transparent order-1">
                    <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] max-w-[420px]">
                      <FoodAnimation />
                    </div>
                  </div>
                  <div className="p-5 md:p-6 order-2">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#1a1f26] to-[#2d3748] border border-white/10 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M17 21H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z" stroke="#f7e839" strokeWidth="1.8" />
                          <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#f7e839" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Company Outings & Team Celebrations</h3>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      We invest in meaningful team interactions through virtual and in‑person gatherings. Designed to strengthen collaboration, not force culture.
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-14 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Heading */}
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Roles <span className="text-[#f7e839]">(Always Hiring)</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-white/80 text-lg font-medium leading-relaxed mb-10 max-w-2xl">
                We are continuously hiring for the following roles. If you meet the expectations, we are open to conversations year-round.
              </p>
            </Reveal>

            {/* Jobs Table */}
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                {jobsData.map((job, index) => (
                  <div
                    key={job.title}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 transition-colors duration-200 hover:bg-white/5 ${index !== jobsData.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    {/* Left — title + badges */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-white font-semibold text-base">{job.title}</span>
                      <div className="flex gap-2">
                        <span className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full">{job.type}</span>
                        <span className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full">{job.location}</span>
                      </div>
                    </div>

                    {/* Right — actions */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Link
                        href={`/careers/${job.id}`}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
                      >
                        Read More
                      </Link>
                      <a
                        href="#apply"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f7e839] text-[#11181f] text-sm font-bold hover:bg-[#f5d428] hover:shadow-[0_0_16px_rgba(247,232,57,0.35)] transition-all duration-200"
                      >
                        Apply Now
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-15 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <Reveal>
                <h3 className="text-4xl font-bold text-white mb-4">Start Your <span className="text-[#f7e839]">Journey</span> With Us</h3>
              </Reveal>
              <Reveal>
                <p className="text-white/70 text-lg">
                  Ready to take the next step in your career? Submit your application and we'll be in touch shortly.
                </p>
              </Reveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Application Form */}
              <Reveal>
                <div className="bg-gradient-to-br from-[#11181f] to-[#1a222c] rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
                  <CareersForm />
                </div>
              </Reveal>

              {/* Journey Animation */}
              <Reveal>
                <div className="h-96 lg:h-full min-h-[400px]">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 h-full">
                    <div className="text-center mb-4">
                      <h4 className="text-white font-semibold text-lg mb-2">Your Career Journey</h4>
                      <p className="text-white/70 text-sm">Watch your professional growth unfold</p>
                    </div>
                    <JourneyAnimation />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-15 bg-[#0a0f15]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Don't See the <span className="text-[#f7e839]">Perfect Role?</span>
                </h3>
                <p className="text-white/80 text-lg">
                  We're always interested in connecting with exceptional talent. If you don't see a current opening that matches your skills, we'd still like to hear from you.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-[#11181f] border border-white/10 rounded-2xl p-8 mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Send Us Your Portfolio</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-white/80">
                    <svg className="w-5 h-5 text-[#f7e839] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Your resume</span>
                  </li>
                  <li className="flex items-start text-white/80">
                    <svg className="w-5 h-5 text-[#f7e839] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Portfolio or work samples (mandatory for creative/technical roles)</span>
                  </li>
                  <li className="flex items-start text-white/80">
                    <svg className="w-5 h-5 text-[#f7e839] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>A short note explaining how you can add value to 4KMEDIA</span>
                  </li>
                </ul>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 mb-6">
                  <p className="text-sm font-medium text-[#f7e839]">Note: We review serious applications only.</p>
                </div>
                <div className="flex justify-center mt-6">
                  <a
                    href="mailto:hr@4kmedia.in?subject=Speculative%20Application&body=Hi%204KMEDIA%20Team%2C%0D%0A%0D%0APlease%20find%20my%20resume%2C%20portfolio%20and%20a%20short%20note%20attached.%0D%0A%0D%0A"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f7e839] text-[#11181f] font-bold text-base hover:shadow-[0_0_24px_rgba(247,232,57,0.4)] hover:bg-[#f5d428] hover:scale-105 transition-all duration-200 whitespace-nowrap"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                      <path d="M4 4h16v12H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M4 8l8 5 8-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    <span className="sm:hidden">Email Your Portfolio →</span>
                    <span className="hidden sm:inline">Send Portfolio to hr@4kmedia.in</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Hiring Process Section */}
      <section className="py-15 bg-[#06060a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6 text-white text-center">
                  How We Hire
                </span>
              </Reveal>
              <Reveal>
                <h3 className="text-4xl font-bold text-white mb-4">Our <span className="text-[#f7e839]">Hiring Process</span></h3>
              </Reveal>
              <Reveal>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  We keep our hiring process structured, transparent, and efficient.
                </p>
              </Reveal>
            </div>

            <div className="relative max-w-7xl mx-auto cursor-default hidden lg:block py-10">
              {/* Horizontal Connecting Thick Line & Arrow */}
              <div className="absolute top-[88px] left-[4%] right-[4%] h-[18px] bg-gradient-to-r from-[#11181f] via-[#f7e839]/40 to-[#f7e839]/90 z-0">
                {/* Arrow head */}
                <div className="absolute -right-[34px] -top-[16px] w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-l-[35px] border-l-[#f7e839]/90"></div>
              </div>

              <div className="grid grid-cols-5 gap-2 relative z-10 w-full">
                {[
                  {
                    title: "Job Posting",
                    desc: "We publish all our open roles on our site and platforms.",
                    icon: <svg className="w-10 h-10 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  },
                  {
                    title: "Screening",
                    desc: "Filter resumes and shortlist suitable candidate profiles.",
                    icon: <svg className="w-10 h-10 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  },
                  {
                    title: "Assessment",
                    desc: "Task evaluation to test your real capabilities.",
                    icon: <svg className="w-10 h-10 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                  },
                  {
                    title: "Interview",
                    desc: "Focused discussion to assess skills and culture fit.",
                    icon: <svg className="w-10 h-10 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  },
                  {
                    title: "Hiring",
                    desc: "Select, offer position, and structure onboarding.",
                    icon: <svg className="w-10 h-10 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  }
                ].map((step, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="relative flex flex-col items-center text-center group">

                      {/* Large Top Circle w/ Icon */}
                      <div className="w-28 h-28 mb-3 rounded-full bg-[#11181f] border-8 border-[#0a0f15] shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:border-[#1a222c] group-hover:shadow-[0_0_25px_rgba(247,232,57,0.2)] flex items-center justify-center relative z-20 group-hover:-translate-y-2 transition-all duration-300 mx-auto">
                        <div className="absolute inset-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#f7e839]/50 transition-colors duration-300"></div>
                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>

                      {/* Connecting Dotted Line */}
                      <div className="h-14 w-0 border-l-[3px] border-dotted border-white/20 group-hover:border-[#f7e839]/60 transition-colors duration-300"></div>

                      {/* Small Step Number Circle */}
                      <div className="w-12 h-12 mt-2 mb-6 rounded-full bg-[#11181f] border-[3px] border-[#0a0f15] shadow-lg flex items-center justify-center relative z-20 group-hover:border-[#f7e839]/80 transition-colors duration-300 mx-auto">
                        <span className="text-lg font-bold text-white group-hover:text-[#f7e839] transition-colors">0{idx + 1}</span>
                      </div>

                      {/* Text */}
                      <div className="px-4">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#f7e839] transition-colors">{step.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                      </div>

                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Mobile Fallback View (Vertical) */}
            <div className="lg:hidden max-w-lg mx-auto relative cursor-default">
              <div className="absolute left-[38px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-[#f7e839] via-white/10 to-transparent opacity-50 z-0"></div>

              <div className="space-y-12 relative z-10">
                {[
                  { title: "Job Posting", desc: "We publish all our open roles on our site and platforms.", icon: <svg className="w-6 h-6 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
                  { title: "Screening", desc: "Filter resumes and shortlist suitable candidate profiles.", icon: <svg className="w-6 h-6 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                  { title: "Assessment", desc: "Task evaluation to test your real capabilities.", icon: <svg className="w-6 h-6 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
                  { title: "Interview", desc: "Focused discussion to assess skills and culture fit.", icon: <svg className="w-6 h-6 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
                  { title: "Hiring", desc: "Select, offer position, and structure onboarding.", icon: <svg className="w-6 h-6 text-[#f7e839]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
                ].map((step, idx) => (
                  <Reveal key={idx}>
                    <div className="flex items-start gap-6 group hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-[80px] h-[80px] rounded-full bg-[#11181f] border-[6px] border-[#0a0f15] shadow-lg flex items-center justify-center flex-shrink-0 relative z-20 group-hover:border-[#f7e839]/30 transition-colors">
                        {step.icon}
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#1a222c] border border-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white group-hover:text-[#f7e839] group-hover:border-[#f7e839]">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#f7e839] transition-colors">{step.title}</h4>
                        <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers
