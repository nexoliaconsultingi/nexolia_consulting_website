"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

interface TechNews {
  id: string
  title: string
  description: string
  images: string[]
  tags: string[]
}

const techNews: TechNews[] = [
  {
    id: "3",
    title: "Samsung Galaxy S26 Ultra : L'IA qui vous devance",
    description: "Découvrez le premier smartphone au monde doté d'un écran de confidentialité intégré 'Privacy Display'. Propulsé par le Snapdragon 8 Elite Gen 5 et son appareil photo principal de 200 MP avec ouverture f/1.4, le Galaxy S26 Ultra capture la nuit comme en plein jour. Son IA proactive 'Now Nudge' anticipe vos besoins pour une productivité sans précédent.",
    images: [
      "/news/sums26.png",
      "/news/sums26+.png",
      "/news/sums26++.png"
    ],
    tags: ["Samsung", "IA proactive", "Privacy Display", "Photo nocturne", "Snapdragon 8 Elite"]
  },
  {
    id: "4",
    title: "PC Portables : Écrans Déroulants & Poids Plume",
    description: "Le CES 2026 redéfinit l'informatique portable : Lenovo présente des PC gaming et ThinkPad aux écrans Oled déroulables (jusqu'à 24 pouces), tandis que les ultraportables atteignent des records de légèreté avec le Yoga Slim 7i Ultra (975g) et le MSI Prestige 13 (899g). Côté graphismes, Intel mise sur ses GPU intégrés Panther Lake et Nvidia perfectionne le DLSS 4.5 en attendant la prochaine génération.",
    images: [
      "/news/lenovo.png",
      "/news/lenovo+.png"
     
    ],
    tags: ["CES2026", "Écran déroulant", "Ultraportable", "Intel Panther Lake", "DLSS 4.5"]
  }
]

// Composant pour l'image carrousel automatique
function AutoRotatingImage({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return // Pause le carrousel quand la souris survole
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change d'image toutes les 4 secondes

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  // Indicateurs de progression
  const progressWidth = ((currentIndex + 1) / images.length) * 100

  return (
    <div 
      className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#727683]/10 to-[#53828a]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt={`${title} - image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-125"
            priority={idx === 0}
          />
        </div>
      ))}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Indicateurs de progression */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
        <div 
          className="h-full bg-gradient-to-r from-[#727683] to-[#53828a] transition-all duration-1000 ease-linear"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
      
      {/* Compteur d'images */}
      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-mono">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Points de navigation */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex 
                ? "w-6 h-2 bg-white" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Aller à l'image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function TechnologyNewsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#727683] to-[#53828a] rounded-full"></div>
        <h2 className="text-5xl font-bold text-[#727683] tracking-tight mb-2">TECHNOLOGIE</h2>
        <p className="text-base text-[#916a7c] font-light">Les dernières avancées</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techNews.map((item, index) => (
          <div
            key={item.id}
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className={`border-0 overflow-hidden shadow-md hover-lift transition-all duration-500 card-premium ${hoveredId === item.id ? "shadow-2xl shadow-[#727683]/20" : ""}`}
            >
              <AutoRotatingImage images={item.images} title={item.title} />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-[#727683] to-[#53828a] text-white text-xs px-4 py-2 rounded-full shadow-md hover-scale font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}