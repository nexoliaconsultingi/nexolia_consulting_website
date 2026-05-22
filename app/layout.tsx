import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "@/components/ui/ClientLayout"
import logoNexolia from "@/public/logoNexo.png"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexolia-consulting.com"),
  title: {
    default: "NEXOLIA CONSULTING | Agence IT Tunisie & ESN Partenaire Tech en France",
    template: "%s | NEXOLIA",
  },
  description: "NEXOLIA : Société de développement informatique franco-tunisienne. Expert en création d'applications sur-mesure (SaaS, Web, Mobile), intégration de solutions Microsoft 365 (SPFx, Power Automate, Power BI) et formation PMP.",
 
 icons: {
    icon: "/logoNexo.png",
    shortcut: "/logoNexo.png",
    apple: "/logoNexo.png",
  },
 
 
  keywords: [
    // --- Requêtes ciblées en Tunisie (Local & Expertise) ---
    "boite de developpement logiciele tunisie", "agence des service informatique tunis", 
    "software tunisien company", "agence web tunisie seo", "ssii tunisie", "esn tunis",
    "developpement d'application mobile tunisie", "formation pmp tunis", "formation gestion de projet",
    
    // --- Requêtes ciblées en France (Nearshore & Partenariat B2B) ---
    "esn nearshore tunisie", "sous traitance informatique tunisie", "developpement logiciel offshore",
    "agence de developpement informatique france", "boite informatique tunisie export", 
    "prestataire microsoft 365 france", "consultant spfx remote", "expert power automate b2b",
    
    // --- Requêtes Métiers & Solutions Globales ---
    "site web responsive seo", "application mobile sur mesure", "plateforme saas",
    "developpement spfx personnalise", "dashboard power bi reporting", "ms project subscription edition"
  ],
  authors: [{ name: "Salwej Med.Wahbi", url: "nexolia-consulting.com" }],
  creator: "Salwej Med.Wahbi",
  publisher: "NEXOLIA",
  alternates: {
    canonical: "/",
    languages: {
      "fr-TN": "/tn",
      "fr-FR": "/fr",
    },
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "nexolia-consulting.com",
    title: "NEXOLIA | Société de Développement Informatique & Solutions Microsoft 365",
    description: "Votre partenaire IT de confiance en Tunisie et en France. Développement SaaS, applications mobiles sur-mesure et expertise Power Platform.",
    siteName: "NEXOLIA",
    images: [
      {
        url:"/logoNexo.png",
        width: 1200,
        height: 630,
        alt: "NEXOLIA - Services Informatiques, Solutions Microsoft et Formations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOLIA | Expert Tech (SaaS, Mobile, Microsoft 365)",
    description: "Accompagnement digital et développement logiciel de pointe pour entreprises en France et en Tunisie.",
    images:  ["/logoNexo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
