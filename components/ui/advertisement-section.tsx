"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface Ad {
  id: string
  title: string
  description: string
  image?: string
  cta: string
}

const advertisements: Ad[] = [
  {
    id: "1",
    title: "Offre Spéciale",
    description: "Bénéficiez de 30% de réduction sur tous nos services premium",
    image: "/special-offer-promotion.jpg",
    cta: "Profiter de l'offre",
  },
  {
    id: "2",
    title: "Essai Gratuit",
    description: "Testez nos solutions pendant 30 jours sans engagement",
    image: "/free-trial-offer.jpg",
    cta: "Commencer maintenant",
  },
]

export default function AdvertisementSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#b05f76] to-[#916a7c] rounded-full"></div>
        <h2 className="text-4xl font-bold text-[#b05f76] tracking-tight mb-2">PROMOTIONS</h2>
        <p className="text-sm text-[#727683] font-light">Offres exclusives</p>
      </div>

      {advertisements.map((ad, index) => (
        <div
          key={ad.id}
          className="group animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
          onMouseEnter={() => setHoveredId(ad.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Card
            className={`border-0 overflow-hidden shadow-md hover-lift transition-all duration-500 card-premium bg-gradient-to-br from-[#b05f76]/5 to-[#916a7c]/5 ${hoveredId === ad.id ? "shadow-2xl shadow-[#b05f76]/20" : ""}`}
          >
            {ad.image && (
              <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-[#b05f76]/10 to-[#916a7c]/10">
                <Image
                  src={ad.image || "/placeholder.svg"}
                  alt={ad.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#b05f76] mb-3 group-hover:text-[#916a7c] transition-colors duration-300">
                {ad.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{ad.description}</p>
              <button className="w-full bg-gradient-to-r from-[#b05f76] to-[#916a7c] text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 hover-scale">
                {ad.cta}
              </button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
