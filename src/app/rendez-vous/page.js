"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function RendezVous() {
  // États pour le formulaire
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Liste des services disponibles
  const services = [
    "Coupe Femme",
    "Coupe Homme",
    "Coupe Enfant",
    "Coloration",
    "Balayage / Mèches",
    "Coiffure événementielle",
    "Soin capillaire",
    "Autre"
  ];

  // Heures disponibles
  const heuresDisponibles = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire (à remplacer par votre logique d'envoi réelle)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Réinitialisation du formulaire après soumission réussie
      setNom('');
      setPrenom('');
      setEmail('');
      setTelephone('');
      setService('');
      setDate('');
      setHeure('');
      setMessage('');
      
      // Effacer le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  // Obtenir la date minimale (aujourd'hui)
  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    
    // Ajouter un zéro devant les mois et jours < 10
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    
    return `${year}-${month}-${day}`;
  };

  // Obtenir la date maximale (3 mois à partir d'aujourd'hui)
  const getMaxDate = () => {
    const today = new Date();
    const threeMonthsLater = new Date(today);
    threeMonthsLater.setMonth(today.getMonth() + 3);
    
    const year = threeMonthsLater.getFullYear();
    let month = threeMonthsLater.getMonth() + 1;
    let day = threeMonthsLater.getDate();
    
    // Ajouter un zéro devant les mois et jours < 10
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Prendre Rendez-vous</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            R&eacute;servez votre prochain rendez-vous en quelques clics et laissez-nous prendre soin de vous.
          </p>
        </div>
      </header>

      {/* Options de réservation */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">R&eacute;servation en ligne</h2>
              <p className="text-gray-600 mb-6">
                Utilisez notre formulaire ci-dessous pour demander un rendez-vous. Nous vous confirmerons votre r&eacute;servation par email ou t&eacute;l&eacute;phone dans les plus brefs d&eacute;lais.
              </p>
              <div className="flex items-center text-gray-500 mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>R&eacute;ponse rapide</p>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>Confirmation par email</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Par t&eacute;l&eacute;phone</h2>
              <p className="text-gray-600 mb-6">
                Vous pr&eacute;f&eacute;rez nous appeler ? Contactez-nous directement par t&eacute;l&eacute;phone pour prendre rendez-vous ou poser vos questions.
              </p>
              <div className="flex items-center text-gray-800 mb-4">
                <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:0123456789" className="text-xl font-medium hover:underline">01 23 45 67 89</a>
              </div>
              <p className="text-gray-500 pl-9">Du mardi au samedi, 9h-18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Informations pratiques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Horaires d&apos;ouverture</h3>
              <p className="text-gray-600 mb-2">Mardi au vendredi : 9h - 18h</p>
              <p className="text-gray-600">Samedi : 9h - 17h</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Adresse</h3>
              <p className="text-gray-600 mb-2">123 Avenue des Coiffeurs</p>
              <p className="text-gray-600">75000 Paris</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Contact</h3>
              <p className="text-gray-600 mb-2">Tél : 01 23 45 67 89</p>
              <p className="text-gray-600">Email : contact@votresalon.fr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}