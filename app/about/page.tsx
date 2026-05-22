// app/about/page.tsx
import type { Metadata } from "next"
import AboutContent from "../../components/AboutContent"

// 1. Métadonnées institutionnelles ultra-riches
export const metadata: Metadata = {
  title: "Qui Sommes-Nous ? | Nexolia Consulting ESN Tunis & Paris",
  description: "Découvrez l'histoire de NEXOLIA, notre équipe d'experts IT et nos valeurs. Partenaire en transformation digitale spécialisé en architecture SaaS, écosystème Microsoft 365, réseaux Cisco et gouvernance PMO.",
  alternates: {
    canonical: "nexolia-consulting.com",
  },
  openGraph: {
    title: "À Propos de NEXOLIA Consulting | Cabinet de Conseil et Ingénierie IT",
    description: "De l'idée en 2020 à la création de la startup en 2025. Explorez notre stack technologique de pointe et notre engagement vers l'excellence opérationnelle.",
    url: "nexolia-consulting.com",
  }
}

export default function AboutPage() {
  // 2. Schéma JSON-LD combinant AboutPage et l'entité Organization avec sa Stack Technique
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "nexolia-consulting.com",
        "url": "nexolia-consulting.com",
        "name": "À Propos de Nexolia Consulting",
        "description": "Présentation de l'entreprise Nexolia, de son parcours d'innovation, de ses valeurs fondatrices et de son équipe d'experts en transformation numérique."
      },
      {
        "@type": "Organization",
        "@id": "nexolia-consulting.com",
        "name": "NEXOLIA",
        "url": "nexolia-consulting.com",
        "logo": "nexolia-consulting.com", // Ajustez vers votre logo officiel
        "foundingDate": "2025",
        "description": "Entreprise innovante et ESN spécialisée dans la transformation digitale, le développement de solutions sur mesure (SaaS, Web, Mobile) et la mise en place de structures PMO.",
        "knowsAbout": [
          "React", "Next.js", "TypeScript", "Vue.js", "Angular", "Node.js", "Python", 
          "Java", "GraphQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Azure", 
          "React Native", "Flutter", "Microsoft 365", "Power Automate", "Power BI", 
          "SharePoint Framework", "Power Apps", "Dataverse", "Microsoft Project Subscription Edition", 
          "Cisco", "Linux", "VMware", "Gouvernance PMO", "Formations PMP"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pôle Technologique El Ghazala",
          "addressLocality": "Ariana",
          "postalCode": "2088",
          "addressCountry": "TN"
        }
      }
    ]
  }

  return (
    <>
      {/* Injection immédiate du graphe d'autorité d'entreprise pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  )
}
