"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CertificationsHighlight() {
  const topCertifications = [
    {
      title: "Oracle GenAI Professional",
      organization: "Oracle",
      year: "2025",
      icon: "🎓"
    },
    {
      title: "TensorFlow Deep Learning Specialization",
      organization: "365 Data Science",
      year: "2024",
      icon: "🧠"
    },
    {
      title: "Python Data Structures",
      organization: "University of Michigan",
      year: "2024",
      icon: "🐍"
    }
  ]

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 md:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                    Latest Certifications
                  </h2>
                </div>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Continuously learning and growing
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {topCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300"
                >
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-black dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {cert.organization} • {cert.year}
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
              >
                View All Certificates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
