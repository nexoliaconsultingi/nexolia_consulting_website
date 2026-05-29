"use client"

import { useState } from "react"
import {
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Users,
  Zap,
  Target,
  Eye,
  Code,
  Rocket,
  Folder,
  Layers,
  Building2,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import Process from "@/components/ui/Process"
import SurFooter from "@/components/ui/SurFooter"
import QuoteRequestButton from "@/components/ui/QuoteRequestButton"
import { useRouter } from "next/navigation"
import PortfolioContent from "@/components/ui/PortfolioContent"
import Approche from "@/components/ui/Approche"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/portfolio")
  }

 const filters = [
  {
    id: "all",
    label: "Tous les Projets",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    id: "erp",
    label: "ERP",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    id: "spfx",
    label: "Solution Microsoft SPFX",
    icon: <Code className="w-4 h-4" />,
  },
  {
    id: "mobile",
    label: "Apps Mobile",
    icon: <Smartphone className="w-4 h-4" />,
  },
  {
    id: "saas",
    label: "Solutions SaaS",
    icon: <Rocket className="w-4 h-4" />,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: <ShoppingCart className="w-4 h-4" />,
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    id: "bi",
    label: "Power BI Dashboard",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    id: "WEB",
    label: "Salon de coif",
    icon: <Globe className="w-4 h-4" />,
  },
]

  // data/projects.ts
  interface Project {
    id: string;
    title: string;
    category: string;
    client: string;
    description: string;
    image: string;
    popular?: boolean;
    gradient: string;
    features: string[];
    technologies: string[];
    results: {
      metric1: { value: string; label: string };
      metric2: { value: string; label: string };
      metric3: { value: string; label: string };
    };
    captures?: { src: string; description: string }[];
  }

  const projects: Project[] = [
    {
      id: "geld-pilot",
      title: "Geld Pilot",
      category: "spfx",
      client: "TenStep",
      description:
        "ERP complet pour gérer les activités financières des PME/PMI via Power Apps, Power Automate, SPFx, Dataverse, Node.js et Flask Python. Gestion clients, factures, charges fixes et variables, revenus mensuels/annuels, résultats financiers et prédictions via IA. Inclut chatbots techniques et d'analyse de données, ainsi qu’un dashboard Power BI pour visualisation temps réel.",
      image: "/portfolio/g2.jpg",
      popular: true,
      gradient: "from-green-500 to-blue-500",
      features: [
        "Gestion complète des finances",
        "Prévision IA des résultats financiers",
        "Chatbot technique et analytique",
        "Dashboard Power BI temps réel"
      ],
      technologies: [
        "Power Apps",
        "Power Automate",
        "SPFx",
        "Dataverse",
        "Node.js",
        "Flask Python",
        "Power BI",
        "IA"
      ],
      results: {
        metric1: { value: "100%", label: "Gestion automatisée" },
        metric2: { value: "10k+", label: "Transactions traitées" },
        metric3: { value: "99.9%", label: "Disponibilité système" }
      },
      captures: [
        { src: "/portfolio/g1.jpg", description: "Page d’accueil de la plateforme" },

        { src: "/portfolio/g2.jpg", description: "Interface de connexion et d’inscription avec vérification reCAPTCHA" },

        { src: "/portfolio/g3.jpg", description: "Interface de support technique pour l’approbation des accès" },

        { src: "/portfolio/g4.jpg", description: "Message Outlook personnalisé pour les utilisateurs ayant obtenu les droits d’accès à la plateforme" },

        { src: "/portfolio/g5.jpg", description: "Système complet de gestion des charges de l’entreprise" },

        { src: "/portfolio/g6.jpg", description: "Gestion des factures et des revenus mensuels avec système de filtrage par commande vocale" },

        { src: "/portfolio/g7.jpg", description: "Chatbot intelligent pour l’assistance technique et la génération de rapports PDF" },

        { src: "/portfolio/g8.jpg", description: "Système de prédiction des activités financières futures basé sur l’intelligence artificielle" },

        { src: "/portfolio/g9.jpg", description: "Interface de visualisation et de prévision des activités financières futures" },

        { src: "/portfolio/g10.jpg", description: "Tableau de prévision et d’analyse des activités financières futures" },

        { src: "/portfolio/g11.jpg", description: "Tableau de bord analytique Power BI" },

        { src: "/portfolio/g12.jpg", description: "Dashboard interactif Power BI pour l’analyse des données" }
      ]
    },
    {
      id: "erp-medical",
      title: "ERP Gestion Cabinet Médical",
      category: "erp",
      client: "Clinique Santé",
      description:
        "ERP pour cabinets médicaux, couvrant la gestion des patients, rendez-vous, médicaments, matériels et personnel. Solution sécurisée avec dashboard pour responsables afin d’avoir une vue complète des activités et ressources.",
      image: "/erp/1.png",
      gradient: "from-purple-500 to-pink-500",
      features: ["Gestion patients et rendez-vous", "Stocks médicaux", "Gestion du personnel", "Dashboard analytique sécurisé"],
      technologies: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "Power BI"],
      results: {
        metric1: { value: "200%", label: "Efficacité améliorée" },
        metric2: { value: "500+", label: "Patients gérés" },
        metric3: { value: "98%", label: "Satisfaction client" }
      },
      captures: [
        { src: "/erp/1.png", description: "" },
        { src: "/erp/2.png", description: "" },
        { src: "/erp/3.png", description: "" },
        { src: "/erp/4.png", description: "" },
        { src: "/erp/5.png", description: "" },
        { src: "/erp/6.png", description: "" },
        { src: "/erp/7.png", description: "" },
        { src: "/erp/8.png", description: "" },
        { src: "/erp/9.png", description: "" },
        { src: "/erp/10.png", description: "" },
        { src: "/erp/11.png", description: "" },
        { src: "/erp/12.png", description: "" },
        { src: "/erp/13.png", description: "" },
        { src: "/erp/14.png", description: "" },
        { src: "/erp/15.png", description: "" },
        { src: "/erp/16.png", description: "" },
        { src: "/erp/17.png", description: "" },
        { src: "/erp/18.png", description: "" },
        { src: "/erp/19.png", description: "" },
        { src: "/erp/20.png", description: "" },
        { src: "/erp/21.png", description: "" },
        { src: "/erp/22.png", description: "" },
        { src: "/erp/23.png", description: "" },
        { src: "/erp/24.png", description: "" },
        { src: "/erp/25.png", description: "" },
        { src: "/erp/26.png", description: "" },
        { src: "/erp/27.png", description: "" },
        { src: "/erp/28.png", description: "" },

   
      ]
    },
    {
      id: "salon-coiffure",
      title: "Solution Salon de Coiffure",
      category: "WEB",
      client: "Beauté & Style",
      description:
        "Solution web responsive pour salons de coiffure avec système de réservation, gestion clients, personnel, produits, matériels, revenus et charges. Dashboard sécurisé pour la responsable permettant un contrôle total des activités.",
      image: "/salonCoif/0.png",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Page web responsive", "Système de réservation", "Gestion du personnel", "Dashboard analytique sécurisé"],
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Power BI"],
      results: {
        metric1: { value: "150%", label: "Efficacité opérationnelle" },
        metric2: { value: "200+", label: "Clients actifs" },
        metric3: { value: "95%", label: "Satisfaction client" }
      },
      captures: [
        { src: "/salonCoif/1.png", description: "" },
        { src: "/salonCoif/2.png", description: "" },
        { src: "/salonCoif/3.png", description: "" },
        { src: "/salonCoif/4.png", description: "" },
        { src: "/salonCoif/5.png", description: "" },
        { src: "/salonCoif/6.png", description: "" },
        { src: "/salonCoif/7.png", description: "" },
        { src: "/salonCoif/8.png", description: "" },
        { src: "/salonCoif/9.png", description: "" },
        { src: "/salonCoif/10.png", description: "" },
        { src: "/salonCoif/12.png", description: "" },
        { src: "/salonCoif/13.png", description: "" },
        { src: "/salonCoif/14.png", description: "" },
        { src: "/salonCoif/15.png", description: "" }, 
      ]
    },
    {
      id: "saas-finances",
      title: "SaaS Gestion Financière PME",
      category: "saas",
      client: "PME & PMI",
      description:
        "Solution SaaS pour gérer les activités financières des PME et PMI, incluant la visualisation des données via dashboard et prédictions IA pour anticiper les résultats futurs.",
      image: "/saas/1.png",
      gradient: "from-blue-500 to-purple-500",
      features: ["Dashboard analytique", "Prédiction IA", "Gestion multi-sociétés", "Reporting financier avancé"],
      technologies: ["React", "Node.js", "PostgreSQL", "Power BI", "Python IA"],
      results: {
        metric1: { value: "120%", label: "Gain temps gestion financière" },
        metric2: { value: "50+", label: "PME connectées" },
        metric3: { value: "99%", label: "Disponibilité service" }
      },
      captures: [
        { src: "/saas/1.png", description: "" },
        { src: "/saas/2.png", description: "" },
        { src: "/saas/3.png", description: "" },
        { src: "/saas/4.png", description: "" },
        { src: "/saas/5.png", description: "" },
        { src: "/saas/6.png", description: "" },
        { src: "/saas/7.png", description: "" },
        { src: "/saas/8.png", description: "" },
        { src: "/saas/saas1.webp", description: "" },
        { src: "/saas/saas3.webp", description: "" },  
        
      ]
    },
    {
      id: "edu-app",
      title: "Application Mobile Université",
      category: "mobile",
      client: "Université Digital Academy",
      description:
        "Application mobile pour la gestion universitaire, incluant cours, classes, départements, projets étudiants, résultats d’exercices, et suivi personnalisé via IA pour améliorer la réussite des étudiants.",
      image: "/mobileApp/0.png",
      gradient: "from-red-500 to-pink-500",
      features: ["Gestion des cours et classes", "Suivi personnalisé via IA", "Projets étudiants", "Analyse performance"],
      technologies: ["React Native", "Firebase", "Node.js", "Python IA", "TailwindCSS"],
      results: {
        metric1: { value: "300%", label: "Suivi académique amélioré" },
        metric2: { value: "1k+", label: "Étudiants actifs" },
        metric3: { value: "4.9/5", label: "Satisfaction utilisateurs" }
      },
      captures: [
        { src: "/mobileApp/1.png", description: "" },
        { src: "/mobileApp/2.png", description: "" },
        { src: "/mobileApp/3.png", description: "" },
        { src: "/mobileApp/4.png", description: "" },
        { src: "/mobileApp/5.png", description: "" },
        { src: "/mobileApp/6.png", description: "" },
        { src: "/mobileApp/7.png", description: "" },
        { src: "/mobileApp/8.png", description: "" },
        { src: "/mobileApp/9.png", description: "" },
        { src: "/mobileApp/10.png", description: "" },
      ]
    },
    {
  id: "expert-demenagement",
  title: "Expert Déménagement Tunisie",
  category: "enterprise",
  client: "Agence de Déménagement Tunisie",
  description:
    "Système digital complet pour une agence de déménagement en Tunisie, incluant un site web optimisé SEO, une plateforme client et un dashboard administratif avancé pour la gestion des opérations, devis, facturation et suivi des clients. Le système intègre une authentification sécurisée avec reCAPTCHA, validation par code email, tokens signés et une interface entièrement responsive.",
  image: "/expertDemenagement/2.png",
  gradient: "from-blue-600 to-cyan-500",
  features: [
    "Dashboard administratif avancé",
    "Gestion des devis et facturation",
    "Signature électronique intégrée",
    "Authentification sécurisée avec reCAPTCHA",
    "Validation par code email",
    "Gestion des clients et demandes",
    "SEO optimisé",
    "Responsive Design",
    "Impression des documents en un clic",
    "Système sécurisé avec tokens signés"
  ],
  technologies: [
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
    "TailwindCSS",
    "JWT",
    "reCAPTCHA",
    "Nodemailer",
    "Cloudinary",
    "TypeScript"
  ],
  results: {
    metric1: { value: "95%", label: "Automatisation des opérations" },
    metric2: { value: "1000+", label: "Demandes clients traitées" },
    metric3: { value: "4.9/5", label: "Satisfaction clients" }
  },
  captures: [
    { src: "/expertDemenagement/1.png", description: "" },
    { src: "/expertDemenagement/2.png", description: "" },
    { src: "/expertDemenagement/3.png", description: "" },
    { src: "/expertDemenagement/4.png", description: "" },
    { src: "/expertDemenagement/5.png", description: "" },
    { src: "/expertDemenagement/6.png", description: "" },
    { src: "/expertDemenagement/7.png", description: "" },
    { src: "/expertDemenagement/8.png", description: "" },
    { src: "/expertDemenagement/9.png", description: "" },
    { src: "/expertDemenagement/10.png", description: "" }
  ]
},
{
  id: "powerbi-finance-dashboard",
  title: "Dashboard Power BI Finance",
  category: "bi",
  client: "Entreprise Financière",
  description:
    "Dashboard Power BI professionnel dédié à l’analyse et au suivi des activités financières de l’entreprise. La solution permet de visualiser les revenus, charges, bénéfices, performances financières mensuelles et annuelles à travers des graphiques interactifs et des indicateurs intelligents pour améliorer la prise de décision.",

  image: "/powerBI/1.png",
  gradient: "from-green-500 to-emerald-700",

  features: [
    "Analyse des revenus et charges",
    "Suivi financier mensuel et annuel",
    "Graphiques interactifs Power BI",
    "Indicateurs KPI en temps réel",
    "Analyse des bénéfices et pertes",
    "Rapports financiers automatisés",
    "Comparaison des performances",
    "Filtres dynamiques et exportation",
    "Visualisation des tendances financières",
    "Aide à la prise de décision stratégique"
  ],

  technologies: [
    "Power BI",
    "SQL Server",
    "Excel",
    "DAX",
    "Power Query",
    "Microsoft Azure",
    "Data Analytics"
  ],

  results: {
    metric1: {
      value: "90%",
      label: "Analyse financière automatisée"
    },
    metric2: {
      value: "12M",
      label: "Suivi mensuel des opérations"
    },
    metric3: {
      value: "Real-Time",
      label: "Visualisation des KPI"
    }
  },

  captures: [
    { src: "/powerBI/1.png", description: "" },
    { src: "/powerBI/2.png", description: "" },
    { src: "/powerBI/3.png", description: "" },
    { src: "/powerBI/4.png", description: "" },
    { src: "/powerBI/5.png", description: "" },
    { src: "/powerBI/6.png", description: "" },
    { src: "/powerBI/7.png", description: "" },
    { src: "/powerBI/8.png", description: "" },

  ]
},
{
  id: "ecommerce-platform",
  title: "Plateforme E-Commerce Intelligente avec Paiement en Ligne et Dashboard Administratif",
  category: "ecommerce",

  client: "Entreprise E-Commerce",

  description:
    "Plateforme E-Commerce moderne et hautement sécurisée permettant la vente en ligne avec intégration du système de paiement Stripe, authentification MFA (Multi-Factor Authentication), gestion avancée des utilisateurs, dashboard administratif intelligent et architecture optimisée SEO grâce au Server-Side Rendering (SSR) de Next.js. La solution offre une expérience utilisateur fluide, des performances élevées, une gestion multi-base de données ainsi qu’une infrastructure scalable adaptée aux grandes plateformes digitales.",

  image: "/ecommerce/2.png",

  gradient: "from-orange-500 to-red-700",

  features: [
    "Système de paiement sécurisé Stripe",
    "Authentification MFA (Multi-Factor Authentication)",
    "Dashboard administrateur intelligent",
    "Gestion des produits et catégories",
    "Gestion des commandes et livraisons",
    "Gestion des clients et utilisateurs",
    "SEO optimisé avec Server-Side Rendering Next.js",
    "Architecture Multi Database Access",
    "Recherche intelligente et filtres dynamiques",
    "Système de notifications en temps réel",
    "Gestion des promotions et coupons",
    "Analytics et statistiques commerciales",
    "Optimisation des performances et du chargement",
    "Responsive Design Mobile & Desktop",
    "Sécurité avancée et protection des données"
  ],

  technologies: [
    "Next.js",
    "React.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "Stripe",
    "JWT",
    "MFA Security",
    "Tailwind CSS",
    "Redis",
    "Docker",
    "Vercel",
    "TypeScript"
  ],

  results: {
    metric1: {
      value: "99.9%",
      label: "Disponibilité de la plateforme"
    },

    metric2: {
      value: "70%",
      label: "Amélioration des performances SEO"
    },

    metric3: {
      value: "Real-Time",
      label: "Gestion des commandes et paiements"
    }
  },

  captures: [
    { src: "/ecommerce/1.png", description: "" },
    { src: "/ecommerce/2.png", description: "" },
    { src: "/ecommerce/3.png", description: "" },
    { src: "/ecommerce/4.png", description: "" },
    { src: "/ecommerce/5.png", description: "" },
    { src: "/ecommerce/6.png", description: "" },
    { src: "/ecommerce/7.png", description: "" },
    { src: "/ecommerce/8.png", description: "" },
    { src: "/ecommerce/9.png", description: "" },
    { src: "/ecommerce/10.png", description: "" }
  ]
},
  
  ];


  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#53828a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b05f76]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] mb-6">
              <Folder className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold">Portfolio d'Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold text-[#53828a] mb-6">
              Portfolio de{" "}
              <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent block">
                Réalisations
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#727683] mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets les plus{" "}
              <span className="font-semibold text-[#53828a]">innovants</span> et les résultats
              exceptionnels obtenus pour nos clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
             

            </div>
          </div>
        </div>
      </section>

 <Approche />

      {/* Portfolio Section */}
      <PortfolioContent
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredProjects={filteredProjects}
      />

      {/* Process */}
     


      {/* CTA */}
      <SurFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
