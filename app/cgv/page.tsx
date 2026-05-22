// components/TermsOfService.js
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-blue-600">
        Conditions Générales de Vente
      </h1>
      
      <div className="space-y-6">
        <section className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">1. Objet</h2>
          <p className="text-gray-700 leading-relaxed">
            Les présentes Conditions Générales de Vente régissent les relations 
            contractuelles entre Nexolia Consulting et ses clients dans le cadre 
            des prestations de conseil et services proposés.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">2. Prestations</h2>
          <p className="text-gray-700">
            Nexolia Consulting propose des services de conseil en stratégie 
            d'entreprise, transformation digitale, optimisation des processus 
            et accompagnement managérial.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">3. Devis et commandes</h2>
          <p className="text-gray-700">
            Toute commande est précédée d'un devis personnalisé. La commande 
            devient définitive après acceptation du devis par le client et 
            versement d'un acompte selon les modalités définies.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Tarifs et modalités de paiement</h2>
          <p className="text-gray-700">
            Les prix sont indiqués hors taxes. Les paiements sont effectués selon 
            les échéances prévues dans le devis, par virement bancaire ou chèque. 
            Tout retard de paiement peut entraîner des pénalités.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Durée de la mission</h2>
          <p className="text-gray-700">
            La durée des prestations est définie dans le devis. En cas de 
            modification, un avenant sera établi d'un commun accord.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">6. Responsabilité</h2>
          <p className="text-gray-700">
            Nexolia Consulting s'engage à fournir ses services avec diligence 
            et compétence. La responsabilité du consultant ne saurait être 
            engagée pour des décisions opérationnelles prises par le client.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;