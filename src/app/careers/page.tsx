import type { Metadata } from "next";
import Careers from "@/pages/Careers";

export const metadata: Metadata = {
  title: "Careers at 4KMEDIA | Digital Marketing Jobs Hyderabad - Join Our Team",
  description: "Join 4KMEDIA, Hyderabad's leading digital marketing agency. Explore careers in SEO, social media, web development, design. Competitive salaries, great benefits, and growth opportunities.",
  keywords: "Digital Marketing Jobs Hyderabad, Careers at 4KMEDIA, SEO Jobs, Social Media Jobs, Web Development Careers, Graphic Designer Jobs Hyderabad",
  alternates: {
    canonical: "https://4kmedia.in/careers",
  },
};

export default function CareersPage() {
  return <Careers />;
}
