import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Hahobal Lifesciences | Data Protection",
  description: "Hahobal Lifesciences privacy policy. Learn how we collect, use, and protect your personal information in compliance with GDPR, CCPA, and data protection laws.",
  keywords: "privacy policy, data protection, GDPR compliance, CCPA, personal information, healthcare privacy",
  openGraph: {
    title: "Privacy Policy - Hahobal Lifesciences",
    description: "Our commitment to protecting your privacy and personal information.",
    type: "website",
    url: "https://hahoballifesciences.com/privacy-policy",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - Hahobal Lifesciences",
    description: "Data protection and privacy practices at Hahobal Lifesciences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
