"use client"

import type React from "react"

import { useState } from "react"
import {

  Mail,
  Clock,
  Award,
  Users,
  Star,
  Globe,
  Shield,
  Zap,
  HeadphonesIcon,
  Calendar,
  ChevronDown,
  ChevronUp,
  Layers
} from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import ContactForm from "@/components/ui/ContactForm"
import Testimonials from "@/components/ui/Testimonials"
import SurFooter from "@/components/ui/SurFooter"
import ContactInfo from "@/components/ContactInfo"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const stats = [
    { number: "24h", label: "Temps de réponse moyen", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Clients satisfaits", icon: <Award className="w-6 h-6" /> },
    { number: "2", label: "Solutions SaaS", icon: <Layers className="w-6 h-6" /> },
    { number: "9", label: "Clients PME & PMI", icon: <Users className="w-6 h-6" /> },
  ]


  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confidentialité Garantie",
      description: "Vos données et projets sont protégés par des accords de confidentialité stricts.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Réponse Rapide",
      description: "Notre équipe vous répond dans les 24h, même le weekend pour les urgences.",
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Support Dédié",
      description: "Un chef de projet dédié vous accompagne tout au long de votre parcours.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Expertise Internationale",
      description: "Notre équipe multiculturelle comprend vos enjeux locaux et internationaux.",
    },
  ]



  const faqs = [
    {
      question: "Quel est le délai moyen pour démarrer un projet ?",
      answer:
        "Nous pouvons généralement démarrer un nouveau projet dans les 1-2 semaines suivant la signature du contrat. Pour les projets urgents, nous proposons un démarrage express sous 48h avec notre équipe dédiée aux urgences.",
    },
    {
      question: "Proposez-vous un accompagnement après la livraison ?",
      answer:
        "Absolument ! Nous offrons plusieurs formules de maintenance : support basique (corrections de bugs), support avancé (évolutions mineures) et support premium (développement continu). Tous nos projets incluent 3 mois de support gratuit.",
    },
    {
      question: "Comment se déroule le processus de développement ?",
      answer:
        "Notre processus suit une méthodologie agile : découverte et analyse (1 semaine), conception et prototypage (2-3 semaines), développement itératif avec livraisons hebdomadaires, tests et validation, puis déploiement et formation.",
    },
    {
      question: "Travaillez-vous avec des budgets limités ?",
      answer:
        "Nous adaptons nos solutions à tous les budgets. Pour les startups et PME, nous proposons des paiements échelonnés, des solutions MVP pour commencer petit, et même du financement participatif pour certains projets innovants.",
    },
    {
      question: "Quelle est votre politique de confidentialité ?",
      answer:
        "Tous nos collaborateurs signent des accords de confidentialité stricts. Nous pouvons également signer votre NDA. Vos données sont hébergées en Europe (RGPD compliant) et nous ne partageons jamais d'informations clients.",
    },
    {
      question: "Peut-on visiter vos bureaux ?",
      answer:
        "Bien sûr ! Nous organisons des visites de nos bureaux à Paris et Tunis sur rendez-vous. Vous pouvez également rencontrer l'équipe via des appels vidéo ou dans nos espaces de coworking partenaires dans d'autres villes.",
    },
  ]



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Hero */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#53828a]/5 via-white to-[#b05f76]/5 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#53828a]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#b05f76]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#53828a]/5 to-[#b05f76]/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] border-0 mb-8">
              <Users className="w-5 h-5 text-white mr-3" />
              <span className="text-white font-semibold">Parlons de votre projet</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-[#53828a] mb-6 sm:mb-8 leading-tight">
              Contactez-
              <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent animate-pulse">
                Nous
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#727683] max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Transformons ensemble vos idées en solutions digitales exceptionnelles. Notre équipe d'experts vous
              accompagne à chaque étape de votre projet.
            </p>

          
          </div>
        </div>
      </section>

      


      {/* Contact Section */}
      <ContactForm />


      <ContactInfo/>



         {/* CTA Section */}
      <SurFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
