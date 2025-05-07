"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  // Exemple de données pour les services (à remplacer par vos services réels)
  const services = [
    {
      id: 1,
      nom: "Coupe Femme",
      description: "Coupe, brushing et conseils personnalisés",
      prix: "À partir de 35€",
      image: "/images/coupe-femme.jpg"
    },
    {
      id: 2,
      nom: "Coupe Homme",
      description: "Coupe tendance et finition soignée",
      prix: "À partir de 25€",
      image: "/images/coupe-homme.jpg"
    },
    {
      id: 3,
      nom: "Coloration",
      description: "Coloration professionnelle adaptée à vos envies",
      prix: "À partir de 45€",
      image: "/images/coloration.jpg"
    }
  ];

  // Exemple d'avis clients (à remplacer par vos avis réels)
  const avis = [
    {
      id: 1,
      nom: "Sophie L.",
      commentaire: "Service impeccable, je suis ravie de ma nouvelle coupe !",
      note: 5
    },
    {
      id: 2,
      nom: "Thomas M.",
      commentaire: "Équipe professionnelle et à l'écoute. Je recommande !",
      note: 5
    },
    {
      id: 3,
      nom: "Julie D.",
      commentaire: "Très satisfaite de ma coloration, le résultat est parfait.",
      note: 4
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Bannière avec slogan */}
      <section className="relative h-[70vh] bg-gray-800">
        <div className="absolute inset-0">
          <img 
            src="/images/salon-banner.jpg" 
            alt="Salon de coiffure" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Votre Salon de Coiffure</h1>
          <p className="text-xl md:text-2xl text-white mb-8">L'art de sublimer votre beauté naturelle</p>
          <Link href="/rendez-vous" className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300">
            Prendre rendez-vous
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.nom} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.nom}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="font-medium">{service.prix}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white py-2 px-6 rounded-full text-lg font-medium transition-colors duration-300">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce que nos clients disent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avis.map((avis) => (
              <div key={avis.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < avis.note ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3">"{avis.commentaire}"</p>
                <p className="font-medium">{avis.nom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Prendre rendez-vous */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt(e) pour un nouveau look ?</h2>
          <p className="text-xl mb-8">Prenez rendez-vous dès maintenant et laissez-nous sublimer votre beauté.</p>
          <Link href="/rendez-vous" className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-full text-lg font-semibold inline-block transition-colors duration-300">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
}