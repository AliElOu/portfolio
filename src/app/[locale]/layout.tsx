import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';

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
    url: "https://www.alielouankrimi.me",
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
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove browser extension attributes on page load to prevent hydration errors
              (function() {
                const observer = new MutationObserver(() => {
                  document.querySelectorAll('[bis_skin_checked]').forEach(el => {
                    el.removeAttribute('bis_skin_checked');
                  });
                });
                if (document.body) {
                  observer.observe(document.body, { 
                    attributes: true, 
                    subtree: true, 
                    attributeFilter: ['bis_skin_checked'] 
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <LayoutWithHeader>{children}</LayoutWithHeader>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
