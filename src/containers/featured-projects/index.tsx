"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

export function FeaturedProjects() {
  const t = useTranslations('home.featuredProjects')
  const projects = [
    {
      title: "Face Detection System",
      description: "Advanced facial recognition and detection using deep learning for livestock identification",
      image: "/images/projects/face-detection.jpg",
      tags: ["YOLOv8", "Face Recognition", "Deep Learning"],
      href: "/projects"
    },
    {
      title: "Smart Measurements Detection",
      description: "AI-powered body measurements analysis for health monitoring and growth tracking",
      image: "/images/projects/smart-measurements.jpg",
      tags: ["Computer Vision", "Measurement AI", "Analytics"],
      href: "/projects"
    },
    {
      title: "Sales Forecasting",
      description: "Advanced time series prediction with ensemble ML models",
      image: "/images/projects/sales-forecast.jpg",
      tags: ["LSTM", "XGBoost", "Time Series"],
      href: "/projects"
    }
  ]

  return (
    <div className="w-full py-12 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
              {t('title')}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {t('subtitle')}
            </p>
          </div>
          <Link 
            href="/projects"
            className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 font-medium"
          >
            {t('viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={project.href}>
                <div className="relative h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 font-medium"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
