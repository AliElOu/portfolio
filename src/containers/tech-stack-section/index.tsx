"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function TechStackSection() {
  const techCategories = [
    {
      category: "Data Science",
      icon: "📊",
      color: "blue",
      techs: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]
    },
    {
      category: "Deep Learning",
      icon: "🧠",
      color: "purple",
      techs: ["TensorFlow", "PyTorch", "Keras", "YOLO", "OpenCV"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      color: "cyan",
      techs: ["AWS", "Docker", "Airflow", "Git", "Linux"]
    },
    {
      category: "Mobile & Web",
      icon: "📱",
      color: "green",
      techs: ["Flutter", "Firebase", "FastAPI", "MongoDB"]
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
            Tech Stack
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Technologies I work with daily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`text-sm border ${colorMap[category.color]}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
