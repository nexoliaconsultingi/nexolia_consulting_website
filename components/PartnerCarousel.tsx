import React, { useState, useRef, useEffect } from 'react';
import imgPartner from "@/public/Partner/partner.png"

// Définition du type pour un partenaire
interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  partnershipSince: string;
  speciality: string;
}

// Données des partenaires
const partnersData: Partner[] = [
  {
    id: 1,
    name: 'Opalia Pharma',
    logo: 'Partner/opalia.png',
    description: 'Entreprise spécialisée dans la production et la distribution de produits pharmaceutiques et médicaux.',
    website: 'https://www.opalia.tn',
    partnershipSince: '2020',
    speciality: 'Industrie pharmaceutique'
  },
  {
    id: 2,
    name: 'STB',
    logo: 'Partner/stb.png',
    description: 'Banque tunisienne offrant des services financiers, bancaires et de financement pour particuliers et entreprises.',
    website: 'https://www.stb.com.tn',
    partnershipSince: '2021',
    speciality: 'Services bancaires et financiers'
  },
  {
    id: 3,
    name: 'Délice',
    logo: 'Partner/delice.png',
    description: 'Leader dans la production et la distribution de produits alimentaires, notamment les produits laitiers.',
    website: 'https://www.delice.tn',
    partnershipSince: '2019',
    speciality: 'Industrie agroalimentaire'
  },
  {
    id: 4,
    name: 'ISET Kébili',
    logo: 'Partner/isetke.png',
    description: 'Institut Supérieur des Études Technologiques spécialisé dans la formation académique et technique.',
    website: 'http://www.isetkb.rnu.tn',
    partnershipSince: '2022',
    speciality: 'Enseignement supérieur et formation'
  },
  {
    id: 5,
    name: 'SOTETEL',
    logo: 'Partner/sotetel.png',
    description: 'Entreprise spécialisée dans les solutions télécom, intégration IT, Big Data et Business Intelligence.',
    website: 'https://www.sotetel.tn',
    partnershipSince: '2021',
    speciality: 'Télécommunications & Data'
  },
  {
    id: 6,
    name: 'MG',
    logo: 'Partner/mg.png',
    description: 'Chaîne de grande distribution proposant des produits alimentaires et de consommation courante.',
    website: 'https://www.mg.com.tn',
    partnershipSince: '2020',
    speciality: 'Grande distribution'
  },
  {
    id: 7,
    name: 'Tunisair',
    logo: 'Partner/tunisaire.png',
    description: 'Compagnie aérienne nationale tunisienne spécialisée dans le transport de passagers et de marchandises.',
    website: 'https://www.tunisair.com',
    partnershipSince: '2023',
    speciality: 'Transport aérien'
  }
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

  // Générer des valeurs stables pour les particules
  const particles = React.useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      width: 2 + (i * 3) % 4,
      height: 2 + (i * 2) % 4,
      left: 5 + (i * 7) % 90,
      top: 3 + (i * 11) % 94,
      animationDelay: (i * 0.7) % 10,
      animationDuration: 10 + (i * 1.3) % 10
    }));
  }, []);

  // Générer des valeurs stables pour les étoiles
  const stars = React.useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      top: 50 + Math.sin(i * Math.PI / 4) * 80,
      left: 50 + Math.cos(i * Math.PI / 4) * 80,
      animationDelay: i * 0.5
    }));
  }, []);

  // Défilement continu
  const startAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const scroll = () => {
      if (!scrollContainerRef.current || isHovered) {
        animationRef.current = requestAnimationFrame(scroll);
        return;
      }

      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      scrollPositionRef.current += 0.8;
      
      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0;
      }
      
      container.scrollLeft = scrollPositionRef.current;
      checkVisibleCards();
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  // Vérification des cartes visibles
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
        const distanceToCenter = Math.abs(cardCenter - centerX);
        const threshold = cardRect.width / 2;
        
        if (distanceToCenter < threshold) {
          newVisibleCards.add(uniqueId);
        }
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isHovered) {
      startAutoScroll();
    }
  }, [isHovered]);

  useEffect(() => {
    const timer = setTimeout(() => {
      checkVisibleCards();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePartnerClick = (partner: Partner) => {
    setSelectedPartner(partner);
  };

  const closeModal = () => {
    setSelectedPartner(null);
  };

  const duplicatedPartners: Partner[] = [...partnersData, ...partnersData, ...partnersData];

  // Couleur unique pour l'animation
  const getBackgroundColor = (isVisible: boolean) => {
    return isVisible ? '#ceedf3' : 'transparent';
  };

  return (
    <div className="py-16 px-4 relative overflow-hidden bg-white">
      {/* Formes décoratives animées - Côté droit */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none z-0">
        <div className="relative w-full h-full">
          {/* Cercle rotatif */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-[#b9e3ea] via-[#377285] to-[#cc2a3c] opacity-20 animate-spin-slow" />
          
          {/* Deuxième cercle avec animation inversée */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-[#cc2a3c] via-[#b9e3ea] to-[#377285] opacity-30 animate-spin-reverse-slow" />
          
          {/* Troisième cercle avec pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-[#377285] via-[#cc2a3c] to-[#b9e3ea] opacity-40 animate-pulse-slow" />
          
          {/* Étoiles/particules autour */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#b9e3ea] to-[#cc2a3c] animate-float-slow"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDelay: `${star.animationDelay}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Formes décoratives animées - En dessous */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-0">
        <div className="relative w-full h-full">
          {/* Vagues animées */}
          <svg 
            className="absolute bottom-0 w-full h-32 opacity-20" 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 120"
            style={{ animation: 'wave 8s ease-in-out infinite' }}
          >
            <path 
              d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="url(#waveGradient1)"
            />
          </svg>
          <svg 
            className="absolute bottom-0 w-full h-24 opacity-15" 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 120"
            style={{ animation: 'wave-reverse 10s ease-in-out infinite' }}
          >
            <path 
              d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="url(#waveGradient2)"
            />
          </svg>
          
          {/* Formes géométriques flottantes */}
          <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-gradient-to-tr from-[#b9e3ea] to-[#cc2a3c] opacity-20 rounded-lg animate-float-slow" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-8 left-1/2 w-12 h-12 bg-gradient-to-br from-[#377285] to-[#b9e3ea] opacity-25 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-4 left-3/4 w-20 h-20 bg-gradient-to-r from-[#cc2a3c] to-[#377285] opacity-15 rounded-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-12 right-1/4 w-10 h-10 bg-gradient-to-l from-[#b9e3ea] to-[#377285] opacity-30 rotate-45 animate-spin-slow" />
        </div>
      </div>

      {/* Définition des dégradés pour les vagues */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b9e3ea" />
            <stop offset="50%" stopColor="#377285" />
            <stop offset="100%" stopColor="#cc2a3c" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cc2a3c" />
            <stop offset="50%" stopColor="#b9e3ea" />
            <stop offset="100%" stopColor="#377285" />
          </linearGradient>
        </defs>
      </svg>

      {/* Effet de particules flottantes - Rendu uniquement côté client */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre artistique */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold text-[#0e4b66]">
                Nos Partenaires
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d52032] to-transparent"></div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6 mb-4">
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

        {/* Carrousel avec effet de mirror */}
        <div className="relative">
          {/* Conteneur défilant */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
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
                      if (el) {
                        cardRefs.current.set(uniqueId, el);
                      } else {
                        cardRefs.current.delete(uniqueId);
                      }
                    }}
                    onMouseEnter={() => setHoveredCard(uniqueId)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handlePartnerClick(partner)}
                    className={`
                      flex-none w-80 rounded-2xl cursor-pointer group
                      transition-all duration-700 ease-out
                      transform perspective-1000
                      ${isVisible 
                        ? 'translate-y-0 scale-100 opacity-100 rotate-y-0' 
                        : 'translate-y-10 scale-95 opacity-60 rotate-y-6'
                      }
                      ${isHoveredCard ? 'scale-105 -translate-y-2' : ''}
                    `}
                  >
                    {/* Carte avec fond blanc et ombre */}
                    <div className={`
                      relative rounded-2xl bg-white shadow-xl
                      border border-gray-200 overflow-hidden
                      transition-all duration-500
                      ${isHoveredCard ? 'shadow-2xl border-[#d52032]/30' : ''}
                    `}>
                      {/* Effet de couleur unique animé au centre de l'écran */}
                      <div 
                        className={`
                          absolute inset-0 transition-opacity duration-700
                          ${isVisible ? 'opacity-20' : 'opacity-0'}
                        `}
                        style={{ backgroundColor: getBackgroundColor(isVisible) }}
                      />
                      
                      {/* Contenu de la carte */}
                      <div className="relative p-6 z-10">
                        {/* Logo avec animation */}
                        <div className="relative h-32 flex items-center justify-center mb-6">
                          <div className={`
                            absolute inset-0 rounded-full blur-2xl transition-opacity duration-500
                            ${isVisible ? 'bg-[#ceedf3] opacity-30' : 'opacity-0'}
                          `} />
                          <img
                            src={partner.logo}
                            alt={`Logo ${partner.name}`}
                            className={`
                              max-w-full max-h-24 object-contain transition-all duration-700
                              ${isVisible ? 'scale-110' : 'scale-100'}
                              ${isHoveredCard ? 'scale-125 rotate-3' : ''}
                            `}
                            style={{
                              filter: isHoveredCard ? 'drop-shadow(0 0 20px rgba(13, 75, 102, 0.3))' : 'none'
                            }}
                          />
                        </div>

                        {/* Nom du partenaire */}
                        <h3 className={`
                          text-xl font-bold text-center mb-2 transition-all duration-500
                          ${isVisible ? 'text-[#0e4b66]' : 'text-gray-600'}
                          ${isHoveredCard ? 'text-2xl text-[#d52032]' : ''}
                        `}>
                          {partner.name}
                        </h3>

                        {/* Spécialité */}
                        <p className={`
                          text-sm text-center font-mono mb-4 transition-all duration-500
                          ${isVisible ? 'text-[#d52032] font-semibold' : 'text-gray-500'}
                        `}>
                          {partner.speciality}
                        </p>

                        {/* Ligne décorative */}
                        <div className={`
                          w-12 h-px mx-auto transition-all duration-500
                          ${isVisible ? 'bg-gradient-to-r from-[#0e4b66] to-[#d52032] w-16' : 'bg-gray-300'}
                        `} />

                        {/* Indicateur de clic */}
                        <div className={`
                          mt-4 text-center transition-all duration-500
                          ${isHoveredCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                        `}>
                          <span className="text-xs text-[#d52032] font-semibold tracking-wider">
                            Découvrir →
                          </span>
                        </div>
                      </div>

                      {/* Bordure lumineuse animée pour la carte au centre */}
                      {isVisible && (
                        <div className="absolute inset-0 rounded-2xl pointer-events-none">
                          <div className="absolute inset-0 rounded-2xl" style={{ 
                            boxShadow: '0 0 0 2px #ceedf3',
                            opacity: 0.6
                          }} />
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

      {/* Modal artistique */}
      {selectedPartner && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* En-tête modal */}
            <div className="relative bg-gradient-to-r from-[#0e4b66]/10 to-[#d52032]/10 rounded-t-3xl p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#d52032] transition-all duration-300 text-4xl leading-none focus:outline-none hover:rotate-90"
                aria-label="Fermer"
              >
                ×
              </button>
              
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-[#0e4b66] to-[#d52032] opacity-20 animate-pulse"></div>
                  <div className="relative bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
                    <img
                      src={selectedPartner.logo}
                      alt={`Logo ${selectedPartner.name}`}
                      className="w-40 h-auto object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mt-6 text-[#0e4b66]">
                  {selectedPartner.name}
                </h2>
              </div>
            </div>

            {/* Corps modal */}
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
                  <span className="text-[#0e4b66] font-bold">
                    {selectedPartner.speciality}
                  </span>
                </div>
              </div>

              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-gradient-to-r from-[#0e4b66] to-[#d52032] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#0e4b66]/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d52032] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          75% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20px) translateY(-10px); }
        }
        
        @keyframes wave-reverse {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(5px); }
        }
        
        @keyframes borderFlow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-border-flow {
          animation: borderFlow 2s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PartnerCarousel;