import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Hahobal Lifesciences | Cookie Usage",
  description: "Learn about how Hahobal Lifesciences uses cookies, tracking technologies, and how to manage your cookie preferences.",
  keywords: "cookie policy, cookies, tracking, privacy, browser cookies, website cookies",
  openGraph: {
    title: "Cookie Policy - Hahobal Lifesciences",
    description: "Information about our use of cookies and how to manage your preferences.",
    type: "website",
    url: "https://hahoballifesciences.com/cookie-policy",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy - Hahobal Lifesciences",
    description: "Cookie usage and management at Hahobal Lifesciences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
