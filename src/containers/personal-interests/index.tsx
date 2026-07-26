"use client"

import { Pointer } from "@/components/magicui/pointer"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { cn } from "@/lib/utils"
import { Blocks, MousePointerClick } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { StackCloud } from "./stack-cloud"

export function PersonalInterests() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[352px] rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
    )
  }
  return (
    <>
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  )
}

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 "
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <StackCloud />
        <Pointer>
          <MousePointerClick className="w-6 h-6" />
        </Pointer>
      </div>
    </motion.div>
  )
}

const items = [
  {
    title: "Tech Stack",
    description: (
      <span className="text-sm">
        The tools I rely on to build performant, modern web apps.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Blocks className="h-4 w-4 text-neutral-500" />,
  },
]
