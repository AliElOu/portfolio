import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Ali El Ouankrimi - Data Scientist & AI Engineer",
  description:
    "Portfolio de Ali El Ouankrimi, ingénieur en Data Science, Big Data et IA. Découvrez mes projets en Machine Learning, Deep Learning et analyse de données.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning Engineer",
    "Ali El Ouankrimi Portfolio",
    "Computer Vision",
    "Deep Learning",
    "Python",
    "TensorFlow",
    "Data Analysis",
  ],
  openGraph: {
    title: "Ali El Ouankrimi - Data Scientist & AI Engineer",
    description:
      "Découvrez l'expertise d'Ali El Ouankrimi en Data Science, Machine Learning et Big Data. Consultez mes projets et compétences techniques.",
    url: "https://alielouankrimi.com",
    type: "website",
    images: [
      {
        url: "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
        width: 1200,
        height: 630,
        alt: "Ali El Ouankrimi - Data Scientist & AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali El Ouankrimi - Data Scientist & AI Engineer",
    description:
      "Explorez les projets d'Ali El Ouankrimi en Data Science, Machine Learning et analyse de données.",
    images: [
      "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutWithHeader>{children}</LayoutWithHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
