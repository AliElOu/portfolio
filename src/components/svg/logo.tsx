import { SVGProps } from "@/types/global"
import React from "react"

export const Logo = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      fill="none"
      {...props}
    >
      {/* Letter A */}
      <path
        d="M 20 50 L 30 10 L 40 50 M 25 35 L 35 35"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="dark:stroke-white stroke-black"
      />
      
      {/* Letter L */}
      <path
        d="M 65 10 L 65 50 L 85 50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="dark:stroke-white stroke-black"
      />
      
      {/* Letter I */}
      <path
        d="M 110 10 L 110 50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="dark:stroke-white stroke-black"
      />
      
      {/* Accent moderne - ligne décorative */}
      <circle
        cx="30"
        cy="8"
        r="2.5"
        className="fill-blue-600 dark:fill-blue-400"
      />
      <circle
        cx="75"
        cy="8"
        r="2.5"
        className="fill-blue-600 dark:fill-blue-400"
      />
      <circle
        cx="110"
        cy="8"
        r="2.5"
        className="fill-blue-600 dark:fill-blue-400"
      />
    </svg>
  )
}
