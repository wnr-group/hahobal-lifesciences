import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Hahobal Lifesciences | Get in Touch",
  description: "Contact Hahobal Lifesciences for business partnerships, product inquiries, distribution opportunities, or healthcare collaborations. Located in Mumbai, India.",
  keywords: "contact Hahobal, pharmaceutical inquiries, business partnerships, distribution opportunities, Mumbai pharmaceutical company",
  openGraph: {
    title: "Contact Us - Hahobal Lifesciences",
    description: "Get in touch for business partnerships, product inquiries, and distribution opportunities. Corporate office in Mumbai, India.",
    type: "website",
    url: "https://hahoballifesciences.com/contact",
    images: [
      {
        url: "/contact-slider1.jpeg",
        width: 750,
        height: 500,
        alt: "Contact Hahobal Lifesciences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Hahobal Lifesciences",
    description: "Business partnerships, product inquiries, and healthcare collaborations.",
    images: ["/contact-slider1.jpeg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
