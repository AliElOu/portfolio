import { FullScreen } from "@/components/full-screen"
import { Timeline } from "@/components/ui/timeline"
import { BlurImage } from "@/components/ui/apple-cards-carousel"
import {getTranslations} from 'next-intl/server';
import { MapPin, Sparkles, CheckCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'experience' });
  
  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    openGraph: {
      title: t('pageTitle'),
      description: t('pageDescription'),
      url: `https://alielouankrimi.com/${locale}/experience`,
      siteName: "Ali El Ouankrimi",
      images: [],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'experience' });
  
  const EXPERIENCE_TIMELINE = [
    {
      title: t('odc.period'),
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {t('odc.title')}
            </h3>
            <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {t('odc.company')}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {t('odc.location')}
            </p>
          </div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {t('odc.intro')}
          </p>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            {t('odc.description')}
          </p>
          
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" /> <span>{t('odc.features.detection')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" /> <span>{t('odc.features.recognition')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <Sparkles className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" /> <span>{t('odc.features.measurement')}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <BlurImage
              src="/images/experience/odc.jpg"
              alt="Orange Digital Center"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <BlurImage
              src="/images/experience/ferme1.JPG"
              alt="ferme1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <BlurImage
              src="/images/experience/ferme2.JPG"
              alt="ferme2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <BlurImage
              src="/images/experience/comp.jpg"
              alt="Orange Summer Challenge 2025"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: t('teima.period'),
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {t('teima.title')}
            </h3>
            <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {t('teima.company')}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {t('teima.location')}
            </p>
          </div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            {t('teima.description')}
          </p>
          
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" /> <span>{t('teima.features.ui')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" /> <span>{t('teima.features.database')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" /> <span>{t('teima.features.payment')}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <BlurImage
              src="/images/experience/teima_1.jpg"
              alt="Teima Info - E-commerce App"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <BlurImage
              src="/images/experience/teima_2.jpg"
              alt="Flutter Mobile Development"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: t('e2s.period'),
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {t('e2s.title')}
            </h3>
            <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {t('e2s.company')}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {t('e2s.location')}
            </p>
          </div>
          
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            {t('e2s.description')}
          </p>
          
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" /> <span>{t('e2s.features.access')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" /> <span>{t('e2s.features.stock')}</span>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" /> <span>{t('e2s.features.billing')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <BlurImage
              src="/images/experience/e2s_1.jpg"
              alt="E2s - Cable Car Project"
              width={500}
              height={1000}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <Timeline 
          data={EXPERIENCE_TIMELINE}
          headerTitle={t('headerTitle')}
          headerDescription={t('headerDescription')}
        />
      </FullScreen>
    </div>
  )
}
