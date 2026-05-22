// app/about/AboutContent.tsx
"use client"

import { Users, Star, Globe, Rocket } from "lucide-react"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import PostWork from "@/components/ui/PostWork"
import Certifications from "@/components/ui/Certifications"
import Timeline from "@/components/ui/Timeline"
import Values from "@/components/ui/Values"
import Team from "@/components/ui/Team"
import SurFooter from "@/components/ui/SurFooter"
import NexoliaPresentation from "@/components/NexoliaPresentation"
import FaqAccordion from "./FaqAccordion"

export default function AboutContent() {
  const stats = [
    { number: "8+", label: "Projets Livrés", icon: <Rocket className="w-6 h-6" /> },
    { number: "10+", label: "Experts", icon: <Users className="w-6 h-6" /> },
    { number: "2+", label: "Solution SAAS", icon: <Globe className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Client", icon: <Star className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <NexoliaPresentation />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-2">{stat.number}</div>
                <div className="text-[#727683] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
      <Values />
      <Team />
      <Certifications />
      <FaqAccordion />

      <SurFooter />
      <Footer />
    </div>
  )
}
