// app/blog/BlogNewsContent.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuoteRequestButton from "@/components/ui/QuoteRequestButton"
import NewsSection from "@/components/ui/news-section"
import BlogSection from "@/components/ui/blog-section"
import EventsSection from "@/components/ui/events-section"
import AdvertisementSection from "@/components/ui/advertisement-section"
import FidelityNewsSection from "@/components/ui/fidelity-news-section"
import TechnologyNewsSection from "@/components/ui/technology-news-section"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import PostWork from "./ui/PostWork"

export default function BlogNewsContent({ handleNavigate }: { handleNavigate?: () => void }) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-[#f9fafb] to-[#f3f4f6]">
            <NavBar />

            <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#53828a]/5 via-[#727683]/10 to-[#b05f76]/10 overflow-hidden">
                <div className="absolute inset-0 opacity-20 sm:opacity-30">
                    <motion.div
                        className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-[#b05f76]/40 rounded-full blur-3xl"
                        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-[#53828a]/40 rounded-full blur-3xl"
                        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl sm:max-w-4xl mx-auto text-center"
                    >
                        <motion.span
                            className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#727683]/80"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Nexolia Media
                        </motion.span>

                        <motion.h1
                            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#53828a] mt-4 mb-6 leading-tight"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            NEXOLIA{" "}
                            <span className="bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                                Blog & Actualités
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-sm sm:text-lg text-[#727683] mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Découvrez les dernières actualités, innovations et événements de Nexolia, au cœur du digital et des nouvelles technologies.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <Button
                                onClick={handleNavigate}
                                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <Eye className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                Explorer Nos Projets
                            </Button>
                            <QuoteRequestButton />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-max">
                    <div className={`md:col-span-2 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "100ms" }}>
                        <NewsSection />
                    </div>
                    <div className={`md:col-span-1 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "200ms" }}>
                        <FidelityNewsSection />
                    </div>
                    <div className={`md:col-span-3 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "300ms" }}>
                        <TechnologyNewsSection />
                    </div>
                    {/* <div className={`md:col-span-2 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "400ms" }}>
                        <BlogSection />
                    </div>
                    <div className={`md:col-span-1 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "500ms" }}>
                        <AdvertisementSection />
                    </div>
                    <div className={`md:col-span-3 transform transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "600ms" }}>
                        <EventsSection />
                    </div> */}
                </div>
            </div>
      <PostWork />

            <Footer />
        </main>
    )
}
