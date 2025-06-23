"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function Galerie() {
  // Catégories pour les filtres
  const categories = ["Tous", "Femmes", "Hommes", "Enfants", "Colorations", "Événements"];
  
  // État pour le filtre actif
  const [filtreActif, setFiltreActif] = useState("Tous");
  
  // Données des photos de la galerie
  const photos = [
    {
      id: 1,
      src: "/images/galerie/femme-1.jpg",
      alt: "Coupe femme moderne",
      categories: ["Femmes"],
      titre: "Coupe dégradée",
    },
    {
      id: 2,
      src: "/images/galerie/homme-1.jpg",
      alt: "Coupe homme tendance",
      categories: ["Hommes"],
      titre: "Undercut stylé",
    },
    {
      id: 3,
      src: "/images/galerie/coloration-1.jpg",
      alt: "Coloration blonde",
      categories: ["Femmes", "Colorations"],
      titre: "Blond californien",
    },
    {
      id: 4,
      src: "/images/galerie/enfant-1.jpg",
      alt: "Coupe enfant",
      categories: ["Enfants"],
      titre: "Coupe junior",
    },
    {
      id: 5,
      src: "/images/galerie/femme-2.jpg",
      alt: "Coiffure de mariage",
      categories: ["Femmes", "Événements"],
      titre: "Chignon de mariage",
    },
    {
      id: 6,
      src: "/images/galerie/homme-2.jpg",
      alt: "Barbe taillée",
      categories: ["Hommes"],
      titre: "Barbe sculptée",
    },
    {
      id: 7,
      src: "/images/galerie/coloration-2.jpg",
      alt: "Coloration rouge",
      categories: ["Femmes", "Colorations"],
      titre: "Rouge passion",
    },
    {
      id: 8,
      src: "/images/galerie/enfant-2.jpg",
      alt: "Coupe garçon",
      categories: ["Enfants"],
      titre: "Coupe garçon tendance",
    },
    {
      id: 9,
      src: "/images/galerie/femme-3.jpg",
      alt: "Coupe courte femme",
      categories: ["Femmes"],
      titre: "Pixie cut",
    },
    {
      id: 10,
      src: "/images/galerie/homme-3.jpg",
      alt: "Coupe homme classique",
      categories: ["Hommes"],
      titre: "Coupe classique revisitée",
    },
    {
      id: 11,
      src: "/images/galerie/coloration-3.jpg",
      alt: "Balayage naturel",
      categories: ["Femmes", "Colorations"],
      titre: "Balayage naturel",
    },
    {
      id: 12,
      src: "/images/galerie/evenement-1.jpg",
      alt: "Coiffure soirée",
      categories: ["Femmes", "Événements"],
      titre: "Coiffure de gala",
    },
  ];

  // Filtrer les photos selon la catégorie sélectionnée
  const photosFiltrees = filtreActif === "Tous" 
    ? photos 
    : photos.filter(photo => photo.categories.includes(filtreActif));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre Galerie</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez nos plus belles réalisations et laissez-vous inspirer pour votre prochaine visite.
          </p>
        </div>
      </header>

      {/* Filtres */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((categorie) => (
              <button
                key={categorie}
                onClick={() => setFiltreActif(categorie)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                  filtreActif === categorie
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {categorie}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie de photos */}
      <section className="py-8 px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photosFiltrees.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">{photo.titre}</h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {photo.categories.map((cat) => (
                      <span key={cat} className="text-xs bg-white/30 text-white px-2 py-1 rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message si aucune photo ne correspond au filtre */}
          {photosFiltrees.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucune photo ne correspond à ce filtre.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}