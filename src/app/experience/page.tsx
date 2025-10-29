import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Expérience | Ali El Ouankrimi",
  description:
    "Explorez le parcours professionnel d'Ali El Ouankrimi - Data Scientist avec expérience en Machine Learning, Deep Learning et Big Data.",
  openGraph: {
    title: "Expérience | Ali El Ouankrimi",
    description:
      "Data Scientist avec une expérience pratique en Python, TensorFlow, et analyse de données.",
    url: "https://alielouankrimi.me/experience",
    siteName: "Ali El Ouankrimi",
    images: [
      // {
      //   url: "https://alielouankrimi.com/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Ali El Ouankrimi Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expérience | Ali El Ouankrimi",
    description:
      "Découvrez les expériences professionnelles d'Ali El Ouankrimi en Data Science et IA.",
    //   images: ["https://alielouankrimi.com/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://alielouankrimi.me/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
