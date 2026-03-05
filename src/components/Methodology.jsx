'use client';

import React from 'react';
import Reveal from './Reveal';

const Methodology = () => {
    const steps = [
        {
            step: '01',
            time: 'Week 1 – 2',
            title: 'Discovery &\nDeep Audit',
            desc: 'We dig into your business, competitors, audience and current digital gaps — before spending a single rupee.',
            svg: 'M21 21l-4-4M3 11a8 8 0 1116 0 8 8 0 01-16 0z',
            color: '#f7e839',
            colorClass: 'text-[#f7e839]',
            bgClass: 'bg-[#f7e839]/10',
            borderClass: 'border-[#f7e839]/30',
            gradient: 'from-[#f7e839]',
            deliverables: ['Full digital presence audit', 'Competitor gap analysis', 'Target audience mapping', 'Goal & KPI alignment', 'Budget & channel strategy']
        },
        {
            step: '02',
            time: 'Week 2 – 3',
            title: 'Strategy &\nRoadmap',
            desc: 'Custom growth roadmap with clear KPIs, timelines and spend plans. You approve everything — zero surprises.',
            svg: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
            color: '#f7e839',
            colorClass: 'text-[#f7e839]',
            bgClass: 'bg-[#f7e839]/10',
            borderClass: 'border-[#f7e839]/30',
            gradient: 'from-[#f7e839]',
            deliverables: ['30/60/90 day growth plan', 'Content & channel calendar', 'Ad budget allocation', 'Milestone targets', 'Zoho project setup']
        },
        {
            step: '03',
            time: 'Week 3 – 6',
            title: 'Execution &\nLaunch',
            desc: 'AI-accelerated build and launch. Our Zoho workflow means any team member covers seamlessly — zero delivery gaps.',
            svg: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            color: '#f7e839',
            colorClass: 'text-[#f7e839]',
            bgClass: 'bg-[#f7e839]/10',
            borderClass: 'border-[#f7e839]/30',
            gradient: 'from-[#f7e839]',
            deliverables: ['Website / landing page live', 'Campaigns activated', 'Content publishing begins', 'Tracking & pixels live', 'Quality assurance checks']
        },
        {
            step: '04',
            time: 'Month 2 onwards',
            title: 'Optimise &\nScale',
            desc: "We don't stop at launch. Weekly data review, monthly strategy calls, continuous improvement — your growth compounds.",
            svg: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
            color: '#f7e839',
            colorClass: 'text-[#f7e839]',
            bgClass: 'bg-[#f7e839]/10',
            borderClass: 'border-[#f7e839]/30',
            gradient: 'from-[#f7e839]',
            deliverables: ['Weekly performance report', 'A/B testing & iteration', 'Monthly strategy call', 'Scaling winning campaigns', 'Quarterly growth review']
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-[#0f141a]">
            <Reveal as="div" className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-20 relative z-20">
                    <span className="inline-block text-sm uppercase tracking-wider bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                        Our Methodology
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        How We Turn Your Vision<br className="hidden md:block" />Into <span className="text-[#f7e839]">Measurable Growth</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                        A structured 4-step system built for transparency, accountability, and results — so you always know exactly where your project stands and what's coming next.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative mb-20">
                    {/* Connector line between cards */}
                    <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#f7e839]/30 via-[#f7e839]/50 via-[#f7e839]/30 to-transparent z-0"></div>

                    {/* Moving dot on connector */}
                    <div className="hidden lg:block absolute top-[46px] left-[12.5%] w-[13px] h-[13px] rounded-full shadow-[0_0_12px_rgba(247,232,57,0.8),0_0_24px_rgba(247,232,57,0.4)] z-10 animate-[travel_4s_ease-in-out_infinite]"></div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
            @keyframes travel {
              0% { left: 12.5%; background: #f7e839; box-shadow: 0 0 12px rgba(247,232,57,0.8); }
              50% { left: calc(87.5% - 14px); background: #f7e839; box-shadow: 0 0 12px rgba(247,232,57,0.8); }
              100% { left: 12.5%; background: #f7e839; box-shadow: 0 0 12px rgba(247,232,57,0.8); }
            }
            @keyframes rot { to { transform: rotate(360deg); } }
            @keyframes rotReverse { to { transform: rotate(-360deg); } }
          `}} />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
                        {steps.map((stage) => (
                            <div key={stage.step} className="group relative z-10 lg:px-4 flex flex-col h-full items-center lg:items-stretch">

                                {/* Node */}
                                <div className="w-[104px] h-[104px] mx-auto mb-8 relative flex items-center justify-center bg-[#11181f]/80 backdrop-blur-md rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                    {/* Rotating dashed borders */}
                                    <div className="absolute -inset-[6px] rounded-full border border-dashed border-white/20 animate-[rot_12s_linear_infinite]"></div>
                                    <div className="absolute -inset-[14px] rounded-full border border-dashed border-white/10 animate-[rotReverse_20s_linear_infinite]"></div>

                                    {/* Badge */}
                                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black z-20"
                                        style={{ backgroundColor: stage.color, boxShadow: `0 0 16px ${stage.color}80` }}>
                                        {stage.step}
                                    </div>

                                    {/* Icon */}
                                    <svg className="w-10 h-10 text-white/80 group-hover:text-white transition-colors duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stage.svg} />
                                    </svg>
                                </div>

                                {/* Card */}
                                <div className="relative bg-[#ffffff08] backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col flex-1 overflow-hidden w-full text-left">

                                    {/* Top Gradient line */}
                                    <div className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${stage.gradient} to-transparent`}></div>

                                    {/* Decorator glow inside */}
                                    <div className={`absolute pointer-events-none -inset-2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${stage.gradient} to-transparent rounded-2xl blur-xl`}></div>

                                    {/* Time chip */}
                                    <div className={`inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider uppercase mb-5 border ${stage.colorClass} ${stage.bgClass} ${stage.borderClass}`}>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        {stage.time}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 whitespace-pre-line leading-tight tracking-tight">{stage.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">{stage.desc}</p>

                                    <ul className="mt-auto pt-5 border-t border-white/5 space-y-3">
                                        {stage.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[13.5px] text-white/60 leading-tight">
                                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: stage.color }}></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Bar */}
                <div className="bg-[#ffffff05] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 relative overflow-hidden">
                    {[
                        { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Weekly Reporting', sub: 'Every metric, every Monday' },
                        { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', title: 'Zero Lock-In', sub: 'Month-to-month contracts' },
                        { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Agile Workflow', sub: 'Full timeline transparency' },
                        { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', title: 'AI-Accelerated', sub: 'Faster, smarter delivery' },
                    ].map((trust, i) => (
                        <React.Fragment key={i}>
                            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-[#ffffff08] border border-white/10 flex items-center justify-center flex-shrink-0 text-white/80 group">
                                    <svg className="w-6 h-6 group-hover:text-[#f7e839] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={trust.icon}></path></svg>
                                </div>
                                <div>
                                    <strong className="block text-white text-[15px] font-semibold tracking-wide">{trust.title}</strong>
                                    <span className="text-white/50 text-sm font-light mt-0.5 block">{trust.sub}</span>
                                </div>
                            </div>
                            {i < 3 && <div className="hidden md:block w-px h-12 bg-white/5 relative z-10"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default Methodology;
