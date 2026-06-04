import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/common/CookieConsent";
import FloatingEnquiry from "@/components/common/FloatingEnquiry";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hahoballifesciences.com'),
  title: "Hahobal Lifesciences — Precision Oncology for Life",
  description: "Leading pharmaceutical company specializing in oncology medicines. WHO-GMP certified manufacturer of hormonal therapy, chemotherapy, targeted therapy, and supportive care products.",
  keywords: "Hahobal Lifesciences, oncology, cancer treatment, pharmaceutical company India, WHO-GMP certified, hormonal therapy, chemotherapy, targeted therapy",
  authors: [{ name: "Hahobal Lifesciences" }],
  openGraph: {
    title: "Hahobal Lifesciences — Precision Oncology for Life",
    description: "Leading pharmaceutical company specializing in oncology medicines with WHO-GMP certified facilities in Mumbai, India.",
    type: "website",
    url: "https://hahoballifesciences.com",
    siteName: "Hahobal Lifesciences",
    locale: "en_US",
    images: [
      {
        url: "/home-hero-image.png",
        width: 2752,
        height: 1536,
        alt: "Hahobal Lifesciences - Precision Oncology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hahobal Lifesciences — Precision Oncology for Life",
    description: "Leading pharmaceutical company specializing in oncology medicines.",
    images: ["/home-hero-image.png"],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <FloatingEnquiry />
      </body>
    </html>
  );
}