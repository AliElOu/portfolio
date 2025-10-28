"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"

export function WorkTimeline() {
  const experiences = [
    {
      year: "2025",
      company: "Orange Digital Center",
      role: "Data Scientist",
      location: "Morocco",
      achievement: "Winner of Orange Summer Challenge",
      icon: "🍊",
      color: "orange"
    },
    {
      year: "2023",
      company: "Teima Info",
      role: "Mobile Developer",
      location: "Morocco",
      achievement: "E-commerce Flutter Application",
      icon: "📱",
      color: "blue"
    },
    {
      year: "2022",
      company: "E2s",
      role: "Software Engineer",
      location: "Morocco",
      achievement: "Desktop Management System",
      icon: "💼",
      color: "purple"
    }
  ]

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Professional journey in tech
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-4`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3 justify-start md:justify-end">
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                        {exp.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    
                    <div className={`flex items-center gap-2 mb-2 justify-start md:justify-end font-medium ${
                      exp.color === 'orange' 
                        ? 'text-orange-600 dark:text-orange-400' 
                        : 'text-blue-600 dark:text-blue-400'
                    }`}>
                      <Briefcase className="w-4 h-4" />
                      <p>{exp.company}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm mb-3 justify-start md:justify-end">
                      <MapPin className="w-4 h-4" />
                      <p>{exp.location}</p>
                    </div>
                    
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 p-3 rounded-lg">
                      {exp.achievement}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-4 items-center justify-center text-2xl z-10 ${
                  exp.color === 'orange' 
                    ? 'border-orange-500' 
                    : exp.color === 'blue' 
                    ? 'border-blue-500' 
                    : 'border-purple-500'
                }`}>
                  {exp.icon}
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
          >
            View Full Experience
          </a>
        </div>
      </div>
    </div>
  )
}
