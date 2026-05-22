"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { useState } from "react"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image?: string
  type: "Événement" | "Participation" | "Conférence"
}

const events: Event[] = [
  {
    id: "1",
    title: "Conférence Digitale 2025",
    description: "Rejoignez-nous pour explorer les tendances du digital et les innovations technologiques...",
    date: "15 Novembre 2025",
    location: "Paris, France",
    image: "/digital-conference-event.jpg",
    type: "Conférence",
  },
  {
    id: "2",
    title: "Nexolia au Salon Tech Expo",
    description: "Visitez notre stand et découvrez nos dernières solutions en direct...",
    date: "10 Novembre 2025",
    location: "Lyon, France",
    image: "/tech-expo-booth.jpg",
    type: "Participation",
  },
  {
    id: "3",
    title: "Webinaire: Transformation Digitale",
    description: "Session en ligne gratuite sur les meilleures pratiques de transformation digitale...",
    date: "5 Novembre 2025",
    location: "En ligne",
    image: "/webinar-online-event.jpg",
    type: "Événement",
  },
]

export default function EventsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#53828a] to-[#727683] rounded-full"></div>
        <h2 className="text-5xl font-bold text-[#53828a] tracking-tight mb-2">ÉVÉNEMENTS</h2>
        <p className="text-base text-[#727683] font-light">À ne pas manquer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(event.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className={`border-0 overflow-hidden shadow-md hover-lift transition-all duration-500 card-premium h-full flex flex-col ${hoveredId === event.id ? "shadow-2xl shadow-[#53828a]/20" : ""}`}
            >
              {event.image && (
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#53828a]/10 to-[#b05f76]/10">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <span
                    className={`text-xs font-bold px-4 py-2 rounded-full text-white shadow-md inline-block ${
                      event.type === "Conférence"
                        ? "bg-gradient-to-r from-[#53828a] to-[#727683]"
                        : event.type === "Participation"
                          ? "bg-gradient-to-r from-[#916a7c] to-[#b05f76]"
                          : "bg-gradient-to-r from-[#b05f76] to-[#916a7c]"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#916a7c] mb-3 group-hover:text-[#b05f76] transition-colors duration-300 line-clamp-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed flex-grow">{event.description}</p>
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-[#727683]">
                    <Calendar size={16} className="flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#727683]">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
