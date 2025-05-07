"use client";
import Navbar from '../components/Navbar';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Politique de Confidentialité</h1>
        </div>
      </header>

      {/* Contenu de la politique de confidentialité */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          
          <h2 className="text-2xl font-bold mb-6">Introduction</h2>
          
          <p className="mb-4">
            Chez Salon de Coiffure, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe de la manière dont nous recueillons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
          </p>
          <p className="mb-4">
            En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans la présente politique de confidentialité. Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications prendront effet dès leur publication sur notre site.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">1. Collecte des données personnelles</h2>
          
          <p className="mb-4">
            Nous collectons les données personnelles suivantes :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Informations d'identification (nom, prénom)</li>
            <li>Coordonnées (adresse e-mail, numéro de téléphone)</li>
            <li>Informations relatives aux rendez-vous (date, heure, service demandé)</li>
            <li>Historique des services utilisés</li>
            <li>Données de navigation sur notre site web (cookies, adresse IP)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">2. Méthodes de collecte</h2>
          
          <p className="mb-4">
            Nous collectons vos données personnelles par les moyens suivants :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Formulaires de contact et de prise de rendez-vous sur notre site web</li>
            <li>Communications par e-mail, téléphone ou en personne</li>
            <li>Cookies et technologies similaires lors de votre navigation sur notre site</li>
            <li>Informations fournies lors de votre visite dans notre salon</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">3. Finalités du traitement</h2>
          
          <p className="mb-4">
            Nous utilisons vos données personnelles aux fins suivantes :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Gestion des rendez-vous et des services</li>
            <li>Communication avec vous concernant nos services</li>
            <li>Amélioration de notre site web et de nos services</li>
            <li>Envoi d'informations promotionnelles (avec votre consentement)</li>
            <li>Respect de nos obligations légales et réglementaires</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">4. Base légale du traitement</h2>
          
          <p className="mb-4">
            Le traitement de vos données personnelles est fondé sur les bases légales suivantes :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li><strong>Exécution d'un contrat :</strong> Traitement nécessaire à l'exécution de nos services</li>
            <li><strong>Consentement :</strong> Lorsque vous nous donnez explicitement votre accord pour traiter vos données</li>
            <li><strong>Intérêt légitime :</strong> Lorsque le traitement est nécessaire aux fins de nos intérêts légitimes</li>
            <li><strong>Obligation légale :</strong> Lorsque le traitement est nécessaire pour respecter une obligation légale</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">5. Conservation des données</h2>
          
          <p className="mb-4">
            Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si la loi exige ou permet une période de conservation plus longue.
          </p>
          <p className="mb-4">
            Les données relatives aux rendez-vous sont conservées pendant 3 ans à compter de votre dernier rendez-vous. Les données de facturation sont conservées pendant 10 ans conformément aux obligations légales.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">6. Partage des données personnelles</h2>
          
          <p className="mb-4">
            Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos données avec :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Notre personnel autorisé</li>
            <li>Des prestataires de services (hébergement web, système de réservation, etc.)</li>
            <li>Des autorités publiques lorsque la loi l'exige</li>
          </ul>
          <p className="mb-4">
            Tous nos prestataires de services sont tenus de respecter la confidentialité et la sécurité de vos données personnelles.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">7. Cookies et technologies similaires</h2>
          
          <p className="mb-4">
            Notre site web utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Assurer le bon fonctionnement du site</li>
            <li>Mémoriser vos préférences</li>
            <li>Analyser l'utilisation du site pour l'améliorer</li>
          </ul>
          <p className="mb-4">
            Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies sont désactivés.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">8. Vos droits</h2>
          
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet</li>
            <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes ou incomplètes</li>
            <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données dans certaines circonstances</li>
            <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander la limitation du traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données à un tiers</li>
            <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données dans certaines circonstances</li>
            <li><strong>Droit de retirer votre consentement :</strong> Vous pouvez retirer votre consentement à tout moment</li>
          </ul>
          <p className="mb-4">
            Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : contact@votresalon.fr
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">9. Sécurité des données</h2>
          
          <p className="mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération et la destruction.
          </p>
          <p className="mb-4">
            Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">10. Transferts internationaux de données</h2>
          
          <p className="mb-4">
            Nous ne transférons pas vos données personnelles en dehors de l'Espace Économique Européen (EEE), sauf si des mesures de protection adéquates sont en place conformément à la législation applicable.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">11. Protection des mineurs</h2>
          
          <p className="mb-4">
            Notre site web et nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas sciemment des données personnelles concernant des enfants de moins de 16 ans. Si vous êtes un parent ou un tuteur et que vous pensez que votre enfant nous a fourni des données personnelles, veuillez nous contacter.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">12. Modifications de la politique de confidentialité</h2>
          
          <p className="mb-4">
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version la plus récente sera toujours disponible sur notre site web avec la date de la dernière mise à jour.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">13. Nous contacter</h2>
          
          <p className="mb-4">
            Si vous avez des questions concernant cette politique de confidentialité ou la manière dont nous traitons vos données personnelles, veuillez nous contacter :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Par email : contact@votresalon.fr</li>
            <li>Par téléphone : 01 23 45 67 89</li>
            <li>Par courrier : Salon de Coiffure, 123 Avenue des Coiffeurs, 75000 Paris</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">14. Droit de réclamation</h2>
          
          <p className="mb-4">
            Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
          </p>
          <p className="mb-4">
            CNIL<br />
            3 Place de Fontenoy<br />
            TSA 80715<br />
            75334 PARIS CEDEX 07<br />
            Tél : 01 53 73 22 22<br />
            Site web : <a href="https://www.cnil.fr" className="text-blue-600 hover:underline">www.cnil.fr</a>
          </p>
        </div>
      </section>
    </div>
  );
}