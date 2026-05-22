"use client"

import {
  ArrowRight,
  Building2,
  Heart,
  ShoppingCart,
  GraduationCap,
  Home,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Menu,
  X,
  Star,
  Award,
  Target,
  Globe,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"


export default function IndustriesPage() {

  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Services Financiers & FinTech",
      description: "Solutions sécurisées pour banques, assurances et fintech",
      popular: true,
      solutions: [
        "Plateformes de trading en temps réel",
        "Applications bancaires mobiles",
        "Systèmes de paiement sécurisés",
        "Outils de gestion de portefeuille",
        "Solutions blockchain & crypto",
      ],
      technologies: ["Blockchain", "AI/ML", "Real-time", "Security"],
      compliance: ["PCI DSS", "GDPR", "SOX", "MiFID II"],
      caseStudy: {
        client: "BankTech Solutions",
        challenge: "Moderniser leur plateforme de trading legacy",
        result: "40% d'amélioration des performances, 60% de réduction des bugs",
      },
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Santé & Sciences de la Vie",
      description: "Technologies médicales innovantes et solutions de santé digitale",
      solutions: [
        "Plateformes de télémédecine",
        "Portails patients sécurisés",
        "Systèmes de gestion clinique",
        "Applications de suivi médical",
        "Outils d'analyse médicale IA",
      ],
      technologies: ["FHIR", "HL7", "IoT Medical", "AI Diagnostics"],
      compliance: ["HIPAA", "FDA", "CE Medical", "ISO 13485"],
      caseStudy: {
        client: "MedCare Digital",
        challenge: "Créer une plateforme de téléconsultation complète",
        result: "500+ médecins connectés, 10k+ consultations/mois",
      },
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce & Retail",
      description: "Expériences d'achat exceptionnelles et solutions omnicanales",
      solutions: [
        "Plateformes e-commerce sur mesure",
        "Applications mobiles de shopping",
        "Systèmes de gestion d'inventaire",
        "Solutions CRM avancées",
        "Outils d'analyse comportementale",
      ],
      technologies: ["Microservices", "CDN", "Analytics", "Personalization"],
      compliance: ["GDPR", "PCI DSS", "Accessibility", "Performance"],
      caseStudy: {
        client: "FashionForward",
        challenge: "Refonte complète de leur e-commerce",
        result: "150% d'augmentation des ventes, 45% de taux de conversion",
      },
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Éducation & E-learning",
      description: "Plateformes éducatives modernes et outils d'apprentissage interactifs",
      solutions: [
        "Systèmes de gestion d'apprentissage (LMS)",
        "Salles de classe virtuelles",
        "Portails étudiants intégrés",
        "Outils de collaboration éducative",
        "Applications d'apprentissage mobile",
      ],
      technologies: ["Video Streaming", "AI Tutoring", "Gamification", "Analytics"],
      compliance: ["FERPA", "COPPA", "GDPR", "Accessibility"],
      caseStudy: {
        client: "EduTech Academy",
        challenge: "Digitaliser leur offre de formation",
        result: "300% d'augmentation des inscriptions en ligne",
      },
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Immobilier & PropTech",
      description: "Innovation dans l'immobilier avec des technologies de pointe",
      solutions: [
        "Plateformes de gestion immobilière",
        "Visites virtuelles 3D/VR",
        "CRM spécialisé immobilier",
        "Applications de recherche de biens",
        "Outils d'évaluation automatisée",
      ],
      technologies: ["VR/AR", "IoT", "Geolocation", "3D Visualization"],
      compliance: ["GDPR", "Real Estate Laws", "Financial Regulations"],
      caseStudy: {
        client: "PropVision",
        challenge: "Créer une plateforme de visites virtuelles",
        result: "80% de réduction du temps de vente, 200+ agences partenaires",
      },
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Technologies Émergentes",
      description: "Solutions innovantes avec IA, IoT, Blockchain et technologies futures",
      solutions: [
        "Plateformes IoT industrielles",
        "Applications d'intelligence artificielle",
        "Solutions blockchain personnalisées",
        "Systèmes de réalité augmentée",
        "Outils d'analyse prédictive",
      ],
      technologies: ["Edge Computing", "5G", "Quantum-ready", "Machine Learning"],
      compliance: ["Data Protection", "Industry Standards", "Security Frameworks"],
      caseStudy: {
        client: "InnovTech Labs",
        challenge: "Développer une plateforme IoT industrielle",
        result: "50+ capteurs connectés, 30% d'optimisation énergétique",
      },
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  const stats = [
    { number: "15+", label: "Secteurs d'Activité", icon: <Globe className="w-6 h-6" /> },
    { number: "200+", label: "Projets Sectoriels", icon: <Target className="w-6 h-6" /> },
    { number: "95%", label: "Taux de Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Dédié", icon: <Shield className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar/>


      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#53828a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b05f76]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#53828a]/5 to-[#b05f76]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] border-0 mb-6">
              <Briefcase className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold">Expertise Sectorielle d'Excellence</span>
            </div>


            <h1 className="text-4xl lg:text-7xl font-bold text-[#53828a] mb-6">
              Expertise Sectorielle
              <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent block">
                Approfondie
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#727683] mb-8 max-w-3xl mx-auto leading-relaxed">
              Des solutions technologiques <span className="font-semibold text-[#53828a]">sur mesure</span> adaptées aux
              défis spécifiques de votre secteur d'activité
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Target className="mr-2 w-5 h-5" />
                Découvrir Nos Secteurs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#53828a] text-[#53828a] hover:bg-[#53828a] hover:text-white bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Globe className="mr-2 w-5 h-5" />
                Consultation Gratuite
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-2">{stat.number}</div>
                <div className="text-[#727683] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Nos Secteurs d'Expertise</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Une connaissance approfondie des enjeux métier pour des solutions parfaitement adaptées
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Card className="border-0 shadow-2xl h-full group hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50"></div>
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Popular Badge */}
                    {industry.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Populaire
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-6 relative">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${industry.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {industry.icon}
                      </div>
                      <CardTitle className="text-2xl text-[#53828a] text-center group-hover:text-[#b05f76] transition-colors duration-300">
                        {industry.title}
                      </CardTitle>
                      <p className="text-[#727683] text-center">{industry.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6 relative">
                      <div>
                        <h4 className="font-semibold text-[#53828a] mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Solutions Spécialisées :
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start space-x-2 group/item">
                              <div className="w-2 h-2 bg-[#b05f76] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                              <span className="text-[#727683] text-sm group-hover/item:text-[#53828a] transition-colors duration-200">
                                {solution}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#53828a] mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Technologies :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-[#53828a]/10 text-[#53828a] hover:bg-[#53828a] hover:text-white transition-all duration-300 cursor-pointer"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#53828a] mb-3 flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          Conformité :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.compliance.map((comp, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-[#b05f76] text-[#b05f76] hover:bg-[#b05f76] hover:text-white transition-all duration-300 cursor-pointer"
                            >
                              {comp}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                      <div className="absolute top-4 left-4 w-24 h-24 bg-[#53828a]/10 rounded-full blur-xl group-hover:bg-[#53828a]/20 transition-colors duration-500"></div>
                      <div className="absolute bottom-4 right-4 w-32 h-32 bg-[#b05f76]/10 rounded-full blur-xl group-hover:bg-[#b05f76]/20 transition-colors duration-500"></div>
                    </div>

                    <CardContent className="p-8 relative">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#53828a]">Étude de Cas</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                          <h4 className="font-semibold text-[#53828a] mb-2 flex items-center">
                            <Building2 className="w-4 h-4 mr-2" />
                            Client :
                          </h4>
                          <p className="text-[#727683] font-medium">{industry.caseStudy.client}</p>
                        </div>

                        <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg">
                          <h4 className="font-semibold text-[#53828a] mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Défi :
                          </h4>
                          <p className="text-[#727683]">{industry.caseStudy.challenge}</p>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-[#53828a] mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Résultat :
                          </h4>
                          <p className="text-[#727683] font-medium">{industry.caseStudy.result}</p>
                        </div>
                      </div>

                      <Button className="w-full mt-6 bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Voir le projet complet <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Industry Expertise */}
      <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
              <Shield className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">🎯 Pourquoi Nous Choisir ?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Notre Expertise Sectorielle</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Une compréhension approfondie des enjeux métier pour des solutions parfaitement adaptées
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Conformité Garantie",
                description:
                  "Respect strict des réglementations sectorielles et standards de sécurité les plus exigeants",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Équipes Spécialisées",
                description:
                  "Consultants experts dans chaque domaine d'activité avec une expérience terrain approfondie",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation Continue",
                description:
                  "Veille technologique et R&D adaptées aux évolutions sectorielles et aux tendances émergentes",
                gradient: "from-orange-500 to-red-600",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background Effect */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${advantage.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${advantage.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-[#727683] leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#53828a] to-[#b05f76] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Target className="w-4 h-4 text-white mr-2" />
            <span className="text-white font-semibold text-sm">🚀 Prêt à Commencer ?</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Votre Secteur Nécessite une
            <span className="block">Expertise Spécifique ?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discutons de vos <span className="font-semibold">défis sectoriels</span> et découvrons ensemble les
            solutions technologiques les plus adaptées à votre industrie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#53828a] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Target className="mr-2 w-5 h-5" />
              Consultation Sectorielle
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#53828a] bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Award className="mr-2 w-5 h-5" />
              Télécharger nos Études de Cas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
