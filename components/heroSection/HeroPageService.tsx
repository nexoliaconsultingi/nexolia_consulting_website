"use client";

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface HeroPageServiceProps {
  onNavigate?: () => void;
  onQuoteRequest?: () => void;
  ctaText?: string;
  quoteText?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
}

const HeroPageService: React.FC<HeroPageServiceProps> = ({
  onNavigate,
  onQuoteRequest,
  ctaText = "Nos Solutions",
  quoteText = "Demander un devis",
  title = "Services",
  subtitle = "Informatiques & Digitaux",
  description = "Des solutions complètes et innovantes pour accompagner votre transformation numérique. Expertise technique, créativité et vision stratégique au service de votre succès.",
  badgeText = "Services Premium",
}) => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center py-16 md:py-24 lg:py-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Arrière‑plan décoratif (masqué aux lecteurs d'écran) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#53828a]/5 via-[#f8f9fa] to-[#b05f76]/5"
        aria-hidden="true"
      />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#53828a]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#b05f76]/10 via-transparent to-transparent" />
      </div>

      {/* Blobs décoratifs flottants */}
      <div
        className="absolute top-0 -left-4 w-72 h-72 bg-[#53828a]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 -right-4 w-72 h-72 bg-[#b05f76]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-[#53828a]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge (optionnel) */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 shadow-sm mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-[#53828a]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#53828a]">{badgeText}</span>
            </div>
          )}

          {/* Titre principal avec H1 unique et descriptif */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200"
          >
            <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent animate-gradient">
              {title}
            </span>
            <span className="text-gray-900 block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#5a5e6e] mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            {description}
          </p>

          {/* Boutons d'appel à l'action (CTA) */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
            <Link
              href="/portfolio"
              className="group relative overflow-hidden bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:shadow-2xl hover:shadow-[#53828a]/30 text-white border-0 transition-all duration-300 hover:scale-105 px-8 py-4 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-[#53828a] focus:ring-offset-2"
              aria-label="Découvrir nos solutions dans le portfolio"
            >
              <span className="relative z-10 flex items-center font-medium">
                Découvrir nos solutions
                <ChevronRight
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#b05f76] to-[#53828a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact"
              className="group relative overflow-hidden border-2 border-[#53828a] text-[#53828a] hover:text-white transition-all duration-300 hover:scale-105 px-4 py-3 text-base rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#53828a] focus:ring-offset-2"
              aria-label="Demander un devis gratuitement"
            >
              <span className="relative z-10 flex items-center font-medium">
                Demander un devis gratuitement
                <ArrowRight
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#53828a] to-[#b05f76] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Styles d'animation (à déplacer dans un fichier CSS global si possible pour éviter les problèmes d'hydratation) */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroPageService;