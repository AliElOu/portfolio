"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CERTIFICATES } from "@/data/certificates"
import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function CertificatesGrid() {
  const handleCertificateClick = (url?: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {CERTIFICATES.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            className={`group relative overflow-hidden transition-all duration-300 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl ${
              cert.credentialUrl && cert.credentialUrl !== "#" ? "cursor-pointer" : ""
            }`}
            onClick={() => handleCertificateClick(cert.credentialUrl)}
          >
            <div className="relative">
              {/* Image du certificat claire et visible */}
              <div className="relative w-full h-64 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={cert.certificateImage}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Logo organisation positionné en haut */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-white dark:bg-neutral-800 p-3 flex items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-700 z-10">
                  <Image
                    src={cert.organizationLogo}
                    alt={cert.organization}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Badge de date */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-blue-600 text-white border-0 shadow-lg">
                    {cert.issueDate}
                  </Badge>
                </div>

                {/* Icône de certificat en fond */}
                <div className="absolute bottom-4 right-4 opacity-5 dark:opacity-10">
                  <Award className="w-32 h-32 text-blue-600" />
                </div>

                {/* Overlay au survol avec lien */}
                {cert.credentialUrl && cert.credentialUrl !== "#" && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="flex items-center gap-2 text-white text-lg font-medium">
                      Voir le certificat
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Organisation name */}
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
                  {cert.organization}
                </p>

                {/* Titre */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[3.5rem]">
                  {cert.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Footer avec ID */}
                {cert.credentialId && (
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-xs text-neutral-500 dark:text-neutral-600 font-mono">
                      ID: {cert.credentialId.slice(0, 20)}...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
