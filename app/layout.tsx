import type { Metadata, Viewport } from "next"
import "./globals.css"
import ClientLayout from "@/components/ui/ClientLayout"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#53828a",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://nexolia-consulting.com"),

  title: {
    default:
      "NEXOLIA CONSULTING | Agence IT Tunisie & ESN Partenaire Tech en France",
    template: "%s | NEXOLIA",
  },

  description:
    "NEXOLIA : Société de développement informatique franco-tunisienne. SaaS, Web, Mobile, Microsoft 365, Power BI, ERP et SEO.",

  alternates: {
    canonical: "https://nexolia-consulting.com",
    languages: {
      fr: "https://nexolia-consulting.com",
      en: "https://nexolia-consulting.com/en",
    },
  },

  icons: {
    icon: [{ url: "/faveIconNexolia.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/faveIconNexolia.png",
    apple: "/faveIconNexolia.png",
  },

  manifest: "/site.webmanifest",

  keywords: [
    "agence IT Tunisie",
    "développement web Tunisie",
    "application mobile Tunisie",
    "Power BI Tunisie",
    "Microsoft 365 Tunisie",
    "SEO Tunisie",
    "développement SaaS Tunisie",
    "esn tunisie",
    "ssii tunisie",
    "agence web france tunisie",
    "erp tunisie",
    "consulting IT",
  ],

  authors: [
    {
      name: "Salwej Med.Wahbi",
      url: "https://nexolia-consulting.com",
    },
  ],

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
    url: "https://nexolia-consulting.com",
    siteName: "NEXOLIA",
    title:
      "NEXOLIA | Société de Développement Informatique & Solutions Digitales",
    description:
      "Développement SaaS, applications mobiles, ERP, Power BI et Microsoft 365.",
    images: [
      {
        url: "https://nexolia-consulting.com/logoNexo.png",
        width: 1200,
        height: 630,
        alt: "NEXOLIA CONSULTING",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NEXOLIA CONSULTING",
    description: "Expert SaaS, ERP, Mobile et Microsoft 365",
    images: ["https://nexolia-consulting.com/logoNexo.png"],
  },

  verification: {
    google: "votre-code-google-verification",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        <meta name="theme-color" content="#53828a" />
      </head>

      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://nexolia-consulting.com/#website",
                  url: "https://nexolia-consulting.com",
                  name: "NEXOLIA CONSULTING",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://nexolia-consulting.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },

                {
                  "@type": "Service",
                  "@id": "https://nexolia-consulting.com/#erp",
                  "name": "ERP & Digitalisation des Entreprises",
                  "description": "Analyse gratuite + développement ERP + consulting + suivi.",
                  "image": "https://nexolia-consulting.com/new/erp.png",
                },

                {
                  "@type": "LocalBusiness",
                  "@id":
                    "https://nexolia-consulting.com/#localbusiness",
                  name: "NEXOLIA CONSULTING",
                  url: "https://nexolia-consulting.com",
                  image:
                    "https://nexolia-consulting.com/logoNexo.png",
                  email: "contact@nexolia-consulting.com",
                  telephone: "+21623267646",
                  priceRange: "$",

                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Pôle Technologique El Ghazala",
                    addressLocality: "Ariana",
                    postalCode: "2088",
                    addressCountry: "Tunisie",
                  },

                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 36.8625,
                    longitude: 10.1878,
                  },

                  "openingHoursSpecification": [
                    {
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
                  ],

                  sameAs: [
                    "https://www.instagram.com/nexoliaconsulting/",
                    "https://www.facebook.com/profile.php?id=61589281981252",
                  ],

                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: "+21623267646",
                    email: "contact@nexolia-consulting.com",
                    availableLanguage: ["French", "English", "Arabic"],
                  },

                  knowsAbout: [
                    "Développement Web",
                    "Applications Mobiles",
                    "SaaS",
                    "ERP",
                    "Power BI",
                    "Microsoft 365",
                    "SEO",
                  ],
                },

                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Accueil",
                      item: "https://nexolia-consulting.com",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}