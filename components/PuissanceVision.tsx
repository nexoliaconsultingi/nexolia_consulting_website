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
  GitBranch,
  Cloud,
  Server,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

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
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f9f8f9] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="puissance-vision-heading"
    >
      {/* Éléments décoratifs masqués aux lecteurs d'écran */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-64 bg-gradient-to-r from-[#9b596d]/20 to-transparent rounded-r-full blur-3xl -ml-8" aria-hidden="true" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-32 h-64 bg-gradient-to-l from-[#4d767c]/20 to-transparent rounded-l-full blur-3xl -mr-8" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#9b596d]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d767c] via-[#9b596d] to-[#4d767c]" aria-hidden="true" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9b596d]/5 rounded-full blur-2xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4d767c]/5 rounded-full blur-2xl animate-pulse-slower" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 id="puissance-vision-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#9b596d] to-[#4d767c] bg-clip-text text-transparent">
              Notre puissance & vision
            </span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-[#9b596d] to-[#4d767c] mx-auto mt-5 rounded-full" aria-hidden="true" />
          <p className="mt-6 text-lg md:text-xl text-[#4d767c] max-w-3xl mx-auto font-medium">
            Chez Nexolia Consulting, nous allions une puissance d’exécution hors norme à une vision claire de la transformation digitale.
          </p>
        </div>

        {/* Grille Puissance + Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Colonne Puissance */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-x-[-2rem] transition-all duration-700 delay-200">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#9b596d]/10 text-[#9b596d]" aria-hidden="true">
                <Zap size={32} strokeWidth={1.8} aria-hidden="true" />
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
            <ul className="grid grid-cols-2 gap-6 pt-4" role="list" aria-label="Indicateurs clés">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <li key={idx} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all text-center group">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110" style={{ backgroundColor: `${metric.color}15` }} aria-hidden="true">
                      <Icon size={24} style={{ color: metric.color }} aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold" style={{ color: metric.color }}>{metric.value}</div>
                    <div className="text-gray-600 text-sm mt-1">{metric.label}</div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Colonne Vision */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-x-[2rem] transition-all duration-700 delay-400">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#4d767c]/10 text-[#4d767c]" aria-hidden="true">
                <Eye size={32} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Notre <span className="text-[#4d767c]">vision</span>
              </h3>
            </div>
            <blockquote className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-8 border-[#9b596d]">
              <Lightbulb className="absolute top-6 right-6 text-[#9b596d]/20" size={48} aria-hidden="true" />
              <p className="text-gray-700 italic text-lg leading-relaxed">
                « Construire un écosystème tech durable où chaque entreprise, quelle que soit sa taille, 
                peut libérer son potentiel digital grâce à un accompagnement sur-mesure et une innovation continue. »
              </p>
              <footer className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-[#9b596d] to-transparent" aria-hidden="true" />
                <cite className="text-sm font-semibold not-italic text-[#9b596d]">Nexolia Consulting</cite>
              </footer>
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-[#4d767c] mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-gray-800">Transformation agile</h4>
                  <p className="text-sm text-gray-600">Nous accélérons votre time-to-market.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-[#9b596d] mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-gray-800">Innovation responsable</h4>
                  <p className="text-sm text-gray-600">Une tech éthique et durable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== NOUVELLE SECTION : EXPERTISE EN GESTION DE PROJET ET ARCHITECTURE TECH ========== */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1 shadow-sm border border-[#9b596d]/20 mb-4" aria-hidden="true">
              <GitBranch className="w-4 h-4 text-[#9b596d]" />
              <span className="text-xs font-semibold text-[#9b596d] uppercase tracking-wider">Expertises clés</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gouvernance de projet & Architecture d'entreprise
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              NEXOLIA accompagne les entreprises dans la maîtrise de leurs projets complexes et la conception d’architectures technologiques robustes, évolutives et sécurisées.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gestion de projet */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#9b596d]/10 text-[#9b596d]">
                  <GitBranch size={28} aria-hidden="true" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Gestion de projet & Méthodologies agiles</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Nous déployons des pratiques reconnues (PMP, Scrum, Kanban) et des outils comme <strong className="text-[#4d767c]">Microsoft Project Server</strong> et <strong className="text-[#4d767c]">Jira</strong> pour garantir la livraison dans les délais, la qualité et la transparence.
              </p>
              <ul className="space-y-2">
                {[
                  'Planification stratégique et pilotage de portefeuille projets (EPPM)',
                  'Mise en place de PMO et gouvernance agile',
                  'Formation certifiante PMP et MS Project',
                  'Suivi budgétaire et reporting temps réel (Power BI)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#9b596d] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture technologique */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-[#4d767c]/10 text-[#4d767c]">
                  <Server size={28} aria-hidden="true" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Architecture technologique & Cloud</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Nous concevons des architectures scalables, sécurisées et adaptées à votre stratégie métier : 
                <strong className="text-[#4d767c]"> microservices, serverless, cloud hybride</strong> et <strong className="text-[#4d767c]">ERP sur mesure</strong>.
              </p>
              <ul className="space-y-2">
                {[
                  'Audit et refonte d’architecture legacy',
                  'Déploiement sur AWS, Azure, OVHcloud',
                  'Intégration continue / livraison continue (CI/CD)',
                  'Sécurité des données et conformité RGPD'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-[#4d767c] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mention des certifications / méthodologies */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-3">
              <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#9b596d] border border-[#9b596d]/20">PMP</span>
              <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#4d767c] border border-[#4d767c]/20">PRINCE2</span>
              <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#9b596d] border border-[#9b596d]/20">SAFe</span>
              <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#4d767c] border border-[#4d767c]/20">TOGAF</span>
              <span className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#9b596d] border border-[#9b596d]/20">Microsoft Certified</span>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="mt-20 text-center animate-on-scroll opacity-0 transition-all duration-700 delay-600">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gradient-to-r hover:from-[#9b596d] hover:to-[#4d767c] hover:text-white border border-[#9b596d] text-[#9b596d] font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#9b596d] focus:ring-offset-2"
            aria-label="Demander un audit d'architecture ou un accompagnement projet"
          >
            <span>Demander un audit technologique</span>
            <Rocket size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(2rem); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseSlow { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes pulseSlower { 0%,100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.1); } }
        .animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
        .animate-pulse-slow { animation: pulseSlow 8s infinite; }
        .animate-pulse-slower { animation: pulseSlower 12s infinite; }
        .animate-on-scroll { transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
        .animate-on-scroll.animate-fade-in-up { opacity: 1 !important; transform: translateX(0) translateY(0) !important; }
      `}</style>
    </section>
  );
};

export default PuissanceVision;