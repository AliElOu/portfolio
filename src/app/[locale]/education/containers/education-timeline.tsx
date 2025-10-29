import { Timeline } from "@/components/ui/timeline"
import { EDUCATION_TIMELINE } from "@/data/education"

export function EducationTimeline() {
  return (
    <div className="w-full h-full">
      <Timeline 
        data={EDUCATION_TIMELINE}
        headerTitle="Mon Parcours Académique"
        headerDescription="Diplômé en Data Science, Big Data et Intelligence Artificielle de l'ENSIASD Taroudant, avec une base solide en Informatique acquise à l'EST Guelmim. Un parcours académique axé sur l'excellence et l'innovation technologique."
      />
    </div>
  )
}
