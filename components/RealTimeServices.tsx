import React, { useState, useEffect } from 'react';
import { Play, X, Maximize2, Film, Sparkles } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'Développement agile en temps réel',
    description: 'Notre équipe collabore en live sur une architecture microservices.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
    category: 'Agile',
  },
  {
    id: 2,
    title: 'Design UX/UI itératif',
    description: 'Prototypage et tests utilisateurs en conditions réelles.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Déploiement continu CI/CD',
    description: 'De commit à production en quelques minutes, en direct.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461749284624-1f7e9e8f7c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0',
    category: 'DevOps',
  },
  {
    id: 4,
    title: 'Support client haute réactivité',
    description: 'Notre helpdesk résout les incidents en temps réel.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0',
    category: 'Support',
  },
  {
    id: 5,
    title: 'Analyse data & dashboards live',
    description: 'Visualisation interactive et décision instantanée.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0',
    category: 'Data',
  },
  {
    id: 6,
    title: 'Revue de code collaborative',
    description: 'Pair programming et amélioration continue.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0',
    category: 'Collaboration',
  },
];

const DarkRealTimeServices: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedVideo) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedVideo]);

  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Effet de fond dynamique : particules et lueurs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#1a0a0f]" />
      
      {/* Lueurs animées (auréoles) */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#9b596d]/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#4d767c]/20 rounded-full blur-[100px] animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9b596d]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec effet néon */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles size={16} className="text-[#9b596d]" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Expérience immersive</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#9b596d] bg-clip-text text-transparent">
              Nos services en temps réel
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9b596d] to-[#4d767c] mx-auto mt-6 rounded-full shadow-lg" />
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Plongez au cœur de l'excellence opérationnelle de Nexolia Consulting.<br />
            Des séquences authentiques filmées en conditions réelles.
          </p>
        </div>

        {/* Grille vidéo avec effet cinéma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className="group relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-[#9b596d]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9b596d]/20">
                {/* Zone thumbnail */}
                <div className="relative aspect-video cursor-pointer overflow-hidden">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />
                  {/* Overlay gradient artistique */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 ${hoveredId === video.id ? 'opacity-100' : 'opacity-70'}`} />
                  
                  {/* Bouton play en verre avec animation */}
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9b596d] group-hover:border-transparent group-hover:shadow-[0_0_30px_#9b596d]">
                      <Play className="text-white ml-1" size={34} fill="currentColor" />
                    </div>
                  </button>
                  
                  {/* Badge catégorie */}
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
                    {video.category}
                  </span>
                  
                  {/* Indicateur "Live" */}
                  <span className="absolute top-3 right-3 flex items-center gap-1 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    LIVE
                  </span>
                </div>
                
                {/* Texte sous la vidéo */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9b596d] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
                
                {/* Ligne de lumière animée au survol */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#9b596d] to-[#4d767c] w-0 group-hover:w-full transition-all duration-700 shadow-[0_0_8px_#9b596d]" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Note de fin élégante */}
        <div className="text-center mt-20 text-gray-500 text-sm flex items-center justify-center gap-2">
          <Film size={14} />
          <span>Expérience optimale – casque recommandé</span>
        </div>
      </div>

      {/* MODALE LIGHTBOX DARK PREMIUM */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl mx-4 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/20 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barre supérieure avec gradient */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-10 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-xl">{selectedVideo.title}</h3>
                <p className="text-[#9b596d] text-sm">{selectedVideo.category}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2"
              >
                <X size={24} />
              </button>
            </div>
            {/* Lecteur vidéo */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Description basse */}
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
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 12s infinite;
        }
        .animate-on-scroll {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .animate-on-scroll.animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default DarkRealTimeServices;