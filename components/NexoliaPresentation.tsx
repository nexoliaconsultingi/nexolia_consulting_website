// components/NexoliaPresentation.tsx
import React, { useState } from 'react';
import TechStack from './TechStack';
import Link from 'next/link';

/**
 * Composant de présentation pour Nexolia Consulting
 * Palette de couleurs : #f5f0f2, #ab6077, #b05f76, #53828a, white, black
 */

interface ServiceItem {
  category: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
  colorAccent: 'rose1' | 'rose2' | 'sage';
}

interface StatisticItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const NexoliaPresentation: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Couleurs de la palette
  const colors = {
    background: '#f5f0f2',
    textPrimary: '#1a1a1a',
    textSecondary: '#4a5568',
    cardBg: '#ffffff',
    accents: {
      rose1: '#ab6077',
      rose2: '#b05f76',
      sage: '#53828a',
    }
  };

  // Icônes professionnelles SVG
  const icons = {
    rocket: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    cloud: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    strategy: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    infrastructure: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    check: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    smile: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    target: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    building: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    support: (
      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m0 5.656l3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    arrowRight: (
      <svg className="w-5 h-5 inline-block ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
    star: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  };

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case 'rose1': return colors.accents.rose1;
      case 'rose2': return colors.accents.rose2;
      case 'sage': return colors.accents.sage;
      default: return colors.accents.sage;
    }
  };

  const services: ServiceItem[] = [
    {
      category: 'Développement & Innovation',
      icon: icons.rocket,
      description: 'Solutions digitales sur mesure pour accélérer votre croissance',
      colorAccent: 'rose1',
      items: [
        'Applications web et mobiles sur mesure',
        'Progressive Web Apps (PWA)',
        'Intégration de systèmes intelligents',
        'API développement et intégration',
        'Architectures microservices'
      ]
    },
    {
      category: 'Digitalisation & Microsoft 365',
      icon: icons.cloud,
      description: 'Optimisez votre productivité avec l\'écosystème Microsoft',
      colorAccent: 'sage',
      items: [
        'Optimisation de Microsoft 365',
        'Workflows automatisés avec Power Automate',
        'Gestion documentaire et collaboration fluide',
        'Teams et SharePoint avancés',
        'Power BI pour le reporting'
      ]
    },
    {
      category: 'Stratégie & Organisation',
      icon: icons.strategy,
      description: 'Accompagnement stratégique pour une transformation réussie',
      colorAccent: 'rose2',
      items: [
        'Conseil stratégique et transformation digitale',
        'Mise en place de PMO (Project Management Office)',
        'Reporting fiable et pilotage par la donnée',
        'Gestion du changement',
        'Audit et roadmap digitale'
      ]
    },
    {
      category: 'Infrastructure & Gouvernance',
      icon: icons.infrastructure,
      description: 'Des fondations solides pour votre transformation',
      colorAccent: 'sage',
      items: [
        'Installation de réseaux robustes',
        'Gouvernance de projets complexes',
        'Méthodologies agiles et vision résultats',
        'Sécurité et conformité',
        'Cloud hybride et migration'
      ]
    },
  ];

  const statistics: StatisticItem[] = [
    { value: '95%', label: 'Satisfaction client', icon: icons.smile },
    { value: '100%', label: 'Projets livrés', icon: icons.target },
    { value: '50+', label: 'Clients actifs', icon: icons.building },
    { value: '24/7', label: 'Support disponible', icon: icons.support },
  ];



  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <header className="text-center mb-20 relative" id="hero">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl animate-pulse"
              style={{ background: `radial-gradient(circle, ${colors.accents.rose1}, ${colors.accents.sage})` }}></div>
          </div>

          <div className="relative">
            <div className="inline-block p-4 rounded-2xl shadow-2xl mb-6 transform transition-all duration-500 hover:rotate-3 hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${colors.accents.rose1}, ${colors.accents.rose2})`,
                boxShadow: `0 20px 40px ${colors.accents.rose1}40`,
                color: 'white'
              }}>
              {icons.rocket}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
              style={{ color: colors.textPrimary }}>
              Nexolia
              <span className="ml-3 px-4 py-2 rounded-xl text-white inline-block transform hover:scale-105 transition-transform"
                style={{ background: `linear-gradient(135deg, ${colors.accents.rose2}, ${colors.accents.sage})` }}>
                Consulting
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light mb-8"
              style={{ color: colors.textSecondary }}>
              Partenaire stratégique de votre transformation digitale
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${colors.accents.rose1}, ${colors.accents.rose2})`,
                  color: "white",
                }}
              >
                <span>Démarrer un projet</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {icons.arrowRight}
                </span>
              </Link>

            </div>
          </div>
        </header>

        {/* Description Section */}
        <section className="mb-20" id="about">
          <div className="rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl"
            style={{
              backgroundColor: colors.cardBg,
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center"
                  style={{ color: colors.textPrimary }}>
                  <span className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ background: `linear-gradient(135deg, ${colors.accents.rose1}, ${colors.accents.sage})` }}>
                    <span style={{ color: 'white', fontSize: '1.2rem' }}>✨</span>
                  </span>
                  Qui sommes-nous ?
                </h2>
                <p className="leading-relaxed text-lg mb-4" style={{ color: colors.textSecondary }}>
                  Nexolia Consulting est une entreprise innovante spécialisée dans la{' '}
                  <strong className="font-semibold" style={{ color: colors.accents.rose1 }}>
                    transformation digitale
                  </strong>
                  , le développement de solutions sur mesure et le conseil stratégique.
                </p>
                <p className="leading-relaxed text-lg" style={{ color: colors.textSecondary }}>
                  Notre approche unique combine{' '}
                  <strong style={{ color: colors.accents.rose2 }}>expertise technique</strong>
                  , <strong style={{ color: colors.accents.sage }}>conseil stratégique</strong> et
                  accompagnement humain pour garantir la réussite de vos projets.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {statistics.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 rounded-2xl transition-all hover:scale-105"
                    style={{
                      background: idx % 2 === 0 ? `${colors.accents.rose1}10` : `${colors.accents.sage}10`,
                      border: `1px solid ${idx % 2 === 0 ? colors.accents.rose1 : colors.accents.sage}20`
                    }}>
                    <div style={{ color: idx % 2 === 0 ? colors.accents.rose1 : colors.accents.sage }}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold mt-2" style={{ color: idx % 2 === 0 ? colors.accents.rose1 : colors.accents.sage }}>
                      {stat.value}
                    </div>
                    <div className="text-sm mt-1" style={{ color: colors.textSecondary }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20" id="services">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
              Nos Services
            </h2>
            <p className="text-xl" style={{ color: colors.textSecondary }}>
              Des solutions innovantes pour votre transformation digitale
            </p>
            <div className="mt-4 h-1 w-20 mx-auto rounded-full"
              style={{ background: `linear-gradient(90deg, ${colors.accents.rose1}, ${colors.accents.sage})` }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const accentColor = getAccentColor(service.colorAccent);
              const isRoseAccent = service.colorAccent === 'rose1' || service.colorAccent === 'rose2';

              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group"
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `2px solid ${hoveredCard === idx ? accentColor : '#e2e8f0'}`,
                    boxShadow: hoveredCard === idx ? `0 20px 40px ${accentColor}20` : '0 4px 6px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
                        color: accentColor
                      }}>
                      {service.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: colors.textPrimary }}>
                        {service.category}
                      </h3>
                      <p className="text-sm" style={{ color: colors.textSecondary }}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <span className="mt-0.5 mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110"
                          style={{ color: isRoseAccent ? colors.accents.rose1 : colors.accents.sage }}>
                          {icons.check}
                        </span>
                        <span style={{ color: colors.textSecondary }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <span className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        color: accentColor,
                        border: `1px solid ${accentColor}30`
                      }}>
                      {service.colorAccent === 'rose1' && '🚀 Innovation'}
                      {service.colorAccent === 'rose2' && '🎯 Stratégie'}
                      {service.colorAccent === 'sage' && '⚙️ Excellence'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section Notre Force */}
        <section className="mb-20">
          <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.accents.rose1}08, ${colors.accents.sage}08)`,
              border: `1px solid ${colors.accents.rose1}20`
            }}>

            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill={colors.accents.rose1} d="M69.5,-58.2C87.5,-40.1,96.6,-14.8,92.4,8.5C88.2,31.8,70.7,53.1,49.2,66.3C27.7,79.5,2.2,84.6,-21.5,76.7C-45.2,68.8,-67.1,47.9,-75.4,22.9C-83.7,-2.1,-78.4,-31.2,-62.3,-49.3C-46.2,-67.4,-19.4,-74.5,5.6,-78.8C30.6,-83.1,51.5,-76.3,69.5,-58.2Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-6 flex items-center" style={{ color: colors.textPrimary }}>
                    <span className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{ background: `linear-gradient(135deg, ${colors.accents.rose1}, ${colors.accents.rose2})` }}>
                      {icons.shield}
                    </span>
                    Notre force
                  </h2>
                  <p className="leading-relaxed text-lg" style={{ color: colors.textSecondary }}>
                    Notre force réside dans notre capacité à piloter des projets complexes avec des
                    méthodologies agiles, une gestion stratégique des ressources et une vision orientée
                    résultats. En combinant{' '}
                    <strong style={{ color: colors.accents.rose1 }}>innovation</strong>
                    , <strong style={{ color: colors.accents.rose2 }}>expertise technique</strong> et
                    <strong style={{ color: colors.accents.sage }}> excellence opérationnelle</strong>
                    , Nexolia Consulting se positionne comme un partenaire stratégique de confiance
                    pour accompagner durablement les entreprises vers la performance.
                  </p>
                </div>

                <div className="flex-shrink-0 flex gap-3">
                  <div className="text-center p-4 rounded-xl min-w-[120px] transition-all hover:scale-105"
                    style={{ backgroundColor: `${colors.accents.rose1}15`, border: `1px solid ${colors.accents.rose1}30` }}>
                    <div className="text-3xl font-bold" style={{ color: colors.accents.rose1 }}>95%</div>
                    <div className="text-sm mt-1" style={{ color: colors.textSecondary }}>satisfaction</div>
                  </div>
                  <div className="text-center p-4 rounded-xl min-w-[120px] transition-all hover:scale-105"
                    style={{ backgroundColor: `${colors.accents.sage}15`, border: `1px solid ${colors.accents.sage}30` }}>
                    <div className="text-3xl font-bold" style={{ color: colors.accents.sage }}>100%</div>
                    <div className="text-sm mt-1" style={{ color: colors.textSecondary }}>succès</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <TechStack />

        
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NexoliaPresentation;