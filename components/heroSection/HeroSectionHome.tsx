"use client";

import { Button } from "@/components/ui/button";
import { Eye, Zap, TrendingUp, Clock, Shield, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative h-screen min-h-[900px] flex items-center overflow-hidden"
      aria-label="Section héroïque NEXOLIA Consulting"
    >
      {/* Vidéo de fond avec fallback textuel pour SEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.95) contrast(1.1) saturate(1.3)" }}
          aria-label="Vidéo d'arrière-plan représentant l'innovation technologique"
        >
          <source src="/videoHeroSection/videoHeroSection1.mp4" type="video/mp4" />
          {/* Fallback textuel pour les moteurs de recherche */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a1f] via-[#1a2a2f] to-[#2a1a2f]" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#53828a]/30 to-[#b05f76]/20" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Effet parallaxe (aucun impact SEO) */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#53828a]/20 to-[#b05f76]/20 blur-3xl pointer-events-none z-[1]"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* ========== H1 STATIQUE POUR LE SEO (CRITIQUE) ========== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <h1 className="sm:pt-0 text-[30px] sm:text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight"> <span className="text-white">NEXOLIA Consulting</span>
              <br />
              <span className="bg-gradient-to-r from-[#f5e6d3] via-[#ffd6c4] to-[#ffc6b4] bg-clip-text text-transparent">
                Votre partenaire digital en Tunisie et France
              </span>
            </h1>
            {/* Texte animé en sous-titre (non critique pour le SEO) */}
            <div className="text-xl md:text-2xl text-white/80 mt-4">
              <TypeAnimation
                sequence={[
                  "Développement Web & Mobile",
                  1500,
                  "Solutions Microsoft 365",
                  1500,
                  "IA et Automatisation",
                  1500,
                  "Transformation digitale",
                  1500,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="font-semibold"
              />
            </div>
          </motion.div>

          {/* Sous-titre statique pour renforcer le message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
              Digitalisez • Automatisez • Dominez
            </p>
          </motion.div>

          {/* Offre commerciale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            className="mb-6 sm:mb-10"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative inline-block max-w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#53828a] to-[#b05f76] blur-xl opacity-70 rounded-2xl" />
              <div className="relative bg-gradient-to-r from-[#53828a]/90 to-[#b05f76]/90 backdrop-blur-sm rounded-2xl px-4 py-2 sm:px-8 sm:py-4 border border-white/30 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <span className="text-white font-black text-sm sm:text-xl">DES OFFRES EXCEPTIONNELLES</span>
                  <div className="h-8 w-px bg-white/30 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                    <span className="text-white font-bold text-xs sm:text-base">
                      Audit Et Devis GRATUIT + 3 mois de maintenance offerts
                    </span>
                  </div>
                  <motion.div animate={{ x: isHovering ? 5 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 mb-8 sm:mb-12"
          >
            {[
              { value: "98%", label: "de satisfaction client", icon: Shield },
              { value: "+150", label: "entreprises transformées", icon: TrendingUp },
              { value: "3x", label: "plus de conversions", icon: Zap },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + idx * 0.1 }}
                className="
        flex items-center gap-2
        bg-white/5 backdrop-blur-sm
        rounded-lg sm:rounded-xl
        px-2 py-2 sm:px-3 sm:py-3
        border border-white/10
        min-w-[95px] sm:min-w-[140px]
      "
              >
                <stat.icon
                  className="w-5 h-5 sm:w-8 sm:h-8 text-[#f5e6d3]"
                  aria-hidden="true"
                />

                <div>
                  <div className="text-base sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="text-[10px] sm:text-xs text-white/70 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center"
          >
            <Link
              href="/portfolio"
              className="
      group relative inline-flex items-center justify-center overflow-hidden
      rounded-2xl
      bg-gradient-to-r from-[#53828a] via-[#6b8f95] to-[#b05f76]

      max-[350px]:px-[50px]
      max-[350px]:py-3
      max-[350px]:text-[10px]

      px-6 py-3.5
      sm:px-8 sm:py-4

      text-sm sm:text-lg
      font-semibold text-white

      shadow-[0_10px_35px_rgba(83,130,138,0.35)]
      hover:shadow-[0_15px_45px_rgba(176,95,118,0.45)]

      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:scale-[1.02]

      border border-white/10
      backdrop-blur-md
    "
              aria-label="Découvrir nos solutions - Portfolio NEXOLIA"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

              <span className="absolute inset-0 bg-gradient-to-r from-[#53828a]/20 to-[#b05f76]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative flex items-center gap-2 z-10">
                <Eye
                  className="
          w-4 h-4
          max-[350px]:w-3
          max-[350px]:h-3
          sm:w-5 sm:h-5
          transition-transform duration-300
          group-hover:rotate-12
          group-hover:scale-110
        "
                  aria-hidden="true"
                />
                Découvrir nos solutions
              </span>
            </Link>

            <Link
              href="/contact"
              className="
      group relative inline-flex items-center justify-center overflow-hidden
      rounded-2xl

      bg-[#7e95a0]
      hover:bg-[#3f3f3f]

      max-[350px]:px-[50px]
      max-[350px]:py-3
      max-[350px]:text-[10px]

      px-6 py-3.5
      sm:px-8 sm:py-4

      text-sm sm:text-lg
      font-semibold text-white

      border border-[#5a5a5a]
      shadow-xl hover:shadow-2xl

      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:scale-[1.02]
    "
              aria-label="Demander un devis gratuit - Contact NEXOLIA"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

              <span className="relative z-10 flex items-center gap-2">
                Demander un devis gratuitement
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}