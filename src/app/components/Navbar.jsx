"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le défilement et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl text-gray-800 hover:text-gray-600 transition-colors duration-300">
                Salon de Coiffure
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                Accueil
              </Link>
              <Link href="/prestations" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                Services
              </Link>
              <Link href="/galerie" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                Galerie
              </Link>
              <Link href="/a-propos" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                À propos
              </Link>
              <Link href="/contact" className="border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/rendez-vous" className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Prendre rendez-vous
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden transition-all duration-300 ease-in-out`}>
        <div className="pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg rounded-b-lg">
          <Link href="/" className="border-l-4 border-gray-800 text-gray-700 block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-200">
            Accueil
          </Link>
          <Link href="/prestations" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-l-4 hover:border-gray-800 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium transition-all duration-200">
            Services
          </Link>
          <Link href="/galerie" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-l-4 hover:border-gray-800 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium transition-all duration-200">
            Galerie
          </Link>
          <Link href="/a-propos" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-l-4 hover:border-gray-800 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium transition-all duration-200">
            À propos
          </Link>
          <Link href="/contact" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-l-4 hover:border-gray-800 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium transition-all duration-200">
            Contact
          </Link>
          <Link href="/rendez-vous" className="block w-full text-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-4 mx-2 mb-2">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </nav>
  );
}