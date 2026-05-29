// app/portfolio/page.tsx
import type { Metadata } from "next"
import PortfolioContent from "../../components/PortfolioContent"

// Métadonnées enrichies
export const metadata: Metadata = {
  title: "Notre Portfolio | Réalisations ERP, Plateformes SaaS & Projets Microsoft",
  description: "Découvrez les études de cas de NEXOLIA CONSULTING : ERP financiers intelligents (Power Apps, SPFx, Power BI), systèmes de gestion médicale sur-mesure et solutions SaaS responsives déployées en France et Tunisie.",
  alternates: {
    canonical: "https://nexolia-consulting.com/portfolio", // URL canonique absolue
  },
  openGraph: {
    title: "Portfolio NEXOLIA CONSULTING | Nos Projets et Applications Développées",
    description: "Explorez nos succès clients : intégrations d'écosystèmes cloud, automatisations complexes et architectures logicielles scalables.",
    url: "https://nexolia-consulting.com/portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function PortfolioPage() {
  // Données structurées JSON-LD (inchangées, mais toujours valides)
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
          "url": "https://nexolia-consulting.com"
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
          "url": "https://nexolia-consulting.com"
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
          "url": "https://nexolia-consulting.com"
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
          "url": "https://nexolia-consulting.com"
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
          "url": "https://nexolia-consulting.com"
        }
      }
    ]
  }

  return (
    <>
      {/* Données structurées pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Contenu principal avec balises sémantiques */}
      <main id="main-content" className="min-h-screen">
        {/* Titre principal invisible mais présent pour la hiérarchie SEO */}
        <h1 className="sr-only">Portfolio des réalisations NEXOLIA CONSULTING - Projets ERP, SaaS et applications mobiles</h1>
        
        {/* Section portfolio avec étiquette accessible */}
        <section aria-labelledby="portfolio-heading">
          <h2 id="portfolio-heading" className="sr-only">Liste complète de nos projets et études de cas</h2>
          <PortfolioContent />
        </section>
      </main>
    </>
  )
}