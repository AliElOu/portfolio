"use client"

import { motion } from "motion/react"
import { Mail, Phone, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"

export function ContactSection() {
  const t = useTranslations('contact')
  
  const contacts = [
    {
      icon: Mail,
      label: t('email.label'),
      value: "alielouankrimi@gmail.com",
      href: "mailto:alielouankrimi@gmail.com",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-600",
      action: t('email.action')
    },
    {
      icon: Phone,
      label: t('phone.label'),
      value: "+212 6 06 96 79 40",
      href: "tel:+212606967940",
      color: "from-green-500 to-emerald-500",
      hoverColor: "group-hover:from-green-600 group-hover:to-emerald-600",
      action: t('phone.action')
    },
    {
      icon: Linkedin,
      label: t('linkedin.label'),
      value: "linkedin.com/in/alielouankrimi",
      href: "https://www.linkedin.com/in/alielouankrimi",
      color: "from-purple-500 to-pink-500",
      hoverColor: "group-hover:from-purple-600 group-hover:to-pink-600",
      action: t('linkedin.action')
    }
  ]

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "LinkedIn" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 transition-all duration-300 hover:shadow-2xl hover:border-transparent"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                {/* Icon */}
                <div className={`p-4 rounded-full bg-gradient-to-br ${contact.color} ${contact.hoverColor} transition-all duration-300`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {contact.label}
                </h3>
                
                {/* Value */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors duration-300">
                  {contact.value}
                </p>
                
                {/* Hover Indicator */}
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                    {contact.action} →
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-3xl" />
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            {t('footer')}{" "}
            <a 
              href="https://github.com/AliElOu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white hover:underline"
            >
              {t('github')}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
