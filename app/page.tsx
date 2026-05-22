// app/page.tsx
import type { Metadata } from "next"
import HomeContent from "../components/HomeContent" // Ajustez le chemin d'importation

// 1. Métadonnées puissantes dédiées à la Page d'Accueil
export const metadata: Metadata = {
  title: "Boite de Développement Logiciel Tunisie & ESN Partner France",
  description: "NEXOLIA est votre agence informatique de confiance à Tunis et Paris. Experts en plateformes SaaS, applications mobiles, solutions Microsoft 365 (SPFx, Power Automate, Power BI) et formation PMP.",
  alternates: {
    canonical: "nexolia-consulting.com",
  },
  openGraph: {
    title: "NEXOLIA CONSULTING | Société de Développement Logiciel & Intégrateur Microsoft 365",
    description: "Accompagnement de A à Z dans votre transformation numérique. Solutions Cloud de pointe et ingénierie logicielle sur-mesure.",
    url: "nexolia-consulting.com",
  }
}

export default function HomePage() {
  // 2. Schéma de données structurées JSON-LD pour Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NEXOLIA CONSULTING",
    "image": "nexolia-consulting.com",
    "@id": "nexolia-consulting.com",
    "url": "nexolia-consulting.com",
    "telephone": "+21623267646", // Ajoutez votre numéro de téléphone professionnel ici
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pôle Technologique El Ghazala",
      "addressLocality": "Ariana",
      "postalCode": "2088",
      "addressCountry": "TN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.8625, // Coordonnées approximatives d'El Ghazala
      "longitude": 10.1878
    },
    "sameAs": [
      "https://www.linkedin.com/in/med-wahbi-salwej-692b7a282/?isSelfProfile=false" // Ajoutez vos réseaux sociaux ici
    ],
    "priceRange": "500$ to 100000$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "17:30"
    }
  }

  return (
    <>
      {/* Injection sécurisée du JSON-LD dans le head pour les robots SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Rendu du contenu interactif de la page */}
      <HomeContent />
    </>
  )
}
