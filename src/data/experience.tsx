import { BlurImage } from "@/components/ui/apple-cards-carousel"

export const experiences = [
  {
    title: 'Stage - AI Engineer',
    company: 'SanadTech',
    startDate: 'Février 2026',
    endDate: 'Juillet 2026',
    description: [
      "Développement d'une plateforme SaaS LLM automatisant la collecte, l'enrichissement et l'analyse des candidatures (FastAPI, Google Gen AI SDK, Firebase, Next.js, GCP).",
      "Création d'agents de recherche autonomes avec Playwright et Firecrawl, et sécurisation contre les injections de prompts, les fuites de données et les CV malveillants.",
      "Optimisation des coûts et de la latence d'inférence, puis intégration des candidatures via Inbox & Forms Linking.",
    ],
  },
  {
    title: 'Stage - Data Scientist',
    company: 'Orange Maroc',
    startDate: 'Juillet 2025',
    endDate: 'Sept. 2025',
    description: [
      "Conception d'une plateforme IA de suivi intelligent du bétail.",
      'Implémentation de la détection et du suivi en temps réel (YOLOv8 + ByteTrack).',
      'Développement de la retéléphconnaissance faciale bovine à partir du museau.',
      'Mesure morphologique automatique par détection de points clés.',
      'Projet primé 3ème place au concours Orange Summer Challenge 2025 (AWS, Meta, EY).',
    ],
  },
  {
    title: 'Stage - Mobile Developer',
    company: 'Teima Info',
    startDate: 'Avril 2023',
    endDate: 'Juin 2023',
    description: [
      "Réalisation d'une application mobile E-commerce (Flutter) complète pour la vente de produits médicaux.",
      'Gestion de la base de données et des API de produits.',
    ],
  },
  {
    title: 'Stage - Software Engineer',
    company: 'E2s',
    startDate: 'Juillet 2022',
    endDate: 'Août 2022',
    description: [
      "Suivi d'installation de contrôles d'accès pour le projet des téléphériques à Agadir.",
      "Réalisation d'une application desktop de gestion de stock et de facturation.",
    ],
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    title: "Février - Juillet 2026",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Stage - AI Engineer
          </h3>
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            SanadTech
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            📍 Rabat, Maroc
          </p>
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Développement de Hiring LLM, une plateforme SaaS qui automatise
          l&apos;acquisition de talents.
        </p>

        <div className="mb-8 space-y-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Développement d&apos;une plateforme SaaS LLM automatisant la collecte, l&apos;enrichissement et l&apos;analyse des candidatures (FastAPI, Google Gen AI SDK, Firebase, Next.js, GCP).</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Création d&apos;agents de recherche autonomes avec Playwright et Firecrawl, et sécurisation contre les injections de prompts, les fuites de données et les CV malveillants.</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Optimisation des coûts et de la latence d&apos;inférence, puis intégration des candidatures via Inbox & Forms Linking.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Juillet - Septembre 2025",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Stage - Data Scientist
          </h3>
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            Orange Maroc
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            📍 Agadir, Maroc
          </p>
        </div>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          Une expérience exceptionnelle avec Orange Maroc, j&apos;ai eu la chance de participer et gagner grâce au projet réalisé la troisième place 🥉 au <strong>Orange Summer Challenge 2025</strong> organisé en partenariat avec <strong>AWS, Meta, EY</strong>.
        </p>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Avec une équipe motivée, nous avons conçu une <strong>plateforme d&apos;IA de suivi intelligent du bétail</strong> intégrant trois modèles :
        </p>
        
        <div className="mb-8 space-y-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🔹 <span>Détection et suivi en temps réel (YOLOv8 + ByteTrack)</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🔹 <span>Reconnaissance faciale bovine à partir du museau</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🔹 <span>Mesures morphologiques automatiques (Keypoint Detection)</span>
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
            src="/images/experience/ferme2.jpg"
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
    title: "Avril - Juin 2023",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Stage - Mobile Developer
          </h3>
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            Teima Info
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            📍 Maroc
          </p>
        </div>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Réalisation d&apos;une <strong>application mobile E-commerce</strong> complète pour la vente de produits médicaux, développée avec <strong>Flutter</strong>.
        </p>
        
        <div className="mb-8 space-y-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Développement de l&apos;interface utilisateur mobile complète</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Gestion de la base de données et des API de produits</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Intégration des fonctionnalités de paiement et de gestion de commandes</span>
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
    title: "Juillet - Août 2022",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Stage - Software Engineer
          </h3>
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            E2s
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            📍 Agadir, Maroc
          </p>
        </div>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Participation au projet des <strong>téléphériques d&apos;Agadir</strong> et développement d&apos;une application de gestion.
        </p>
        
        <div className="mb-8 space-y-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Suivi d&apos;installation de contrôles d&apos;accès pour le projet des téléphériques d&apos;Agadir</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Réalisation d&apos;une application desktop de gestion de stock</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ <span>Développement du système de facturation automatisé</span>
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
]
