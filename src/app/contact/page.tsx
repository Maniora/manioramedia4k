import type { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact 4KMEDIA | Digital Marketing Agency Hyderabad - Get a Free Quote",
  description: "Contact 4KMEDIA, Hyderabad's leading digital marketing agency. Get a free consultation for SEO, social media marketing, website development, and creative services.",
  keywords: "Contact 4KMEDIA, Digital Marketing Agency Hyderabad, SEO Consultation, Web Development Quote, Social Media Marketing Hyderabad",
  alternates: {
    canonical: "https://4kmedia.in/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
