export interface Service {
    id: string;
    t: string;
    d: string;
    img: string;
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
        t: 'Digital Marketing & SMM',
        d: 'Comprehensive performance-driven digital marketing solutions to rapidly accelerate your brand growth, visibility, and acquisition.',
        img: '/assets/images/smm.jpg',
        pts: ['Search Engine Optimization (SEO)', 'Performance Marketing & SMM', 'Email & WhatsApp Automation'],
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
        d: 'Human-centered product design—research, prototypes, and design systems that convert.',
        img: '/assets/images/uiux.jpg',
        pts: ['User research & flows', 'High-fidelity designs', 'Design systems & handoff']
    },
    {
        id: 'video-production',
        t: 'Video Production',
        d: 'End-to-end video production — from concept and scripting to professional editing and distribution across every platform your audience is on.',
        img: '/assets/images/videopro.jpg',
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
        id: 'event-organization',
        t: 'Event Organization',
        d: 'End-to-end event planning and management to engage your audience.',
        img: '/assets/images/event.jpg',
        pts: ['Event planning & management', 'Brand activations & partnerships', 'Audience engagement & insights']
    },
    {
        id: 'brand-registration',
        t: 'Brand Registration & Business Setup',
        d: 'One of the most unique offerings in the industry — we handle the legal and government registration side of launching and formalising your business, so you can focus on building it.',
        img: '/assets/images/logo.jpg',
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
