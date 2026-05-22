// app/blog/page.tsx
import type { Metadata } from "next"
import BlogNewsContent from "../../components/BlogNewsContent"

// 1. Métadonnées riches axées sur la veille informatique et l'innovation
export const metadata: Metadata = {
  title: "Blog & Actualités Tech | Tendances SaaS, Cloud & Microsoft 365",
  description: "Suivez toute l'actualité informatique avec NEXOLIA. Conseils d'experts, innovations technologiques, guides de développement Microsoft SPFx, Power Platform et tendances de la transformation numérique en France et Tunisie.",
  alternates: {
    canonical: "nexolia-consulting.com",
  },
  openGraph: {
    title: "Espace Media & Blog Tech | NEXOLIA Consulting",
    description: "Explorez nos décryptages techniques, retours d'expérience sur l'automatisation de processus B2B et nos derniers événements d'entreprise.",
    url: "nexolia-consulting.com",
  }
}

export default function BlogNewsPage() {
  // 2. Schéma de données structurées de type Blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "nexolia-consulting.com",
    "name": "NEXOLIA Blog & Actualités",
    "description": "Le média technologique de Nexolia traitant de l'innovation logicielle, des solutions Microsoft, du cloud d'entreprise et des actualités de l'ESN.",
    "publisher": {
      "@type": "Organization",
      "name": "NEXOLIA",
      "url": "nexolia-consulting.com"
    },
    "keywords": [
      "actualités technologiques", "blog informatique", "veille Microsoft 365", 
      "tendances SaaS", "gouvernance PMO", "innovation cloud"
    ]
  }

  return (
    <>
      {/* Injection immédiate du schéma Blog lu par les robots d'exploration Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogNewsContent />
    </>
  )
}
