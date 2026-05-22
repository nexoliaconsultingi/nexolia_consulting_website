"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { X, ExternalLink, Calendar, Tag, Info } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  fullDescription: string
  image?: string
  date: string
  category: string
  sourceUrl: string
  sourceName: string
  technologies: string[]
  keyPoints: string[]
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "L'Intelligence Artificielle Générative Transforme le Développement Logiciel",
    excerpt: "Les entreprises IT adoptent massivement les assistants IA, l'automatisation du code et les agents intelligents pour accélérer le développement web et mobile en 2026...",
    fullDescription: "L'IA générative révolutionne complètement le cycle de développement logiciel. Les modèles comme GPT-4, Claude, Gemini et les assistants de codage spécialisés permettent aux développeurs d'augmenter leur productivité de 40 à 60%. Ces technologies auto-apprenantes génèrent du code, des tests unitaires, de la documentation et même des architectures complètes. Les outils comme GitHub Copilot, Cursor, ou Amazon CodeWhisperer sont désormais intégrés dans 85% des entreprises tech. L'IA générative ne se contente plus d'assister : elle propose des optimisations de performances, détecte les vulnérabilités de sécurité et suggère des refactorisations intelligentes. En 2026, on assiste à l'émergence d'agents IA autonomes capables de gérer des tickets entiers, de proposer des pull requests et d'exécuter des tests de non-régression.",
    image: "/news/iaG.png",
    date: "14 Mai 2026",
    category: "Intelligence Artificielle",
    sourceUrl: "https://www.lemonde.fr/ia-generative-developpement-2026",
    sourceName: "Le Monde Informatique",
    technologies: ["GPT-4", "GitHub Copilot", "Claude AI", "Cursor", "AWS CodeWhisperer"],
    keyPoints: [
      "Productivité augmentée de 40-60%",
      "Génération automatique de tests",
      "Détection de vulnérabilités",
      "Agents IA autonomes",
      "Intégration dans 85% des entreprises"
    ]
  },
  {
    id: "2",
    title: "Flutter et React Native Dominent le Marché Mobile Cross-Platform",
    excerpt: "Les frameworks cross-platform continuent leur forte croissance grâce à leur rapidité de développement et leurs performances proches du natif...",
    fullDescription: "Flutter 3.27 et React Native 0.75 s'imposent comme les solutions incontournables pour le développement mobile multiplateforme. Flutter, avec son moteur graphique Skia, offre des performances quasi-natives et une UI extrêmement fluide. Sa compilation vers du code machine ARM permet des temps d'exécution réduits de 30% par rapport aux versions précédentes. React Native, porté par l'écosystème React et l'architecture Fabric, permet désormais un rendu synchrone et une meilleure gestion de la mémoire. Ces deux frameworks sont utilisés par des géants comme Google, Facebook, Tencent, et Alibaba. Le marché du cross-platform représente désormais 65% des nouvelles applications mobiles, contre 35% pour le natif pur. L'adoption de l'architecture FFI (Foreign Function Interface) permet d'exécuter du code C/C++/Rust directement, pour les parties les plus critiques en performances.",
    image: "/news/reactNativeFlater.png",
    date: "12 Mai 2026",
    category: "Développement Mobile",
    sourceUrl: "https://www.journaldunet.com/flutter-react-native-marche-2026",
    sourceName: "Journal du Net",
    technologies: ["Flutter 3.27", "React Native 0.75", "Dart", "TypeScript", "Skia", "Fabric Architecture"],
    keyPoints: [
      "65% du marché mobile",
      "Performances quasi-natives",
      "Compilation ARM",
      "FFI pour code critique",
      "Support par les géants tech"
    ]
  },
  {
    id: "3",
    title: "Cybersécurité : Hausse des Investissements dans la Protection Cloud",
    excerpt: "Face à l'augmentation des cyberattaques, les entreprises renforcent leurs infrastructures cloud avec des solutions Zero Trust et des outils de détection IA...",
    fullDescription: "Les investissements en cybersécurité cloud ont augmenté de 45% en 2026, atteignant 85 milliards d'euros. L'approche Zero Trust devient la norme : 'ne jamais faire confiance, toujours vérifier'. Les solutions comme Zscaler, Cloudflare Zero Trust, et Palo Alto Prisma Cloud intègrent désormais l'IA pour la détection comportementale en temps réel. Les attaques par ransomware ont augmenté de 120% en deux ans, poussant les entreprises à adopter des stratégies de défense en profondeur. Les technologies émergentes incluent la confidential computing (chiffrement des données en cours d'utilisation), les mesh VPN, et l'authentification continue biométrique. Le marché de la cybersécurité cloud devrait atteindre 150 milliards d'euros d'ici 2028, avec une pénurie chronique de 3,5 millions de professionnels qualifiés.",
    image: "/news/zerotrust.png",
    date: "10 Mai 2026",
    category: "Cybersécurité",
    sourceUrl: "https://www.zdnet.fr/cybersecurite-cloud-zero-trust-2026",
    sourceName: "ZDNet",
    technologies: ["Zero Trust", "SASE", "Confidential Computing", "EDR/XDR", "Cloud Security Posture Management"],
    keyPoints: [
      "+45% d'investissements",
      "85 milliards d'euros",
      "Détection IA en temps réel",
      "Mesh VPN",
      "Pénurie de 3,5M professionnels"
    ]
  },
  {
    id: "4",
    title: "Next.js 16 et les Architectures Serverless Révolutionnent le Web",
    excerpt: "Les nouvelles technologies web permettent de créer des plateformes ultra-rapides, optimisées SEO et capables de gérer des millions d'utilisateurs...",
    fullDescription: "Next.js 16 introduit des avancées majeures : Partial Prerendering (PPR) qui combine la vitesse du static et la flexibilité du dynamique, et le Server Components streaming optimisé. L'architecture Serverless, via Vercel, AWS Lambda, ou Cloudflare Workers, permet une mise à l'échelle automatique et une facturation à l'usage, réduisant les coûts de 70% par rapport aux serveurs traditionnels. Les nouvelles fonctionnalités incluent l'ISR (Incremental Static Regeneration) à la demande, l'optimisation automatique des images avec WebP/AVIF, et le support natif de React 19. Des entreprises comme Netflix, Uber, et TikTok utilisent ces architectures pour gérer des pics de trafic de 10 millions de requêtes par seconde. Le temps de chargement moyen des sites en Serverless est de 0.8s, contre 2.5s pour les architectures traditionnelles.",
    image: "/news/serverless.png",
    date: "08 Mai 2026",
    category: "Développement Web",
    sourceUrl: "https://www.silicon.fr/nextjs-serverless-revolution-2026",
    sourceName: "Silicon.fr",
    technologies: ["Next.js 16", "React 19", "Vercel", "AWS Lambda", "Cloudflare Workers", "Edge Computing"],
    keyPoints: [
      "Partial Prerendering (PPR)",
      "-70% de coûts",
      "10M requêtes/seconde",
      "Temps chargement 0.8s",
      "Scalabilité automatique"
    ]
  },
]

