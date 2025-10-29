"use client"

import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export function LanguageSwitcher() {
  const currentLocale = useLocale()

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) return
    
    // Get the full path from the browser
    const currentPath = window.location.pathname
    
    // Remove current locale prefix if present
    let cleanPath = currentPath
    if (cleanPath.startsWith('/fr/')) {
      cleanPath = cleanPath.substring(3)
    } else if (cleanPath === '/fr') {
      cleanPath = '/'
    } else if (cleanPath.startsWith('/en/')) {
      cleanPath = cleanPath.substring(3)
    } else if (cleanPath === '/en') {
      cleanPath = '/'
    }
    
    // Build new path with target locale (always use prefix)
    const newPath = `/${newLocale}${cleanPath}`
    
    console.log('Language switch debug:', {
      currentPath,
      cleanPath,
      currentLocale,
      newLocale,
      newPath
    })
    
    // Navigate to new path
    window.location.href = newPath
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className={`cursor-pointer ${
              currentLocale === language.code ? "bg-neutral-100 dark:bg-neutral-800" : ""
            }`}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
