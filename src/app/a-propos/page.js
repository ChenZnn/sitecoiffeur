"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function APropos() {
  // Données de l'équipe
  const equipe = [
    {
      id: 1,
      nom: "Sabrina",
      poste: "Fondatrice & Coiffure mixte",
      bio: "Avec plus de 15 ans d&apos;expérience, Sophie a travaillé dans les plus grands salons parisiens avant de créer son propre établissement. Spécialiste des coupes tendances et des colorations naturelles.",
      image: "/images/equipe/sophie.jpg",
    },
    {
      id: 2,
      nom: "Gwen",
      poste: "Coiffeuse miste et barbière",
      bio: "Passionné par les techniques de coloration innovantes, Thomas apporte sa créativité et son expertise technique pour des résultats époustouflants.",
      image: "/images/equipe/thomas.jpg",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* En-tête de page */}
      <header className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            À propos de nous
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez notre histoire, notre équipe et notre philosophie.
          </p>
        </div>
      </header>

      {/* Notre histoire */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondé en 2015 par Sophie Martin, notre salon est né d&apos;une
                passion pour l&apos;art capillaire et d&apos;une vision : créer un espace
                où chaque client se sent unique et ressort transformé, non
                seulement par sa coiffure, mais aussi par l&apos;expérience vécue.
              </p>
              <p className="text-gray-600 mb-4">
                Après des années d&apos;expérience dans les plus grands salons
                parisiens, Sophie a voulu créer un lieu qui allie expertise
                technique, créativité artistique et atmosphère chaleureuse.
              </p>
              <p className="text-gray-600">
                Aujourd&apos;hui, notre équipe s&apos;est agrandie avec des professionnels
                partageant les mêmes valeurs d&apos;excellence et de bienveillance,
                faisant de notre salon une référence dans la région.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/salon-interieur.png"
                alt="Intérieur du salon"
                className="object-cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre philosophie */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Notre Philosophie</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6 text-lg">
              Chez nous, chaque coupe est une œuvre d&apos;art personnalisée. Nous
              croyons que la beauté est unique à chaque personne, et notre
              mission est de la révéler à travers nos services.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Nous nous engageons à utiliser des produits respectueux de
              l&apos;environnement et à adopter des pratiques durables dans notre
              salon. Votre beauté ne devrait jamais se faire au détriment de
              notre planète.
            </p>
            <p className="text-gray-600 text-lg">
              Plus qu&apos;un salon de coiffure, nous sommes un lieu de bien-être où
              vous pouvez vous détendre, vous ressourcer et repartir avec
              confiance et style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Créativité</h3>
              <p className="text-gray-600">
                Nous repoussons les limites de la créativité pour vous offrir
                des styles uniques et personnalisés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à offrir un service d&apos;exception et des
                résultats qui dépassent vos attentes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bienveillance</h3>
              <p className="text-gray-600">
                Nous prenons soin de vous dans une ambiance chaleureuse où votre
                confort est notre priorité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membre) => (
              <div
                key={membre.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-80 overflow-hidden relative">
                  <Image
                    src={membre.image}
                    alt={membre.nom}
                    className="object-cover"
                    layout="fill"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{membre.nom}</h3>
                  <p className="text-gray-500 mb-3">{membre.poste}</p>
                  <p className="text-gray-600">{membre.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rejoignez-nous */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Envie de vivre l&apos;expérience ?
          </h2>
          <p className="text-xl mb-8">
            Prenez rendez-vous dès aujourd&apos;hui et découvrez par vous-même ce qui
            fait notre différence.
          </p>
          <a
            href="/rendez-vous"
            className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-full text-lg font-semibold inline-block transition-colors duration-300"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </div>
  );
}
