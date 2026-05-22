"use client"

import type React from "react"
import { Shield, Mail, MapPin, Lock, FileText, CheckCircle2, Eye, Users, Zap, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"

const Confidentialite: React.FC = () => {
  const sections = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "1. Introduction",
      content:
        "Chez NEXOLIA, nous croyons que la confiance est le fondement de toute relation durable avec nos clients. Nous accordons une importance primordiale à la protection de vos données personnelles et nous nous engageons à respecter les normes les plus strictes en matière de sécurité et de confidentialité. Cette politique de confidentialité explique de manière transparente comment nous collectons, utilisons, stockons et protégez vos informations conformément au Règlement Général sur la Protection des Données (RGPD).",
      color: "#53828a",
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "2. Responsable du traitement",
      content: (
        <>
          <p className="font-semibold text-foreground">NEXOLIA - Agence Web & Digital</p>
          <div className="text-muted-foreground mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: "#53828a" }} />
              <span>Pôle Technologique El Ghazala, Ariana, Tunisie</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#53828a" }} />
              <span>contact@nexolia.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#53828a" }} />
              <span>+216 46 384 214</span>
            </div>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            En tant que responsable du traitement, NEXOLIA est l'entité légale responsable de la gestion de vos données
            personnelles et de la conformité avec la législation applicable.
          </p>
        </>
      ),
      color: "#53828a",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "3. Données collectées",
      content:
        "Nous collectons différentes catégories de données pour vous offrir nos services de manière optimale : vos coordonnées personnelles (nom, prénom, email, téléphone), les informations relatives à votre entreprise (raison sociale, secteur d'activité, taille), vos messages et demandes envoyés via nos formulaires de contact, ainsi que des données techniques (adresse IP, type de navigateur, pages visitées, durée de visite) collectées à des fins statistiques et d'amélioration de nos services.",
      color: "#53828a",
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "4. Finalité et sécurité",
      content:
        "Vos données sont utilisées exclusivement pour : répondre à vos demandes de devis ou d'informations, vous envoyer des newsletters et communications marketing (uniquement avec votre consentement explicite), améliorer continuellement nos services et votre expérience utilisateur, et analyser les tendances d'utilisation de notre site. Toutes les données sont protégées par des mesures de sécurité avancées incluant le chiffrement HTTPS, les sauvegardes régulières, les accès restreints et les audits de sécurité périodiques.",
      color: "#53828a",
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "5. Vos droits RGPD",
      content:
        "Conformément au Règlement Général sur la Protection des Données, vous disposez de droits fondamentaux : le droit d'accès à vos données, le droit de rectification pour corriger les informations inexactes, le droit à l'oubli (suppression), le droit d'opposition au traitement, le droit à la portabilité de vos données, et le droit à la limitation du traitement. Pour exercer l'un de ces droits, veuillez nous contacter à privacy@nexolia.com avec une pièce d'identité.",
      color: "#53828a",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "6. Cookies et outils de mesure",
      content:
        "Notre site utilise des cookies pour améliorer votre expérience de navigation et mesurer l'audience. Les cookies essentiels sont nécessaires au fonctionnement du site, tandis que les cookies analytiques nous aident à comprendre comment vous utilisez notre plateforme. Vous pouvez désactiver les cookies non-essentiels à tout moment depuis les paramètres de votre navigateur ou via notre banneau de consentement.",
      color: "#53828a",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: "7. Durée de conservation",
      content:
        "Les données personnelles sont conservées pendant une période de 3 ans après votre dernier contact avec NEXOLIA, sauf si une obligation légale ou contractuelle nous impose une durée de conservation plus longue. Après cette période, vos données sont supprimées de manière sécurisée.",
      color: "#53828a",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "8. Partage des données",
      content:
        "NEXOLIA ne partage vos données personnelles avec des tiers que dans les cas suivants : si vous avez donné votre consentement explicite, si cela est nécessaire pour fournir nos services (par exemple, avec nos prestataires de paiement), ou si la loi l'exige. Tous nos partenaires sont tenus de respecter les mêmes normes de confidentialité et de sécurité.",
      color: "#53828a",
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "9. Contact et réclamations",
      content:
        "Pour toute question concernant cette politique de confidentialité, pour exercer vos droits, ou pour signaler une préoccupation : privacy@nexolia.com. Vous avez également le droit de déposer une plainte auprès de l'autorité de protection des données compétente dans votre pays.",
      color: "#53828a",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ backgroundColor: "#53828a" }}
          ></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ backgroundColor: "#b05f76", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
            style={{ backgroundColor: "#916a7c", animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8">
            {/* Icon with animation */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-200 animate-bounce"
              style={{ borderColor: "#53828a", backgroundColor: "rgba(83, 130, 138, 0.1)" }}
            >
              <Shield className="w-8 h-8 md:w-10 md:h-10" style={{ color: "#53828a" }} />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Politique de <span style={{ color: "#53828a" }}>Confidentialité</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chez NEXOLIA, votre confiance est notre priorité. Découvrez comment nous protégeons vos données
                personnelles et respectons votre vie privée conformément aux normes internationales les plus strictes.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 flex-wrap">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ borderColor: "#53828a", backgroundColor: "rgba(83, 130, 138, 0.05)" }}
              >
                <CheckCircle2 className="w-5 h-5" style={{ color: "#53828a" }} />
                <span className="text-sm font-medium text-gray-700">Conforme RGPD</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ borderColor: "#b05f76", backgroundColor: "rgba(176, 95, 118, 0.05)" }}
              >
                <Lock className="w-5 h-5" style={{ color: "#b05f76" }} />
                <span className="text-sm font-medium text-gray-700">Sécurité maximale</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ borderColor: "#916a7c", backgroundColor: "rgba(145, 106, 124, 0.05)" }}
              >
                <Eye className="w-5 h-5" style={{ color: "#916a7c" }} />
                <span className="text-sm font-medium text-gray-700">Transparence totale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            {sections.map((sec, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 shadow-sm hover:shadow-lg transition-all duration-500 bg-white hover:bg-blue-50/30"
                style={{ borderColor: "rgba(83, 130, 138, 0.2)" }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `linear-gradient(to bottom, transparent, #53828a, transparent)` }}
                ></div>

                <div className="relative">
                  <CardHeader className="flex flex-row items-start gap-4 pb-3 md:pb-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#53828a" }}
                    >
                      {sec.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {sec.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-gray-700 leading-relaxed text-base md:text-lg space-y-3">
                    {typeof sec.content === "string" ? <p>{sec.content}</p> : sec.content}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 md:mt-20 pt-12 border-t-2" style={{ borderColor: "rgba(83, 130, 138, 0.2)" }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <p className="text-sm md:text-base text-gray-600">
                  Dernière mise à jour : <strong className="text-gray-900">22 octobre 2025</strong>
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Cette politique est conforme au RGPD et à la législation tunisienne applicable.
                </p>
              </div>

              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
                <a
                  href="mailto:privacy@nexolia.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#53828a" }}
                >
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">Nous contacter</span>
                  <span className="sm:hidden">Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Confidentialite
