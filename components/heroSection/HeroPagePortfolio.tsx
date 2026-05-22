// components/HeroPagePortfolio.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Folder, Eye, Sparkles, ArrowRight, ChevronRight, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Composant QuoteRequestButton (à adapter selon votre logique)
const QuoteRequestButton = () => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="border-2 border-[#53828a] text-[#53828a] hover:text-white hover:bg-gradient-to-r hover:from-[#53828a] hover:to-[#b05f76] transition-all duration-300 hover:scale-105"
    >
      <Sparkles className="mr-2 w-5 h-5" />
      Demander un devis
    </Button>
  );
};

interface HeroPagePortfolioProps {
  onNavigate?: () => void;
  onQuoteRequest?: () => void;
  showStats?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
}

const HeroPagePortfolio: React.FC<HeroPagePortfolioProps> = ({
  onNavigate,
  onQuoteRequest,
  showStats = true,
  title = "Portfolio de",
  subtitle = "Réalisations",
  description = "Découvrez nos projets les plus innovants et les résultats exceptionnels obtenus pour nos clients.",
  badgeText = "Portfolio d'Excellence"
}) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');
  const [titleComplete, setTitleComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ 
    projects: 0, 
    clients: 0, 
    satisfaction: 0 
  });
  const statsRef = useRef<HTMLDivElement>(null);

  // Animation lettre par lettre pour le titre
  useEffect(() => {
    let titleIndex = 0;
    const titleChars = title.split('');
    
    const titleInterval = setInterval(() => {
      if (titleIndex < titleChars.length) {
        setDisplayedTitle(prev => prev + titleChars[titleIndex]);
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setTitleComplete(true);
      }
    }, 60);

    return () => clearInterval(titleInterval);
  }, [title]);

  // Animation lettre par lettre pour le sous-titre
  useEffect(() => {
    if (!titleComplete) return;

    let subtitleIndex = 0;
    const subtitleChars = subtitle.split('');
    
    const subtitleInterval = setInterval(() => {
      if (subtitleIndex < subtitleChars.length) {
        setDisplayedSubtitle(prev => prev + subtitleChars[subtitleIndex]);
        subtitleIndex++;
      } else {
        clearInterval(subtitleInterval);
        setSubtitleComplete(true);
      }
    }, 50);

    return () => clearInterval(subtitleInterval);
  }, [titleComplete, subtitle]);

  // Animation lettre par lettre pour la description
  useEffect(() => {
    if (!subtitleComplete) return;

    let descIndex = 0;
    const descChars = description.split('');
    
    const descInterval = setInterval(() => {
      if (descIndex < descChars.length) {
        setDisplayedDescription(prev => prev + descChars[descIndex]);
        descIndex++;
      } else {
        clearInterval(descInterval);
        setDescriptionComplete(true);
      }
    }, 30);

    return () => clearInterval(descInterval);
  }, [subtitleComplete, description]);

  // Observer pour les stats
  useEffect(() => {
    if (!showStats) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsStarted) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [showStats, statsStarted]);

  // Animation des compteurs
  useEffect(() => {
    if (!statsStarted) return;

    const duration = 2500;
    const projectsTarget = 150;
    const clientsTarget = 98;
    const satisfactionTarget = 100;
    
    let projectsCurrent = 0;
    let clientsCurrent = 0;
    let satisfactionCurrent = 0;
    let startTime: number | null = null;
    
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutCubic(progress);
      
      projectsCurrent = projectsTarget * easedProgress;
      clientsCurrent = clientsTarget * easedProgress;
      satisfactionCurrent = satisfactionTarget * easedProgress;
      
      setAnimatedNumbers({
        projects: Math.floor(projectsCurrent),
        clients: Math.floor(clientsCurrent),
        satisfaction: Math.floor(satisfactionCurrent)
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [statsStarted]);

  const handleNavigate = (): void => {
    if (onNavigate) onNavigate();
  };

  const handleQuoteRequest = (): void => {
    if (onQuoteRequest) onQuoteRequest();
  };

  const Cursor = () => (
    <span className="inline-block w-[3px] h-[0.9em] bg-gradient-to-t from-[#53828a] to-[#b05f76] ml-1 animate-pulse align-middle"></span>
  );

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-[#53828a]/5 via-white to-[#b05f76]/5 overflow-hidden">
      {/* Background Animé */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#53828a]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b05f76]/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#53828a]/5 to-[#b05f76]/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Particules décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#53828a]/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge Animé */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] mb-6 shadow-lg shadow-[#53828a]/20 transform transition-all duration-500 hover:scale-105 animate-fade-in-up">
            <Folder className="w-4 h-4 text-white mr-2 animate-pulse" />
            <span className="text-white font-semibold tracking-wide">{badgeText}</span>
          </div>

          {/* Titre Principal avec effet lettre par lettre */}
          <h1 className="text-4xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
            <span className="text-[#53828a]">
              {displayedTitle}
              {!titleComplete && <Cursor />}
            </span>
            <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent block">
              {displayedSubtitle}
              {titleComplete && !subtitleComplete && <Cursor />}
            </span>
          </h1>

          {/* Description avec apparition lettre par lettre */}
          <p className={`text-xl lg:text-2xl text-[#727683] mb-8 max-w-3xl mx-auto leading-relaxed min-h-[4rem]`}>
            {displayedDescription}
            {subtitleComplete && !descriptionComplete && <Cursor />}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${
            descriptionComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Button
              size="lg"
              onClick={handleNavigate}
              className="group relative overflow-hidden bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:shadow-2xl hover:shadow-[#53828a]/30 text-white border-0 transition-all duration-300 hover:scale-105 px-8 py-6 text-base rounded-full"
            >
              <span className="relative z-10 flex items-center">
                <Eye className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Explorer Nos Projets
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b05f76] to-[#53828a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleQuoteRequest}
              className="group relative overflow-hidden border-2 border-[#53828a] text-[#53828a] hover:text-white transition-all duration-300 hover:scale-105 px-8 py-6 text-base rounded-full bg-white/50 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#53828a] to-[#b05f76] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Stats Section améliorée */}
          {showStats && (
            <div 
              ref={statsRef}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 transition-all duration-700 ${
                statsStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group relative">
                <div className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#53828a]/20 to-[#b05f76]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-[#53828a]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                    {animatedNumbers.projects}+
                  </div>
                  <div className="text-sm text-gray-500 mt-2 font-medium">Projets Réalisés</div>
                  <div className="text-xs text-gray-400 mt-1">avec excellence</div>
                </div>
              </div>

              <div className="group relative">
                <div className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#53828a]/20 to-[#b05f76]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-[#53828a]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                    {animatedNumbers.clients}+
                  </div>
                  <div className="text-sm text-gray-500 mt-2 font-medium">Clients Satisfaits</div>
                  <div className="text-xs text-gray-400 mt-1">dans 15+ pays</div>
                </div>
              </div>

              <div className="group relative">
                <div className="text-center p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#53828a]/20 to-[#b05f76]/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-[#53828a]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                    {animatedNumbers.satisfaction}%
                  </div>
                  <div className="text-sm text-gray-500 mt-2 font-medium">Taux de Satisfaction</div>
                  <div className="text-xs text-gray-400 mt-1">recommandation client</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, 30px) scale(1.2);
          }
        }
        
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-particle {
          animation: floatParticle 6s ease-in-out infinite;
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
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default HeroPagePortfolio;