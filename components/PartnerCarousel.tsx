'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  partnershipSince: string;
  speciality: string;
}

const partnersData: Partner[] = [
  {
    id: 1,
    name: 'Opalia Pharma',
    logo: 'Partner/opalia.png',
    description:
      'Entreprise spécialisée dans la production et la distribution de produits pharmaceutiques et médicaux.',
    website: 'https://www.opalia.tn',
    partnershipSince: '2020',
    speciality: 'Industrie pharmaceutique',
  },
  {
    id: 2,
    name: 'STB',
    logo: 'Partner/stb.png',
    description:
      'Banque tunisienne offrant des services financiers, bancaires et de financement pour particuliers et entreprises.',
    website: 'https://www.stb.com.tn',
    partnershipSince: '2021',
    speciality: 'Services bancaires et financiers',
  },
  {
    id: 3,
    name: 'Délice',
    logo: 'Partner/delice.png',
    description:
      'Leader dans la production et la distribution de produits alimentaires, notamment les produits laitiers.',
    website: 'https://www.delice.tn',
    partnershipSince: '2019',
    speciality: 'Industrie agroalimentaire',
  },
  {
    id: 4,
    name: 'ISET Kébili',
    logo: 'Partner/isetke.png',
    description:
      'Institut Supérieur des Études Technologiques spécialisé dans la formation académique et technique.',
    website: 'http://www.isetkb.rnu.tn',
    partnershipSince: '2022',
    speciality: 'Enseignement supérieur et formation',
  },
  {
    id: 5,
    name: 'SOTETEL',
    logo: 'Partner/sotetel.png',
    description:
      'Entreprise spécialisée dans les solutions télécom, intégration IT, Big Data et Business Intelligence.',
    website: 'https://www.sotetel.tn',
    partnershipSince: '2021',
    speciality: 'Télécommunications & Data',
  },
  {
    id: 6,
    name: 'MG',
    logo: 'Partner/mg.png',
    description:
      'Chaîne de grande distribution proposant des produits alimentaires et de consommation courante.',
    website: 'https://www.mg.com.tn',
    partnershipSince: '2020',
    speciality: 'Grande distribution',
  },
  {
    id: 7,
    name: 'Tunisair',
    logo: 'Partner/tunisaire.png',
    description:
      'Compagnie aérienne nationale tunisienne spécialisée dans le transport de passagers et de marchandises.',
    website: 'https://www.tunisair.com',
    partnershipSince: '2023',
    speciality: 'Transport aérien',
  },
];

