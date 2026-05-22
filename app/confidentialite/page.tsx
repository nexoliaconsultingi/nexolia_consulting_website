// components/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-blue-600">
        Politique de Confidentialité
      </h1>
      
      <div className="space-y-6">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            1. Collecte des données personnelles
          </h2>
          <p className="text-gray-700 mb-3">Nexolia Consulting collecte les données personnelles suivantes :</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Nom et prénom</li>
            <li>Adresse email professionnelle</li>
            <li>Numéro de téléphone</li>
            <li>Nom de l'entreprise</li>
            <li>Poste occupé</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            2. Utilisation des données
          </h2>
          <p className="text-gray-700">
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
            <li>Répondre à vos demandes de contact</li>
            <li>Vous envoyer nos offres et newsletters (avec votre consentement)</li>
            <li>Améliorer nos services</li>
            <li>Gérer la relation client</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            3. Base légale du traitement
          </h2>
          <p className="text-gray-700">
            Le traitement de vos données repose sur : votre consentement, 
            l'exécution de mesures précontractuelles, ou notre intérêt légitime.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            4. Cookies
          </h2>
          <p className="text-gray-700">
            Notre site utilise des cookies analytiques pour améliorer votre 
            expérience. Vous pouvez paramétrer vos préférences via le bandeau 
            cookies.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            5. Durée de conservation
          </h2>
          <p className="text-gray-700">
            Vos données sont conservées 3 ans à compter du dernier contact 
            pour les prospects, et pendant toute la durée de la relation 
            contractuelle pour les clients.
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            6. Vos droits (RGPD)
          </h2>
          <p className="text-gray-700 mb-3">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Droit d'accès</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Droit de rectification</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Droit à l'effacement</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Droit à la portabilité</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Pour exercer vos droits :</span><br />
              <a href="mailto:dpo@nexolia-consulting.fr" className="text-blue-600 hover:underline font-medium">
                dpo@nexolia-consulting.fr
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;