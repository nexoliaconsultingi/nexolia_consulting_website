import { Code, Palette, Rocket, Star, Users, Sparkles, ArrowRight, Zap, Eye, X } from 'lucide-react'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Card, CardContent } from './card'

// Définition des types pour les détails de chaque étape
type StepDetails = {
    activites?: string[];
    livrables?: string[];
    paiement?: {
        initial: string;
        suite: string;
        echeances: string;
    };
    approches?: string[];
    governance?: string[];
    risques?: string;
    methode?: string;
    processus?: string[];
    deploiement?: string;
    cloture?: string[];
    maintenance?: {
        standard: string;
        lourd: string;
        inclus: string[];
    };
}

interface ProcessStep {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    number: string;
    delay: number;
    stats: string;
    statsLabel: string;
    details: StepDetails;
}

const Process: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [visibleCards, setVisibleCards] = useState<number[]>([])
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const sectionRef = useRef<HTMLElement>(null)

    const process: ProcessStep[] = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Découverte",
            description: "Analyse approfondie des besoins et objectifs business",
            gradient: "from-blue-500 to-cyan-600",
            number: "01",
            delay: 0,
            stats: "100%",
            statsLabel: "Satisfaction",
            details: {
                activites: [
                    "Réunions d'étude des besoins avec le client (en ligne ou en présentiel)",
                    "Analyse des objectifs business et contraintes techniques",
                    "Identification des parties prenantes et utilisateurs finaux"
                ],
                livrables: [
                    "Cahier des charges détaillé incluant :",
                    "• Période et planning prévisionnel",
                    "• Estimation des coûts détaillée",
                    "• Besoins fonctionnels (features, modules, intégrations)",
                    "• Besoins non fonctionnels (performance, sécurité, scalabilité)",
                    "• Conditions de performance et SLA"
                ],
                paiement: {
                    initial: "30% du coût total pour le lancement du projet",
                    suite: "Le reste à l'avancement et selon les livrables du produit",
                    echeances: "Paiement fractionné selon les jalons du projet"
                }
            }
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Stratégie",
            description: "Définition de la stratégie et architecture technique optimale",
            gradient: "from-purple-500 to-pink-600",
            number: "02",
            delay: 0.2,
            stats: "2x",
            statsLabel: "Plus Efficace",
            details: {
                approches: [
                    "Approche préventive (Waterfall) pour projets aux exigences stables",
                    "Approche adaptative (Agile/Scrum) pour projets évolutifs",
                    "Sélection de la méthodologie selon vos besoins spécifiques"
                ],
                governance: [
                    "Registre des parties prenantes avec leurs rôles et responsabilités",
                    "Matrice RACI pour clarifier les responsabilités",
                    "Canaux de communication dédiés pour chaque partie prenante :",
                    "• Équipe projet : Daily meetings, Slack, Jira",
                    "• Direction : Comités de pilotage mensuels",
                    "• Clients : Démonstrations et revues de sprint",
                    "• Utilisateurs : Sessions de feedback et ateliers"
                ],
                risques: "Gestionnaire des risques avec identification, évaluation, atténuation et suivi continu"
            }
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Exécution",
            description: "Développement agile avec tests continus et qualité premium",
            gradient: "from-orange-500 to-red-600",
            number: "03",
            delay: 0.4,
            stats: "99.9%",
            statsLabel: "Disponibilité",
            details: {
                methode: "Développement par itérations ou sprints (2-4 semaines)",
                processus: [
                    "Planification du sprint avec priorisation des fonctionnalités",
                    "Développement et tests unitaires continus",
                    "Revue de sprint et démonstration au client",
                    "Rétrospective pour amélioration continue"
                ],
                livrables: ["Chaque sprint doit être achevé par un livrable fonctionnel et testé"]
            }
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Succès",
            description: "Déploiement et optimisation continue pour la performance",
            gradient: "from-green-500 to-teal-600",
            number: "04",
            delay: 0.6,
            stats: "300%",
            statsLabel: "ROI Moyen",
            details: {
                deploiement: "Déploiement de la solution dans son environnement réel",
                cloture: [
                    "Formation gratuite pour les utilisateurs finaux",
                    "Manuel d'utilisation fourni gratuitement au client",
                    "Documentation technique et guide d'administration"
                ],
                maintenance: {
                    standard: "1 an de maintenance tous risques pour petites et moyennes solutions",
                    lourd: "2 ans de maintenance tous risques pour ERP et solutions lourdes",
                    inclus: [
                        "Support technique prioritaire",
                        "Corrections de bugs et patches de sécurité",
                        "Mises à jour mineures incluses",
                        "Monitoring et surveillance 24/7"
                    ]
                }
            }
        },
    ]

    // Détection mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Animation au scroll optimisée
    useEffect(() => {
        if (!isMounted) return

        const currentSection = sectionRef.current
        const animationDelay = isMobile ? 100 : 200

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        process.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => prev.includes(index) ? prev : [...prev, index])
                            }, index * animationDelay)
                        })
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px' }
        )

        if (currentSection) {
            observer.observe(currentSection)
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection)
            }
            observer.disconnect()
        }
    }, [isMounted, isMobile, process])

    // Animation du compteur
    const AnimatedNumber: React.FC<{ value: string; isVisible: boolean }> = ({ value, isVisible }) => {
        const [count, setCount] = useState<number>(0)

        useEffect(() => {
            if (!isVisible) return

            const targetNumber = parseInt(value) || 0
            if (targetNumber === 0) return

            let start = 0
            const duration = 2000
            const increment = targetNumber / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start >= targetNumber) {
                    setCount(targetNumber)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }, [isVisible, value])

        const displayValue = value.includes('%') ? `${count}%` :
            value.includes('x') ? `${count}x` :
                count
        return <span>{displayValue}</span>
    }

    // Composant Modal
    const DetailModal: React.FC<{ step: ProcessStep; index: number; onClose: () => void }> = ({ step, index, onClose }) => {
        useEffect(() => {
            document.body.style.overflow = 'hidden'
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose()
            }
            window.addEventListener('keydown', handleEsc)
            return () => {
                document.body.style.overflow = 'unset'
                window.removeEventListener('keydown', handleEsc)
            }
        }, [onClose])

        const details = step.details

        // Fonction pour rendre le contenu du modal selon l'index
        const renderModalContent = () => {
            switch (index) {
                case 0:
                    return (
                        <>
                            {details.activites && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>📋</span> Activités
                                    </h4>
                                    <ul className="space-y-2">
                                        {details.activites.map((activite, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#b05f76] mt-1">•</span>
                                                <span className="text-gray-700">{activite}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {details.livrables && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>📄</span> Livrables
                                    </h4>
                                    <ul className="space-y-2">
                                        {details.livrables.map((livrable, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#b05f76] mt-1">•</span>
                                                <span className="text-gray-700">{livrable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {details.paiement && (
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>💰</span> Conditions de Paiement
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">✓</span>
                                            <span className="text-gray-700 font-medium">{details.paiement.initial}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">✓</span>
                                            <span className="text-gray-700">{details.paiement.suite}</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">✓</span>
                                            <span className="text-gray-700">{details.paiement.echeances}</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>
                    )
                case 1:
                    return (
                        <>
                            {details.approches && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>🎯</span> Approches Méthodologiques
                                    </h4>
                                    <ul className="space-y-2">
                                        {details.approches.map((approche, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#b05f76] mt-1">•</span>
                                                <span className="text-gray-700">{approche}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {details.governance && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>👥</span> Gouvernance & Communication
                                    </h4>
                                    <ul className="space-y-2">
                                        {details.governance.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#b05f76] mt-1">•</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {details.risques && (
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>⚠️</span> Gestion des Risques
                                    </h4>
                                    <p className="text-gray-700">{details.risques}</p>
                                </div>
                            )}
                        </>
                    )
                case 2:
                    return (
                        <>
                            {details.methode && details.processus && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>🔄</span> Méthodologie Agile
                                    </h4>
                                    <p className="text-gray-700 mb-3 font-medium">{details.methode}</p>
                                    <ul className="space-y-2">
                                        {details.processus.map((process, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#b05f76] mt-1">•</span>
                                                <span className="text-gray-700">{process}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {details.livrables && (
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl">
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>📦</span> Livrables
                                    </h4>
                                    {Array.isArray(details.livrables) ? (
                                        <ul className="space-y-2">
                                            {details.livrables.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-green-600 mt-1">✓</span>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-700">{details.livrables}</p>
                                    )}
                                </div>
                            )}
                        </>
                    )
                case 3:
                    return (
                        <>
                            {details.deploiement && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>🚀</span> Déploiement
                                    </h4>
                                    <p className="text-gray-700">{details.deploiement}</p>
                                </div>
                            )}
                            {details.cloture && (
                                <div>
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>📚</span> Clôture & Formation
                                    </h4>
                                    <ul className="space-y-2">
                                        {details.cloture.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-green-600 mt-1">✓</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {details.maintenance && (
                                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                                    <h4 className="text-lg font-bold text-[#53828a] mb-3 flex items-center gap-2">
                                        <span>🔧</span> Maintenance
                                    </h4>
                                    <p className="text-gray-700 font-medium mb-2">{details.maintenance.standard}</p>
                                    <p className="text-gray-700 font-medium mb-3">{details.maintenance.lourd}</p>
                                    <ul className="space-y-1">
                                        {details.maintenance.inclus.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <span className="text-green-600 mt-1">✓</span>
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </>
                    )
                default:
                    return null
            }
        }

        return (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
                    {/* Header */}
                    <div className={`sticky top-0 bg-gradient-to-r ${step.gradient} p-6 text-white rounded-t-2xl`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                    <p className="text-white/80 text-sm">Étape {step.number}/04</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Fermer"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6">
                        {renderModalContent()}
                    </div>

                    {/* Footer */}
                    <div className="sticky bottom-0 bg-gray-50 p-4 rounded-b-2xl border-t border-gray-200">
                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (!isMounted) {
        return (
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="h-8 w-32 mx-auto bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-12 w-96 mx-auto mt-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 bg-white relative overflow-hidden"
        >
            {/* Modals */}
            {modalOpen !== null && (
                <DetailModal
                    step={process[modalOpen]}
                    index={modalOpen}
                    onClose={() => setModalOpen(null)}
                />
            )}

            {/* Background décoratif subtil */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#53828a]/5 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#b05f76]/5 via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header amélioré */}
                <div className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 border border-[#53828a]/20 mb-4 md:mb-6 group hover:scale-105 transition-transform duration-300">
                        <Sparkles className="w-4 h-4 text-[#53828a] mr-2" />
                        <span className="bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent font-semibold text-sm">
                            Notre Méthodologie
                        </span>
                        <Zap className="w-3 h-3 text-[#b05f76] ml-2" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent">
                            Notre Processus
                        </span>
                        <br />
                        <span className="text-gray-900">de Réussite</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#727683] max-w-2xl mx-auto">
                        Une méthodologie éprouvée qui garantit des résultats exceptionnels pour chaque projet
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                    {/* Connection Lines */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#53828a]/20 via-[#b05f76]/40 to-[#53828a]/20 transform -translate-y-1/2 z-0">
                    </div>

                    {process.map((step, index) => (
                        <div
                            key={index}
                            className={`
                                transform transition-all duration-700 ease-out
                                ${visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                }
                            `}
                            style={{
                                transitionDelay: `${visibleCards.includes(index) ? step.delay : 0}s`,
                            }}
                        >
                            <Card
                                className={`
                                    border border-gray-100 shadow-lg hover:shadow-xl text-center group relative overflow-hidden cursor-pointer 
                                    transition-all duration-300 bg-white
                                    ${hoveredIndex === index ? 'scale-105 shadow-2xl' : 'hover:scale-[1.02]'}
                                `}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <CardContent className="p-6 md:p-8 relative">
                                    {/* Step Number */}
                                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 
                                            rounded-2xl bg-gradient-to-r ${step.gradient} 
                                            flex items-center justify-center text-white 
                                            group-hover:rotate-12 transition-all duration-500 shadow-lg
                                            relative overflow-hidden
                                        `}
                                    >
                                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                                        <div className="transform scale-90 lg:scale-100">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Stats badge */}
                                    <div className="absolute -bottom-2 right-3 bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white text-xs font-bold px-2 py-1 rounded-full transform translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <AnimatedNumber value={step.stats} isVisible={visibleCards.includes(index)} />
                                        <span className="ml-1">{step.statsLabel}</span>
                                    </div>

                                    <h3 className="text-lg lg:text-xl font-bold text-[#53828a] mb-3 group-hover:text-[#b05f76] transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-[#727683] leading-relaxed mb-4">
                                        {step.description}
                                    </p>

                                    {/* Bouton Voir Détails */}
                                    <button
                                        onClick={() => setModalOpen(index)}
                                        className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-sm font-semibold bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent inline-flex items-center gap-1 mx-auto"
                                    >
                                        <Eye className="w-4 h-4" />
                                        Voir détails
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 md:mt-20 text-center">
                    <button 
                                        onClick={() => window.location.href = '/contact'}
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-[#53828a] to-[#b05f76] rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Démarrer votre projet
                            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#b05f76] to-[#53828a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Process