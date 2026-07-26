"use client"
import { Card, Carousel } from "@/components/ui/apple-cards-carousel"
import { PROJECTS } from "@/data/projects"
import { useTranslations } from "next-intl"

export function ProjectCardsCarousel() {
  const t = useTranslations("projects")
  const cards = PROJECTS.map((project, index) => {
    const card = {
      ...project,
      category: t(`categories.${project.categoryKey}`),
      title: t(`items.${project.translationKey}.title`),
      content: (
        <p className="text-base text-neutral-700 dark:text-neutral-300">
          {t(`items.${project.translationKey}.description`)}
        </p>
      ),
    }

    return (
      <Card
        key={project.src}
        card={card}
        index={index}
        techStack={[...project.techStack]}
        privateLabel={t("private")}
      />
    )
  })

  return (
    <div className="my-10">
      <Carousel items={cards} />
    </div>
  )
}
