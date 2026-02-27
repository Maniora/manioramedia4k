'use client'

import React, { useEffect } from 'react'
import Reveal from '../components/Reveal'
import Link from 'next/link'

const JobDetail = ({ job }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!job) return null;

    return (
        <main className="min-h-screen pt-24 pb-20 bg-[#0a0f15]">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Back Link */}
                <div className="mb-10">
                    <Link href="/careers" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Careers
                    </Link>
                </div>

                {/* Job Header */}
                <div className="border-b border-white/10 pb-10 mb-10">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {job.title}
                        </h1>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm md:text-base mb-8">
                            <div className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" /></svg>
                                {job.location}
                            </div>
                            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30"></span>
                            <div className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                {job.type}
                            </div>
                            {job.experience && (
                                <>
                                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30"></span>
                                    <div className="flex items-center gap-2">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {job.experience}
                                    </div>
                                </>
                            )}
                            {job.ctc && (
                                <>
                                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30"></span>
                                    <div className="flex items-center gap-2">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        {job.ctc}
                                    </div>
                                </>
                            )}
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <a
                            href="/careers#apply"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#f7e839] text-[#11181f] font-semibold hover:bg-[#f5d428] transition-colors"
                        >
                            Apply for this role
                        </a>
                    </Reveal>
                </div>

                {/* Job Content */}
                <div className="space-y-12 text-white/80">

                    {/* About */}
                    {job.description && (
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">About the Role</h2>
                                <div className="space-y-4">
                                    {job.description.split('\n').map((para, i) => (
                                        <p key={i} className="leading-relaxed text-[1.05rem]">{para}</p>
                                    ))}
                                </div>
                            </section>
                        </Reveal>
                    )}

                    {/* Requirements / Experience */}
                    {job.requirements && (
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Experience & Qualification</h2>
                                <ul className="space-y-3">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-[1.05rem] leading-relaxed">
                                            <span className="text-[#f7e839] mt-1 shrink-0">✦</span>
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>
                    )}

                    {/* Responsibilities */}
                    {job.responsibilities && (
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h2>
                                <div className="space-y-4">
                                    {job.responsibilities.map((resp, idx) => {
                                        const lines = resp.split('\n');
                                        if (lines.length > 1 && lines[0].startsWith('**')) {
                                            return (
                                                <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 text-[1.05rem]">
                                                    <strong className="text-white block mb-2">{lines[0].replace(/\*\*/g, '').replace(/^\d+\.\s*/, '')}</strong>
                                                    <p className="leading-relaxed">{lines.slice(1).join('\n')}</p>
                                                </div>
                                            )
                                        }
                                        return (
                                            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-[1.05rem] leading-relaxed">
                                                <span className="shrink-0 text-white/40 mt-1">—</span>
                                                <p>{resp}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        </Reveal>
                    )}

                    {/* Skills */}
                    {(job.skills || job.bonusSkills) && (
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>

                                {job.skills && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-white mb-4">
                                            Required
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {job.skills.map((skill, idx) => (
                                                <li key={`req-${idx}`} className="flex gap-3 text-[1.05rem] bg-white/5 px-4 py-3 rounded-lg border border-white/5">
                                                    <span className="text-[#f7e839] shrink-0 font-bold">✓</span>
                                                    <span>{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {job.bonusSkills && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-4">
                                            Preferred
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-4">
                                            {job.bonusSkills.map((skill, idx) => (
                                                <li key={`opt-${idx}`} className="flex gap-3 text-[1.05rem] bg-white/5 px-4 py-3 rounded-lg border border-white/5">
                                                    <span className="text-[#f7e839] shrink-0 font-bold text-lg leading-none mt-0.5">+</span>
                                                    <span>{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </section>
                        </Reveal>
                    )}

                    {/* KPIs */}
                    {job.kpis && (
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">KPIs (How you will be measured)</h2>
                                <div className="flex flex-wrap gap-3">
                                    {job.kpis.map((kpi, idx) => (
                                        <span key={idx} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[0.95rem]">
                                            {kpi}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </Reveal>
                    )}

                    {/* Benefits */}
                    {job.benefits && (
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {job.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex gap-3 text-[1.05rem] leading-relaxed p-4 rounded-xl bg-white/5 border border-white/5">
                                            <span className="text-[#f7e839] mt-0.5 shrink-0">✦</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>
                    )}

                    {/* Note */}
                    {job.note && (
                        <Reveal>
                            <section className="bg-[#f7e839]/5 p-6 rounded-xl border border-[#f7e839]/20 mt-12 w-full">
                                <h4 className="text-[#f7e839] font-bold mb-2">Note</h4>
                                <p className="text-sm text-white/80 leading-relaxed md:text-base">
                                    {job.note}
                                </p>
                            </section>
                        </Reveal>
                    )}
                </div>

                {/* Bottom Footer */}
                <div className="mt-16 pt-10 pb-10 border-t border-white/10 text-center">
                    <Reveal>
                        <h3 className="text-2xl font-bold text-white mb-6">Think you're a fit?</h3>
                        <a
                            href="/careers#apply"
                            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-[#f7e839] text-[#11181f] font-bold hover:bg-[#f5d428] transition-colors gap-2"
                        >
                            Apply for {job.title}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                    </Reveal>
                </div>

            </div>
        </main>
    )
}

export default JobDetail
