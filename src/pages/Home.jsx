'use client'

import Hero from '../components/Hero'
import ServicesCard from '../components/ServicesCard'
import Testimonial from '../components/Testimonial'
import FaqItem from '../components/FaqItem'
import Reveal from '../components/Reveal'
import Methodology from '../components/Methodology'

const Home = () => (
  <main className="overflow-hidden">
    <Hero />

    {/* About Section */}
    <section className="py-15 relative bg-[#0f141a]">
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Who We Are
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Strategic Digital <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Growth Partners</span>
          </h2>
          <p className="text-xl text-white/70 mb-4 font-light">Zero to viral, we make it happen.</p>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">
            At 4KMEDIA, we blend creativity and strategy to help brands shine in a noisy world. We're young, bold, and obsessed with results that matter..We specialize in performance-driven digital solutions that deliver measurable results
            and sustainable growth for forward-thinking brands.
          </p>

          <a href="/about" className="px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium text-center">
            Know More About Us
          </a>
        </div>
      </Reveal>
    </section>

    {/* Services Section */}
    <section className="py-15 relative bg-[#06060a]">
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-6 shadow-lg">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            End-to-end services designed to elevate your digital presence and drive measurable business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Social Media Marketing",
              description: "Content strategy, community management, and paid amplification across social platforms.",
              icon: "M20 12a8 8 0 11-8-8 M22 2l-8.5 8.5"
            },
            {
              title: "Website Development",
              description: "Fast, accessible, SEO-friendly websites with modern stacks and CMS options.",
              icon: "M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
            },
            {
              title: "UI/UX Design",
              description: "Human-centered product design—research, prototypes, and design systems that convert.",
              icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            },
            {
              title: "Video Production",
              description: "Brand films, reels, and ad creatives from scripting to distribution.",
              icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            },
            {
              title: "Logo Design",
              description: "Distinctive brand identities with scalable logo systems and guidelines.",
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            },
            // {
            //   title: "SEO Optimization", 
            //   description: "Search engine optimization to increase visibility and organic traffic.",
            //   icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            // },
            {
              title: "Event Organization",
              description: "Complete event planning and management for engaging brand experiences.",
              icon: "M8 7V3h8v4M3 11h18M5 11v10a2 2 0 002 2h10a2 2 0 002-2V11"
            }
          ].map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7e839]/10 to-[#22d3ee]/10 rounded-2xl transform group-hover:scale-105 transition-all duration-300 blur-xl opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-[#f7e839]/30 transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f7e839] to-[#22d3ee] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-7">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="/services"
                    className="text-[#f7e839] text-sm font-medium flex items-center gap-2 hover:underline transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/services');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/services" className="group inline-flex items-center px-8 py-4 rounded-xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-medium relative overflow-hidden">
            <span className="relative z-10">Explore All Services</span>
            <svg className="ml-3 w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7e839]/0 to-[#f7e839]/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
          </a>
        </div>
      </Reveal>
    </section>

    {/* Methodology Section */}
    <Methodology />

    {/* Brand Partners Section */}
    <div className="bg-[#06060a] relative py-15 mt-12">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Our <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Brand Partners</span>
        </h2>
        <div className="text-center mb-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          We collaborate with top brands to deliver innovative solutions and measurable growth.
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
    </div>

    {/* CTA Section */}
    <section className="py-15 relative bg-[#0f141a]">
      <Reveal as="div" className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden">
          <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="bg-gradient-to-r from-[#f7e839] to-[#22d3ee] bg-clip-text text-transparent">Accelerate</span> Your Growth?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Schedule a complimentary strategy session with our experts. We'll analyze your current
            performance and outline a customized roadmap for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#f7e839] to-[#f7e839]/90 text-black transition-all duration-300 font-semibold text-lg min-w-[200px] hover:shadow-2xl hover:shadow-[#f7e839]/30 transform hover:scale-105"
            >
              Schedule Strategy Call
            </a>
            <a
              href="/services"
              className="px-10 py-5 rounded-2xl border border-white/20 text-white hover:border-[#f7e839] hover:bg-[#f7e839]/10 transition-all duration-300 font-semibold text-lg min-w-[200px]"
            >
              View Our Services
            </a>
          </div>
          <p className="text-white/50 text-sm mt-6">No obligation, just actionable insights</p>
        </div>
      </Reveal>
    </section>
  </main>
)

export default Home