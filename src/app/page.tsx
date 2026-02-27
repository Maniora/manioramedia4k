import type { Metadata } from "next";
import Home from "@/pages/Home";

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
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return <Home />;
}
