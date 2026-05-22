// ContactSection.tsx
import React, { useState } from 'react';
import { 
  FaStar, 
  FaClock, 
  FaBolt, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaRegClock,
  FaRegCalendarCheck,
  FaMap,
  FaUsers,
  FaPaperPlane
} from 'react-icons/fa';
import { MdSend, MdEmail, MdLocationOn } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { SiGooglemaps } from 'react-icons/si';

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
  strong: string;
  bgColor: string;
}

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const stats: StatItem[] = [
    { number: "+500", label: "Clients satisfaits", icon: <FaStar className="w-full h-full" /> },
    { number: "24/7", label: "Support disponible", icon: <FaClock className="w-full h-full" /> },
    { number: "30min", label: "Temps de réponse", icon: <FaBolt className="w-full h-full" /> },
    { number: "100%", label: "Couverture nationale", icon: <FaMapMarkerAlt className="w-full h-full" /> },
  ];

  const features: FeatureItem[] = [
    { 
      icon: <FaRegClock />, 
      text: "Intervention", 
      strong: "24h/24", 
      bgColor: "bg-emerald-50" 
    },
    { 
      icon: <FaRegCalendarCheck />, 
      text: "Disponible", 
      strong: "7 jours sur 7", 
      bgColor: "bg-emerald-50" 
    },
    { 
      icon: <FaMap />, 
      text: "Couverture", 
      strong: "toutes les régions", 
      bgColor: "bg-blue-50" 
    },
    { 
      icon: <FaUsers />, 
      text: "Équipes", 
      strong: "professionnelles & réactives", 
      bgColor: "bg-purple-50" 
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 border border-blue-200/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            📍 Zone de service
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Présents partout en
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tunisie</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe intervient <span className="font-semibold text-blue-600">24h/24 et 7j/7</span> sur l'ensemble du territoire tunisien
            pour répondre à tous vos besoins de déménagement, en toute réactivité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Map Card */}
          <div className="lg:col-span-2 group">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md rounded-lg px-3 py-1.5 text-white text-sm font-medium">
                  📍 Tunisie
                </div>
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1.5 text-slate-700 text-sm font-medium shadow-lg">
                  🗺️ Vue satellite
                </div>
                <iframe
                  title="Carte Tunisie"
                  src="https://www.google.com/maps?q=36.8065,10.1815&z=7&output=embed"
                  className="w-full h-[400px] border-0 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-t border-slate-100">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>📍 Couverture nationale</span>
                  <span>🔄 Dernière mise à jour : aujourd'hui</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Section */}
            <div className="mt-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Contact rapide
                  </h4>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/21612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaWhatsapp className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-emerald-700">WhatsApp</span>
                    <span className="text-[10px] text-emerald-500">+216 XX XXX XXX</span>
                  </a>

                  {/* Téléphone */}
                  <a
                    href="tel:+21612345678"
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaPhone className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-blue-700">Téléphone</span>
                    <span className="text-[10px] text-blue-500">+216 XX XXX XXX</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@nexolia.tn"
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 hover:from-red-100 hover:to-red-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaEnvelope className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-red-700">Email</span>
                    <span className="text-[10px] text-red-500">contact@nexolia.tn</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/nexolia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaLinkedin className="w-6 h-6 text-blue-700 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-blue-700">LinkedIn</span>
                    <span className="text-[10px] text-blue-500">Nexolia</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/nexolia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaFacebook className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-indigo-700">Facebook</span>
                    <span className="text-[10px] text-indigo-500">@nexolia</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/nexolia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100/50 hover:from-pink-100 hover:to-pink-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <FaInstagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-pink-700">Instagram</span>
                    <span className="text-[10px] text-pink-500">@nexolia</span>
                  </a>
                </div>

                {/* Badge de disponibilité */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-slate-500">Disponible 24/7 pour vous répondre</span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <FaRegClock className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Disponibilité totale
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3"></div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item">
                    <div className={`w-10 h-10 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform`}>
                      <div className="w-5 h-5 text-slate-700">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="text-slate-700">
                      {feature.text} <strong className="text-slate-900">{feature.strong}</strong>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                  <span className="text-yellow-500 text-lg">⚡</span>
                  Besoin d'une intervention urgente ou d'un devis rapide ?
                </p>

                <a
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  Contactez-nous maintenant
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
                
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <span>✓ Réponse sous 30 min</span>
                  <span>✓ Devis gratuit</span>
                  <span>✓ Service premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <MdEmail className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">Newsletter</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Restez informé de toutes nos actualités
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Recevez nos offres exclusives, conseils de déménagement et 
                    nouveautés directement dans votre boîte mail.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <IoMdCheckmarkCircle className="w-4 h-4 text-emerald-400" />
                      <span>Offres exclusives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoMdCheckmarkCircle className="w-4 h-4 text-emerald-400" />
                      <span>Conseils pratiques</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoMdCheckmarkCircle className="w-4 h-4 text-emerald-400" />
                      <span>Actualités Nexolia</span>
                    </div>
                  </div>
                </div>

                {/* Right form */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Adresse email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdEmail className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre@email.com"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <span>S'abonner</span>
                      <MdSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      En vous abonnant, vous acceptez notre politique de confidentialité.
                      Vous pouvez vous désinscrire à tout moment.
                    </p>

                    {isSubscribed && (
                      <div className="fixed top-4 right-4 z-50 animate-slide-in">
                        <div className="bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                          <FaCheckCircle className="w-4 h-4" />
                          <span>Merci pour votre inscription ! 🎉</span>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;