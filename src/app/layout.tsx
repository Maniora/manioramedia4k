import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Agency in Hyderabad | SEO, Social Media, Website Development - 4KMEDIA",
    template: "%s | 4KMEDIA",
  },
  description: "4KMEDIA is a leading digital marketing agency in Hyderabad. We specialize in SEO, social media marketing, website development, UI/UX design, and video production. Drive measurable growth with our integrated strategies.",
  keywords: ["Digital Marketing Agency Hyderabad", "SEO Services Hyderabad", "Social Media Marketing Hyderabad", "Website Development Hyderabad", "UI/UX Design", "Video Production", "Logo Design"],
  authors: [{ name: "4KMEDIA" }],
  creator: "4KMEDIA",
  publisher: "4KMEDIA",
  metadataBase: new URL("https://4kmedia.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://4kmedia.in",
    siteName: "4KMEDIA",
    title: "Digital Marketing Agency in Hyderabad | SEO, Social Media, Website Development - 4KMEDIA",
    description: "4KMEDIA is a leading digital marketing agency in Hyderabad. We deliver measurable growth through SEO, social media marketing, website development, and creative strategies.",
    images: [
      {
        url: "/assets/logo2.png",
        width: 1200,
        height: 630,
        alt: "4KMEDIA - Digital Marketing Agency in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Hyderabad | SEO, Social Media, Website Development - 4KMEDIA",
    description: "4KMEDIA is a leading digital marketing agency in Hyderabad. We deliver measurable growth through SEO, social media marketing, website development, and creative strategies.",
    images: ["/assets/logo2.png"],
    creator: "@4KMEDIA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-1E1477LXDR",
  },
  icons: {
    icon: [
      { url: '/assets/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/assets/favicons/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "4KMEDIA",
    "url": "https://4kmedia.in",
    "logo": "https://4kmedia.in/assets/logo2.png",
    "sameAs": [
      "https://www.linkedin.com/company/4kmedia-in",
      "https://instagram.com/4kmediax",
      "https://youtube.com/@4kmediax"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919989958238",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#11181f] text-white min-h-full flex flex-col`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-16 lg:pt-20 overflow-x-hidden overflow-y-clip">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
