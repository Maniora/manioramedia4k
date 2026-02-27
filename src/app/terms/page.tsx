import type { Metadata } from "next";
import Terms from "@/pages/Terms";

export const metadata: Metadata = {
  title: "Terms of Service | 4KMEDIA Digital Marketing Agency Hyderabad",
  description: "Read 4KMEDIA's Terms of Service. Our service agreement covers digital marketing, SEO, web development services. Learn about our policies and client responsibilities.",
  keywords: "Terms of Service, Service Agreement, 4KMEDIA Terms, Digital Marketing Services Hyderabad",
  alternates: {
    canonical: "https://4kmedia.in/terms",
  },
};

export default function TermsPage() {
  return <Terms />;
}
