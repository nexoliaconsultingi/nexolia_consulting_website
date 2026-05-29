// app/layout.tsx
import type { Metadata, Viewport } from "next"
import "./globals.css"
import ClientLayout from "@/components/ui/ClientLayout"

// ========== VIEWPORT (Mobile-First Indexing) ==========
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#53828a",
}

// ========== METADATA PRINCIPALE ==========
export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexolia-consulting.com"),
  
  title: {
    default: "NEXOLIA CONSULTING | Agence IT Tunisie & ESN Partenaire Tech en France",
    template: "%s | NEXOLIA",
  },
  
  description: "NEXOLIA : Société de développement informatique franco-tunisienne. Expert en création d'applications sur-mesure (SaaS, Web, Mobile), intégration de solutions Microsoft 365 (SPFx, Power Automate, Power BI) et formation PMP.",

  alternates: {
    canonical: "https://www.nexolia-consulting.com",
    languages: {
      "fr": "https://www.nexolia-consulting.com",
      "en": "https://www.nexolia-consulting.com/en",
    },
  },

  icons: {
    icon: [
      {
        url: "/faveIconNexolia.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/faveIconNexolia.png",
    apple: "/faveIconNexolia.png",
  },

  manifest: "/site.webmanifest",

  keywords: [
    "agence IT Tunisie", "développement web Tunisie", "application mobile Tunisie",
    "Power BI Tunisie", "Microsoft 365 Tunisie", "SEO Tunisie", "développement SaaS Tunisie",
    "boite de developpement logiciele tunisie", "agence des service informatique tunis",
    "software tunisien company", "agence web tunisie seo", "ssii tunisie", "esn tunis",
    "developpement d'application mobile tunisie", "formation pmp tunis", "formation gestion de projet",
    "esn nearshore tunisie", "sous traitance informatique tunisie", "developpement logiciel offshore",
    "agence de developpement informatique france", "boite informatique tunisie export",
    "prestataire microsoft 365 france", "consultant spfx remote", "expert power automate b2b",
    "site web responsive seo", "application mobile sur mesure", "plateforme saas",
    "developpement spfx personnalise", "dashboard power bi reporting", "ms project subscription edition",
  ],

  authors: [{
    name: "Salwej Med.Wahbi",
    url: "https://www.nexolia-consulting.com",
  }],
  
  creator: "Salwej Med.Wahbi",
  publisher: "NEXOLIA",
  
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
  
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "ar_SA"],
    url: "https://www.nexolia-consulting.com",
    title: "NEXOLIA | Société de Développement Informatique & Solutions Microsoft 365",
    description: "Votre partenaire IT de confiance en Tunisie et en France. Développement SaaS, applications mobiles sur-mesure et expertise Power Platform.",
    siteName: "NEXOLIA",
    images: [
      {
        url: "https://www.nexolia-consulting.com/logoNexo.png",
        width: 1200,
        height: 630,
        alt: "NEXOLIA - Services Informatiques, Solutions Microsoft et Formations",
        type: "image/png",
      },
    ],
    emails: ["contact@nexolia-consulting.com"],
    phoneNumbers: ["+21623267646"],
    countryName: "Tunisia",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "NEXOLIA | Expert Tech (SaaS, Mobile, Microsoft 365)",
    description: "Accompagnement digital et développement logiciel de pointe pour entreprises en France et en Tunisie.",
    images: ["https://www.nexolia-consulting.com/logoNexo.png"],
    site: "@nexoliaconsulting",
    creator: "@nexoliaconsulting",
  },

  verification: {
    google: "votre-code-google-verification", // ⚠️ À remplacer par votre vrai code
  },

  category: "technology",
  
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  
  referrer: "strict-origin-when-cross-origin",
  
  colorScheme: "light",
  
  appleWebApp: {
    title: "NEXOLIA Consulting",
    statusBarStyle: "black-translucent",
    capable: true,
  },
}

// ========== ROOT LAYOUT ==========
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Optimisations performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Thème et PWA */}
        <meta name="theme-color" content="#53828a" />
        <meta name="msapplication-TileColor" content="#53828a" />
        <meta name="msapplication-TileImage" content="/favicon-144.png" />
      </head>
      
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>

        {/* ========== JSON-LD FUSIONNÉ (LocalBusiness + BreadcrumbList) ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.nexolia-consulting.com/#localbusiness",
                  "name": "NEXOLIA CONSULTING",
                  "alternateName": "NEXOLIA",
                  "url": "https://www.nexolia-consulting.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.nexolia-consulting.com/logoNexo.png",
                    "width": "1200",
                    "height": "630",
                  },
                  "image": "https://www.nexolia-consulting.com/logoNexo.png",
                  "description": "Agence IT spécialisée en développement SaaS, applications mobiles, solutions Microsoft 365, Power BI et SEO.",
                  "email": "contact@nexolia-consulting.com",
                  "telephone": "+21623267646",
                  "priceRange": "$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Pôle Technologique El Ghazala",
                    "addressLocality": "Ariana",
                    "postalCode": "2088",
                    "addressCountry": {
                      "@type": "Country",
                      "name": "Tunisie"
                    }
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 36.8625,
                    "longitude": 10.1878
                  },
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
                  },
                  "sameAs": [
                    "https://www.instagram.com/nexoliaconsulting/",
                    "https://www.facebook.com/profile.php?id=61589281981252"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "telephone": "+21623267646",
                    "email": "contact@nexolia-consulting.com",
                    "availableLanguage": ["French", "English", "Arabic"],
                    "areaServed": ["TN", "FR"]
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "Tunisie" },
                    { "@type": "Country", "name": "France" }
                  ],
                  "knowsAbout": [
                    "Développement Web", "Applications Mobiles", "SaaS", "Power BI",
                    "Microsoft 365", "SPFx", "SEO", "Power Automate", "ERP", "SharePoint"
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Accueil",
                      "item": "https://www.nexolia-consulting.com"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  )
}