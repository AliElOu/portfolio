"use client"

import {
  type AnimationVariant,
  TextAnimate,
} from "@/components/magicui/text-animate"
import { Cover } from "@/components/ui/cover"
import { ROLE_TITLES } from "@/data/role-titles"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import { memo, useEffect, useState } from "react"

const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurIn",
  "blurInUp",
  "blurInDown",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleUp",
  "scaleDown",
]

export const MyUniverse = () => {
  const [currentText, setCurrentText] = useState(ROLE_TITLES[0])
  const [currentAnimation, setCurrentAnimation] = useState(animationTypes[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const textIndex = ROLE_TITLES.indexOf(prev)
        if (textIndex === ROLE_TITLES.length - 1) {
          return ROLE_TITLES[0]
        }

        return ROLE_TITLES[textIndex + 1]
      })
      setCurrentAnimation(
        animationTypes[Math.floor(Math.random() * animationTypes.length)]
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12 px-2 md:px-6">
      <div className="flex-1 relative w-full lg:w-auto">
        
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight dark:text-zinc-300 text-zinc-700">
            Hello, I&apos;m
          </h1>

          <Title />
        </div>

        <div className="flex items-center justify-center md:justify-start mt-8">
          <motion.div
            layout
            className={cn(
              "md:w-fit w-full py-2 px-4 sm:px-8 text-base sm:text-lg md:text-xl font-bold rounded-lg pt-2 pb-3 text-center text-black dark:text-white",
              "[background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))]",
              "shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),_0_4px_8px_var(--color-gray-300)]",
              "dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))]",
              "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]"
            )}
          >
            <TextAnimate
              duration={1}
              animation={currentAnimation}
              by="character"
              startOnView={false}
              className="break-words"
            >
              {currentText}
            </TextAnimate>
          </motion.div>
        </div>
        
        <div className="text-lg text-zinc-600 dark:text-zinc-400 my-8 font-medium flex items-center gap-2">
          <span className="font-semibold text-zinc-800 dark:text-zinc-300">
            Transforming data into intelligent solutions
          </span>
          <br />
          with Machine Learning, Deep Learning & AI technologies <Bot className="w-5 h-5 inline-block" />
        </div>
      </div>
      
      <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
        <CompareDemo />
      </div>
    </div>
  )
}

export function CompareDemo() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-neutral-200 dark:border-neutral-800 shadow-2xl">
        <img
          src="/images/portrait.png"
          alt="Ali El Ouankrimi - Data Scientist & AI Engineer"
          className="w-full h-full object-cover"
        />
        {/* Badge overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="backdrop-blur-md bg-white/80 dark:bg-black/80 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-700 shadow-lg">
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              Ali El Ouankrimi
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              Data Scientist & AI Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Title = memo(() => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700">
       <Cover>Ali El Ouankrimi</Cover>
    </h1>
  )
})

Title.displayName = "Title"
