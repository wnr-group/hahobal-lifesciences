import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Hahobal Lifesciences | Precision Oncology",
  description: "Learn about Hahobal Lifesciences' mission to deliver innovative and affordable cancer care solutions. Our vision, values, and commitment to oncology excellence.",
  keywords: "Hahobal Lifesciences, about us, oncology company, pharmaceutical company India, cancer care mission, WHO-GMP certified",
  openGraph: {
    title: "About Us - Hahobal Lifesciences",
    description: "Pioneering pharmaceutical company focused on oncology and specialty healthcare products with integrity, innovation, and patient commitment.",
    type: "website",
    url: "https://hahoballifesciences.com/about",
    images: [
      {
        url: "/about-hero-image.png",
        width: 1408,
        height: 2998,
        alt: "Hahobal Lifesciences Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Hahobal Lifesciences",
    description: "Learn about our mission to deliver innovative and affordable cancer care solutions.",
    images: ["/about-hero-image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