export default function NewsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null)

  const openModal = (item: NewsItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <div className="space-y-6">
        <div className="relative pb-6 mb-8">
          <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#b05f76] via-[#916a7c] to-transparent rounded-full"></div>
          <h2 className="text-5xl font-bold text-[#53828a] tracking-tight mb-2">ACTUALITÉS</h2>
          <p className="text-base text-[#727683] font-light">Services & Innovations</p>
        </div>

        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className={`overflow-hidden border-0 shadow-md hover-lift transition-all duration-500 card-premium ${hoveredId === item.id ? "shadow-2xl shadow-[#53828a]/20" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {item.image && (
                  <div 
                    className="md:col-span-1 relative h-48 md:h-full overflow-hidden bg-gradient-to-br from-[#53828a]/10 to-[#b05f76]/10 cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Cliquer pour agrandir
                    </div>
                  </div>
                )}
                <div className={`${item.image ? "md:col-span-2" : "col-span-1"} p-8 flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="bg-gradient-to-r from-[#53828a] to-[#727683] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover-scale">
                        {item.category}
                      </span>
                      <span className="text-xs text-[#727683] font-light flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                    
                    {/* Technologies tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-[#53828a] px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => openModal(item)}
                    className="mt-6 inline-flex items-center gap-2 text-[#53828a] font-semibold text-sm hover:text-[#b05f76] transition-all duration-300 group/btn"
                  >
                    En savoir plus
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal - Version corrigée */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl transform transition-all duration-300 scale-100">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
              >
                <X size={24} />
              </button>

              {/* Image section */}
              {selectedItem.image && (
                <div className="relative h-80 md:h-96 w-full overflow-hidden bg-gradient-to-br from-[#53828a]/20 to-[#b05f76]/20 rounded-t-2xl">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-gradient-to-r from-[#53828a] to-[#727683] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Content section */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                <h3 className="text-3xl font-bold text-[#53828a] mb-4 leading-tight pr-8">
                  {selectedItem.title}
                </h3>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {selectedItem.date}
                  </span>
                  <a
                    href={selectedItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#53828a] hover:text-[#b05f76] transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    Source : {selectedItem.sourceName}
                  </a>
                </div>

                {/* Full description */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#53828a] mb-3 flex items-center gap-2">
                    <Info size={20} />
                    Description complète
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedItem.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#53828a] mb-3 flex items-center gap-2">
                    <Tag size={20} />
                    Technologies clés
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 text-[#53828a] px-3 py-1.5 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key points */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#53828a] mb-3">
                    Points clés à retenir
                  </h4>
                  <ul className="space-y-2">
                    {selectedItem.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#b05f76] text-lg leading-tight">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Source link */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={selectedItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#53828a] hover:text-[#b05f76] font-semibold transition-all duration-300 group"
                  >
                    Lire l'article original
                    <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </>
  )
}