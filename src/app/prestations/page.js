"use client";
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Prestations() {
  // Données des prestations par catégorie
  const categories = [
    {
      id: 1,
      nom: "Coupes & Coiffages",
      prestations: [
        { id: 1, nom: "Coupe Femme", description: "Coupe, brushing et conseils personnalisés", prix: "35€ - 45€" },
        { id: 2, nom: "Coupe Homme", description: "Coupe tendance et finition soignée", prix: "25€ - 35€" },
        { id: 3, nom: "Coupe Enfant (- 12 ans)", description: "Coupe adaptée aux plus jeunes", prix: "20€" },
        { id: 4, nom: "Brushing", description: "Mise en forme et brushing", prix: "25€ - 35€" },
        { id: 5, nom: "Coiffure événementielle", description: "Coiffure pour mariage, soirée ou événement spécial", prix: "à partir de 60€" }
      ]
    },
    {
      id: 2,
      nom: "Colorations",
      prestations: [
        { id: 1, nom: "Coloration racines", description: "Retouche des racines", prix: "45€" },
        { id: 2, nom: "Coloration complète", description: "Coloration sur l'ensemble de la chevelure", prix: "55€ - 75€" },
        { id: 3, nom: "Balayage / Mèches", description: "Technique pour éclaircir ou foncer certaines mèches", prix: "65€ - 95€" },
        { id: 4, nom: "Ombré Hair / Tie and Dye", description: "Dégradé de couleur des racines aux pointes", prix: "85€ - 120€" },
        { id: 5, nom: "Couleur fantaisie", description: "Couleurs vives et originales", prix: "sur devis" }
      ]
    },
    {
      id: 3,
      nom: "Soins & Traitements",
      prestations: [
        { id: 1, nom: "Soin profond", description: "Traitement nourrissant en profondeur", prix: "25€" },
        { id: 2, nom: "Masque spécifique", description: "Masque adapté à votre type de cheveux", prix: "20€" },
        { id: 3, nom: "Traitement anti-chute", description: "Soin fortifiant pour cheveux fragilisés", prix: "35€" },
        { id: 4, nom: "Soin lissant", description: "Traitement pour discipliner les cheveux", prix: "40€ - 60€" }
      ]
    }
  ];

  // Exemples avant/après
  const avantApres = [
    {
      id: 1,
      titre: "Transformation complète",
      description: "Coupe courte et coloration blonde",
      avant: "/images/avant-1.jpg",
      apres: "/images/apres-1.jpg"
    },
    {
      id: 2,
      titre: "Balayage naturel",
      description: "Éclaircissement subtil pour un effet soleil",
      avant: "/images/avant-2.jpg",
      apres: "/images/apres-2.jpg"
    },
    {
      id: 3,
      titre: "Coupe tendance",
      description: "Rafraîchissement et modernisation du style",
      avant: "/images/avant-3.jpg",
      apres: "/images/apres-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prestations et Tarifs</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">D&eacute;couvrez notre gamme compl&egrave;te de services et nos tarifs transparents pour sublimer votre beaut&eacute;.</p>
        </div>
      </header>

      {/* Liste des prestations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {categories.map((categorie) => (
            <div key={categorie.id} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200">{categorie.nom}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorie.prestations.map((prestation) => (
                  <div key={prestation.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{prestation.nom}</h3>
                        <p className="text-gray-600 mb-2">{prestation.description}</p>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{prestation.prix}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photos avant/après */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Avant / Apr&egrave;s</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">D&eacute;couvrez quelques-unes de nos transformations les plus spectaculaires. Nos coiffeurs experts peuvent vous aider &agrave; obtenir le look que vous d&eacute;sirez.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {avantApres.map((exemple) => (
              <div key={exemple.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">Avant</div>
                    <img 
                      src={exemple.avant} 
                      alt={`Avant - ${exemple.titre}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">Apr&egrave;s</div>
                    <img 
                      src={exemple.apres} 
                      alt={`Apr&egrave;s - ${exemple.titre}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{exemple.titre}</h3>
                  <p className="text-gray-600">{exemple.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Prendre rendez-vous */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Envie d&apos;un nouveau look ?</h2>
          <p className="text-xl mb-8">Prenez rendez-vous d&egrave;s maintenant et laissez nos experts s&apos;occuper de vous.</p>
          <Link href="/rendez-vous" className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-full text-lg font-semibold inline-block transition-colors duration-300">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
}