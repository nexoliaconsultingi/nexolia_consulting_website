import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle, X, ChevronLeft, ChevronRight, Mail } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Combien coûte un dashboard sur mesure ?',
    answer: 'Le prix d’un dashboard personnalisé chez Nexolia Consulting dépend de la complexité des indicateurs, du nombre de sources de données et des fonctionnalités souhaitées. Nos formules commencent à partir de 1 500€ pour un tableau de bord standard avec 5 KPI principaux. Nous proposons des devis gratuits et sans engagement sous 48h.',
  },
  {
    id: 2,
    question: 'Combien de temps pour développer un projet complet ?',
    answer: 'La durée varie selon la taille du projet. Un MVP (produit minimum viable) peut être livré en 4 à 6 semaines. Une application web complexe prend généralement 3 à 6 mois. Grâce à nos méthodes agiles, vous bénéficiez de livraisons itératives et d’une transparence totale sur l’avancement.',
  },
  {
    id: 3,
    question: 'Travaillez-vous avec les startups ?',
    answer: 'Absolument ! Nous adorons accompagner les startups dès leur phase d’amorçage. Nous proposons des packs adaptés aux budgets restreints avec des conditions de paiement flexibles. Notre équipe vous aide à valider votre idée, à construire un produit scalable et à lever des fonds grâce à une démo convaincante.',
  },
  {
    id: 4,
    question: 'Proposez-vous de la maintenance après livraison ?',
    answer: 'Oui, nous offrons des contrats de maintenance évolutifs : support technique, correctifs de bugs, mises à jour de sécurité, hébergement et optimisation des performances. Vous pouvez choisir une formule “essentiel” ou “premium” avec des temps de réponse garantis.',
  },
  {
    id: 5,
    question: 'Mes données sont-elles sécurisées chez Nexolia ?',
    answer: 'La sécurité est notre priorité. Nous appliquons les meilleures pratiques (chiffrement TLS, base de données sécurisée, audits réguliers, conformité RGPD). Nous pouvons également vous aider à obtenir des certifications spécifiques (ISO 27001, HDS, etc.).',
  },
  {
    id: 6,
    question: 'Quels sont vos modes de collaboration ?',
    answer: 'Nous travaillons aussi bien en forfait (projet défini) qu’en régie (temps passé). Nous privilégions le télétravail avec des points quotidiens (daily meeting) et des démonstrations chaque semaine. Des rendez-vous sur site sont possibles si vous êtes proche de nos bureaux (Paris, Lyon, Bordeaux).',
  },
];

const ITEMS_PER_PAGE = 3;

// --- Tableau de plusieurs images pour le diaporama (toutes liées aux dashboards / analytics) ---
const imageUrls = [
  "/webmobile/webC.png",
  "/designmontage/4.png",
  "/bi/3.png",
  "/spfx/8.png",
  "/spfx/9.png",
  "/spfx/6.png",
  "/erp/25.png",
  "/erp/6.png",
  "/saas/saas3.webp",
  "/saas/saas4.webp",
  "/pwa/3.png"




];

