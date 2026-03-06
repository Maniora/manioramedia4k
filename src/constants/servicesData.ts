export interface Service {
    id: string;
    t: string;
    d: string;
    img: string;
    iconName?: string;
    pts: string[];
    subServices?: {
        title: string;
        description: string;
        subItems?: string;
    }[];
}

export const servicesData: Service[] = [
    {
        id: 'digital-marketing',
        t: 'Digital Marketing',
        d: 'Comprehensive performance-driven digital marketing solutions to rapidly accelerate your brand growth, visibility, and acquisition.',
        img: '/assets/images/smm.jpg',
        iconName: 'TrendingUp',
        pts: ['Search Engine Optimization (SEO)', 'Performance Marketing', 'Email & WhatsApp Automation'],
        subServices: [
            {
                title: 'Search Engine Optimisation (SEO)',
                description: 'On-page SEO, off-page SEO, technical SEO audit, keyword research and mapping, competitor gap analysis, local SEO (Google Business Profile optimisation), schema markup, Core Web Vitals optimisation, and monthly ranking reports.',
                subItems: 'Local SEO for Hyderabad businesses, E-commerce SEO, YouTube SEO.'
            },
            {
                title: 'Social Media Marketing (SMM)',
                description: 'Platform strategy and content calendar, content creation (graphics, carousels, reels), community management and comment moderation, hashtag research, influencer coordination, and monthly analytics reporting. Platforms: Instagram, Facebook, LinkedIn, YouTube, Twitter/X, Pinterest.',
                subItems: 'Instagram Growth, LinkedIn B2B Marketing, YouTube Channel Management.'
            },
            {
                title: 'Performance Marketing / Paid Advertising',
                description: 'Meta Ads (Facebook + Instagram), Google Ads (Search, Display, Shopping, YouTube), LinkedIn Ads, campaign setup and audience targeting, A/B testing creatives, landing page optimisation, retargeting/remarketing campaigns, conversion tracking setup, and weekly spend reports.',
                subItems: 'Lead Generation Campaigns, E-commerce Sales Campaigns, App Install Campaigns.'
            },
            {
                title: 'Search Engine Marketing (SEM / PPC)',
                description: 'Google Search Ads, Google Shopping Ads, Google Display Network, YouTube Ads, Bing Ads, keyword bidding strategy, quality score improvement, ad copy writing, and negative keyword management.'
            },
            {
                title: 'Content Marketing',
                description: 'Blog writing and SEO articles, website copywriting, product descriptions, email newsletters, case study writing, whitepapers, LinkedIn thought leadership content, and infographic creation.'
            },
            {
                title: 'Email Marketing',
                description: 'Email campaign strategy, template design, list segmentation, drip campaign setup, automation sequences, open rate and click rate optimisation, and monthly reporting. Tools: Mailchimp, Zoho Campaigns, Klaviyo.'
            },
            {
                title: 'WhatsApp Marketing',
                description: 'WhatsApp Business API setup, broadcast list management, chatbot integration, lead nurturing sequences, product catalogue setup, and click-to-WhatsApp ad campaigns.'
            },
            {
                title: 'Online Reputation Management (ORM)',
                description: 'Google review management, responding to negative reviews, review generation strategy, brand mention monitoring, social listening, and Wikipedia and press mention building.'
            },
            {
                title: 'Influencer Marketing',
                description: 'Influencer identification and outreach, campaign brief creation, content approval process, performance tracking, and micro and macro influencer management across Instagram, YouTube and LinkedIn.'
            },
            {
                title: 'Video Marketing',
                description: 'YouTube channel setup and optimisation, YouTube SEO, shorts strategy, video ad campaigns, and subscriber growth strategy.'
            }
        ]
    },
    {
        id: 'website-development',
        t: 'Website Development',
        d: 'Performance-first, SEO-optimised websites and digital experiences built on modern technology stacks — from business websites to full e-commerce platforms.',
        img: '/assets/images/webdevelopment.jpg',
        iconName: 'MonitorSmartphone',
        pts: ['Business & E-commerce Websites', 'CMS & Landing Pages', 'UI/UX & Ongoing Support'],
        subServices: [
            {
                title: 'Business Website Development',
                description: 'Business website development, landing page development, SEO-first architecture, mobile-responsive design, Google Analytics and Search Console integration, CMS integration, speed optimisation, SSL setup, and hosting guidance.',
            },
            {
                title: 'CMS-Based Website Development',
                description: 'WordPress website development and customisation, Webflow development, Wix and Squarespace setup and migration, Shopify website development and theme customisation, WooCommerce setup, plugin integration and maintenance, and CMS training for your team.',
                subItems: 'WordPress, Webflow, Shopify, WooCommerce, Wix, Squarespace.'
            },
            {
                title: 'E-commerce Website Development',
                description: 'Shopify store setup, WooCommerce development, product catalogue setup, payment gateway integration (Razorpay, PayU, CCAvenue, Stripe), inventory management integration, order tracking setup, abandoned cart recovery, and upsell & cross-sell setup.',
                subItems: 'Shopify, WooCommerce, Razorpay, PayU, CCAvenue, Stripe.'
            },
            {
                title: 'Landing Page Development',
                description: 'High-converting single-page designs for ad campaigns, lead capture pages, product launch pages, event registration pages, and A/B testing variants.',
            },
            {
                title: 'UI/UX Design',
                description: 'User research and persona development, wireframing, high-fidelity design in Figma, prototyping and user testing, design system creation, mobile app UI design, and conversion rate optimisation (CRO) design.',
                subItems: 'Figma, Design Systems, Mobile App UI, CRO Design.'
            },
            {
                title: 'Website Maintenance & Support',
                description: 'Monthly website updates, plugin and theme updates, security monitoring, uptime monitoring, speed optimisation, content updates, and backup management.',
            }
        ]
    },
    {
        id: 'ui-ux',
        t: 'UI/UX Design',
        d: 'User-focused, visually engaging, and conversion-driven digital experiences designed to improve usability, increase engagement, and help businesses achieve measurable growth across web and mobile platforms.',
        img: '/assets/images/uiux.jpg',
        iconName: 'LayoutTemplate',
        pts: ['User Research & UI Design', 'Interactive Prototyping', 'Design Systems & Testing'],
        subServices: [
            {
                title: 'User Research & Strategy',
                description: 'User behaviour analysis, competitor research, persona development, customer journey mapping, usability insights, and UX strategy planning to ensure every design decision is backed by data and user needs.',
            },
            {
                title: 'Wireframing & Information Architecture',
                description: 'Low-fidelity wireframes, user flow mapping, sitemap creation, content hierarchy planning, interaction flow design, and layout structuring to create a strong foundation before visual design.',
            },
            {
                title: 'UI Design & Visual Design',
                description: 'Modern and visually appealing user interface design, color system development, typography selection, iconography design, micro-interactions, component design, and responsive layouts for desktop, tablet, and mobile devices.',
                subItems: 'Figma, Design Systems, UI Components, Responsive Layouts'
            },
            {
                title: 'Interactive Prototyping',
                description: 'Clickable prototypes, user interaction simulations, animation previews, product walkthrough prototypes, and stakeholder validation using realistic design flows.',
            },
            {
                title: 'Design Systems & Component Libraries',
                description: 'Scalable design systems, reusable UI components, typography and color guidelines, design tokens, documentation, and component libraries to ensure design consistency across products.',
                subItems: 'Figma Design Systems, UI Libraries, Component Documentation'
            },
            {
                title: 'UX Testing & Optimization',
                description: 'Usability testing, user feedback analysis, A/B testing insights, accessibility improvements, conversion rate optimization (CRO), and continuous design improvements based on real user behaviour.',
            }
        ]
    },
    {
        id: 'video-production',
        t: 'Video Production',
        d: 'End-to-end video production — from concept and scripting to professional editing and distribution across every platform your audience is on.',
        img: '/assets/images/videocreation.jpg',
        iconName: 'Video',
        pts: ['Brand Films & Corporate Videos', 'Reels, Shorts & Ad Creatives', 'Testimonial & Product Videos'],
        subServices: [
            {
                title: 'Brand Films & Corporate Videos',
                description: 'Concept development and scripting, storyboarding, shoot coordination, professional editing, colour grading, music licensing, subtitles and captions.',
            },
            {
                title: 'Social Media Reels & Shorts',
                description: 'AI-assisted editing, hook writing, trending audio integration, caption and subtitle overlay, platform-optimised export.',
                subItems: 'Instagram Reels, YouTube Shorts, LinkedIn Video.'
            },
            {
                title: 'Product Videos',
                description: 'Product demo videos, unboxing videos, explainer animations, and 3D product renders for e-commerce and manufacturing clients.',
            },
            {
                title: 'Ad Creatives',
                description: '15-second and 30-second video ads for Meta and YouTube, motion graphics, animated social posts, and GIF creation.',
                subItems: 'Meta Ads, YouTube Ads, Motion Graphics, Animated Posts.'
            },
            {
                title: 'Testimonial Video Production',
                description: 'Client testimonial shoots or remote video editing, text overlay and branding, and thumbnail design.',
            }
        ]
    },
    {
        id: 'event-management',
        t: 'Event Management',
        d: 'End-to-end event planning and management designed to create impactful experiences for businesses, brands, and communities. From corporate events to product launches and large-scale gatherings, we handle every detail to ensure seamless execution and unforgettable moments.',
        img: '/assets/images/eventmanagement.jpg',
        iconName: 'CalendarHeart',
        pts: ['Corporate & Product Launch Events', 'Brand Promotion & Brand Activations', 'Event Design, Production & Promotion'],
        subServices: [
            {
                title: 'Corporate Event Management',
                description: 'Planning and execution of corporate conferences, seminars, business meetings, annual celebrations, award ceremonies, and networking events with professional coordination and brand-focused presentation.',
            },
            {
                title: 'Product Launch Events',
                description: 'Strategic planning and creative execution for product launch events, including venue selection, stage design, brand storytelling, media coverage, live demonstrations, and audience engagement activities.',
            },
            {
                title: 'Brand Promotion Events',
                description: 'Experiential marketing events, promotional campaigns, roadshows, brand activation events, influencer collaborations, and audience engagement programs designed to increase brand visibility.',
            },
            {
                title: 'Social & Community Events',
                description: 'Planning and coordination of social gatherings, cultural events, charity events, college events, and community festivals with complete event logistics and management support.',
            },
            {
                title: 'Event Design & Production',
                description: 'Stage design, lighting setup, sound system management, visual branding, digital screens, creative decor, and event theme development to create immersive and visually appealing event environments.',
                subItems: 'Stage Design, Lighting, Sound Systems, Branding, Event Themes'
            },
            {
                title: 'Event Promotion & Digital Coverage',
                description: 'Event promotion strategies including social media marketing, promotional campaigns, live streaming, photography, videography, highlight videos, and post-event content creation.',
                subItems: 'Social Media Promotion, Live Streaming, Event Photography, Video Coverage'
            }
        ]
    },
    {
        id: 'brand-registration',
        t: 'Brand Registration & Business Setup',
        d: 'One of the most unique offerings in the industry — we handle the legal and government registration side of launching and formalising your business, so you can focus on building it.',
        img: '/assets/images/brandservice.jpg',
        iconName: 'ShieldCheck',
        pts: ['Trademark & GST Registration', 'Company & MSME Incorporation', 'FSSAI, IEC, GeM & Startup India'],
        subServices: [
            {
                title: 'Trademark Registration',
                description: 'Trademark search (to check availability), trademark application filing under appropriate class, status tracking, opposition handling guidance, and certificate follow-up.',
                subItems: 'Useful for: logo, brand name, tagline, packaging.'
            },
            {
                title: 'MSME / Udyam Registration',
                description: 'Udyam registration for micro, small and medium enterprises, certificate download and guidance, and benefits counselling.',
                subItems: 'Benefits: priority sector lending, government tenders, subsidies.'
            },
            {
                title: 'GST Registration',
                description: 'GST registration application, document preparation, GSTIN receipt, GST return filing guidance, and GST invoice template setup.',
            },
            {
                title: 'Company / LLP / Proprietorship Registration',
                description: 'Private Limited Company incorporation, LLP registration, One Person Company (OPC) registration, Sole Proprietorship setup, Partnership firm registration, document preparation, MCA filing, PAN and TAN application.',
            },
            {
                title: 'FSSAI Registration',
                description: 'Food business operator licence registration, basic/state/central licence based on business size, and label compliance guidance for food product businesses.',
            },
            {
                title: 'Shop & Establishment Licence',
                description: 'State-specific shop and establishment registration, compliance guidance, and renewal support.',
            },
            {
                title: 'Import Export Code (IEC)',
                description: 'IEC code registration for manufacturers and traders looking to export, DGFT portal filing, and document preparation.',
            },
            {
                title: 'Startup India & DPIIT Recognition',
                description: 'DPIIT startup recognition application, Startup India profile setup, and benefits counselling.',
                subItems: 'Benefits: tax exemptions, fast-track patent, government scheme access.'
            },
            {
                title: 'GeM Portal Registration',
                description: 'Government e-Marketplace (GeM) seller registration for manufacturers and service providers, product listing setup, and bid participation guidance.',
                subItems: 'Highly suited for Indian manufacturers and service providers.'
            },
            {
                title: 'Mudra Loan & Government Scheme Guidance',
                description: 'Pradhan Mantri Mudra Yojana (PMMY) application support, PM SVANidhi, Stand-Up India, WEP (Women Entrepreneurship Platform), state government grant identification, and documentation support.',
            },
            {
                title: 'ISO Certification Guidance',
                description: 'ISO 9001 (Quality Management), ISO 14001 (Environment), documentation preparation, and connecting with reputed certification bodies.',
            }
        ]
    }
];
