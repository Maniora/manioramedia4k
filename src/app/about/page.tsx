import type { Metadata } from "next";
import About from "@/pages/About";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About 4KMEDIA | Digital Marketing Agency Hyderabad - SEO & Social Media Experts",
  description: "Learn about 4KMEDIA, a leading digital marketing agency in Hyderabad. Our team of SEO, social media, and web development experts deliver measurable growth for brands.",
  keywords: "About 4kMedia, Digital Marketing Agency Hyderabad, SEO Experts Hyderabad, Marketing Team, Web Development Company",
  alternates: {
    canonical: "https://4kmedia.in/about",
  },
  openGraph: {
    title: "About 4KMEDIA | Digital Marketing Agency Hyderabad",
    description: "Learn about 4KMEDIA, a leading digital marketing agency in Hyderabad. Our team of SEO, social media, and web development experts deliver measurable growth for brands.",
    url: "https://4kmedia.in/about",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About 4KMEDIA",
    "description": "Information about 4KMEDIA digital marketing agency in Hyderabad.",
    "url": "https://4kmedia.in/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "4KMEDIA",
      "url": "https://4kmedia.in",
      "logo": "https://4kmedia.in/assets/logo2.png",
      "description": "A leading digital marketing agency in Hyderabad specializing in SEO, Social Media, and Web Development."
    }
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
