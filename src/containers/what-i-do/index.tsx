"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Stethoscope, Code2, Medal } from "lucide-react"
import Image from "next/image"

export function KeyAchievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "3rd Place - Orange Summer Challenge",
      organization: "Orange Digital Center",
      year: "2025",
      description: "Winner in national competition with AWS, Meta, and EY partnership",
      color: "orange",
      gradient: "from-orange-500/10 to-yellow-500/10 dark:from-orange-500/20 dark:to-yellow-500/20",
      image: "/images/achievements/orange-challenge.jpg"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Hackathon Participant",
      organization: "Healthcare Innovation",
      year: "2024",
      description: "Developed innovative healthcare application during intensive hackathon",
      color: "red",
      gradient: "from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20",
      image: "/images/achievements/healthcare-hackathon.jpg"
    },
    {
      icon: Award,
      title: "4+ Professional Certifications",
      organization: "Oracle, 365 DS, University of Michigan",
      year: "2024-2025",
      description: "Oracle GenAI, TensorFlow Deep Learning, Python Data Structures",
      color: "blue",
      gradient: "from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20",
      image: "/images/achievements/certifications.jpg",
      imagePosition: "bottom" // Image in bottom half instead of top
    }
  ]

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Medal className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Key Achievements
            </h2>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Recognition and milestones in my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const isBottomImage = achievement.imagePosition === "bottom"
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-neutral-300 dark:hover:border-neutral-700 flex flex-col">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Image Preview at TOP for Competition/Hackathon */}
                  {achievement.image && !isBottomImage && (
                    <div className="relative w-full h-48 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {achievement.year}
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10 p-6 flex-1 flex flex-col">
                    {/* Header with icon (and year for bottom-image cards) */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-7 h-7 text-${achievement.color}-600 dark:text-${achievement.color}-400`} />
                      </div>
                      {(!achievement.image || isBottomImage) && (
                        <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                          {achievement.year}
                        </span>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {achievement.title}
                    </h3>
                    
                    {/* Organization */}
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      {achievement.organization}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                  </div>
                  
                  {/* Image Preview at BOTTOM for Certifications */}
                  {achievement.image && isBottomImage && (
                    <div className="relative w-full h-48 bg-neutral-100 dark:bg-neutral-800 overflow-hidden mt-auto">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                    </div>
                  )}

                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
