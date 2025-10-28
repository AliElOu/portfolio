import { BlurImage } from "@/components/ui/apple-cards-carousel"

export const EDUCATION_TIMELINE = [
  {
    title: "Septembre 2023 - Présent",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Diplôme d&apos;ingénieur d&apos;état en Data Science, Big Data et IA
          </h3>
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            École Nationale Supérieure de l&apos;Intelligence Artificielle et Sciences des Données (ENSIASD)
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            📍 Taroudant, Maroc
          </p>
        </div>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Formation d&apos;ingénieurie en <strong>Data Science</strong>, <strong>Big Data</strong> et <strong>Intelligence Artificielle</strong>, couvrant les aspects théoriques et pratiques des technologies de pointe.
        </p>
        
        <div className="mb-8 space-y-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Machine Learning & Deep Learning</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Big Data & Cloud Computing</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Intelligence Artificielle & Traitement du Langage Naturel</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Computer Vision & Image/Video Processing</span>
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
    title: "Septembre 2021 - Juin 2023",
    content: (
      <div>
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Diplôme Universitaire de Technologie en Informatique
          </h3>
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
            École Supérieure de Technologie (EST)
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            📍 Guelmim, Maroc
          </p>
        </div>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Formation universitaire technique en <strong>Informatique</strong>, couvrant les fondamentaux du développement logiciel, des bases de données et des systèmes d&apos;information.
        </p>
        
        <div className="mb-8 space-y-2">
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Programmation & Génie Logiciel</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Bases de Données & SQL</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Développement Web & Mobile</span>
          </div>
          <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            🎓 <span>Réseaux & Systèmes</span>
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
]
