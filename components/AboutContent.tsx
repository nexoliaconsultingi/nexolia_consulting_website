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
import FaqAccordion from "./FaqAccordion"
import NexoliaPresentation from "@/components/NexoliaPresentation"

export default function AboutContent() {
  const stats = [
    { number: "8+", label: "Projets Livrés", icon: <Rocket className="w-6 h-6" aria-hidden="true" /> },
    { number: "10+", label: "Experts", icon: <Users className="w-6 h-6" aria-hidden="true" /> },
    { number: "2+", label: "Solutions SaaS", icon: <Globe className="w-6 h-6" aria-hidden="true" /> },
    { number: "98%", label: "Satisfaction Client", icon: <Star className="w-6 h-6" aria-hidden="true" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="flex-grow">
        <NexoliaPresentation />

        <section className="py-16 bg-white" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4">
            <h2 id="stats-heading" className="sr-only">Chiffres clés de Nexolia Consulting</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                    <span className="sr-only">{stat.label}</span>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-2">{stat.number}</div>
                  <div className="text-[#727683] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="sr-only">Notre parcours depuis 2020</h2>
          <Timeline />
        </section>

        <section aria-labelledby="values-heading">
          <h2 id="values-heading" className="sr-only">Nos valeurs fondamentales</h2>
          <Values />
        </section>

        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="sr-only">Notre équipe de direction et experts</h2>
          <Team />
        </section>

        <section aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="sr-only">Nos certifications professionnelles</h2>
          <Certifications />
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="sr-only">Foire aux questions</h2>
          <FaqAccordion />
        </section>

        <SurFooter />
      </main>

      <Footer />
    </div>
  )
}