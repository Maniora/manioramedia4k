import type { Metadata } from "next";
import Home from "@/pages/Home";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Hyderabad | SEO, Social Media, Website Development - 4KMEDIA",
  description: "4KMEDIA is a leading digital marketing agency in Hyderabad. We specialize in SEO, social media marketing, website development, UI/UX design, and video production. Drive measurable growth with our integrated strategies.",
  keywords: "Digital Marketing Agency Hyderabad, SEO Services Hyderabad, Social Media Marketing Hyderabad, Website Development Hyderabad, UI/UX Design, Video Production, Logo Design",
  alternates: {
    canonical: "https://4kmedia.in/",
  },
  openGraph: {
    title: "Digital Marketing Agency in Hyderabad | SEO, Social Media, Website Development - 4KMEDIA",
    description: "4KMEDIA is a leading digital marketing agency in Hyderabad. We deliver measurable growth through SEO, social media marketing, website development, and creative strategies.",
    url: "https://4kmedia.in/",
    siteName: "4KMEDIA",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "4KMEDIA",
    "image": "https://4kmedia.in/assets/logo2.png",
    "@id": "https://4kmedia.in/",
    "url": "https://4kmedia.in/",
    "telephone": "+919989958238",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nizampet Road",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500090",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.5168,
      "longitude": 78.3854
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/4kmedia-in",
      "https://instagram.com/4kmediax",
      "https://youtube.com/@4kmediax"
    ]
  };

  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
