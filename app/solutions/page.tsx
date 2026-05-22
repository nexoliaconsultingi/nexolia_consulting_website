"use client"

import {
  ArrowRight,
  Building2,
  Rocket,
  ShoppingCart,
  CreditCard,
  Users,
  CheckCircle,
  Menu,
  X,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Target,
  Award,
  Globe,
  Code,
  Palette,
  Database,
  Smartphone,
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import Process from "@/components/ui/Process"


export default function SolutionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const solutions = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Solutions Entreprise",
      subtitle: "Pour les grandes organisations",
      description:
        "Plateformes robustes et scalables pour accompagner la croissance des grandes entreprises avec des architectures de niveau enterprise.",
      features: [
        "Architecture microservices avancée",
        "Intégrations ERP/CRM complexes",
        "Sécurité de niveau bancaire",
        "Support 24/7 dédié premium",
        "Formation équipes internes complète",
        "Monitoring et analytics avancés",
      ],
      technologies: ["Enterprise Java", "Azure", "Kubernetes", "GraphQL", "Redis", "PostgreSQL"],
      pricing: "Sur devis personnalisé",
      popular: false,
      gradient: "from-[#53828a] to-[#4a7580]",
      hoverGradient: "from-[#53828a]/90 to-[#4a7580]/90",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Solutions Startup",
      subtitle: "Pour les entreprises en croissance",
      description:
        "Solutions agiles et évolutives conçues pour accompagner votre croissance rapide avec des coûts optimisés et une scalabilité garantie.",
      features: [
        "MVP et prototypage ultra-rapide",
        "Architecture cloud-native évolutive",
        "Coûts optimisés et transparents",
        "Déploiement automatisé CI/CD",
        "Analytics et métriques intégrés",
        "Support technique réactif",
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker", "Vercel"],
      pricing: "À partir de 15k€",
      popular: true,
      gradient: "from-[#b05f76] to-[#a0556b]",
      hoverGradient: "from-[#b05f76]/90 to-[#a0556b]/90",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Solutions E-commerce",
      subtitle: "Pour le commerce en ligne",
      description:
        "Plateformes e-commerce complètes avec gestion avancée des ventes, optimisation des conversions et expérience client exceptionnelle.",
      features: [
        "Boutique responsive multi-device",
        "Gestion multi-devises et langues",
        "Intégration paiements sécurisés",
        "Analytics de vente avancés",
        "Marketing automation intégré",
        "SEO et performance optimisés",
      ],
      technologies: ["Next.js", "Stripe", "Shopify", "WooCommerce", "Tailwind", "Prisma"],
      pricing: "À partir de 8k€",
      popular: false,
      gradient: "from-[#53828a] to-[#b05f76]",
      hoverGradient: "from-[#53828a]/90 to-[#b05f76]/90",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Solutions FinTech",
      subtitle: "Pour les services financiers",
      description:
        "Applications financières ultra-sécurisées avec conformité réglementaire complète et intégrations bancaires avancées.",
      features: [
        "Sécurité bancaire (PCI DSS)",
        "APIs de paiement robustes",
        "Conformité RGPD et KYC",
        "Audit trails complets",
        "Reporting automatisé avancé",
        "Blockchain et crypto support",
      ],
      technologies: ["Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Blockchain"],
      pricing: "Sur devis sécurisé",
      popular: false,
      gradient: "from-[#4a7580] to-[#53828a]",
      hoverGradient: "from-[#4a7580]/90 to-[#53828a]/90",
    },
  ]

  const stats = [
    {
      icon: <Target className="w-6 h-6" />,
      number: "200+",
      label: "Projets Réalisés",
      description: "Solutions déployées avec succès",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "98%",
      label: "Satisfaction Client",
      description: "Taux de satisfaction exceptionnel",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      number: "45%",
      label: "ROI Moyen",
      description: "Retour sur investissement garanti",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      number: "15+",
      label: "Pays Couverts",
      description: "Présence internationale",
    },
  ]



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar/>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#53828a]/10 via-white to-[#b05f76]/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#53828a]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b05f76]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#53828a]/3 to-[#b05f76]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] border-0 mb-6">
              <Settings className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold">Software sur Mesure</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#53828a] mb-6 leading-tight">
              Solutions Digitales
              <span className="block bg-gradient-to-r from-[#53828a] via-[#7a6b7e] to-[#b05f76] bg-clip-text text-transparent">
                Sur Mesure
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#727683] mb-10 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos solutions technologiques innovantes, adaptées à votre secteur d'activité. De la startup à la
              grande entreprise, nous créons la solution parfaite pour
              <span className="text-[#b05f76] font-semibold"> accélérer votre croissance</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#53828a] text-[#53828a] hover:bg-[#53828a] hover:text-white px-8 py-4 text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Consultation gratuite
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-[#727683] mb-1">{stat.label}</div>
                <div className="text-sm text-[#727683]/80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#53828a]/10 text-[#53828a] border-[#53828a]/20">Nos Solutions Phares</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#53828a] mb-6">Choisissez Votre Solution Idéale</h2>
            <p className="text-xl text-[#727683] max-w-3xl mx-auto leading-relaxed">
              Chaque solution est conçue pour répondre aux défis spécifiques de votre secteur avec une approche
              personnalisée et des technologies de pointe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white ${solution.popular ? "ring-2 ring-[#b05f76] ring-opacity-50 scale-105" : ""
                  }`}
              >
                {solution.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-[#b05f76] text-white border-0 flex items-center gap-1 px-3 py-1">
                      <Star className="w-3 h-3 fill-current" />
                      Populaire
                    </Badge>
                  </div>
                )}

                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[#53828a]/20 to-[#b05f76]/20 rounded-full blur-2xl"></div>
                </div>

                <CardHeader className="pb-6 relative">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl text-[#53828a] text-center mb-2 group-hover:text-[#b05f76] transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                  <p className="text-[#b05f76] text-center font-medium text-lg">{solution.subtitle}</p>
                  <p className="text-[#727683] text-center mt-4 leading-relaxed">{solution.description}</p>
                </CardHeader>

                <CardContent className="space-y-6 relative">
                  <div>
                    <h4 className="font-semibold text-[#53828a] mb-4 flex items-center text-lg">
                      <CheckCircle className="w-5 h-5 mr-2 text-[#b05f76]" />
                      Fonctionnalités incluses
                    </h4>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 group/item">
                          <div className="w-2 h-2 bg-[#b05f76] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                          <span className="text-[#727683] group-hover/item:text-[#53828a] transition-colors duration-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#53828a] mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-[#53828a]/10 text-[#53828a] hover:bg-[#53828a]/20 hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl lg:text-3xl font-bold text-[#53828a]">{solution.pricing}</span>
                      {solution.popular && (
                        <Badge className="bg-[#b05f76]/10 text-[#b05f76] border-[#b05f76]/20">⭐ Recommandé</Badge>
                      )}
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${solution.gradient} hover:${solution.hoverGradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      Choisir cette solution <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      

      {/* Process Section */}
      <Process/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#53828a] to-[#b05f76] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-2">
            🚀 Prêt à Commencer ?
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transformons Votre Vision
            <span className="block">en Réalité Digitale</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discutons de votre projet et découvrons ensemble la solution parfaite pour propulser votre entreprise vers
            le succès.
            <span className="font-semibold">Consultation gratuite incluse !</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#53828a] hover:bg-white/90 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Démarrer mon projet <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#53828a] bg-transparent px-8 py-4 text-lg backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Télécharger notre guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
