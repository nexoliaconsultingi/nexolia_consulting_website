import React, { useState, useEffect, useRef } from 'react';
import { Play, X, Sparkles, Film, Eye } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
}

// Fonction pour convertir les URLs YouTube en format embed
const getYouTubeEmbedUrl = (url: string): string => {
  // Gérer les liens youtu.be
  if (url.includes('youtu.be')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  }

  // Gérer les liens youtube.com normaux
  if (url.includes('youtube.com')) {
    // Extraire l'ID de la vidéo
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const videoId = urlParams.get('v') || url.split('/embed/')[1]?.split('?')[0];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  }

  // Si c'est déjà un embed, retourner tel quel
  if (url.includes('/embed/')) {
    // Ajouter autoplay si pas présent
    return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  }

  // Fallback: retourner l'URL originale
  return url;
};

// Fonction pour extraire l'ID YouTube d'une URL (pour les thumbnails)
const getYouTubeThumbnail = (url: string): string => {
  let videoId = '';

  if (url.includes('youtu.be')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('youtube.com')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    videoId = urlParams.get('v') || '';
  }

  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  return url; // Retourner l'URL originale si pas YouTube
};

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'Développement agile en temps réel',
    description: 'Mise en œuvre d’une approche Agile moderne permettant une collaboration continue entre équipes techniques sur une architecture microservices. Cette méthode garantit une livraison rapide, une meilleure qualité logicielle, une adaptation constante aux besoins métier et une réduction des délais de mise en production.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://youtu.be/VpdFpZ_w5x8?si=wrVdG9KbGWqpiEms',
    category: 'Agile',
  },
  {
    id: 2,
    title: 'Design UX/UI itératif',
    description: 'Conception centrée utilisateur basée sur un processus itératif de prototypage, de tests et d’amélioration continue. Cette approche permet de valider les interfaces en conditions réelles, d’optimiser l’expérience utilisateur et d’augmenter significativement l’engagement et la satisfaction client.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://youtu.be/ODpB9-MCa5s?si=a7Hey1GK-dGmd5uK',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Solution ERP pour les entreprises',
    description: 'Un ERP (Enterprise Resource Planning) est un système qui centralise et automatise la gestion de votre entreprise : finance, RH, stock, ventes. Il améliore la productivité, réduit les erreurs et offre une vision globale pour une meilleure prise de décision.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1169&q=80',
    videoUrl: 'https://youtu.be/m9HmSsLI3Ac?si=WXR3G01osV1s6k7p',
    category: 'Digitalisation',
  },
  {
    id: 4,
    title: 'Solutions SharePoint SPFx personnalisables',
    description: 'Développez des solutions métiers sur mesure avec SharePoint Framework (SPFx), entièrement personnalisables et intégrées à votre environnement Microsoft existant, sans coûts supplémentaires de licence.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://youtu.be/WxdPb5vLRS4?si=VjNFiRy0dG7CaXuL',
    category: 'Microsoft Solutions',
  },
  {
    id: 5,
    title: 'Analyse des données & aide à la décision',
    description: 'Transformez vos données en insights stratégiques pour prendre les bonnes décisions au bon moment et optimiser la performance de votre entreprise.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://youtu.be/HdIbXYH5oWs?si=_MBUqrCEIAGqd-tR',
    category: 'Data & Analytics',
  },
  {
    id: 6,
    title: 'Gestion de portefeuille de projets',
    description: 'Mise en place d’un système de pilotage de portefeuille projets permettant un suivi centralisé des KPI stratégiques de l’entreprise, notamment le P&L, les coûts, les délais et la performance globale, afin d’assurer une prise de décision fiable et en temps réel.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://youtu.be/dJYoMJUrLt0?si=mdblzaVBAUVwwISQ',
    category: 'Portfolio Management',
  }
];

