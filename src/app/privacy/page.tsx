import type { Metadata } from "next";
import Privacy from "@/pages/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | 4KMEDIA Digital Marketing Agency Hyderabad",
  description: "Read 4KMEDIA's Privacy Policy. Learn how we collect, use, and protect your personal data. GDPR compliant data protection practices for our digital marketing services in Hyderabad.",
  keywords: "Privacy Policy, Data Protection, GDPR, 4KMEDIA Privacy, Digital Marketing Agency Hyderabad",
  alternates: {
    canonical: "https://4kmedia.in/privacy",
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
