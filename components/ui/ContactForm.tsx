"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Award,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence, Variants } from "framer-motion"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const sectionRef = useRef<HTMLElement>(null)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "Prénom requis"
    if (!formData.lastName.trim()) newErrors.lastName = "Nom requis"
    if (!formData.email.trim()) {
      newErrors.email = "Email requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide"
    }
    if (!formData.projectType) newErrors.projectType = "Type de projet requis"
    if (!formData.message.trim()) newErrors.message = "Description requise"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }














const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {

    const response = await fetch(
      "https://api.nexolia-consulting.com/send-email/api/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // Vérifier si réponse backend OK
    if (!response.ok) {
      throw new Error(`HTTP Error : ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {

      setSubmitSuccess(true);

      // Reset formulaire
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        newsletter: false,
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

    } else {
      throw new Error(data.message);
    }

  } catch (error) {

    console.error("Erreur Email :", error);

    alert("Erreur lors de l'envoi du message.");

  } finally {

    setIsSubmitting(false);

  }
};
























  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Téléphone",
      details: ["+216 23 267 646", "+216 92 233 647"],
      description: "Lun-Ven 8h-17h",
      color: "from-blue-500 to-blue-600",
      hoverBg: "hover:bg-blue-50",
      action: "Appelez-nous",
      link: "tel:+21623267646",
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      details: ["contact@nexolia-consulting.com"],
      description: "Réponse sous 24h",
      color: "from-green-500 to-green-600",
      hoverBg: "hover:bg-green-50",
      action: "Écrivez-nous",
      link: "mailto:contact@nexolia-consulting.com",
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Bureaux",
      details: ["Tunis, Ariana", "Pôle Technologique El Ghazala"],
      color: "from-purple-500 to-purple-600",
      hoverBg: "hover:bg-purple-50",
      action: "Voir sur Maps",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Horaires",
      details: ["Lun-Ven : 8:30 - 17:00"],
      description: "Support 24/7 disponible",
      color: "from-orange-500 to-orange-600",
      hoverBg: "hover:bg-orange-50",
      action: "Support prioritaire",
    },
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "200+", label: "Clients satisfaits" },
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Pays couverts" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Taux de succès" },
    { icon: <Building2 className="w-6 h-6" />, value: "50+", label: "Projets livrés" },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const cardVariants: Variants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    tap: { scale: 0.98 },
  }

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 sm:py-24 min-h-screen flex items-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/85 to-gray-900/90" />

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#53828a] rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#b05f76] rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-[95%] max-w-[1400px] mx-auto px-2 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#7ab3bb]" />
            <span className="text-sm font-semibold text-white">Contactez-nous</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Discutons de votre{" "}
            <span className="bg-gradient-to-r from-[#7ab3bb] to-[#c47f96] bg-clip-text text-transparent">
              projet innovant
            </span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Une équipe dédiée vous accompagne dans la transformation digitale de votre entreprise
          </p>
        </motion.div>

        {/* Stats Bar - Version épurée avec verre dépoli */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-[#7ab3bb] flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info - À DROITE en desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:order-2"
          >
            <div className="sticky top-24">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}

                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="group block cursor-pointer"
                  >
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-sm">
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            {info.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-2 text-lg">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 font-medium leading-tight text-sm">
                                {detail}
                              </p>
                            ))}
                            {info.description && (
                              <p className="text-xs text-gray-500 mt-2 font-medium">
                                {info.description}
                              </p>
                            )}
                            <div className="flex items-center mt-3 text-sm font-medium text-[#53828a] group-hover:text-[#b05f76] transition-colors">
                              {info.action} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>

              {/* Trust Badge - Version améliorée */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white font-medium">
                  Recommandé par plus de 200 entreprises
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - À GAUCHE en desktop */}
          <motion.div
            className="lg:col-span-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-[length:200%_100%] animate-shimmer" />
              <CardHeader className="pb-8 text-center lg:text-left">
                <CardTitle className="text-3xl sm:text-4xl text-[#53828a] mb-3">
                  Prêt à innover ?
                </CardTitle>
                <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                  Remplissez ce formulaire et notre équipe vous contactera sous 24h pour une première analyse gratuite de votre projet
                </p>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 pb-8" style={{background:"#f7fff3",paddingTop:"15px"}}>
                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                      <p className="text-green-700">
                        Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Prénom *</label>
                          <Input
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            onFocus={() => setFocusedField("firstName")}
                            onBlur={() => setFocusedField(null)}
                            className={`h-12 border-2 transition-all duration-300 ${focusedField === "firstName"
                                ? "border-[#53828a] shadow-md"
                                : "border-gray-200 hover:border-[#53828a]/50"
                              } ${errors.firstName ? "border-red-500" : ""}`}
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                          )}
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Nom *</label>
                          <Input
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className={`h-12 border-2 transition-all duration-300 hover:border-[#53828a]/50 focus:border-[#53828a] ${errors.lastName ? "border-red-500" : "border-gray-200"
                              }`}
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                          )}
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Email professionnel *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`h-12 border-2 transition-all duration-300 hover:border-[#53828a]/50 focus:border-[#53828a] ${errors.email ? "border-red-500" : "border-gray-200"
                              }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Téléphone</label>
                          <Input
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-12 border-2 border-gray-200 hover:border-[#53828a]/50 focus:border-[#53828a] transition-all duration-300"
                            placeholder="+216 23 267 646"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-[#53828a] mb-2">Entreprise / Organisation</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="h-12 border-2 border-gray-200 hover:border-[#53828a]/50 focus:border-[#53828a] transition-all duration-300"
                          placeholder="Nom de votre entreprise"
                        />
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Type de projet *</label>
                          <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                            <SelectTrigger className={`h-12 border-2 transition-all duration-300 hover:border-[#53828a]/50 focus:border-[#53828a] ${errors.projectType ? "border-red-500" : "border-gray-200"
                              }`}>
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web">Site Web / E-commerce</SelectItem>
                              <SelectItem value="mobile">Application Mobile</SelectItem>
                              <SelectItem value="saas">Plateforme SaaS</SelectItem>
                              <SelectItem value="design">Design & UX/UI</SelectItem>
                              <SelectItem value="spfx">Microsoft SPFx Solutions</SelectItem>
                              <SelectItem value="power-automate">Power Automate Workflows</SelectItem>
                              <SelectItem value="power-bi">Power BI Reporting Dashboards</SelectItem>
                              <SelectItem value="microsoft-project">Microsoft Project PMO Installation</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.projectType && (
                            <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
                          )}
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Budget estimé</label>
                          <Select onValueChange={(v) => setFormData({ ...formData, budget: v })}>
                            <SelectTrigger className="h-12 border-2 border-gray-200 hover:border-[#53828a]/50 focus:border-[#53828a] transition-all duration-300">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5k-15k">5k DT - 15k DT</SelectItem>
                              <SelectItem value="15k-50k">15k DT - 50k DT</SelectItem>
                              <SelectItem value="50k+">50k DT +</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-sm font-semibold text-[#53828a] mb-2">Délai souhaité</label>
                          <Select onValueChange={(v) => setFormData({ ...formData, timeline: v })}>
                            <SelectTrigger className="h-12 border-2 border-gray-200 hover:border-[#53828a]/50 focus:border-[#53828a] transition-all duration-300">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (moins d'un mois)</SelectItem>
                              <SelectItem value="1-3">1-3 mois</SelectItem>
                              <SelectItem value="5-12">5-12 mois</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-semibold text-[#53828a] mb-2">
                          Description du projet *
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Décrivez brièvement votre projet, vos objectifs et vos besoins spécifiques..."
                          className={`min-h-[150px] border-2 transition-all duration-300 hover:border-[#53828a]/50 focus:border-[#53828a] ${errors.message ? "border-red-500" : "border-gray-200"
                            }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                      </motion.div>

                      <motion.div variants={itemVariants} className="flex items-start space-x-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(c) => setFormData({ ...formData, newsletter: c as boolean })}
                          className="mt-1"
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-600 leading-relaxed">
                          Je souhaite recevoir la newsletter NEXOLIA pour rester informé des dernières innovations.
                        </label>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                       <Button
  type="submit"
  size="lg"
  disabled={isSubmitting}
  className="w-full text-[10px] sm:text-lg bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white py-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
>
  {isSubmitting ? (
    <>
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      Envoi en cours...
    </>
  ) : (
    <>
      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      Envoyer ma demande
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </>
  )}
</Button>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </motion.section>
  )
}

export default ContactForm