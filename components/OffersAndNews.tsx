import React, { useState, useEffect, useRef } from 'react';
import {
  Flame,
  Zap,
  Clock,
  TrendingUp,
  Gift,
  Sparkles,
  ArrowRight,
  Rocket,
  Eye,
  ChevronRight,
  X,
  Calendar,
  Tag,
  Shield,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Offer {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  badge: 'NEW' | 'PROMO' | 'LIMITED';
  icon: React.ElementType;
  gradient: string;
  link: string;
  imageUrl: string;
  validUntil?: string;
  price?: string;
  features?: string[];
}

const offers: Offer[] = [
  {
    id: 1,
    title: 'Pack Identité Visuelle Complet',
    description: 'Logo, charte graphique, cartes de visite, flyers et kit branding complet.',
    longDescription: 'Nous créons une identité visuelle professionnelle et cohérente pour votre entreprise : logo unique, choix du nom, palette de couleurs, typographie, cartes de visite, flyers et templates réseaux sociaux. Un pack complet prêt à l’utilisation pour renforcer votre image de marque.',
    badge: 'NEW',
    icon: TrendingUp,
    gradient: 'from-[#9b596d] to-[#4d767c]',
    link: '#',
    imageUrl: '/new/designe.png',
    validUntil: 'Offre disponible',
    price: 'à partir de 499$',
    features: ['Logo unique', 'Charte graphique complète', 'Cartes de visite', 'Flyers personnalisés', 'Templates réseaux sociaux'],
  },
  {
    id: 2,
    title: 'Création Site Web & Lancement Digital',
    description: 'Site web + design offert + SEO + hébergement gratuit 1 an.',
    longDescription: 'Nous développons votre site web professionnel (vitrine ou dynamique) avec un design moderne offert, création de logo incluse, stratégie digitale, optimisation SEO pour un bon référencement et hébergement gratuit pendant 1 an. Une solution complète pour lancer votre présence en ligne efficacement.',
    badge: 'PROMO',
    icon: Zap,
    gradient: 'from-[#4d767c] to-[#9b596d]',
    link: '#',
    imageUrl: '/new/web.png',
    validUntil: 'Offre limitée',
    price: 'à partir de 790$',
    features: ['Site web professionnel', 'Design moderne offert', 'Création de logo incluse', 'Optimisation SEO', 'Hébergement 1 an gratuit'],
  },
  {
    id: 3,
    title: 'ERP & Digitalisation des Entreprises',
    description: 'Analyse gratuite + développement ERP + consulting + suivi.',
    longDescription: 'Nous accompagnons les entreprises dans leur transformation digitale avec une analyse gratuite de leur infrastructure existante, des services de consulting stratégique, des recommandations d’amélioration et le développement de solutions ERP sur mesure. Support continu et haute disponibilité garantis.',
    badge: 'LIMITED',
    icon: Gift,
    gradient: 'from-[#9b596d] to-[#c0847c]',
    link: '#',
    imageUrl: '/new/erp.png',
    validUntil: 'Service continu',
    price: 'Sur devis',
    features: ['Analyse gratuite', 'Consulting stratégique', 'ERP sur mesure', 'Support continu', 'Haute disponibilité'],
  },
];

const ads = [
  {
    side: 'left',
    title: 'Lancez votre MVP en 30 jours',
    description: 'Profitez d’une offre de lancement exclusive : audit gratuit, accompagnement prioritaire et stratégie produit optimisée pour un démarrage rapide et efficace.',
    cta: 'Démarrer mon projet',
    icon: Rocket,
    color: '#9b596d',
  },
  {
    side: 'right',
    title: 'Atelier Innovation offert',
    description: 'Toute entreprise qui fait appel à nos services pour une solution de digitalisation ou un ERP bénéficiera également d’un accès exclusif à des salons et conférences.',
    cta: 'Réserver ma place',
    icon: Eye,
    color: '#4d767c',
  },
];

const OffersAndNews: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 23, minutes: 59, seconds: 59 });
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Countdown timer (kept for future use)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedOffer ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedOffer]);

  // Structured data for offers (JSON-LD)
  const offersJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": offers.map((offer, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": offer.title,
        "description": offer.description,
        "image": `https://www.nexolia-consulting.com${offer.imageUrl}`,
        "offers": {
          "@type": "Offer",
          "price": offer.price ? parseFloat(offer.price.replace(/[^0-9.,]/g, '').replace(',', '.')) : 0,
          "priceCurrency": "USD",
          "availability": offer.badge === 'LIMITED' ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock",
          "validFrom": offer.validUntil === 'Offre limitée' ? new Date().toISOString().split('T')[0] : undefined
        }
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJsonLd) }} />
      
      <section
        ref={sectionRef}
        className="relative bg-gradient-to-br from-[#f9f8f9] via-white to-[#f9f8f9] py-24 lg:py-32 overflow-hidden"
        aria-labelledby="offers-heading"
      >
        {/* Décorations d'arrière-plan (masquées aux lecteurs d'écran) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#9b596d]/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#4d767c]/5 to-transparent" />
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#9b596d]/10 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#4d767c]/10 rounded-full blur-[80px] animate-pulse-slower" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête de section */}
          <div className="text-center mb-16 lg:mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm border border-[#9b596d]/20 mb-5">
              <Flame className="text-[#9b596d]" size={18} aria-hidden="true" />
              <span className="text-[#9b596d] font-bold text-sm tracking-wide">ÉDITION LIMITÉE</span>
            </div>
            <h2 id="offers-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#9b596d] to-[#4d767c] bg-clip-text text-transparent">
                Offres & Nouveautés
              </span>
            </h2>
            <div className="w-28 h-1.5 bg-gradient-to-r from-[#9b596d] to-[#4d767c] mx-auto mt-5 rounded-full" aria-hidden="true" />
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez nos dernières innovations et promotions exclusives.
              Des solutions pensées pour booster votre activité.
            </p>
          </div>

          {/* Grille principale */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Annonce latérale gauche */}
            <div className="lg:col-span-3 animate-on-scroll opacity-0 translate-x-[-30px] transition-all duration-700 delay-100">
              <div className="group h-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="mb-5" aria-hidden="true">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#9b596d]/20 to-[#9b596d]/5 flex items-center justify-center text-[#9b596d] group-hover:scale-110 transition-transform duration-300">
                      <Rocket size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{ads[0].title}</h3>
                  <p className="text-gray-600 mb-5 flex-1 leading-relaxed">{ads[0].description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#9b596d] font-semibold hover:gap-3 transition-all group/link focus:outline-none focus:ring-2 focus:ring-[#9b596d] focus:ring-offset-2 rounded-full"
                    aria-label={`${ads[0].cta} : ${ads[0].title}`}
                  >
                    <span>{ads[0].cta}</span>
                    <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Offres centrales */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                {offers.map((offer, idx) => {
                  const Icon = offer.icon;
                  const badgeConfig = {
                    NEW: { label: 'NOUVEAU', icon: '🔥', color: 'bg-[#9b596d]' },
                    PROMO: { label: 'PROMO', icon: '⚡', color: 'bg-[#4d767c]' },
                    LIMITED: { label: 'LIMITÉ', icon: '⏳', color: 'bg-amber-500' },
                  }[offer.badge];
                  return (
                    <article
                      key={offer.id}
                      onClick={() => setSelectedOffer(offer)}
                      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer animate-on-scroll opacity-0 translate-y-10"
                      style={{ transitionDelay: `${idx * 0.1}s` }}
                      aria-label={`Offre : ${offer.title}, ${offer.badge}`}
                    >
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <Image
                          src={offer.imageUrl}
                          alt={offer.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                          unoptimized // car images locales
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                        <div className={`absolute top-3 right-3 ${badgeConfig.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1`}>
                          <span aria-hidden="true">{badgeConfig.icon}</span>
                          <span>{badgeConfig.label}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${offer.gradient} flex items-center justify-center mb-3 text-white shadow-md group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#9b596d] transition-colors line-clamp-1">{offer.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{offer.description}</p>
                        {offer.price && (
                          <div className="inline-block bg-[#9b596d]/10 text-[#9b596d] text-xs font-semibold px-2 py-1 rounded-full mb-3">
                            {offer.price}
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-[#4d767c] font-medium">En savoir plus</span>
                          <ChevronRight size={14} className="text-[#4d767c] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#9b596d] to-[#4d767c] w-0 group-hover:w-full transition-all duration-700" aria-hidden="true" />
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Annonce latérale droite */}
            <div className="lg:col-span-3 animate-on-scroll opacity-0 translate-x-[30px] transition-all duration-700 delay-200">
              <div className="group h-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <div className="mb-5" aria-hidden="true">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4d767c]/20 to-[#4d767c]/5 flex items-center justify-center text-[#4d767c] group-hover:scale-110 transition-transform duration-300">
                      <Eye size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{ads[1].title}</h3>
                  <p className="text-gray-600 mb-5 flex-1 leading-relaxed line-clamp-4">{ads[1].description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4d767c] to-[#9b596d] text-white font-semibold py-2 px-5 rounded-full hover:shadow-lg transition-all hover:gap-3 focus:outline-none focus:ring-2 focus:ring-[#4d767c] focus:ring-offset-2"
                    aria-label={`${ads[1].cta} : ${ads[1].title}`}
                  >
                    {ads[1].cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bannière basse */}
          <div className="mt-16 bg-gradient-to-r from-[#9b596d] to-[#4d767c] rounded-2xl p-6 text-white shadow-xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm" aria-hidden="true">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl flex items-center gap-2">
                    Solution innovante du mois
                  </h4>
                  <p className="text-white/90 text-sm">Nexolia Pulse – L'IA au service de votre croissance</p>
                </div>
              </div>
              <Link
                href="/portfolio"
                className="group bg-white text-[#9b596d] px-6 py-2.5 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9b596d]"
                aria-label="Découvrir Nexolia Pulse, la solution innovante du mois"
              >
                Découvrir
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Modale d'offre (accessible) */}
        {selectedOffer && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedOffer(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-offer-title"
          >
            <div
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Fermer la modale"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl">
                <Image
                  src={selectedOffer.imageUrl}
                  alt={selectedOffer.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain p-8"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
                <div className={`absolute top-4 left-4 flex items-center gap-2 ${selectedOffer.badge === 'NEW' ? 'bg-[#9b596d]' : selectedOffer.badge === 'PROMO' ? 'bg-[#4d767c]' : 'bg-amber-500'} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}>
                  <span aria-hidden="true">
                    {selectedOffer.badge === 'NEW' && '🔥'}
                    {selectedOffer.badge === 'PROMO' && '⚡'}
                    {selectedOffer.badge === 'LIMITED' && '⏳'}
                  </span>
                  <span>
                    {selectedOffer.badge === 'NEW' && 'NOUVEAU'}
                    {selectedOffer.badge === 'PROMO' && 'PROMO'}
                    {selectedOffer.badge === 'LIMITED' && 'LIMITÉ'}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {selectedOffer.price && (
                    <span className="inline-flex items-center gap-2 bg-[#9b596d]/10 text-[#9b596d] text-sm font-semibold px-3 py-1.5 rounded-full">
                      <Tag size={14} aria-hidden="true" />
                      {selectedOffer.price}
                    </span>
                  )}
                  {selectedOffer.validUntil && (
                    <span className="inline-flex items-center gap-2 bg-[#4d767c]/10 text-[#4d767c] text-sm font-semibold px-3 py-1.5 rounded-full">
                      <Calendar size={14} aria-hidden="true" />
                      {selectedOffer.validUntil}
                    </span>
                  )}
                </div>

                <h3 id="modal-offer-title" className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{selectedOffer.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">{selectedOffer.longDescription}</p>

                {selectedOffer.features && selectedOffer.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Shield size={18} className="text-[#9b596d]" aria-hidden="true" />
                      Ce qui est inclus :
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedOffer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-[#4d767c] flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#9b596d] to-[#4d767c] text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all hover:gap-3 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#9b596d] focus:ring-offset-2"
                    aria-label={`Je profite de cette offre : ${selectedOffer.title}`}
                  >
                    Je profite de cette offre
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <button
                    onClick={() => setSelectedOffer(null)}
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          /* Animations existantes (inchangées) */
          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scale-up { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          @keyframes pulse-slow { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
          @keyframes pulse-slower { 0%,100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.1); } }
          .animate-fade-in { animation: fade-in 0.2s ease-out; }
          .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1); }
          .animate-pulse-slow { animation: pulse-slow 8s infinite; }
          .animate-pulse-slower { animation: pulse-slower 12s infinite; }
          .animate-on-scroll { transition: opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1); }
          .animate-on-scroll.animate-reveal { opacity: 1 !important; transform: translateX(0) translateY(0) !important; }
          .line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
          .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .line-clamp-4 { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
          @media (max-width: 640px) { .animate-on-scroll { transition-delay: 0s !important; } }
        `}</style>
      </section>
    </>
  );
};

export default OffersAndNews;