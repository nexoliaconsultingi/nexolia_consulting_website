"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

interface FidelityItem {
  id: string
  title: string
  description: string
  benefit: string
}

const fidelityItems: FidelityItem[] = [
  {
    id: "1",
    title: "Programme Fidélité Premium",
    description: "Accumulez des points à chaque achat",
    benefit: "+20% de récompenses",
  },
  {
    id: "2",
    title: "Accès VIP Exclusif",
    description: "Avant-première des nouveaux services",
    benefit: "Priorité garantie",
  },
  {
    id: "3",
    title: "Cashback Mensuel",
    description: "Récupérez jusqu'à 10% de vos dépenses",
    benefit: "Jusqu'à 10%",
  },
]

export default function FidelityNewsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#916a7c] to-[#b05f76] rounded-full"></div>
        <h2 className="text-4xl font-bold text-[#916a7c] tracking-tight mb-2">FIDÉLITÉ</h2>
        <p className="text-sm text-[#727683] font-light">Nos avantages exclusifs</p>
      </div>

      {fidelityItems.map((item, index) => (
        <div
          key={item.id}
          className="group animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Card
            className={`border-0 p-6 hover-lift transition-all duration-500 card-premium ${hoveredId === item.id ? "shadow-xl shadow-[#916a7c]/20" : "shadow-md"}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-[#53828a] mb-2 group-hover:text-[#b05f76] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#b05f76] to-[#916a7c] text-white text-xs font-bold px-4 py-2 rounded-full inline-block shadow-md hover-scale">
              {item.benefit}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
