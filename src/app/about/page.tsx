import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "À propos | Ali El Ouankrimi",
  description:
    "Découvrez Ali El Ouankrimi - Data Scientist, AI Engineer, passionné par le Machine Learning et l'intelligence artificielle.",
  keywords: [
    "Ali El Ouankrimi",
    "About Ali",
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Big Data",
  ],
  openGraph: {
    title: "À propos | Ali El Ouankrimi",
    description:
      "Découvrez le parcours d'Ali El Ouankrimi dans le monde de la Data Science et de l'IA.",
    url: "https://alielouankrimi.me/about",
    siteName: "Ali El Ouankrimi",
    type: "website",
    locale: "fr_FR",
    images: [
      // {
      //   url: "https://alielouankrimi.com/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Ali El Ouankrimi About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | Ali El Ouankrimi",
    description:
      "Découvrez Ali El Ouankrimi - Data Scientist et AI Engineer.",
    // images: ["https://alielouankrimi.com/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://www.alielouankrimi.me/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
