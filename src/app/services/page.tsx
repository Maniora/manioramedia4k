import type { Metadata } from "next";
import Services from "@/pages/Services";

export const metadata: Metadata = {
  title: "Digital Marketing Services Hyderabad | SEO, Social Media, Web Development - 4KMEDIA",
  description: "Expert digital marketing services in Hyderabad. SEO, social media marketing, website development, UI/UX design, video production, and logo design. Drive growth with 4KMEDIA.",
  keywords: "Digital Marketing Services Hyderabad, SEO Hyderabad, Social Media Marketing, Website Development, UI/UX Design, Video Production, Logo Design, Event Organization",
  alternates: {
    canonical: "https://4kmedia.in/services",
  },
};

export default function ServicesPage() {
  return <Services />;
}
