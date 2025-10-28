import { FullScreen } from "@/components/full-screen"
import { EducationTimeline } from "./containers/education-timeline"

export const metadata = {
  title: "Formation | Ali El Ouankrimi",
  description:
    "Découvrez le parcours académique d'Ali El Ouankrimi - Ingénieur en Data Science, Big Data et IA.",
  openGraph: {
    title: "Formation | Ali El Ouankrimi",
    description:
      "Parcours académique d'Ali El Ouankrimi : ENSIASD Taroudant et EST Guelmim.",
    url: "https://alielouankrimi.com/education",
    siteName: "Ali El Ouankrimi",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation | Ali El Ouankrimi",
    description:
      "Découvrez le parcours académique d'Ali El Ouankrimi en Data Science et IA.",
  },
  alternates: {
    canonical: "https://alielouankrimi.com/education",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <EducationTimeline />
      </FullScreen>
    </div>
  )
}