const DarkRealTimeServicesImproved: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedVideo) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedVideo]);

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.video-card');
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Nouveau fond : gradient animé + pattern + particules lumineuses */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0507] to-[#1a0a12]" />

      {/* Grille de points lumineux en arrière-plan */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #9b596d 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Dégradés colorés animés */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-[#9b596d] rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow opacity-20" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#4d767c] rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slower opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9b596d]/10 rounded-full blur-3xl animate-spin-slow" />

      {/* Effet de vagues lumineuses */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(155,89,109,0.1)_50%,transparent_70%)] animate-shimmer" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec effet néon renforcé */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 hover:border-[#9b596d]/50 transition-colors">
            <Sparkles size={16} className="text-[#9b596d] animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Expérience immersive</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#9b596d] bg-clip-text text-transparent animate-gradient-x">
              Découvrez notre approche et nos savoir-faire
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9b596d] to-[#4d767c] mx-auto mt-6 rounded-full shadow-lg shadow-[#9b596d]/50" />
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Plongez au cœur de l'excellence opérationnelle de Nexolia Consulting.<br />

          </p>
        </div>

        {/* Grille vidéo améliorée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {videos.map((video, idx) => {
            // Convertir les thumbnails YouTube si nécessaire
            const displayThumbnail = video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be')
              ? getYouTubeThumbnail(video.videoUrl)
              : video.thumbnailUrl;

            return (
              <div
                key={video.id}
                className={`video-card transition-all duration-700 ${visibleCards.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Carte avec effet de verre et d'élévation */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 hover:border-[#9b596d]/70 hover:shadow-2xl hover:shadow-[#9b596d]/30 group">
                  {/* Zone thumbnail avec zoom et overlay dynamique */}
                  <div className="relative aspect-video cursor-pointer overflow-hidden">
                    <img
                      src={displayThumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110"
                      onError={(e) => {
                        // Fallback en cas d'erreur de chargement de la miniature YouTube
                        (e.target as HTMLImageElement).src = video.thumbnailUrl;
                      }}
                    />
                    {/* Overlay gradient au survol */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${hoveredId === video.id ? 'opacity-100' : 'opacity-60'}`} />

                    {/* Bouton play avec animation néon renforcée */}
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-[#9b596d] group-hover:border-transparent group-hover:shadow-[0_0_30px_#9b596d] group-hover:shadow-[#9b596d]">
                        <Play className="text-white ml-1" size={34} fill="currentColor" />
                      </div>
                    </button>

                    {/* Badge catégorie avec effet glass */}
                    <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20 group-hover:border-[#9b596d] transition-all">
                      {video.category}
                    </span>

                    {/* Badge LIVE clignotant */}
                    <span className="absolute top-3 right-3 flex items-center gap-1 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      LIVE
                    </span>

                    {/* Affichage d'une info supplémentaire au survol */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent transform transition-transform duration-300 ${hoveredId === video.id ? 'translate-y-0' : 'translate-y-full'}`}>
                      <p className="text-white text-xs flex items-center gap-1">
                        <Eye size={12} /> 124 vues en direct
                      </p>
                    </div>
                  </div>

                  {/* Texte sous la vidéo avec animation */}
                  <div className="p-5 transition-all duration-300 group-hover:bg-white/5">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9b596d] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                      {video.description}
                    </p>
                  </div>

                  {/* Ligne de lumière animée au survol */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#9b596d] w-0 group-hover:w-full transition-all duration-500 shadow-[0_0_8px_#9b596d]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note de fin élégante */}
        <div className="text-center mt-20 text-gray-500 text-sm flex items-center justify-center gap-2">
          <Film size={14} />
          <span>Expérience optimale – casque recommandé – Contenu actualisé en continu</span>
        </div>
      </div>

      {/* MODALE LIGHTBOX DARK PREMIUM (améliorée) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl mx-4 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/30 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-xl">{selectedVideo.title}</h3>
                <p className="text-[#9b596d] text-sm">{selectedVideo.category}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2 hover:bg-[#9b596d]/50"
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo.videoUrl)}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-gray-300 text-sm">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        @keyframes spinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 8s infinite linear;
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 12s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
      `}</style>
    </section>
  );
};

export default DarkRealTimeServicesImproved;