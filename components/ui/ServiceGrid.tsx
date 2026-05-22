"use client"

import React, { useState } from "react"
import { ArrowRight, CheckCircle, Zap, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import QuoteRequestButton from "./QuoteRequestButton"
import Link from "next/link"

export default function ServiceGrid({ services }: { services: any[] }) {
    const [selectedService, setSelectedService] = useState<any>(null)
    const [lightboxImage, setLightboxImage] = useState<string | null>(null)

    return (
        <>
            <section className="py-24 bg-gradient-to-b from-white to-gray-50 px-2">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-[#53828a]/10 text-[#53828a] border-[#53828a]/20">
                            Nos Expertises
                        </Badge>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Services Complets pour Votre{" "}
                            <span className="bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                                Réussite Digitale
                            </span>
                        </h2>
                        <p className="text-xl text-[#727683] max-w-3xl mx-auto">
                            Découvrez notre gamme complète de services conçus pour transformer vos idées en solutions digitales
                            performantes
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden"
                            >
                                {service.popular && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                                            ⭐ Populaire
                                        </Badge>
                                    </div>
                                )}

                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                <CardHeader className="pb-6 relative">
                                    <div
                                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900 text-center mb-3 group-hover:text-[#53828a] transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <p className="text-[#727683] text-center leading-relaxed">{service.description}</p>
                                </CardHeader>

                                <CardContent className="space-y-6 relative">
                                    <Button
                                        onClick={() => setSelectedService(service)}
                                        className="w-full bg-[#e6f0f2] text-[#53828a] border border-[#53828a] hover:bg-[#53828a] hover:text-white transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
                                    >
                                        Découvrir ce service
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* === POP-UP SERVICE === */}
            {/* === POP-UP SERVICE === */}
            <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
                <DialogContent className="dialog-scroll w-[95%] max-w-[1100px] bg-white rounded-2xl shadow-2xl animate-fadeZoom">
                    {selectedService && (
                        <>
                            <div className="dialog-inner">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold text-[#53828a]">{selectedService.title}</DialogTitle>
                                    <DialogDescription className="text-[#727683] mt-2">
                                        {selectedService.description}
                                    </DialogDescription>
                                </DialogHeader>

                                <hr className="my-4" />

                                <div className="dialog-body flex flex-col lg:flex-row gap-10 justify-center items-center">
                                    {/* Texte */}
                                    <div className="flex-1 space-y-6 w-full max-w-[600px]">
                                        <h4 className="font-semibold text-[#53828a] flex items-center">
                                            <CheckCircle className="w-5 h-5 mr-2" /> Fonctionnalités détaillées
                                        </h4>
                                        <ul className="space-y-2 ml-6 list-disc text-[#555]">
                                            {selectedService.features.map((feature: string, i: number) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>

                                        <h4 className="font-semibold text-[#53828a] flex items-center mt-6">
                                            <Zap className="w-5 h-5 mr-2" /> Technologies utilisées
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {selectedService.technologies.map((tech: string, i: number) => (
                                                <Badge key={i} className="bg-[#53828a]/10 text-[#53828a] border-[#53828a]/20">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Carousel avec lightbox */}
                                    <div className="flex-1 flex justify-center items-center w-full max-w-[600px]">
                                        <div className="dentist-carousel-section">
                                            <h3 className="dentist-carousel-title text-[#53828a]">Exemples Visuels</h3>
                                            <div className="dentist-carousel-container">
                                                <div className="dentist-carousel">
                                                    {selectedService.images?.map((image: string, index: number) => (
                                                        <div
                                                            key={index}
                                                            className="dentist-carousel-item cursor-pointer"
                                                            style={{ "--i": index } as React.CSSProperties}
                                                            onClick={() => setLightboxImage(image)}
                                                        >
                                                            <img src={image} alt={`Capture ${index + 1}`} />

                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-6" />

                                <div className="mt-6 flex flex-wrap justify-center gap-4">
                                    <Button
                                        onClick={() => setSelectedService(null)}
                                        size="lg"
                                        className="bg-[#53828a] text-white hover:bg-[#b05f76] transition-all duration-300 font-semibold shadow-md"
                                    >
                                        Fermer
                                    </Button>
                                    <Link
    href={"/contact"}
    className="
        inline-flex items-center
        px-5 py-3
        rounded-lg
        bg-[#3f3f3f]
        hover:bg-[green]
        text-white
        font-medium
        transition-all duration-300
    "
>
    Demander un devis gratuitement
</Link>
                                </div>

                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* === LIGHTBOX FULLSCREEN === */}
            {/* === LIGHTBOX FULLSCREEN === */}
            <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
                <DialogContent className="w-full max-w-[90%] h-[90%] flex justify-center items-center bg-black bg-opacity-90 rounded-xl relative p-0">

                    {/* DialogTitle invisible pour accessibilité */}
                    <DialogTitle>
                        <VisuallyHidden>Preview de l'image du service</VisuallyHidden>
                    </DialogTitle>

                    {/* Bouton fermer */}
                    <button
                        className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white hover:text-black z-50"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X className="w-6 h-6 pointer-events-auto" />
                    </button>

                    {/* Image */}
                    {lightboxImage && (
                        <img
                            src={lightboxImage}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    )}
                </DialogContent>
            </Dialog>



            {/* === LIGHTBOX FULLSCREEN === */}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[9999] animate-fadeZoom">
                    <button
                        className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <img src={lightboxImage} alt="Preview" className="max-w-[95%] max-h-[90%] object-contain rounded-lg shadow-2xl" />
                </div>
            )}

            <style jsx>{`
        /* === POPUP ANIMATIONS === */
        @keyframes fadeZoom {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeZoom {
          animation: fadeZoom 0.35s ease-out;
        }

        /* Scroll interne */
        .dialog-scroll {
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .dialog-inner {
          overflow-y: auto;
          padding: 2rem;
          max-height: 90vh;
        }

        /* Carousel 3D avec hover */
        .dentist-carousel-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dentist-carousel-container {
          position: relative;
          width: 320px;
          height: 280px;
          perspective: 1000px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
          transition: all 0.4s ease;
        }
        .dentist-carousel-container:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 15px rgba(83, 130, 138, 0.3));
        }
        .dentist-carousel {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 20s linear infinite;
        }
        .dentist-carousel-container:hover .dentist-carousel {
          animation-play-state: paused;
        }
        .dentist-carousel-item {
          position: absolute;
          width: 180px;
          height: 180px;
          transform: rotateY(calc(var(--i) * 72deg)) translateZ(260px);
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          transition: transform 0.6s ease, box-shadow 0.4s ease;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotateY(calc(var(--i) * 72deg)) translateZ(260px);
          }
          50% {
            transform: translateY(-10px) rotateY(calc(var(--i) * 72deg)) translateZ(260px);
          }
        }
        .dentist-carousel-item:hover img {
          transform: scale(1.12);
          box-shadow: 0 8px 25px rgba(176, 95, 118, 0.6);
          filter: brightness(1.1);
        }
        .dentist-carousel-item img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          object-fit: cover;
          transition: all 0.5s ease;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        .dentist-carousel-info {
          position: absolute;
          bottom: 6px;
          left: 0;
          right: 0;
          text-align: center;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 4px 8px;
          font-size: 0.8rem;
          border-radius: 0 0 1rem 1rem;
        }
        @media (max-width: 1024px) {
          .dialog-body {
            flex-direction: column !important;
            align-items: center;
          }
          .dentist-carousel-container {
            width: 280px;
            height: 250px;
          }
        }
      `}</style>
        </>
    )
}
