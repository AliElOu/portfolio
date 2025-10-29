"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { 
  SiPython, SiPandas, SiNumpy, SiScikitlearn, 
  SiTensorflow, SiPytorch, SiKeras, SiOpencv,
  SiAmazon, SiDocker, SiGit, SiLinux,
  SiFlutter, SiFirebase, SiFastapi, SiMongodb
} from "react-icons/si"
import { TbChartBar } from "react-icons/tb"
import { RiRobot2Fill } from "react-icons/ri"
import { 
  Database, 
  Brain, 
  Cloud, 
  Smartphone 
} from "lucide-react"
import { useTranslations } from "next-intl"

export function TechStackSection() {
  const t = useTranslations('home.techStack')
  const techCategories = [
    {
      category: t('categories.dataScience'),
      icon: Database,
      color: "blue",
      techs: [
        { name: "Python", icon: SiPython },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Matplotlib", icon: TbChartBar }
      ]
    },
    {
      category: t('categories.deepLearning'),
      icon: Brain,
      color: "purple",
      techs: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "Keras", icon: SiKeras },
        { name: "YOLO", icon: RiRobot2Fill },
        { name: "OpenCV", icon: SiOpencv }
      ]
    },
    {
      category: t('categories.cloudDevOps'),
      icon: Cloud,
      color: "cyan",
      techs: [
        { name: "AWS", icon: SiAmazon },
        { name: "Docker", icon: SiDocker },
        { name: "Airflow", icon: RiRobot2Fill },
        { name: "Git", icon: SiGit },
        { name: "Linux", icon: SiLinux }
      ]
    },
    {
      category: t('categories.mobileWeb'),
      icon: Smartphone,
      color: "green",
      techs: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Firebase", icon: SiFirebase },
        { name: "FastAPI", icon: SiFastapi },
        { name: "MongoDB", icon: SiMongodb }
      ]
    }
  ]

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    purple: "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    cyan: "bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    green: "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
  }

  return (
    <div className="w-full py-12 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CategoryIcon className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, idx) => {
                    const Icon = tech.icon
                    return (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className={`text-sm border ${colorMap[category.color]} flex items-center gap-1.5`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {tech.name}
                      </Badge>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
