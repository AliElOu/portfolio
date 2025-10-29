import { FullScreen } from "@/components/full-screen"
import { CertificatesGrid } from "./components/certificates-grid"
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'certificates' });
  
  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    openGraph: {
      title: t('pageTitle'),
      description: t('pageDescription'),
      url: `https://www.alielouankrimi.me/${locale}/certificates`,
      siteName: "Ali El Ouankrimi",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: t('pageTitle'),
      description: t('pageDescription'),
    },
    alternates: {
      canonical: `https://www.alielouankrimi.me/${locale}/certificates`,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'certificates' });
  
  return (
    <FullScreen>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {t('heading')}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {t('subheading')}
          </p>
        </div>

        <CertificatesGrid />
      </div>
    </FullScreen>
  )
}
