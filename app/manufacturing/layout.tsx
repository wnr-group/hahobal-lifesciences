import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & R&D - Hahobal Lifesciences | WHO-GMP Facilities",
  description: "State-of-the-art WHO-GMP certified manufacturing facilities and research & development capabilities. Advanced oncology drug production with stringent quality control.",
  keywords: "WHO-GMP manufacturing, pharmaceutical manufacturing India, oncology R&D, drug manufacturing, quality assurance, pharmaceutical facilities",
  openGraph: {
    title: "Manufacturing & R&D - Hahobal Lifesciences",
    description: "WHO-GMP certified manufacturing excellence with advanced production facilities and rigorous quality assurance for oncology therapeutics.",
    type: "website",
    url: "https://hahoballifesciences.com/manufacturing",
    images: [
      {
        url: "/manufacture-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Hahobal Manufacturing Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing & R&D - Hahobal Lifesciences",
    description: "Advanced WHO-GMP facilities for precision oncology drug manufacturing.",
    images: ["/manufacture-hero-image.png"],
  },
};

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
