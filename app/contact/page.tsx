// app/contact/page.tsx
import type { Metadata } from "next"
import ContactPageContent from "@/components/ContactPageContent"

// Métadonnées SEO avec vos vraies coordonnées
export const metadata: Metadata = {
  title: "Contactez NEXOLIA CONSULTING | Pôle Technique El Ghazela, Tunis",
  description: "Contactez NEXOLIA CONSULTING au +216 23 267 646. Experts en développement web, mobile, SaaS et Microsoft 365. Situé au Pôle Technique El Ghazela, Tunis. Devis gratuit sous 24h.",
  keywords: "NEXOLIA CONSULTING contact, Pôle Technique El Ghazela, développeur Tunis, agence IT Tunis, +216 23 267 646, contact@nexolia-consulting.com, développement web Tunisie",
  alternates: {
    canonical: "https://nexolia-consulting.com/contact",
  },
  openGraph: {
    title: "NEXOLIA CONSULTING - Contactez nos experts IT à Tunis",
    description: "Besoin d'une solution digitale ? Contactez NEXOLIA CONSULTING au Pôle Technique El Ghazela. Réponse sous 2h pour le support, devis gratuit sous 24h.",
    url: "https://nexolia-consulting.com/contact",
    siteName: "NEXOLIA CONSULTING",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "NEXOLIA CONSULTING - Bureau Pôle Technique El Ghazela Tunis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOLIA CONSULTING | Contact Tunis",
    description: "+216 23 267 646 | contact@nexolia-consulting.com | Pôle Technique El Ghazela",
    images: ["/twitter-contact.jpg"],
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
  // Verification pour Google Search Console
  verification: {
    google: "votre-code-verification",
  },
}

export default function ContactPage() {

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexolia-consulting.com/#organization",
      "name": "NEXOLIA CONSULTING",
      "alternateName": "Nexolia Consulting",
      "url": "https://nexolia-consulting.com",
      "logo": "https://nexolia-consulting.com/logo.png",
      "image": "https://nexolia-consulting.com/og-image.jpg",
      "description": "Cabinet de conseil et développement IT basé au Pôle Technique El Ghazela, Tunis. Experts en web, mobile, SaaS, Microsoft 365 et Power Platform.",
      "email": "contact@nexolia-consulting.com",
      "telephone": "+216 23 267 646",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pôle Technique El Ghazela, Rue de la Technologie",
        "addressLocality": "El Ghazela",
        "addressRegion": "Ariana",
        "postalCode": "2088",
        "addressCountry": "TN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.8805,
        "longitude": 10.1891
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+216 23 267 646",
          "email": "contact@nexolia-consulting.com",
          "availableLanguage": ["French", "English", "Arabic"],
          "hoursAvailable": "Mo-Fr 08:00-17:00",
          "areaServed": ["TN", "FR"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "technical support",
          "telephone": "+216 92 233 647",  // correspond au texte "Urgence"
          "email": "support@nexolia-consulting.com",
          "availableLanguage": ["French", "English"],
          "hoursAvailable": "24/7",
          "contactOption": "TollFree"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "contact@nexolia-consulting.com",
          "availableLanguage": ["French", "English"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/nexolia-consulting",
        "https://www.facebook.com/profile.php?id=61589281981252",
        "https://www.instagram.com/nexoliaconsulting/"
      ],
      "award": ["Certifié ISO 27001", "RGPD compliant"],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement Web & Mobile",
            "url": "https://nexolia-consulting.com/services/web-mobile"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solutions Microsoft 365 & Power Platform",
            "url": "https://nexolia-consulting.com/services/microsoft-365"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plateformes SaaS & Cloud",
            "url": "https://nexolia-consulting.com/services/saas"
          }
        }
      ],
      "potentialAction": [
        {
          "@type": "CommunicateAction",
          "name": "Appeler",
          "target": "tel:+21623267646"
        },
        {
          "@type": "CommunicateAction",
          "name": "Envoyer un email",
          "target": "mailto:contact@nexolia-consulting.com"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nexolia-consulting.com/#localbusiness",
      "name": "NEXOLIA CONSULTING - Tunis",
      "description": "Bureau principal au Pôle Technique El Ghazela, hub technologique de Tunis",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pôle Technique El Ghazela, Rue de la Technologie",
        "addressLocality": "El Ghazela",
        "addressRegion": "Ariana",
        "postalCode": "2088",
        "addressCountry": "TN"
      },
      "geo": { "@id": "https://nexolia-consulting.com/#organization#geo" },
      "telephone": "+216 23 267 646",
      "priceRange": "€€",
      "openingHours": ["Mo-Th 09:00-18:00", "Fr 09:00-17:00", "Sa 10:00-14:00"]
    },
    {
      "@type": "ContactPage",
      "@id": "https://nexolia-consulting.com/contact/#webpage",
      "url": "https://nexolia-consulting.com/contact",
      "name": "Contact - NEXOLIA CONSULTING",
      "description": "Contactez notre équipe d'experts IT à Tunis pour vos projets digitaux",
      "isPartOf": { "@id": "https://nexolia-consulting.com/#website" },
      "breadcrumb": { "@id": "https://nexolia-consulting.com/contact/#breadcrumb" },
      "primaryImageOfPage": "https://nexolia-consulting.com/contact-og.jpg"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://nexolia-consulting.com/contact/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nexolia-consulting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://nexolia-consulting.com/contact" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://nexolia-consulting.com/contact/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Où se situe le bureau de NEXOLIA CONSULTING à Tunis ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Notre bureau est situé au Pôle Technique El Ghazela, Rue de la Technologie, El Ghazela, Ariana, Tunisie. C'est le principal hub technologique de Tunis, facilement accessible en transports (bus, TGM, navette)."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les horaires d'ouverture et de support ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nous sommes ouverts du lundi au jeudi de 9h à 18h, le vendredi de 9h à 17h, et le samedi de 10h à 14h. Le support technique est disponible jusqu'à 20h en semaine, et une permanence 24/7 est assurée pour les urgences."
          }
        },
        {
          "@type": "Question",
          "name": "Comment obtenir un devis gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vous pouvez remplir le formulaire de contact sur cette page. Notre équipe vous répondra sous 24h avec une première analyse gratuite de votre projet."
          }
        }
      ]
    },
    {
      "@type": "ContactForm",
      "@id": "https://nexolia-consulting.com/contact/#contactform",
      "name": "Formulaire de contact NEXOLIA",
      "description": "Demandez un devis gratuit ou posez vos questions via ce formulaire",
      "potentialAction": {
        "@type": "SendAction",
        "name": "Envoyer la demande",
        "target": "https://nexolia-consulting.com/api/contact"
      }
    }
  ]
}
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageContent />
    </>
  )
}