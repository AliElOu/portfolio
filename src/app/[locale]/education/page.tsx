import { FullScreen } from "@/components/full-screen"
import { Timeline } from "@/components/ui/timeline"
import { BlurImage } from "@/components/ui/apple-cards-carousel"
import {getTranslations} from 'next-intl/server';
import { MapPin, BookOpen } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'education' });
  
  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    openGraph: {
      title: t('pageTitle'),
      description: t('pageDescription'),
      url: `https://alielouankrimi.com/${locale}/education`,
      siteName: "Ali El Ouankrimi",
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title: t('pageTitle'),
      description: t('pageDescription'),
    },
    alternates: {
      canonical: `https://alielouankrimi.com/${locale}/education`,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'education' });
  
  const EDUCATION_TIMELINE = [
    {
      title: t('ensiasd.period'),
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {t('ensiasd.title')}
            </h3>
            <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {t('ensiasd.school')}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {t('ensiasd.location')}
            </p>
          </div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            {t('ensiasd.description')}
          </p>
          
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('ensiasd.topics.ml')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('ensiasd.topics.bigdata')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('ensiasd.topics.ai')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('ensiasd.topics.cv')}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <BlurImage
              src="/images/education/ensiasd_1.png"
              alt="ENSIASD Campus"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <BlurImage
              src="/images/education/ensiasd_2.jpg"
              alt="ENSIASD - Data Science"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: t('est.period'),
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {t('est.title')}
            </h3>
            <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {t('est.school')}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {t('est.location')}
            </p>
          </div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            {t('est.description')}
          </p>
          
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('est.topics.programming')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('est.topics.database')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('est.topics.webmobile')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <BookOpen className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-600" /> <span>{t('est.topics.networks')}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <BlurImage
              src="/images/education/est_1.jpg"
              alt="EST Guelmim"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <BlurImage
              src="/images/education/est_2.jpg"
              alt="EST - Informatique"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div>
      <FullScreen>
        <Timeline 
          data={EDUCATION_TIMELINE}
          headerTitle={t('headerTitle')}
          headerDescription={t('headerDescription')}
        />
      </FullScreen>
    </div>
  )
}
