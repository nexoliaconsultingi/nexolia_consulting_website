"use client"

import React, { useState } from "react"
import {
  Award,
  Globe,
  Heart,
  Lightbulb,
  Rocket,
  Users,
  X,
  Code,
  Briefcase,
  Coffee,
  MapPin,
  Clock,
  GraduationCap,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  CheckCircle2,
  Mail
} from "lucide-react"
import { Button } from "./button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

// Couleurs officielles Nexolia
const NEXOLIA = {
  primary: "#53828A",    // Vert-sauge
  secondary: "#AF5F76",  // Rose
  white: "#FFFFFF",
  darkBg: "#0F0F0F",
  darkCard: "#1A1A1A",
  darkBorder: "#2A2A2A"
}

const PostWork: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const jobs = [
    {
      id: 1,
      role: "Développeur Full-Stack Senior",
      location: "Tunis",
      type: "CDI",
      gradient: `from-[#53828A] to-[#AF5F76]`,
      profile: "Nous recherchons un développeur Full-Stack passionné avec minimum 4 ans d'expérience, capable de concevoir des solutions web et mobile sur mesure. Vous maîtrisez l'écosystème Microsoft et les technologies modernes.",
      hours: "40 heures / semaine",
      experience: "4+ ans",
      education: "BAC+5 en informatique ou équivalent",
      mission: [
        "Développer des applications web et mobile sur mesure pour nos clients",
        "Implémenter des solutions SPFx pour l'environnement Microsoft 365",
        "Créer des dashboards Power BI performants",
        "Participer à l'architecture technique des projets",
        "Mentorer les développeurs juniors"
      ],
      techs: ["React", "TypeScript", "Node.js", "SPFx", "Power BI", "Azure"],
      environment: "Équipe tunisienne dynamique, ambiance startup, horaires flexibles",
      benefits: [
        "Télétravail 2 jours/semaine",
        "Mutuelle CNSS + assurance santé complémentaire",
        "Prime de performance trimestrielle",
        "Formations certifiantes (Microsoft, AWS)",
        "Café, thé et snacks à disposition",
        "Événements d'équipe"
      ],
      email: "recrutement.tn@nexolia-consulting.com"
    },
    {
      id: 2,
      role: "Ingénieur DevOps",
      location: "Tunis",
      type: "CDI",
      gradient: `from-[#53828A] to-[#AF5F76]`,
      profile: "Vous êtes passionné par l'automatisation et les infrastructures cloud ? Rejoignez notre équipe pour gérer et optimiser nos pipelines de déploiement.",
      hours: "40 heures / semaine",
      experience: "3+ ans",
      education: "BAC+5 en informatique",
      mission: [
        "Déployer et maintenir l'infrastructure cloud (Azure/AWS)",
        "Automatiser les processus CI/CD avec GitHub Actions",
        "Mettre en place la surveillance et le monitoring",
        "Optimiser les coûts et les performances cloud",
        "Assurer la sécurité des infrastructures"
      ],
      techs: ["Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
      environment: "Équipe technique agile, full remote friendly",
      benefits: [
        "Télétravail 2 jours/semaine",
        "Mutuelle CNSS + assurance santé complémentaire",
        "Prime de performance trimestrielle",
        "Formations certifiantes (Microsoft, AWS)",
        "Café, thé et snacks à disposition",
        "Événements d'équipe"
      ],
      email: "recrutement.tn@nexolia-consulting.com"
    },
    {
      id: 3,
      role: "Business Developer",
      location: "Tunis",
      type: "CDI",
      gradient: `from-[#AF5F76] to-[#53828A]`,
      profile: "Profil commercial motivé avec expérience dans les services IT, vous développerez notre portefeuille clients B2B en Tunisie.",
      hours: "40 heures / semaine",
      experience: "2+ ans",
      education: "BAC+4 en commerce ou équivalent",
      mission: [
        "Prospecter de nouveaux clients entreprises",
        "Présenter nos solutions sur mesure",
        "Négocier et conclure des contrats",
        "Fidéliser le portefeuille clients existant",
        "Participer aux salons et événements professionnels"
      ],
      techs: ["CRM Odoo", "LinkedIn Sales Navigator", "Power BI", "Office 365"],
      environment: "Ambiance commerciale stimulante, objectifs clairs, primes attractives",
       benefits: [
        "Télétravail 2 jours/semaine",
        "Mutuelle CNSS + assurance santé complémentaire",
        "Prime de performance trimestrielle",
        "Formations certifiantes (Microsoft, AWS)",
        "Café, thé et snacks à disposition",
        "Événements d'équipe"
      ],
      email: "recrutement.tn@nexolia-consulting.com"
    },
    {
      id: 4,
      role: "Chef de Projet Digital",
      location: "Tunis",
      type: "CDI",
      gradient: `from-[#53828A] to-[#AF5F76]`,
      profile: "Vous avez une double compétence technique et managériale ? Vous superviserez la réalisation des projets web et mobile de nos clients.",
      hours: "40 heures / semaine",
      experience: "5+ ans",
      education: "BAC+5 (projet ou informatique)",
      mission: [
        "Piloter les projets digitaux de A à Z",
        "Gérer les plannings, budgets et ressources",
        "Faciliter les échanges entre équipes techniques et clients",
        "Assurer la qualité des livrables",
        "Reporting stratégique aux dirigeants"
      ],
      techs: ["Jira", "Notion", "Power BI", "Microsoft Project", "PMO tools"],
      environment: "Contact direct avec les clients grands comptes, management bienveillant",
       benefits: [
        "Télétravail 2 jours/semaine",
        "Mutuelle CNSS + assurance santé complémentaire",
        "Prime de performance trimestrielle",
        "Formations certifiantes (Microsoft, AWS)",
        "Café, thé et snacks à disposition",
        "Événements d'équipe"
      ],
      email: "recrutement.tn@nexolia-consulting.com"
    },
    {
      id: 5,
      role: "Data Analyst Power BI",
      location: "Tunis",
      type: "CDI",
      gradient: `from-[#AF5F76] to-[#53828A]`,
      profile: "Expert en visualisation de données, vous transformerez le Big Data de nos clients en dashboards stratégiques et intuitifs.",
      hours: "40 heures / semaine",
      experience: "2+ ans",
      education: "BAC+5 en data science ou équivalent",
      mission: [
        "Concevoir des dashboards Power BI interactifs",
        "Modéliser et nettoyer les données complexes",
        "Former les clients à l'utilisation des reportings",
        "Automatiser les flux de données (ETL)",
        "Proposer des KPIs pertinents pour la prise de décision"
      ],
      techs: ["Power BI", "DAX", "SQL", "Python", "Azure Data Factory"],
      environment: "Data-driven culture, projets variés (finance, santé, retail)",
      benefits: [
        "Télétravail 2 jours/semaine",
        "Mutuelle CNSS + assurance santé complémentaire",
        "Prime de performance trimestrielle",
        "Formations certifiantes (Microsoft, AWS)",
        "Café, thé et snacks à disposition",
        "Événements d'équipe"
      ],

      email: "recrutement.tn@nexolia-consulting.com"
    }
  ]

  return (
    <section className="py-20 bg-[#0F0F0F] relative overflow-hidden">
      {/* Effets de fond dynamiques avec couleurs Nexolia */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#53828A]/15 to-[#AF5F76]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#AF5F76]/10 to-[#53828A]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#53828A]/5 to-[#AF5F76]/5 rounded-full blur-3xl"></div>

      
      </div>

      <div className="container mx-auto px-4 relative max-w-[1500px] lg:px-[5rem]">
        {/* En-tête avec animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#53828A]/20 to-[#AF5F76]/20 backdrop-blur-md border border-[#53828A]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#AF5F76] animate-pulse" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#53828A] via-[#AF5F76] to-[#53828A] bg-clip-text text-transparent">
            Rejoignez L'Aventure Digitale
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Basée à <strong className="text-[#AF5F76]">Tunisie</strong>, Nexolia Consulting est le leader tunisien du développement
            de solutions web/mobile et solutions Microsoft 365 sur mesure et de l'analyse de données stratégiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ---- Partie gauche : Valeurs et avantages ---- */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#53828A]/20 shadow-xl">
              <h3 className="text-2xl font-bold text-[#53828A] mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#AF5F76]" />
                Pourquoi Nous Rejoindre ?
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "Projets à fort impact",
                    desc: "Travaillez sur des solutions critiques pour les plus grandes entreprises tunisiennes"
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Évolution rapide",
                    desc: "Plan de carrière personnalisé avec promotions annuelles possibles"
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    title: "Ambiance familiale",
                    desc: "Équipe tunisienne soudée, events mensuels et team building"
                  },
                  {
                    icon: <Coffee className="w-5 h-5" />,
                    title: "Équilibre vie pro/perso",
                    desc: "Horaires flexibles, télétravail, pas de culture du présentiel"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#53828A]/10 hover:to-[#AF5F76]/10 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#53828A] to-[#AF5F76] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chiffres clés */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#53828A]/10 to-[#AF5F76]/10 rounded-xl p-4 text-center border border-[#53828A]/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#AF5F76]">50+</div>
                <div className="text-gray-400 text-sm">Projets livrés</div>
              </div>
              <div className="bg-gradient-to-br from-[#AF5F76]/10 to-[#53828A]/10 rounded-xl p-4 text-center border border-[#53828A]/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#53828A]">30+</div>
                <div className="text-gray-400 text-sm">Clients satisfaits</div>
              </div>
              <div className="bg-gradient-to-br from-[#53828A]/10 to-[#AF5F76]/10 rounded-xl p-4 text-center border border-[#53828A]/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#AF5F76]">5+</div>
                <div className="text-gray-400 text-sm">Années d'expertise</div>
              </div>
              <div className="bg-gradient-to-br from-[#AF5F76]/10 to-[#53828A]/10 rounded-xl p-4 text-center border border-[#53828A]/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-[#53828A]">100%</div>
                <div className="text-gray-400 text-sm">Tunisoise 🇹🇳</div>
              </div>
            </div>

            {/* Contact recrutement - Version Dark */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#53828A] via-[#53828A]/95 to-[#AF5F76] rounded-2xl p-6 text-center shadow-2xl">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full blur-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  Recrutement Permanent
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-6">
                  Aucun poste ne correspond à votre profil ?
                  Envoyez-nous votre candidature spontanée et rejoignez l'univers de{" "}
                  <span className="font-semibold text-white">
                    Nexolia Consulting
                  </span>.
                </p>

                {/* Button */}
                <a
                  href="mailto:recrutement@nexolia-consulting.com?subject=Candidature Spontanée"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#53828A] px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Envoyer ma candidature
                </a>

                {/* Small text */}
                <p className="text-white/70 text-xs mt-4">
                  Réponse rapide • Opportunités nationales & internationales
                </p>
              </div>
            </div>
          </div>

          {/* ---- Partie droite : Liste des offres ---- */}
          <div className="animate-fade-in-right">
            <Card className="border-0 shadow-2xl bg-[#1A1A1A] overflow-hidden">
              <CardHeader className="relative bg-gradient-to-r from-[#53828A]/10 to-[#AF5F76]/10 border-b border-[#53828A]/20">
                <CardTitle className="text-2xl text-[#53828A] text-center flex items-center justify-center gap-2">
                  <Briefcase className="w-6 h-6 text-[#AF5F76]" />
                  Offres d'Emploi Actives
                  <Badge className="bg-gradient-to-r from-[#53828A] to-[#AF5F76] text-white ml-2">{jobs.length} postes</Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 p-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    onMouseEnter={() => setHoveredCard(job.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#53828A] to-[#AF5F76] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                    <div className={`relative p-5 rounded-xl transition-all duration-300 border ${
                      hoveredCard === job.id
                        ? 'bg-gradient-to-r from-[#53828A] to-[#AF5F76] shadow-xl transform -translate-y-1 border-transparent'
                        : 'bg-[#222222] border-[#53828A]/20 hover:border-[#AF5F76]/40'
                      }`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className={`font-bold text-lg transition-colors ${
                            hoveredCard === job.id ? 'text-white' : 'text-white'
                          }`}>
                            {job.role}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className={`w-3 h-3 ${
                              hoveredCard === job.id ? 'text-white/80' : 'text-gray-400'
                            }`} />
                            <p className={`text-xs ${
                              hoveredCard === job.id ? 'text-white/80' : 'text-gray-400'
                            }`}>
                              {job.location}
                            </p>
                            <Clock className={`w-3 h-3 ml-2 ${
                              hoveredCard === job.id ? 'text-white/80' : 'text-gray-400'
                            }`} />
                            <p className={`text-xs ${
                              hoveredCard === job.id ? 'text-white/80' : 'text-gray-400'
                            }`}>
                              {job.hours}
                            </p>
                          </div>
                        </div>
                        <Badge className={`${
                          hoveredCard === job.id
                            ? 'bg-white text-[#53828A]'
                            : 'bg-gradient-to-r from-[#53828A] to-[#AF5F76] text-white'
                        }`}>
                          {job.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.techs.slice(0, 3).map((tech, i) => (
                          <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${
                            hoveredCard === job.id
                              ? 'bg-white/20 text-white'
                              : 'bg-[#333333] text-gray-300'
                          }`}>
                            {tech}
                          </span>
                        ))}
                        {job.techs.length > 3 && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            hoveredCard === job.id
                              ? 'bg-white/20 text-white'
                              : 'bg-[#333333] text-gray-300'
                          }`}>
                            +{job.techs.length - 3}
                          </span>
                        )}
                      </div>

                      <div className={`flex justify-between items-center mt-3 pt-3 border-t ${
                        hoveredCard === job.id ? 'border-white/20' : 'border-[#333333]'
                      }`}>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-semibold ${
                            hoveredCard === job.id ? 'text-white' : 'text-[#AF5F76]'
                          }`}>
                           
                          </span>
                        </div>
                        <Button
                          className={`text-xs px-4 py-1 rounded-full transition-all ${
                            hoveredCard === job.id
                              ? 'bg-white text-[#53828A] hover:bg-gray-100'
                              : 'bg-gradient-to-r from-[#53828A] to-[#AF5F76] text-white hover:opacity-90'
                          }`}
                        >
                          Postuler
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <p className="text-center text-gray-500 text-xs mt-4">
              * Tous nos postes sont basés en Tunisie 🇹🇳
            </p>
          </div>
        </div>
      </div>

      {/* ---- MODAL DÉTAILLÉE VERSION DARK ---- */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-[#53828A]/30">
            {/* Header with gradient Nexolia */}
            <div className={`bg-gradient-to-r ${selectedJob.gradient} p-6 sticky top-0`}>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                onClick={() => setSelectedJob(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-bold text-white pr-8">{selectedJob.role}</h3>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center gap-1 text-white/90">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{selectedJob.location}</span>
                </div>
                <div className="flex items-center gap-1 text-white/90">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{selectedJob.hours}</span>
                </div>
                <div className="flex items-center gap-1 text-white/90">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm">{selectedJob.experience}</span>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
             

              {/* Profil */}
              <div>
                <h4 className="text-[#53828A] font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Profil recherché
                </h4>
                <p className="text-gray-300 leading-relaxed">{selectedJob.profile}</p>
                <p className="text-gray-500 text-sm mt-2">🎓 {selectedJob.education}</p>
              </div>

              {/* Missions */}
              <div>
                <h4 className="text-[#53828A] font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Missions principales
                </h4>
                <ul className="space-y-2">
                  {selectedJob.mission.map((m: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#AF5F76] mt-0.5 flex-shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-[#53828A] font-semibold mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Stack Technique
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.techs.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#222222] rounded-lg text-sm text-gray-300 border border-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Environnement */}
              <div>
                <h4 className="text-[#53828A] font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Environnement de travail
                </h4>
                <p className="text-gray-300 leading-relaxed">{selectedJob.environment}</p>
              </div>

              {/* Avantages */}
              <div>
                <h4 className="text-[#53828A] font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Avantages Nexolia
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedJob.benefits.map((b: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#53828A]" />
                      <span className="text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#53828A]/10 to-[#AF5F76]/10 rounded-xl p-6 text-center border border-[#53828A]/30">
                <p className="text-white font-semibold mb-3">Prêt à relever le défi ?</p>
                <a
                  href={`mailto:${selectedJob.email}?subject=Candidature - ${selectedJob.role}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#53828A] to-[#AF5F76] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  Envoyer ma candidature
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in-up 0.4s ease-out;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default PostWork