import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility - Hahobal Lifesciences | Caring Beyond Medicines",
  description: "Hahobal's commitment to patient assistance programs, medical education, sustainable practices, and global health equity. CSR initiatives for cancer awareness and healthcare access.",
  keywords: "CSR, corporate social responsibility, patient assistance, cancer awareness, healthcare education, sustainable healthcare, pharmaceutical ethics",
  openGraph: {
    title: "Corporate Social Responsibility - Hahobal Lifesciences",
    description: "Caring beyond medicines through patient assistance, medical education, and sustainable healthcare practices.",
    type: "website",
    url: "https://hahoballifesciences.com/social-responsibility",
    images: [
      {
        url: "/social-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Hahobal CSR Initiatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Social Responsibility - Hahobal Lifesciences",
    description: "Patient assistance programs and healthcare accessibility initiatives.",
    images: ["/social-hero-image.png"],
  },
};

export default function SocialResponsibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
