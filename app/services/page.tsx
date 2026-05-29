import type { Metadata } from "next"
import ServicesContent from "../../components/ServicesContent"

export const metadata: Metadata = {
  title: "Services IT | Développement Web, Mobile, SaaS & Expert Microsoft 365 | NEXOLIA",
  description: "Découvrez nos prestations : applications web responsives optimisées SEO, applications mobiles sur-mesure, plateformes SaaS complexes, intégration Microsoft 365 (SPFx, Power Automate, Power BI), CRM/ERP et UI/UX Design.",
  alternates: {
    canonical: "https://nexolia-consulting.com/services",
    languages: {
      fr: "https://nexolia-consulting.com/services",
      en: "https://nexolia-consulting.com/en/services",
    },
  },
  openGraph: {
    title: "Services Informatiques & Ingénierie Logicielle | NEXOLIA CONSULTING",
    description: "Solutions technologiques sur-mesure pour PME et grands comptes. Externalisation Nearshore et conseil en transformation digitale.",
    url: "https://nexolia-consulting.com/services",
    type: "website",
    locale: "fr_FR",
    siteName: "NEXOLIA",
    images: [
      {
        url: "https://nexolia-consulting.com/logoNexo.png",
        width: 1200,
        height: 630,
        alt: "Services NEXOLIA - Développement et solutions Microsoft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services IT | NEXOLIA Consulting",
    description: "Développement web/mobile, SaaS, Microsoft 365, design et support.",
    images: ["https://nexolia-consulting.com/logoNexo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function ServicesPage() {
  const allServices = [
    {
      name: "Développement Web & Mobile sur-mesure",
      description: "Création d'applications web et mobiles natives intégrant les technologies Next.js, Flutter et React Native avec une optimisation SEO native.",
      url: "https://nexolia-consulting.com/services/developpement-web-mobile",
    },
    {
      name: "Solutions Microsoft 365 & Power Platform",
      description: "Développement SPFx, automatisation Power Automate, dashboards Power BI, et intégration SharePoint.",
      url: "https://nexolia-consulting.com/services/microsoft-365",
    },
    {
      name: "Solutions SaaS",
      description: "Plateformes SaaS scalables et sécurisées pour votre croissance.",
      url: "https://nexolia-consulting.com/services/saas",
    },
    {
      name: "Design & Expérience",
      description: "Design exceptionnel et contenu visuel professionnel qui convertit.",
      url: "https://nexolia-consulting.com/services/design",
    },
    {
      name: "Solutions Personnalisées",
      description: "Développement sur mesure pour vos besoins spécifiques.",
      url: "https://nexolia-consulting.com/services/solutions-personnalisees",
    },
    {
      name: "Maintenance & Support",
      description: "Support technique et évolution continue pour votre tranquillité d'esprit.",
      url: "https://nexolia-consulting.com/services/maintenance-support",
    },
  ];

  const offerCatalog = allServices.map((service) => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": service.name,
      "description": service.description,
      "url": service.url,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Services Informatiques et Développement Logiciel",
        "provider": {
          "@type": "LocalBusiness",
          "name": "NEXOLIA CONSULTING",
          "url": "https://nexolia-consulting.com",
        },
        "areaServed": [
          { "@type": "Country", "name": "Tunisie" },
          { "@type": "Country", "name": "France" },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catalogue de Solutions Digitales",
          "itemListElement": offerCatalog,
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://nexolia-consulting.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nexolia-consulting.com/services" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ServicesContent />
    </>
  );
}