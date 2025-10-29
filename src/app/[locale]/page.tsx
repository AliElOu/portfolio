import { FullScreen } from "@/components/full-screen"
import { MyUniverse } from "@/containers/my-universe"
import { KeyAchievements } from "@/containers/what-i-do"
import { FeaturedProjects } from "@/containers/featured-projects"
import { WorkTimeline } from "@/containers/work-timeline"
import { TechStackSection } from "@/containers/tech-stack-section"
import { CertificationsHighlight } from "@/containers/certifications-highlight"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <MyUniverse />
      </FullScreen>

      {/* Key Achievements Section */}
      <KeyAchievements />
    
      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Work Experience Timeline */}
      <WorkTimeline />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Certifications Highlight */}
      <CertificationsHighlight />
    </div>
  )
}
