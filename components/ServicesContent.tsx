// app/services/ServicesContent.tsx (ou ajustez le chemin d'importation)
"use client"

import { Code, Cloud, Palette, Settings, HeadphonesIcon, Cpu } from "lucide-react"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import Process from "@/components/ui/Process"
import SurFooter from "@/components/ui/SurFooter"
import ServiceGrid from "@/components/ui/ServiceGrid"
import DarkRealTimeServicesImproved from "@/components/DarkRealTimeServicesImproved"
import HeroPageService from "@/components/heroSection/HeroPageService"
import FaqAccordion from "./FaqAccordion"
import ServicesCatalog from "./ServicesCatalog"

export default function ServicesContent() {
  const mainServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web & Mobile",
      description: "Solutions digitales complètes pour web et mobile avec SEO optimale",
      features: [
        "Applications web responsives (React, Vue.js, Angular)",
        "Applications mobiles natives (iOS/Android)",
        "Progressive Web Apps (PWA)",
        "E-commerce & marketplaces",
        "Portails d'entreprise",
      ],
      technologies: ["React", "Vue.js", "React Native", "Flutter", "Next.js", "Android", "SQL", "MongoDB", "JAVA-ee", "Microsoft 365 et Power Platforme", "Sharepoint-SPFX", "Dataverse", "Sharepoint-Listes"],
      gradient: "from-blue-500 to-cyan-500",
      popular: true,
      images: ["/mobile/m7.jpg", "/mobile/m3.jpg", "/mobile/m5.jpg", "/web/w1.webp", "/web/w2.webp", "/web/w3.webp"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Solutions Microsoft 365 & Power Platform",
      description: "Mise en place et développement d’écosystèmes Microsoft intelligents pour PME & PMI",
      features: [
        "Installation et configuration complète de l’écosystème Microsoft 365",
        "Développement de solutions personnalisées avec SharePoint et SPFx",
        "Automatisation des procédures avec Power Automate et Power Virtual Agent",
        "Création d’applications métiers collaboratives avec Power Apps",
        "Centralisation et modélisation des données via Dataverse",
        "Intégration entre Microsoft Teams, SharePoint et Power BI",
        "Support, maintenance et évolution continue de vos solutions Microsoft",
      ],
      technologies: ["Microsoft 365", "SharePoint Online", "SPFx (SharePoint Framework)", "Power Apps", "Power Automate", "Power Virtual Agent", "Dataverse", "Power BI", "Azure Active Directory", "Teams Integration"],
      gradient: "from-blue-700 to-sky-500",
      popular: true,
      images: ["/microsoft/m1.webp", "/microsoft/m2.webp", "/microsoft/m3.webp", "/microsoft/m4.webp", "/microsoft/m5.webp"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Solutions SaaS",
      description: "Plateformes SaaS scalables et sécurisées pour votre croissance",
      features: ["Architecture cloud-native", "Multi-tenant & scalabilité", "APIs & intégrations", "Tableaux de bord analytics", "Systèmes de facturation"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "GraphQL"],
      gradient: "from-purple-500 to-pink-500",
      popular: false,
      images: ["/saas/1.png", "/saas/saas1.webp", "/saas/5.png", "/saas/saas3.webp", "/saas/saas4.webp"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Expérience",
      description: "Design exceptionnel et contenu visuel professionnel qui convertit",
      features: ["UX/UI Design & prototypage", "Design systems & guidelines", "Shooting photo professionnel", "Production vidéo & animation", "Identité visuelle digitale"],
      technologies: ["Figma", "Adobe Suite", "Sketch", "Principle", "After Effects"],
      gradient: "from-orange-500 to-red-500",
      popular: false,
      images: ["/designe/d1.webp", "/designe/d2.webp", "/designe/d3.webp", "/designe/d6.jpg", "/designe/d5.webp"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Solutions Personnalisées",
      description: "Développement sur mesure pour vos besoins spécifiques et uniques",
      features: ["CRM & ERP sur mesure", "Automatisation de processus", "Intégrations système complexes", "Migration de données", "Workflow personnalisés"],
      technologies: ["Python", "Javascript", "Java", "C#", "Power BI", "Power Apps", "Power Automate", "Power Virtual Agent"],
      gradient: "from-green-500 to-teal-500",
      popular: false,
      images: ["/solutionPerso/s1.jpg", "/solutionPerso/s2.png", "/solutionPerso/s3.jpg", "/solutionPerso/s5.jpg", "/solutionPerso/s6.png", "/solutionPerso/s.png"],
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Support technique et évolution continue pour votre tranquillité d'esprit",
      features: ["Support technique 24/7", "Monitoring proactif", "Mises à jour sécuritaires", "Optimisation performances", "Évolutions fonctionnelles"],
      technologies: ["Monitoring", "DevOps", "CI/CD", "Testing", "Security"],
      gradient: "from-indigo-500 to-purple-500",
      popular: false,
      images: ["/support/s1.webp", "/support/s2.jpg", "/support/s3.webp", "/support/s5.webp"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroPageService />
      <Process />
      <ServicesCatalog />

      <ServiceGrid services={mainServices} />
      <DarkRealTimeServicesImproved />
     
      <SurFooter />
      <Footer />
    </div>
  )
}










