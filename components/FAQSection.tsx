import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'developpement' | 'bi' | 'automation' | 'pmo';
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Quels sont les avantages de SPFx pour nos solutions Microsoft sans coût d'hébergement supplémentaire ?",
      answer: "Avec SharePoint Framework (SPFx), nous développons des solutions métier directement intégrées dans votre environnement Microsoft 365 existant. Cela élimine les coûts d'hébergement et d'inscription supplémentaires car vos applications s'exécutent nativement sur votre infrastructure actuelle, en utilisant vos licences déjà acquises.",
      category: 'developpement'
    },
    {
      id: 2,
      question: "Comment transformez-vous notre Big Data en graphiques simples avec Power BI ?",
      answer: "Nous développons des dashboards Power BI sur mesure qui agrègent, nettoient et visualisent vos données complexes. Notre approche convertit vos indicateurs clés en graphiques intuitifs (barres, courbes, camemberts, cartes thermiques) permettant une prise de décision stratégique et corrective préventive, sans expertise technique requise.",
      category: 'bi'
    },
    {
      id: 3,
      question: "Quels types de tâches quotidiennes pouvez-vous automatiser avec des agents et workflows ?",
      answer: "Nous automatisons les tâches répétitives chronophages : traitement des emails, saisie de données, génération de rapports, approbations hiérarchiques, synchronisations inter-systèmes, notifications, et bien plus. Nos workflows sans intervention humaine réduisent les erreurs et libèrent vos équipes pour des missions à plus forte valeur ajoutée.",
      category: 'automation'
    },
    {
      id: 4,
      question: "Comment installez-vous un PMO et quel EPPM recommandez-vous ?",
      answer: "Nous déployons des solutions EPPM dynamiques (Project Online, Project for the Web, ou solutions hybrides) adaptées à votre taille. Nous centralisons la gestion des risques, ressources et tâches par projet tout en assurant l'architecture stratégique portefeuille-programme-projet avec génération automatique de rapports P&L et tableaux de bord stratégiques.",
      category: 'pmo'
    },
    {
      id: 5,
      question: "Quelle est votre expertise principale en développement web et mobile sur mesure ?",
      answer: "Notre cœur de métier est le développement d'applications web et mobiles complètes (React, Angular, Vue.js, Flutter, React Native, iOS/Android natif). Nous créons des solutions parfaitement adaptées à vos process métier, intégrables avec vos systèmes existants (ERP, CRM, bases de données) et évolutives selon votre croissance.",
      category: 'developpement'
    },
    {
      id: 6,
      question: "Comment garantissez-vous la sécurité des données dans vos dashboards Power BI ?",
      answer: "Nous implémentons les meilleures pratiques de sécurité : Row-Level Security (RLS), chiffrement des données au repos et en transit, authentification Azure AD, et conformité RGPD. Vos données sensibles restent protégées tandis que les graphiques simplifiés ne montrent que les métriques autorisées par utilisateur.",
      category: 'bi'
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'developpement', label: 'Développement' },
    { id: 'bi', label: 'Power BI & Data' },
    { id: 'automation', label: 'Automatisation' },
    { id: 'pmo', label: 'PMO & EPPM' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Questions fréquentes sur nos solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez comment Nexolia Consulting transforme vos défis métier en solutions digitales sur mesure
        </p>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Filtres catégories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-200 shadow-md'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Liste des FAQs */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
              </div>
              <svg
                className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                  openItems.includes(faq.id) ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openItems.includes(faq.id) && (
              <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                <div className="ml-12">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded-full">
                        Expertise Nexolia
                      </span>
                      <span className="text-xs text-gray-500">
                        Réponse technique certifiée
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-blue-100 mb-6">
            Notre équipe d'experts est disponible pour échanger sur vos besoins spécifiques
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Contactez nos experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;