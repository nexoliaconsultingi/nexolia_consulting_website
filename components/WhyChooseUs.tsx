import React, { useEffect, useRef } from 'react';
import {
  Heart,
  Users,
  DollarSign,
  TrendingUp,
  CalendarClock,
  Sparkles,
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number; // délai d'animation personnalisé
}

const features: Feature[] = [
  {
    icon: Heart,
    title: 'Satisfaction client prioritaire',
    description:
      "La satisfaction de nos clients est notre priorité absolue. Nous mesurons notre succès à l'aune du vôtre.",
    delay: 0.1,
  },
  {
    icon: Users,
    title: 'Expertise & équipe qualifiée',
    description:
      'Une équipe hautement qualifiée vous assure un encadrement parfait tout au long du développement logiciel.',
    delay: 0.2,
  },
  {
    icon: DollarSign,
    title: 'Solutions adaptatives à tout budget',
    description:
      'Des solutions flexibles et personnalisables, conçues pour s’adapter à toutes les enveloppes budgétaires.',
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    title: 'Amélioration de votre business',
    description:
      'Nous focalisons notre approche sur l’amélioration continue de vos processus métier pour maximiser votre performance.',
    delay: 0.4,
  },
  {
    icon: CalendarClock,
    title: 'Professionnalisme & ponctualité',
    description:
      'Rigueur, professionnalisme et respect des délais à chaque étape de votre projet.',
    delay: 0.5,
  },
  {
    icon: Sparkles,
    title: 'Et bien plus encore...',
    description:
      'Engagement total, support réactif, transparence et une relation de confiance durable.',
    delay: 0.6,
  },
];

const WhyChooseUs: React.FC = () => {
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
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll('.animate-on-scroll');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28 bg-[#f9f8f9]"
    >
      {/* Arrière‑plan : image + overlay + éléments flottants */}
      <div className="absolute inset-0 z-0">
        {/* Image de fond (remplacez l'URL par votre propre image) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        {/* Dégradé dynamique pour renforcer la lisibilité et l'énergie */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9b596d]/5 via-transparent to-[#4d767c]/10" />
        {/* Cercles flottants animés */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#9b596d]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4d767c]/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec animation au scroll */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9b596d] to-[#4d767c] bg-clip-text text-transparent">
              Pourquoi nous choisir ?
            </span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-[#9b596d] to-[#4d767c] mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-[#4d767c] max-w-2xl mx-auto font-medium">
            Nexolia Consulting : votre partenaire de confiance pour un
            développement logiciel réussi.
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${feature.delay}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/50 hover:border-[#9b596d]/30 h-full flex flex-col">
                  {/* Icône avec double effet énergique */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-[#9b596d]/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#9b596d] to-[#4d767c] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[#9b596d]/40">
                      <IconComponent size={30} strokeWidth={1.7} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#9b596d] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                  {/* Ligne décorative au survol */}
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#9b596d] to-[#4d767c] transition-all duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Badge dynamique supplémentaire */}
        <div className="mt-20 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-700">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/50">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9b596d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9b596d]"></span>
            </span>
            <span className="text-[#4d767c] font-medium">
             Des solutions qui propulsent votre business — accompagnement
              sur-mesure, transparence et résultats concrets.
            </span>
          </div>
        </div>
      </div>

      {/* Styles d'animation personnalisés (ajouter dans votre fichier CSS global ou avec un <style> en module) */}
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
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 12s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0px) translateX(0px); }
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

export default WhyChooseUs;