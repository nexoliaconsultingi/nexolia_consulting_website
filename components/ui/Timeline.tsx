import React, { useEffect, useRef, useState } from 'react';
import { Award, Globe, Lightbulb, Rocket, Star, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from './card'; // Assurez-vous que le chemin est correct

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const Timeline: React.FC = () => {
  const timeline: TimelineEvent[] = [
    {
      year: "2020",
      title: "Naissance de l’idée",
      description: "Lancement de l’idée de créer notre entreprise Nexolia avec une vision tournée vers l’innovation digitale.",
      icon: <Rocket className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      year: "2021",
      title: "Étude des besoins",
      description: "Analyse de l’agrandissement continu des entreprises, PME et PMI pour identifier leurs besoins en solutions numériques.",
      icon: <Globe className="w-5 h-5" />,
      gradient: "from-green-500 to-teal-600",
    },
    {
      year: "2022",
      title: "Spécialisation stratégique",
      description: "Définition de nos futures solutions et spécialisation dans les solutions SaaS et Microsoft.",
      icon: <Lightbulb className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      year: "2023",
      title: "Premier ERP",
      description: "Développement du premier ERP dédié à la gestion des activités financières.",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-orange-500 to-red-600",
    },
    {
      year: "2024",
      title: "Deuxième ERP",
      description: "Développement du deuxième ERP axé sur la gestion des ressources humaines.",
      icon: <Users className="w-5 h-5" />,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      year: "2025",
      title: "Création officielle",
      description: "Création de la startup Nexolia et ouverture au marché IT national et international.",
      icon: <Star className="w-5 h-5" />,
      gradient: "from-indigo-500 to-blue-700",
    },
  ];

  // --- Gestion de l'animation au scroll ---
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(timeline.length).fill(false));
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);



  useEffect(() => {
    const observers = itemRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.unobserve(ref); // Une fois visible, on arrête d'observer
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } // Déclenchement légèrement avant l'entrée
      );
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // --- Données structurées JSON-LD (SEO) ---
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chronologie de Nexolia Consulting",
    description: "Les étapes clés de l’histoire de Nexolia, de l’idée initiale à la création officielle.",
    numberOfItems: timeline.length,
    itemListElement: timeline.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.title,
        description: event.description,
        startDate: event.year,
        eventStatus: "https://schema.org/EventScheduled",
      },
    })),
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
            <TrendingUp className="w-4 h-4 text-[#53828a] mr-2" aria-hidden="true" />
            <span className="text-[#53828a] font-semibold text-sm">Notre Parcours</span>
          </div>
          <h2 id="timeline-heading" className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">
            Notre Histoire
          </h2>
          <p className="text-xl text-[#727683] max-w-2xl mx-auto">
            Un parcours d'innovation et de croissance continue
          </p>
        </div>

        {/* Données structurées */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne verticale centrale (cachée sur mobile) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#53828a] to-[#b05f76] hidden md:block"></div>

            <ol className="relative space-y-12 md:space-y-0">
              {timeline.map((event, idx) => {
                const isEven = idx % 2 === 0;
                const isVisible = visibleItems[idx];

                return (
                  <li
                    key={idx}
                    ref={(el) => { itemRefs.current[idx] = el; }}   // ← suppression du return implicite
                    className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                  >
                    {/* Contenu de la carte - alternance gauche/droite sur desktop */}
                    <div
                      className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                        }`}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm relative overflow-hidden group">
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.gradient} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>
                        <CardContent className="p-6 relative">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-[#53828a]">{event.year}</span>
                            <div
                              className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                              aria-hidden="true"
                            >
                              {event.icon}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-[#53828a] mb-2 group-hover:text-[#b05f76] transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-[#727683] leading-relaxed">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Point central (uniquement sur desktop) */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] border-2 border-white shadow-md hidden md:block"
                      aria-hidden="true"
                    ></div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;