import React, { useEffect, useRef } from 'react';
import {
  Zap,
  Eye,
  TrendingUp,
  Shield,
  Rocket,
  Lightbulb,
  BarChart3,
  Users,
} from 'lucide-react';
import Link from 'next/link';

// Données pour les métriques de puissance
const metrics = [
  { value: '98%', label: 'Satisfaction client', icon: Users, color: '#9b596d' },
  { value: '+120', label: 'Projets livrés', icon: Rocket, color: '#4d767c' },
  { value: '24/7', label: 'Support dédié', icon: Shield, color: '#9b596d' },
  { value: '5x', label: 'ROI moyen', icon: BarChart3, color: '#4d767c' },
];

const PuissanceVision: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9f8f9] py-20 lg:py-28 overflow-hidden"
    >
      {/* Éléments de continuité latérale – gauche et droite */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-64 bg-gradient-to-r from-[#9b596d]/20 to-transparent rounded-r-full blur-3xl -ml-8" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-64 bg-gradient-to-l from-[#4d767c]/20 to-transparent rounded-l-full blur-3xl -mr-8" />
      
      {/* Bandes décoratives continues (haut et bas) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#9b596d]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d767c] via-[#9b596d] to-[#4d767c]" />

      {/* Cercles décoratifs flottants */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9b596d]/5 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4d767c]/5 rounded-full blur-2xl animate-pulse-slower" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9b596d] to-[#4d767c] bg-clip-text text-transparent">
              Notre puissance & vision
            </span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-[#9b596d] to-[#4d767c] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-[#4d767c] max-w-3xl mx-auto font-medium">
            Chez Nexolia Consulting, nous allions une puissance d’exécution hors norme à une vision claire de la transformation digitale.
          </p>
        </div>

        {/* Grille Puissance (gauche) + Vision (droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne Puissance - avec métriques */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-x-[-2rem] transition-all duration-700 delay-200">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#9b596d]/10 text-[#9b596d]">
                <Zap size={32} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Notre <span className="text-[#9b596d]">puissance</span>
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Une équipe hautement qualifiée, des méthodologies agiles éprouvées et une technologie de pointe. 
              Nexolia Consulting déploie une force de frappe unique pour accélérer votre succès, 
              avec une ponctualité et un professionnalisme reconnus.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all text-center group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${metric.color}15` }}
                    >
                      <Icon size={24} style={{ color: metric.color }} />
                    </div>
                    <div
                      className="text-3xl font-bold"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne Vision - avec citation et points clés */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-x-[2rem] transition-all duration-700 delay-400">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#4d767c]/10 text-[#4d767c]">
                <Eye size={32} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Notre <span className="text-[#4d767c]">vision</span>
              </h3>
            </div>
            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-8 border-[#9b596d]">
              <Lightbulb
                className="absolute top-6 right-6 text-[#9b596d]/20"
                size={48}
              />
              <p className="text-gray-700 italic text-lg leading-relaxed">
                « Construire un écosystème tech durable où chaque entreprise, quelle que soit sa taille, 
                peut libérer son potentiel digital grâce à un accompagnement sur-mesure et une innovation continue. »
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#9b596d] to-transparent" />
                <span className="text-sm font-semibold text-[#9b596d]">Nexolia Consulting</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-[#4d767c] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-800">Transformation agile</h4>
                  <p className="text-sm text-gray-600">Nous accélérons votre time-to-market.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-[#9b596d] mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-800">Innovation responsable</h4>
                  <p className="text-sm text-gray-600">Une tech éthique et durable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action subtil */}
        <div className="mt-20 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-600">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-white hover:bg-gradient-to-r hover:from-[#9b596d] hover:to-[#4d767c] hover:text-white border border-[#9b596d] text-[#9b596d] font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
          >
              Explorer notre entreprise
            <Rocket size={18} />
          </Link>
        </div>
      </div>

      {/* Styles d'animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
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
          transform: translateX(0) translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default PuissanceVision;