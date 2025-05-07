"use client";
import Navbar from '../components/Navbar';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentions Légales</h1>
        </div>
      </header>

      {/* Contenu des mentions légales */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">1. Informations légales</h2>
          
          <p className="mb-4">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Informations légales :</h3>
          
          <p className="mb-2">
            <strong>Statut du propriétaire :</strong> Société
          </p>
          <p className="mb-2">
            <strong>Dénomination sociale :</strong> Salon de Coiffure
          </p>
          <p className="mb-2">
            <strong>Adresse :</strong> 123 Avenue des Coiffeurs, 75000 Paris
          </p>
          <p className="mb-2">
            <strong>SIRET :</strong> 123 456 789 00012
          </p>
          <p className="mb-2">
            <strong>Capital social :</strong> 10 000 €
          </p>
          <p className="mb-2">
            <strong>Numéro de téléphone :</strong> 01 23 45 67 89
          </p>
          <p className="mb-2">
            <strong>Email :</strong> contact@votresalon.fr
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Directeur de la publication :</h3>
          
          <p className="mb-2">
            <strong>Nom :</strong> [Nom du directeur de publication]
          </p>
          <p className="mb-2">
            <strong>Email :</strong> direction@votresalon.fr
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Hébergeur du site :</h3>
          
          <p className="mb-2">
            <strong>Société :</strong> [Nom de l'hébergeur]
          </p>
          <p className="mb-2">
            <strong>Adresse :</strong> [Adresse de l'hébergeur]
          </p>
          <p className="mb-2">
            <strong>Site web :</strong> [Site web de l'hébergeur]
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">2. Présentation et principe</h2>
          
          <p className="mb-4">
            Est désigné ci-après : <strong>Utilisateur</strong>, tout internaute se connectant et utilisant le site susnommé.
          </p>
          <p className="mb-4">
            Le site <strong>Salon de Coiffure</strong> regroupe un ensemble de services, dans l'état, mis à la disposition des utilisateurs. Il est précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu'envers le webmaster du site. Le site est mis à jour régulièrement par le propriétaire du site.
          </p>
          <p className="mb-4">
            Le propriétaire s'efforce de fournir sur le site des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées sur son site, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">3. Accessibilité</h2>
          
          <p className="mb-4">
            Le site est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au service, le site s'engage à faire son maximum afin de rétablir l'accès au service et s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention. N'étant soumis qu'à une obligation de moyen, le site ne saurait être tenu pour responsable de tout dommage, quelle qu'en soit la nature, résultant d'une indisponibilité du service.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">4. Propriété intellectuelle</h2>
          
          <p className="mb-4">
            Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels, etc.
          </p>
          <p className="mb-4">
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable du propriétaire du site.
          </p>
          <p className="mb-4">
            Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">5. Liens hypertextes et cookies</h2>
          
          <p className="mb-4">
            Le site contient un certain nombre de liens hypertextes vers d'autres sites, mis en place avec l'autorisation du propriétaire du site. Cependant, le propriétaire du site n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
          </p>
          <p className="mb-4">
            La navigation sur le site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
          </p>
          <p className="mb-4">
            Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur pour refuser l'installation des cookies.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">6. Protection des données personnelles</h2>
          
          <p className="mb-4">
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et le Règlement Européen 2016/679 du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (RGPD).
          </p>
          <p className="mb-4">
            À l'occasion de l'utilisation du site, peuvent être recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
          </p>
          <p className="mb-4">
            En tout état de cause le propriétaire du site ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site l'obligation ou non de fournir ces informations.
          </p>
          <p className="mb-4">
            Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
          </p>
          <p className="mb-4">
            Aucune information personnelle de l'utilisateur du site n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">7. Droit applicable et juridiction compétente</h2>
          
          <p className="mb-4">
            Les présentes conditions du site sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">8. Contactez-nous</h2>
          
          <p className="mb-4">
            Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui-même, vous pouvez laisser un message à l'adresse suivante : contact@votresalon.fr.
          </p>
        </div>
      </section>
    </div>
  );
}