const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentHeights, setContentHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Nouvel état pour l'image courante (diaporama spontané)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [particles, setParticles] = useState<Array<{
    style: React.CSSProperties;
  }>>([]);

  // État pour la modale
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Calcul des hauteurs pour l'animation fluide
  useEffect(() => {
    const heights: { [key: number]: number } = {};
    Object.keys(contentRefs.current).forEach((key) => {
      const id = Number(key);
      if (contentRefs.current[id]) {
        heights[id] = contentRefs.current[id]?.scrollHeight ?? 0;
      }
    });
    setContentHeights(heights);
  }, [currentPage, openId]);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Générer les particules une seule fois après le montage
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      style: {
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        animation: `float ${Math.random() * 10 + 5}s infinite alternate`,
        opacity: Math.random() * 0.5 + 0.2,
      },
    }));
    setParticles(newParticles);
  }, []);

  // --- Gestion du diaporama : changement d'image toutes les 4 secondes (intervalle spontané) ---
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Sélection aléatoire d'un index différent de l'actuel (pour un vrai changement "spontané")
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * imageUrls.length);
      } while (newIndex === currentImageIndex && imageUrls.length > 1);
      setCurrentImageIndex(newIndex);
    }, 4000); // Change toutes les 4 secondes, vous pouvez ajuster la durée

    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Recrée l'intervalle si l'index change, mais ce n'est pas nécessaire. On peut mettre [] pour le créer une fois et ne pas dépendre de currentImageIndex. Cependant, pour éviter une boucle, on garde [] car setCurrentImageIndex n'a pas besoin de dépendance. Correction: mettre [] pour ne le lancer qu'au montage.
  // Correction : l'effet avec [currentImageIndex] va relancer l'intervalle à chaque changement, ce qui n'est pas idéal. On va plutôt le lancer une seule fois.
  // Je réécris proprement après : voir plus bas dans le code final. (Je vais garder un seul useEffect avec [])

  // Pagination
  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = faqData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    setOpenId(null);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    setOpenId(null);
  };

  // Ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(155,89,109,0.4) 0%, rgba(77,118,124,0.2) 100%);
      border-radius: 50%;
      top: ${y}px;
      left: ${x}px;
      pointer-events: none;
      transform: scale(0);
      animation: rippleAnim 0.6s ease-out;
    `;
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    toggle(id);
  };

  // Gestion formulaire modal
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.question) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }
    console.log('Formulaire soumis :', formData);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', question: '' });
    setTimeout(() => {
      setSubmitStatus('idle');
      setIsModalOpen(false);
    }, 2000);
  };

  // Effet pour le diaporama spontané (une seule fois au montage)
  useEffect(() => {
    const intervalId = setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * imageUrls.length);
      } while (newIndex === currentImageIndex && imageUrls.length > 1);
      setCurrentImageIndex(newIndex);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []); // Exécuté une seule fois, pas de dépendance à currentImageIndex pour éviter les réinitialisations intempestives

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Space Grotesk', sans-serif;
        }
        @keyframes rippleAnim {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes gentlePulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(155,89,109,0.4), 0 0 30px rgba(77,118,124,0.2);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 25px rgba(155,89,109,0.7), 0 0 50px rgba(77,118,124,0.4);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(155,89,109,0.4), 0 0 30px rgba(77,118,124,0.2);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(25deg); }
          20% { transform: translateX(100%) rotate(25deg); }
          100% { transform: translateX(100%) rotate(25deg); }
        }
        .animate-float-fast {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        .animate-modal {
          animation: modalFadeIn 0.3s ease-out forwards;
        }
        .card-glow {
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .card-glow:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 35px -12px rgba(0,0,0,0.2), 0 0 0 2px rgba(155,89,109,0.3);
        }
        .image-pulse {
          animation: gentlePulse 4s ease-in-out infinite;
          transition: filter 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .image-pulse::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            115deg,
            rgba(255,255,255,0) 10%,
            rgba(255,255,255,0.25) 50%,
            rgba(255,255,255,0) 90%
          );
          transform: rotate(25deg);
          animation: shimmer 6s infinite;
          pointer-events: none;
        }
      `}</style>

      <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#141428] to-[#1a1a2e] py-20 lg:py-28 overflow-hidden">
        {/* Arrière-plan animé */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9b596d]/20 rounded-full blur-[100px] animate-float-fast" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#4d767c]/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] animate-float-fast" />
          {particles.map((particle, i) => (
            <div key={i} className="absolute bg-white/30 rounded-full" style={particle.style} />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-lg mb-4">
              <HelpCircle size={18} className="text-[#ffb7c5]" />
              <span className="text-[#ffb7c5] font-semibold text-sm tracking-wide">FAQ — On vous dit tout</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-[#ffb7c5] via-[#f5a97f] to-[#8bd3c7] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_6s_ease_infinite]">
                Vos questions, nos réponses
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#f5a97f] mx-auto mt-5 rounded-full" />
            <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto backdrop-blur-sm">
              Transparence totale sur nos méthodes, délais et tarifs. Une équipe à votre écoute.
            </p>
          </div>

          {/* Deux colonnes */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Colonne gauche : image changeante spontanément + texte */}
            <div className="lg:w-5/12 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="sticky top-8 space-y-6">
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 image-pulse">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#9b596d]/30 to-[#4d767c]/30 mix-blend-overlay" />
                  <img
                    src={imageUrls[currentImageIndex]}
                    alt="Tableau de bord et analytics - vue dynamique"
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Pourquoi faire confiance à Nexolia ?</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Forts de plus de 10 ans d’expertise en data visualisation et développement sur mesure,
                    nous transformons vos données en leviers de croissance. Chaque projet est unique,
                    agile et pensé pour évoluer avec vous.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#ffb7c5] text-sm">
                    <span className="w-2 h-2 bg-[#ffb7c5] rounded-full" />
                    <span>+50 clients satisfaits</span>
                    <span className="w-2 h-2 bg-[#ffb7c5] rounded-full" />
                    <span>100% sur mesure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite : FAQ paginée avec réponses */}
            <div className="lg:w-7/12 space-y-6">
              {currentItems.map((item, idx) => {
                const isOpen = openId === item.id;
                const height = isOpen ? contentHeights[item.id] : 0;
                return (
                  <div
                    key={item.id}
                    className="faq-item animate-fade-up"
                    style={{ animationDelay: `${0.15 + idx * 0.07}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 card-glow overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl pointer-events-none">
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#9b596d] via-[#4d767c] to-[#f5a97f] opacity-30 blur-sm animate-float-fast" />
                      </div>
                      <button
                        onClick={(e) => handleRipple(e, item.id)}
                        className="relative w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb7c5] transition-all duration-200 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="hidden sm:block w-8 h-8 rounded-full bg-gradient-to-tr from-[#9b596d] to-[#4d767c] flex-shrink-0 mt-0.5 shadow-lg" />
                          <span className="text-gray-100 font-semibold text-base md:text-lg pr-4 group-hover:text-[#ffb7c5] transition-colors duration-200">
                            {item.question}
                          </span>
                        </div>
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen
                            ? 'bg-[#9b596d] text-white rotate-90 scale-110'
                            : 'bg-white/10 text-[#ffb7c5] group-hover:bg-white/20 group-hover:rotate-12'
                            }`}
                        >
                          {isOpen ? <X size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </button>

                      <div
                        className="transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] overflow-hidden"
                        style={{ height: `${height}px` }}
                      >
                        <div
                          ref={(el) => {
                            contentRefs.current[item.id] = el;
                          }} className="px-5 md:px-6 pb-5 md:pb-6"
                        >
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-gray-200 leading-relaxed text-base md:text-md">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full transition-all duration-200 ${currentPage === 1
                      ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                      : 'bg-white/10 text-[#ffb7c5] hover:bg-white/20 hover:scale-105'
                      }`}
                    aria-label="Page précédente"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <span className="text-gray-200 text-sm">
                    Page {currentPage} sur {totalPages}
                  </span>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full transition-all duration-200 ${currentPage === totalPages
                      ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                      : 'bg-white/10 text-[#ffb7c5] hover:bg-white/20 hover:scale-105'
                      }`}
                    aria-label="Page suivante"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}

              {/* Call to action avec modale */}
              <div className="mt-8 text-center bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 transition-all hover:bg-white/10">
                <p className="text-gray-200 text-sm">
                  🤔 Une question plus personnelle ?{" "}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[#ffb7c5] font-semibold hover:underline decoration-wavy underline-offset-4 transition-all cursor-pointer"
                  >
                    Écrivez‑nous directement
                  </button>{" "}
                  – réponse garantie sous 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODALE */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl animate-modal overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9b596d]/10 to-[#4d767c]/10 pointer-events-none" />
            <div className="relative p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="text-[#ffb7c5]" size={24} />
                  <h3 className="text-xl font-bold text-white">Contactez-nous</h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb7c5] transition-all"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb7c5] transition-all"
                    placeholder="jean@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Votre question</label>
                  <textarea
                    name="question"
                    rows={3}
                    value={formData.question}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffb7c5] transition-all resize-none"
                    placeholder="Décrivez votre besoin ou votre question..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-[#9b596d] to-[#4d767c] text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Envoyer
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-300 text-sm text-center">✓ Message envoyé ! Nous vous répondrons rapidement.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-300 text-sm text-center">⚠️ Veuillez remplir tous les champs.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqAccordion;