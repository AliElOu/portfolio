import { FullScreen } from "@/components/full-screen"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors | Ali El Ouankrimi",
  description: "Sponsors d'Ali El Ouankrimi",
}

export default function Page() {
  return (
    <FullScreen>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sponsors</h1>
        <p className="text-muted-foreground">
          Cette page est en cours de développement.
        </p>
      </div>
    </FullScreen>
  )
}
