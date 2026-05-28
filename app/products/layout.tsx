import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products - Hahobal Lifesciences | Oncology Therapeutics Portfolio",
  description: "Explore Hahobal's comprehensive oncology portfolio including hormonal therapy, chemotherapy, targeted therapy, and supportive care medicines. WHO-GMP certified products.",
  keywords: "oncology products, cancer medicines, chemotherapy drugs, hormonal therapy, targeted therapy, pharmaceutical products India, WHO-GMP certified",
  openGraph: {
    title: "Our Products - Hahobal Lifesciences",
    description: "Comprehensive range of oncology and supportive care medicines including hormonal therapy, chemotherapy, and targeted therapy solutions.",
    type: "website",
    url: "https://hahoballifesciences.com/products",
    images: [
      {
        url: "/product-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Hahobal Oncology Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products - Hahobal Lifesciences",
    description: "WHO-GMP certified oncology therapeutics portfolio for precision cancer care.",
    images: ["/product-hero-image.png"],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
