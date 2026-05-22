// app/portfolio/page.tsx
import type { Metadata } from "next"
import PortfolioContent from "../../components/PortfolioContent"

// 1. Métadonnées riches basées sur les réalisations réelles de votre boîte
export const metadata: Metadata = {
  title: "Notre Portfolio | Réalisations ERP, Plateformes SaaS & Projets Microsoft",
  description: "Découvrez les études de cas de NEXOLIA CONSULTING : ERP financiers intelligents (Power Apps, SPFx, Power BI), systèmes de gestion médicale sur-mesure et solutions SaaS responsives déployées en France et Tunisie.",
  alternates: {
    canonical: "nexolia-consulting.com",
  },
  openGraph: {
    title: "Portfolio NEXOLIA CONSULTING  | Nos Projets et Applications Développées",
    description: "Explorez nos succès clients : intégrations d'écosystèmes cloud, automatisations complexes et architectures logicielles scalables.",
    url: "nexolia-consulting.com",
  }
}

export default function PortfolioPage() {
  // 2. Schéma de données structurées JSON-LD combinant vos projets informatiques majeurs
  // 2. Schéma de données structurées JSON-LD combinant l'intégralité de vos projets informatiques
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Geld Pilot",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "ERP complet pour gérer les activités financières des PME/PMI via Power Apps, Power Automate, SPFx, Dataverse, Node.js et Flask Python. Inclut chatbots d'analyse et un dashboard Power BI.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "NEXOLIA",
          "url": "nexolia-consulting.com"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "ERP Gestion Cabinet Médical",
        "applicationCategory": "MedicalApplication",
        "operatingSystem": "All",
        "description": "ERP pour cabinets médicaux, couvrant la gestion des patients, rendez-vous, médicaments, matériels et personnel avec dashboard analytique sécurisé.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "NEXOLIA",
          "url": "nexolia-consulting.com"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Solution Salon de Coiffure",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Solution web responsive pour salons de coiffure avec système de réservation, gestion clients, personnel, produits, revenus, charges et dashboard Power BI.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "NEXOLIA",
          "url": "nexolia-consulting.com"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "SaaS Gestion Financière PME",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "description": "Solution SaaS de gestion financière pour PME/PMI, incluant la visualisation de données via dashboard et des prédictions IA via Python pour anticiper les résultats.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "NEXOLIA",
          "url": "nexolia-consulting.com"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Application Mobile Université",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "description": "Application mobile pour la gestion universitaire (cours, classes, projets étudiants) intégrant un suivi personnalisé via IA sous React Native et Firebase.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "NEXOLIA",
          "url": "nexolia-consulting.com"
        }
      }
    ]
  }

  return (
    <>
      {/* Injection immédiate du catalogue de réalisations logicielles pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioContent />
    </>
  )
}