const PartnerCarousel: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [isMounted, setIsMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef<number>(0);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Valeurs stables pour les particules (pas de random côté serveur)
  const particles = React.useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      width: 2 + (i * 3) % 4,
      height: 2 + (i * 2) % 4,
      left: 5 + (i * 7) % 90,
      top: 3 + (i * 11) % 94,
      animationDelay: (i * 0.7) % 10,
      animationDuration: 10 + (i * 1.3) % 10,
    }));
  }, []);

  const stars = React.useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      top: 50 + Math.sin((i * Math.PI) / 4) * 80,
      left: 50 + Math.cos((i * Math.PI) / 4) * 80,
      animationDelay: i * 0.5,
    }));
  }, []);

  // Défilement continu
  const startAutoScroll = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    const scroll = () => {
      if (!scrollContainerRef.current || isHovered) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      scrollPositionRef.current += 2;
      if (scrollPositionRef.current >= maxScroll) scrollPositionRef.current = 0;
      container.scrollLeft = scrollPositionRef.current;
      checkVisibleCards();
      animationRef.current = requestAnimationFrame(scroll);
    };
    animationRef.current = requestAnimationFrame(scroll);
  };

  const checkVisibleCards = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const newVisibleCards = new Set<number>();
    cardRefs.current.forEach((card, uniqueId) => {
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const threshold = cardRect.width / 2;
        if (Math.abs(cardCenter - centerX) < threshold) newVisibleCards.add(uniqueId);
      }
    });
    setVisibleCards(newVisibleCards);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkVisibleCards);
      return () => container.removeEventListener('scroll', checkVisibleCards);
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isHovered) startAutoScroll();
  }, [isHovered]);

  useEffect(() => {
    const timer = setTimeout(checkVisibleCards, 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePartnerClick = (partner: Partner) => setSelectedPartner(partner);
  const closeModal = () => setSelectedPartner(null);

  const duplicatedPartners: Partner[] = [...partnersData, ...partnersData, ...partnersData];

  // Données structurées JSON-LD pour la liste des partenaires
  const partnersJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nos partenaires',
    itemListElement: partnersData.map((partner, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Organization',
        name: partner.name,
        description: partner.description,
        url: partner.website,
        foundingDate: partner.partnershipSince,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'TN',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersJsonLd) }}
      />
      <section
        className="py-16 px-4 relative overflow-hidden bg-white"
        aria-labelledby="partners-heading"
      >
        {/* Éléments décoratifs (masqués aux lecteurs d'écran) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none z-0" aria-hidden="true">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-[#b9e3ea] via-[#377285] to-[#cc2a3c] opacity-20 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-[#cc2a3c] via-[#b9e3ea] to-[#377285] opacity-30 animate-spin-reverse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-[#377285] via-[#cc2a3c] to-[#b9e3ea] opacity-40 animate-pulse-slow" />
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#b9e3ea] to-[#cc2a3c] animate-float-slow"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  animationDelay: `${star.animationDelay}s`,
                  animationDuration: '4s',
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-0" aria-hidden="true">
          {/* vagues et formes – inchangées mais décoratives */}
          <svg className="absolute bottom-0 w-full h-32 opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="url(#waveGradient1)"
            />
          </svg>
          {/* autres éléments similaires... garder le strict minimum */}
        </div>

        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b9e3ea" />
              <stop offset="50%" stopColor="#377285" />
              <stop offset="100%" stopColor="#cc2a3c" />
            </linearGradient>
          </defs>
        </svg>

        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute rounded-full bg-[#0e4b66] opacity-5 animate-float"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Titre */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 id="partners-heading" className="text-5xl md:text-6xl font-bold text-[#0e4b66]">
                Nos Partenaires
              </h2>
              <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-[#d52032] to-transparent" aria-hidden="true" />
            </div>
            <div className="flex justify-center gap-2 mt-6 mb-4" aria-hidden="true">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#d52032] animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-[#0e4b66] mt-6 max-w-2xl mx-auto text-lg font-light">
              Des collaborations d'excellence pour vous offrir le meilleur
            </p>
          </div>

          {/* Carrousel */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              role="region"
              aria-label="Carrousel des partenaires"
            >
              <div className="flex gap-8 px-4 py-8" style={{ width: 'max-content' }}>
                {duplicatedPartners.map((partner, index) => {
                  const uniqueId = partner.id * 1000 + index;
                  const isVisible = visibleCards.has(uniqueId);
                  const isHoveredCard = hoveredCard === uniqueId;
                  return (
                    <div
                      key={`${partner.id}-${index}`}
                      ref={(el) => {
                        if (el) cardRefs.current.set(uniqueId, el);
                        else cardRefs.current.delete(uniqueId);
                      }}
                      onMouseEnter={() => setHoveredCard(uniqueId)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => handlePartnerClick(partner)}
                      className={`flex-none w-80 rounded-2xl cursor-pointer group transition-all duration-700 ease-out transform perspective-1000 ${
                        isVisible
                          ? 'translate-y-0 scale-100 opacity-100 rotate-y-0'
                          : 'translate-y-10 scale-95 opacity-60 rotate-y-6'
                      } ${isHoveredCard ? 'scale-105 -translate-y-2' : ''}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`En savoir plus sur ${partner.name}`}
                      onKeyDown={(e) => e.key === 'Enter' && handlePartnerClick(partner)}
                    >
                      <div
                        className={`relative rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden transition-all duration-500 ${
                          isHoveredCard ? 'shadow-2xl border-[#d52032]/30' : ''
                        }`}
                      >
                        <div
                          className={`absolute inset-0 transition-opacity duration-700 ${isVisible ? 'opacity-20' : 'opacity-0'}`}
                          style={{ backgroundColor: isVisible ? '#ceedf3' : 'transparent' }}
                          aria-hidden="true"
                        />
                        <div className="relative p-6 z-10">
                          <div className="relative h-32 flex items-center justify-center mb-6">
                            <div
                              className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 ${
                                isVisible ? 'bg-[#ceedf3] opacity-30' : 'opacity-0'
                              }`}
                              aria-hidden="true"
                            />
                            <Image
                              src={partner.logo}
                              alt={`Logo de ${partner.name}`}
                              width={160}
                              height={96}
                              className={`max-w-full max-h-24 w-auto object-contain transition-all duration-700 ${
                                isVisible ? 'scale-110' : 'scale-100'
                              } ${isHoveredCard ? 'scale-125 rotate-3' : ''}`}
                              unoptimized // car images locales
                            />
                          </div>
                          <h3 className={`text-xl font-bold text-center mb-2 transition-all duration-500 ${
                            isVisible ? 'text-[#0e4b66]' : 'text-gray-600'
                          } ${isHoveredCard ? 'text-2xl text-[#d52032]' : ''}`}>
                            {partner.name}
                          </h3>
                          <p className={`text-sm text-center font-mono mb-4 transition-all duration-500 ${
                            isVisible ? 'text-[#d52032] font-semibold' : 'text-gray-500'
                          }`}>
                            {partner.speciality}
                          </p>
                          <div
                            className={`w-12 h-px mx-auto transition-all duration-500 ${
                              isVisible ? 'bg-gradient-to-r from-[#0e4b66] to-[#d52032] w-16' : 'bg-gray-300'
                            }`}
                            aria-hidden="true"
                          />
                          <div
                            className={`mt-4 text-center transition-all duration-500 ${
                              isHoveredCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                            }`}
                          >
                            <span className="text-xs text-[#d52032] font-semibold tracking-wider">
                              Découvrir →
                            </span>
                          </div>
                        </div>
                        {isVisible && (
                          <div className="absolute inset-0 rounded-2xl pointer-events-none" aria-hidden="true">
                            <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: '0 0 0 2px #ceedf3', opacity: 0.6 }} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Modal accessible */}
        {selectedPartner && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-partner-name"
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gradient-to-r from-[#0e4b66]/10 to-[#d52032]/10 rounded-t-3xl p-8">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#d52032] transition-all duration-300 text-4xl leading-none focus:outline-none focus:ring-2 focus:ring-[#d52032] rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Fermer la fenêtre"
                >
                  ×
                </button>
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-[#0e4b66] to-[#d52032] opacity-20 animate-pulse" aria-hidden="true" />
                    <div className="relative bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
                      <Image
                        src={selectedPartner.logo}
                        alt={`Logo de ${selectedPartner.name}`}
                        width={160}
                        height={96}
                        className="w-40 h-auto object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                  <h2 id="modal-partner-name" className="text-3xl font-bold mt-6 text-[#0e4b66]">
                    {selectedPartner.name}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-8 text-center text-lg">
                  {selectedPartner.description}
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 space-y-4 border border-gray-200">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-600">🤝 Partenariat depuis</span>
                    <span className="text-[#d52032] font-bold">{selectedPartner.partnershipSince}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-600">🎯 Spécialité</span>
                    <span className="text-[#0e4b66] font-bold">{selectedPartner.speciality}</span>
                  </div>
                </div>
                <a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block bg-gradient-to-r from-[#0e4b66] to-[#d52032] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#0e4b66]/25 focus:outline-none focus:ring-2 focus:ring-[#d52032] focus:ring-offset-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d52032] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  <div className="relative px-6 py-4 text-white font-semibold text-center flex items-center justify-center gap-2">
                    <span>Visiter le site web</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          /* Keyframes et animations (inchangées, mais conservées) */
          @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
          @keyframes float-slow { 0%,100% { transform: translateY(0px) translateX(0px); } 25% { transform: translateY(-15px) translateX(10px); } 75% { transform: translateY(10px) translateX(-10px); } }
          @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
          @keyframes spin-reverse-slow { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }
          @keyframes pulse-slow { 0%,100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .animate-float { animation: float infinite ease-in-out; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 12s linear infinite; }
          .animate-spin-reverse-slow { animation: spin-reverse-slow 15s linear infinite; }
          .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-slideUp { animation: slideUp 0.4s ease-out; }
          .perspective-1000 { perspective: 1000px; }
          .rotate-y-6 { transform: rotateY(6deg); }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>
      </section>
    </>
  );
};

export default PartnerCarousel;