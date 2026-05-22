// app/services/page.tsx
import type { Metadata } from "next"
import ServicesContent from "../../components/ServicesContent"

// 1. Métadonnées riches ciblées spécifiquement sur vos expertises métiers
export const metadata: Metadata = {
  title: "Nos Services IT | Développement Web, Mobile, SaaS & Expert Microsoft 365",
  description: "Découvrez nos prestations : applications web responsives optimisées SEO, mobile sur-mesure, plateformes SaaS complexes, intégration Microsoft 365 (SPFx, Power Automate, Power BI), CRM/ERP et UI/UX Design.",
  alternates: {
    canonical: "nexolia-consulting.com",
  },
  openGraph: {
    title: "Services Informatiques & Ingénierie Logicielle | NEXOLIA CONSULTING",
    description: "Solutions technologiques sur-mesure pour PME et grands comptes. Externalisation Nearshore et conseil en transformation digitale.",
    url: "nexolia-consulting.com",
  }
}

export default function ServicesPage() {
  // 2. Schéma de données structurées JSON-LD de type 'Service' pour Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Services Informatiques et Développement Logiciel",
    "provider": {
      "@type": "LocalBusiness",
      "name": "NEXOLIA CONSULTING",
      "url": "nexolia-consulting.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "Tunisie" },
      { "@type": "Country", "name": "France" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catalogue de Solutions Digitales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement Web & Mobile sur-mesure",
            "description": "Création d'applications web et mobiles natives intégrant les technologies Next.js, Flutter et React Native avec une optimisation SEO native."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solutions Microsoft 365 & Power Platform",
            "description": "Développement SPFx, déploiement SharePoint, automatisation via Power Automate et création de tableaux de bord décisionnels Power BI."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ingénierie Logicielle et Plateformes SaaS",
            "description": "Conception d'architectures Cloud scalables, multi-tenant sécurisées fonctionnant sous AWS et Azure."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation et Intégration de PMO d'Entreprise",
            "description": "Mise en place et configuration de structures PMO avancées via Microsoft Project Subscription Edition et intégration SharePoint On-Premise en Datacenter sécurisé."
          }
        }
      ]
    }
  }

  return (
    <>
      {/* Balise de données structurées lue immédiatement par le robot d'indexation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
