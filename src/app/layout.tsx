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

        {/* Sticky WhatsApp FAB */}
        <a
          href="https://wa.me/919989958238?text=Hi%2C%20I%27m%20interested%20in%20your%20services!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="whatsapp-fab"
        >
          <span className="whatsapp-fab__ring" />
          {/* Correct WhatsApp icon */}
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="whatsapp-fab__tooltip">Chat with us!</span>
        </a>
      </body>
    </html>
  );
}
