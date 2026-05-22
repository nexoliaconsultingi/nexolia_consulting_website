"use client"
import { ArrowRight } from "lucide-react"
import React from "react"
import { Button } from "./button"
import { useRouter } from "next/navigation" // ✅ Import du hook de navigation

const SurFooter: React.FC = () => {
  const router = useRouter() // ✅ Initialisation du router

  const handleStartProject = () => {
    router.push("/contact") // ✅ Redirection vers la page Contact
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#53828a] to-[#b05f76] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Transformons Votre Vision
          <span className="block">en Réalité Digitale</span>
        </h2>

        <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discutons de votre projet et découvrons ensemble la solution parfaite pour propulser votre entreprise vers
          le succès. <span className="font-semibold">Devis gratuite incluse !</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleStartProject} // ✅ Ajout du clic
            size="lg"
            className="bg-white text-[#53828a] hover:bg-white/90 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Démarrer mon projet <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SurFooter
