import type { Metadata } from "next";
import AboutContent from "../../components/AboutContent";

// URL de base (à mettre dans .env si possible)
const SITE_URL = "https://nexolia-consulting.com"; // À adapter

export const metadata: Metadata = {
  title: "Qui Sommes-Nous ? | Nexolia Consulting – ESN & Cabinet Conseil IT Tunisie Paris",
  description:
    "Expert en transformation digitale, Nexolia Consulting (Tunis & Paris) accompagne les entreprises avec des solutions SaaS sur mesure, l'écosystème Microsoft 365, l'infrastructure Cisco certifiée et une gouvernance PMO. Découvrez notre histoire, notre stack technologique et nos valeurs.",
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      fr: `${SITE_URL}/about`,
      // si vous avez une version anglaise : en: `${SITE_URL}/en/about`,
    },
  },
  openGraph: {
    title: "Nexolia Consulting – À propos de notre cabinet d'ingénierie IT",
    description:
      "De l'idée en 2020 à la création officielle en 2025. Rencontrez nos experts (React, Microsoft, Cisco, PMP) et notre direction. +50 clients satisfaits, 100% projets livrés.",
    url: `${SITE_URL}/about`,
    siteName: "Nexolia Consulting",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `${SITE_URL}/images/og-about.jpg`, // créez cette image (1200x630)
        width: 1200,
        height: 630,
        alt: "Équipe Nexolia Consulting - Transformation digitale",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "agence IT Tunisie",
    "cabinet conseil transformation digitale",
    "ESN France Tunisie",
    "développement sur mesure",
    "Microsoft 365 Tunis",
    "gouvernance PMO",
    "stack technologique",
    "Nexolia Consulting",
  ],
  authors: [{ name: "Nexolia Consulting" }],
  category: "Entreprise IT",
};

export default function AboutPage() {
  // Construction du JSON-LD avancé (graphe de données)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "À propos de Nexolia Consulting",
        description: metadata.description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        mainEntity: {
          "@id": `${SITE_URL}/#organization`,
        },
        dateModified: "2026-01-15T10:00:00+01:00",
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "NEXOLIA Consulting",
        alternateName: "Nexolia",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-nexolia.png`,
        foundingDate: "2025",
        foundingLocation: "Tunisie",
        founder: [
          { "@type": "Person", name: "Mohamed Wahbi Salwej" },
        ],
        employees: 10, // mis à jour selon votre équipe
        knowsAbout: [
          "Transformation digitale",
          "Solutions SaaS",
          "Microsoft 365",
          "Power Platform",
          "Développement React/Next.js",
          "Infrastructure Cisco",
          "Gouvernance PMO",
          "Data visualisation Power BI",
        ],
        knowsLanguage: ["Français", "Anglais", "Arabe"],
        areaServed: [
          { "@type": "Country", name: "Tunisie" },
          { "@type": "Country", name: "France" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pôle Technologique El Ghazala",
          addressLocality: "Ariana",
          postalCode: "2088",
          addressCountry: "TN",
        },

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+216 23 267 646",
          email: "contact@nexolia-consulting.com",
          contactType: "customer service",
          availableLanguage: ["French", "English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services IT Nexolia",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Développement & Innovation",
                description: "Applications web/mobile, PWA, microservices",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digitalisation & Microsoft 365",
                description: "Power Automate, SharePoint, Power BI",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Stratégie & Organisation",
                description: "PMO, reporting, transformation agile",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Infrastructure & Gouvernance",
                description: "Réseaux, cloud hybride, sécurité",
              },
            },
          ],
        },
      },



      // FAQ enrichie (si vous avez une section FAQ dans AboutContent)
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Pourquoi faire confiance à Nexolia ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Plus de 10 ans d'expérience en data visualisation, +50 clients satisfaits, 100% sur mesure.",
            },
          },
          {
            "@type": "Question",
            name: "Combien coûte un dashboard sur mesure ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les tarifs varient selon la complexité. Contactez-nous pour un devis gratuit.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps pour développer un projet complet ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "En moyenne 3 à 6 mois selon les spécifications. Nous travaillons en agile.",
            },
          },
          {
            "@type": "Question",
            name: "Travaillez-vous avec les startups ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, nous accompagnons les startups avec des solutions adaptées à leur budget et croissance.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}