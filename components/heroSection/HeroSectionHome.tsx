"use client";

import { Button } from "@/components/ui/button";
import { Eye, Zap, TrendingUp, Clock, Shield, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Stats from "@/components/ui/Stats";
import QuoteRequestButton from "@/components/ui/QuoteRequestButton";
import { useEffect, useState } from "react";
import Link from "next/link";



export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleNavigate = () => {
        // Logique de navigation
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // ID de vidéo Google Drive (remplacez par le vôtre)
    const googleDriveVideoId = "1a2b3c4d5e6f7g8h9i0j"; // À remplacer
    const videoUrl = `https://drive.google.com/uc?export=download&id=${googleDriveVideoId}`;

    return (
        <section className="relative h-screen min-h-[900px] flex items-center overflow-hidden">
            {/* Video de fond Google Drive */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                    style={{
                        filter: "brightness(0.95) contrast(1.1) saturate(1.3)",
                    }}
                >
                    <source src="/videoHeroSection/videoHeroSection1.mp4" type="video/mp4" />
                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a1f] via-[#1a2a2f] to-[#2a1a2f]" />
                </video>

                {/* Overlay dynamique */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#53828a]/30 to-[#b05f76]/20" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>

            {/* Effet de souris qui suit (parallaxe) */}
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
                    {/* Badge animé */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    >

                    </motion.div>

                    {/* Texte qui s'écrit lettre par lettre */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-6"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
                            <span className="text-white">Vous êtes</span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    "les bienvenus chez NEXOLIA",
                                    2000,
                                    "prêts pour la révolution digitale",
                                    2000,
                                    "au seuil de l'excellence IA",
                                    2000,
                                    "à deux pas du futur",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={45}
                                repeat={Infinity}
                                className="bg-gradient-to-r from-[#f5e6d3] via-[#ffd6c4] to-[#ffc6b4] bg-clip-text text-transparent"
                            />
                        </h1>
                    </motion.div>

                    {/* Sous-titre avec effet machine à écrire */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-8"
                    >
                        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
                            Digitalisez • Automatisez • Dominez
                        </p>
                        <TypeAnimation
                            sequence={[
                                "Vos processus optimisés par l'IA",
                                1500,
                                "Votre présence en ligne boostée",
                                1500,
                                "Votre croissance accélérée",
                                1500,
                            ]}
                            wrapper="p"
                            speed={50}
                            repeat={Infinity}
                            className="text-lg md:text-xl text-[#f5e6d3]/80 mt-2"
                        />
                    </motion.div>

                    {/* Offre commerciale ULTRA FORTE */}
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
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-black text-sm sm:text-xl">DES OFFRES EXCEPTIONNELLES</span>
                                    </div>
                                    <div className="h-8 w-px bg-white/30 hidden sm:block" />
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        <span className="text-white font-bold text-xs sm:text-base">
                                            Audit Et Devis GRATUIT + 3 mois de maintenance offerts
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ x: isHovering ? 5 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Statistiques de vente */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-wrap justify-center gap-8 mb-12"
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
                                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/10"
                            >
                                <stat.icon className="w-8 h-8 text-[#f5e6d3]" />
                                <div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-white/70">{stat.label}</div>
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
                        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href={"/portfolio"}
                                className="
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-2xl

        bg-gradient-to-r from-[#53828a] via-[#6b8f95] to-[#b05f76]
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
                            >
                                {/* Animation Shine */}
                                <span
                                    className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            translate-x-[-120%]
            group-hover:translate-x-[120%]
            transition-transform duration-1000
        "
                                />

                                {/* Glow Background */}
                                <span
                                    className="
            absolute inset-0
            bg-gradient-to-r from-[#53828a]/20 to-[#b05f76]/20
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
        "
                                />

                                {/* Content */}
                                <span className="relative flex items-center gap-2 z-10">
                                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                    Découvrir nos solutions
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href={"/contact"}
                                className="
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-2xl

        bg-[#7e95a0]
        hover:bg-[#3f3f3f]

        px-6 py-3.5
        sm:px-8 sm:py-4

        text-sm sm:text-lg
        font-semibold text-white

        border border-[#5a5a5a]

        shadow-xl
        hover:shadow-2xl

        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.02]
    "
                            >
                                {/* Shine Effect */}
                                <span
                                    className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            translate-x-[-120%]
            group-hover:translate-x-[120%]
            transition-transform duration-1000
        "
                                />

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2">
                                    Demander un devis gratuitement
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Avis client */}

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}