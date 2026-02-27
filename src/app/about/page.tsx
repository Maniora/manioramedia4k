import type { Metadata } from "next";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: "About 4KMEDIA | Digital Marketing Agency Hyderabad - SEO & Social Media Experts",
  description: "Learn about 4KMEDIA, a leading digital marketing agency in Hyderabad. Our team of SEO, social media, and web development experts deliver measurable growth for brands.",
  keywords: "About 4kMedia, Digital Marketing Agency Hyderabad, SEO Experts Hyderabad, Marketing Team, Web Development Company",
  alternates: {
    canonical: "https://4kmedia.in/about",
  },
};

export default function AboutPage() {
  return <About />;
}
