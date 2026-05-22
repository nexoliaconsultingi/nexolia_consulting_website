import {
  Clock,
  Shield,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  Zap,
  Rocket,
  GraduationCap,
  Headphones,
  Eye,
  GitBranch,
  Layout,
  Trophy,
  Award,
  Star,
  CheckCircle2,
  Heart,
  Target,
  Coffee,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

/**
 * Interface pour les étapes de la méthode Agile
 * @interface Step
 */
interface Step {
  /** Icône Lucide React pour représenter l'étape */
  icon: React.ReactNode
  /** Titre de l'étape */
  title: string
  /** Description détaillée de l'étape */
  description: string
}

/**
 * Interface pour les bénéfices
 * @interface Benefit
 */
interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const Approche: React.FC = () => {
  // État pour les animations au scroll
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  /**
   * Étapes de la méthode Agile avec validation client
   * Chaque étape représente une phase du développement itératif
   */
  const steps: Step[] = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Analyse des besoins",
      description: "Étude approfondie de vos processus métier et identification des opportunités de digitalisation. Nous comprenons votre écosystème pour proposer des solutions sur mesure."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Proposition d'architecture",
      description: "Conception de solutions optimales adaptées à vos domaines d'activité et objectifs business. Architecture technique robuste et évolutive."
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Développement itératif",
      description: "Le client vérifie et valide son produit étape par étape avec l'équipe de développement Nexolia. Feedback continu et ajustements en temps réel."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Accompagnement & formation",
      description: "Formation complète de votre équipe technique après le déploiement de la solution. Transfert de connaissances et autonomisation de vos équipes."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Support haute disponibilité",
      description: "Équipe support TMA et maintenance avec une disponibilité exceptionnelle 24/7. Réactivité garantie pour vos besoins critiques."
    }
  ]

  /**
   * Bénéfices de la méthode Agile
   */
  const benefits: Benefit[] = [
    {
      icon: <Rocket className="w-4 h-4" />,
      title: "Livraison continue",
      description: "Mise en production régulière"
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Collaborative",
      description: "Équipe intégrée client"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      title: "Qualité garantie",
      description: "Tests à chaque itération"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "ROI optimisé",
      description: "Valeur livrée rapidement"
    }
  ]

  /**
   * Valeurs fondamentales
   */
  const values = [
    { name: "Transparence", color: "from-purple-500 to-purple-600" },
    { name: "Adaptabilité", color: "from-pink-500 to-pink-600" },
    { name: "Excellence", color: "from-purple-500 to-pink-500" },
    { name: "Confiance", color: "from-indigo-500 to-purple-500" }
  ]

  /**
   * Configuration de l'Intersection Observer pour les animations au scroll
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      aria-label="Notre approche Agile"
    >
      {/* 
        ============================================
        ANIMATIONS DE FOND
        ============================================
      */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 
          ============================================
          EN-TÊTE DE LA SECTION
          ============================================
        */}
        <div className="text-center mb-16 animate-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nexolia Consulting - Méthode Agile Certifiée
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Notre Approche Agile
          </h1>

          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Une méthodologie où le client vérifie et valide son produit étape par étape
            avec l'équipe de développement Nexolia
          </p>
        </div>

        {/* 
          ============================================
          STRUCTURE PRINCIPALE À 2 COLONNES
          ============================================
        */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* 
            ============================================
            COLONNE GAUCHE - LOGO NEXOLIA + MÉTHODE AGILE
            ============================================
          */}
          <div className="space-y-6">
            {/* Logo Nexolia Consulting */}
            <div className={`flex justify-center mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50 animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <img
                    style={{ borderRadius: "10px" }}
                    src="/nexoLogo.png"
                    alt="Nexolia Consulting - Expert en transformation digitale"
                    className="w-64 h-auto object-contain mx-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150"%3E%3Crect width="500" height="150" fill="url(%23grad)" rx="15"/%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:%236d28d9;stop-opacity:1"%3E%3C/stop%3E%3Cstop offset="100%" style="stop-color:%23db2777;stop-opacity:1"%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23ffffff" font-size="28" font-weight="bold"%3ENEXOLIA%3C/text%3E%3Ctext x="50%" y="72%" text-anchor="middle" dy=".3em" fill="%23e9d5ff" font-size="16"%3ECONSULTING%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-3 py-1 shadow-lg animate-bounce-slow">
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white">Certifié</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Nexolia */}
            <div className={`text-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}>
              <p className="text-purple-200 leading-relaxed">
                Notre expertise assure une <span className="text-purple-300 font-semibold">digitalisation fiable</span> des processus métier complexes,
                mais aussi toute une <span className="text-purple-300 font-semibold">chaîne de valeur complète</span>.
              </p>
            </div>

            {/* Méthode Agile - Étapes */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                Méthode Agile - Validation Itérative
              </h2>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-500 ${hoveredStep === index ? 'opacity-50' : ''
                      }`}></div>

                    <div className="relative flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-[1.02]">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300">
                            Étape {index + 1}
                          </span>
                          <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-purple-200 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* 
            ============================================
            COLONNE DROITE - IMAGE AGILE + CONTENU EN DESSOUS
            ============================================
          */}
          <div className="space-y-6">
            {/* Image Agile agrandie */}
            <div className={`flex justify-center items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
              <div className="relative animate-float">
                {/* Anneaux décoratifs */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse-slow"></div>
                <div className="absolute -inset-6 rounded-full border-2 border-purple-400/30 animate-spin-slow"></div>
                <div className="absolute -inset-12 rounded-full border border-pink-400/20 animate-spin-slow animation-delay-1000"></div>
                <div className="absolute -inset-20 rounded-full border border-purple-400/10 animate-spin-slow animation-delay-2000"></div>

                {/* Image principale */}
                <div style={{ background: "white", padding: "0px" }} className="relative bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/agile/1.png"
                    alt="Méthodologie Agile Nexolia Consulting"
                    className="w-96 h-96 object-contain rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Cdefs%3E%3ClinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"%3E%3Cstop offset="0%" style="stop-color:%238b5cf6;stop-opacity:0.8"/%3E%3Cstop offset="100%" style="stop-color:%23ec4899;stop-opacity:0.8"/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx="200" cy="200" r="180" fill="url(%23grad1)" stroke="%237c3aed" stroke-width="3"/%3E%3Ctext x="200" y="160" text-anchor="middle" fill="%23ffffff" font-size="28" font-weight="bold"%3EAGILE%3C/text%3E%3Ctext x="200" y="200" text-anchor="middle" fill="%23e9d5ff" font-size="20"%3EMETHODOLOGY%3C/text%3E%3Ctext x="200" y="240" text-anchor="middle" fill="%23c084fc" font-size="14"%3EValidation Client%3C/text%3E%3Ctext x="200" y="265" text-anchor="middle" fill="%23a855f7" font-size="12"%3EItération %26 Feedback%3C/text%3E%3C/svg%3E';
                    }}
                  />

                  {/* Badges flottants */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-2 shadow-lg animate-bounce-slow">
                    <span className="text-sm font-bold text-white flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Agile
                    </span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-4 py-2 shadow-lg animate-bounce-slow animation-delay-1000">
                    <span className="text-sm font-bold text-white flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Validation Client
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 
              ============================================
              NOUVEAU CONTENU SOUS L'IMAGE - BÉNÉFICES
              ============================================
            */}
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}>
              {/* Bénéfices clés */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  Les bénéfices de notre méthode Agile
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                        {benefit.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{benefit.title}</p>
                        <p className="text-xs text-purple-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Valeurs fondamentales */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Nos valeurs fondamentales
                </h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${value.color} text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300 cursor-default`}
                    >
                      {value.name}
                    </span>
                  ))}
                </div>
              </div>



              {/* Indicateurs de progression */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-purple-300">Visibilité projet</div>
                  <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">-50%</div>
                  <div className="text-xs text-purple-300">Time-to-market</div>
                  <div className="w-full bg-white/10 rounded-full h-1 mt-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>


              {/* Statistiques clés */}
              <div className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-xs text-purple-300">Support TMA</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-xs text-purple-300">Satisfaction</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Agile
                  </div>
                  <div className="text-xs text-purple-300">Certifiée</div>
                </div>
              </div>

              {/* Call to action secondaire */}

            </div>
          </div>
        </div>

        {/* 
          ============================================
          BOUTON D'APPEL À L'ACTION PRINCIPAL
          ============================================
        */}
        <div className="text-center mt-16 animate-fade-up">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 
  bg-gradient-to-r from-purple-600 to-pink-600 
  rounded-full text-white font-semibold text-lg
  transition-all duration-300 hover:scale-105
  hover:shadow-2xl hover:shadow-purple-500/50
  overflow-hidden"
            aria-label="Démarrer votre projet Agile avec Nexolia Consulting"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />

            <span>Démarrer Votre Projet Agile</span>

            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-1000 { animation-delay: 1s; }
        
        @keyframes fade-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-right {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-left {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-down { animation: fade-down 0.7s ease-out forwards; }
        .animate-fade-right { animation: fade-right 0.7s ease-out forwards; }
        .animate-fade-left { animation: fade-left 0.7s ease-out forwards; }
        .animate-fade-up { animation: fade-up 0.7s ease-out forwards; }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default Approche