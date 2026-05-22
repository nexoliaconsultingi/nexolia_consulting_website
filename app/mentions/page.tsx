// components/LegalNotice.js
import React from 'react';

const LegalNotice = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-4 border-blue-600">
        Mentions Légales
      </h1>
      
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">1. Édition du site</h2>
          <div className="text-gray-700 space-y-2">
            <p><span className="font-semibold">Nexolia Consulting</span></p>
            <p>Société par Actions Simplifiée au capital de XXXX euros</p>
            <p>RCS Paris : XXX XXX XXX</p>
            <p>N° TVA Intracommunautaire : FRXXXXXXXXX</p>
            <p>Siège social : [Adresse complète]</p>
            <p>Téléphone : <a href="tel:+33XXXXXXXXX" className="text-blue-600 hover:underline">+33 X XX XX XX XX</a></p>
            <p>Email : <a href="mailto:contact@nexolia-consulting.fr" className="text-blue-600 hover:underline">contact@nexolia-consulting.fr</a></p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">2. Directeur de la publication</h2>
          <p className="text-gray-700">[Nom du Directeur] - Président de Nexolia Consulting</p>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">3. Hébergement</h2>
          <div className="text-gray-700 space-y-1">
            <p>[Nom de l'hébergeur]</p>
            <p>[Adresse de l'hébergeur]</p>
            <p>Téléphone : [Téléphone hébergeur]</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-700">
            L'ensemble des éléments composant ce site (textes, images, logos, etc.) 
            sont la propriété exclusive de Nexolia Consulting. Toute reproduction, 
            distribution ou utilisation sans autorisation est interdite.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice;