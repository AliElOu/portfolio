import { FullScreen } from "@/components/full-screen"
import { CertificatesGrid } from "./components/certificates-grid"

export const metadata = {
  title: "Certificats | Ali El Ouankrimi",
  description:
    "Découvrez les certifications professionnelles d'Ali El Ouankrimi en Data Science, Machine Learning, et développement.",
  openGraph: {
    title: "Certificats | Ali El Ouankrimi",
    description:
      "Certifications en Oracle GenAI, TensorFlow, Python et Flutter.",
    url: "https://alielouankrimi.me/certificates",
    siteName: "Ali El Ouankrimi",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificats | Ali El Ouankrimi",
    description:
      "Découvrez les certifications professionnelles d'Ali El Ouankrimi.",
  },
  alternates: {
    canonical: "https://alielouankrimi.me/certificates",
  },
}

export default function Page() {
  return (
    <FullScreen>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Mes Certifications Professionnelles
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Une collection de certifications qui témoignent de mon expertise en Data Science, 
            Intelligence Artificielle, et technologies émergentes.
          </p>
        </div>

        <CertificatesGrid />
      </div>
    </FullScreen>
  )
}
