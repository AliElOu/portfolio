"use client"

import { motion } from "motion/react"

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { MY_NETWORKS } from "@/data/my-networks"
import { useTheme } from "next-themes"
import { MyResume } from "../my-resume"
import { Bot, Database, Brain, Rocket } from "lucide-react"

export function MyInformation() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Resume Card - Simple & Clean */}
          <div className="dark:bg-black/50 bg-white/50 p-0">
            <MyResume />
          </div>

          {/* Profile Card - Simplified */}
          <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
              <div className="relative flex flex-1 flex-col gap-8">
                {/* Header with name and social */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                      Ali El Ouankrimi
                    </p>
                    <p className="text-base text-neutral-600 dark:text-neutral-400">
                      Data Scientist & AI Engineer
                    </p>
                  </div>
                  <SocialNetwork />
                </div>

                {/* Main description - Centered & Bold */}
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-balance text-black dark:text-white leading-tight">
                    Transforming data into intelligent solutions
                  </h3>
                  <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                    Specialized in Machine Learning, Deep Learning & AI-powered applications
                  </p>
                </div>

                {/* Skills - Compact */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Core Skills
                  </h3>
                  <KeySkills />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VelocityScroll
        numRows={1}
        className="!text-xl md:!text-3xl opacity-50 my-6 flex items-center gap-3"
      >
        <Bot className="w-6 h-6" /> AI • <Database className="w-6 h-6" /> Data Science • <Brain className="w-6 h-6" /> Machine Learning • <Rocket className="w-6 h-6" /> Innovation
      </VelocityScroll>
    </>
  )
}

const SocialNetwork = () => {
  return (
    <div className="relative z-20 mt-4 sm:mt-0">
      <div className="flex flex-wrap items-center gap-2">
        {MY_NETWORKS.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-xl sm:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <network.icon className="size-5 sm:size-6 md:size-7 lg:size-8" />
          </a>
        ))}
      </div>
    </div>
  )
}

const KeySkills = () => {
  const { theme, systemTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for individual skill badges
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  // Array of skills with their colors for hover effects
  const skills = [
    {
      name: "Python",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "TensorFlow",
      color: "rgb(254 215 170)",
      darkColor: "rgba(249, 115, 22, 0.2)",
    },
    {
      name: "PyTorch",
      color: "rgb(254 226 226)",
      darkColor: "rgba(239, 68, 68, 0.2)",
    },
    {
      name: "Scikit-Learn",
      color: "rgb(207 250 254)",
      darkColor: "rgba(6, 182, 212, 0.2)",
    },
    {
      name: "SQL & NoSQL",
      color: "rgb(220 252 231)",
      darkColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      name: "Computer Vision",
      color: "rgb(237 233 254)",
      darkColor: "rgba(124, 58, 237, 0.2)",
    },
    {
      name: "NLP",
      color: "rgb(254 243 199)",
      darkColor: "rgba(245, 158, 11, 0.2)",
    },
    {
      name: "Machine/Deep Learning",
      color: "rgb(224 231 255)",
      darkColor: "rgba(99, 102, 241, 0.2)",
    },
    {
      name: "AWS & Docker",
      color: "rgb(254 240 138)",
      darkColor: "rgba(234, 179, 8, 0.2)",
    },
    {
      name: "Data Visualization",
      color: "rgb(252 231 243)",
      darkColor: "rgba(236, 72, 153, 0.2)",
    },
  ]
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={badgeVariants}
          whileHover={{
            scale: 1.1,
            backgroundColor:
              currentTheme === "dark" ? skill.darkColor : skill.color,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Badge
            variant="secondary"
            className="px-3 py-1 cursor-pointer dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  )
}
