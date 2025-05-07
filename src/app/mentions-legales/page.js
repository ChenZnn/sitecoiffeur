"use client";
import Navbar from '../components/Navbar';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentions L&eacute;gales</h1>
        </div>
      </header>

      {/* Contenu des mentions légales */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">1. Informations l&eacute;gales</h2>
          
          <p className="mb-4">
            Conform&eacute;ment aux dispositions des articles 6-III et 19 de la Loi n&deg; 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;&eacute;conomie num&eacute;rique, dite L.C.E.N., nous portons &agrave; la connaissance des utilisateurs et visiteurs du site les informations suivantes :
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Informations l&eacute;gales :</h3>
          
          <p className="mb-2">
            <strong>Statut du propri&eacute;taire :</strong> Soci&eacute;t&eacute;
          </p>
          <p className="mb-2">
            <strong>D&eacute;nomination sociale :</strong> Salon de Coiffure
          </p>
          <p className="mb-2">
            <strong>Adresse :</strong> 123 Avenue des Coiffeurs, 75000 Paris
          </p>
          <p className="mb-2">
            <strong>SIRET :</strong> 123 456 789 00012
          </p>
          <p className="mb-2">
            <strong>Capital social :</strong> 10 000 &euro;
          </p>
          <p className="mb-2">
            <strong>Num&eacute;ro de t&eacute;l&eacute;phone :</strong> 01 23 45 67 89
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
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.3 H&eacute;bergeur du site :</h3>
          
          <p className="mb-2">
            <strong>Soci&eacute;t&eacute; :</strong> [Nom de l&apos;h&eacute;bergeur]
          </p>
          <p className="mb-2">
            <strong>Adresse :</strong> [Adresse de l&apos;h&eacute;bergeur]
          </p>
          <p className="mb-2">
            <strong>Site web :</strong> [Site web de l&apos;h&eacute;bergeur]
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">2. Pr&eacute;sentation et principe</h2>
          
          <p className="mb-4">
            Est d&eacute;sign&eacute; ci-apr&egrave;s : <strong>Utilisateur</strong>, tout internaute se connectant et utilisant le site susnomm&eacute;.
          </p>
          <p className="mb-4">
            Le site <strong>Salon de Coiffure</strong> regroupe un ensemble de services, dans l&apos;&eacute;tat, mis &agrave; la disposition des utilisateurs. Il est pr&eacute;cis&eacute; que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu&apos;envers le webmaster du site. Le site est mis &agrave; jour r&eacute;guli&egrave;rement par le propri&eacute;taire du site.
          </p>
          <p className="mb-4">
            Le propri&eacute;taire s&apos;efforce de fournir sur le site des informations les plus pr&eacute;cises possibles (sous r&eacute;serve de modifications apport&eacute;es depuis leur mise en ligne), mais ne saurait garantir l&apos;exactitude, la compl&eacute;tude et l&apos;actualit&eacute; des informations diffus&eacute;es sur son site, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">3. Accessibilit&eacute;</h2>
          
          <p className="mb-4">
            Le site est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programm&eacute;e ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d&apos;impossibilit&eacute; d&apos;acc&egrave;s au service, le site s&apos;engage &agrave; faire son maximum afin de r&eacute;tablir l&apos;acc&egrave;s au service et s&apos;efforcera alors de communiquer pr&eacute;alablement aux utilisateurs les dates et heures de l&apos;intervention. N&apos;&eacute;tant soumis qu&apos;&agrave; une obligation de moyen, le site ne saurait &ecirc;tre tenu pour responsable de tout dommage, quelle qu&apos;en soit la nature, r&eacute;sultant d&apos;une indisponibilit&eacute; du service.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">4. Propri&eacute;t&eacute; intellectuelle</h2>
          
          <p className="mb-4">
            Le propri&eacute;taire du site est propri&eacute;taire des droits de propri&eacute;t&eacute; intellectuelle ou d&eacute;tient les droits d&apos;usage sur tous les &eacute;l&eacute;ments accessibles sur le site, notamment les textes, images, graphismes, logo, ic&ocirc;nes, sons, logiciels, etc.
          </p>
          <p className="mb-4">
            Toute reproduction, repr&eacute;sentation, modification, publication, adaptation de tout ou partie des &eacute;l&eacute;ments du site, quel que soit le moyen ou le proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf autorisation &eacute;crite pr&eacute;alable du propri&eacute;taire du site.
          </p>
          <p className="mb-4">
            Toute exploitation non autoris&eacute;e du site ou de l&apos;un quelconque des &eacute;l&eacute;ments qu&apos;il contient sera consid&eacute;r&eacute;e comme constitutive d&apos;une contrefa&ccedil;on et poursuivie conform&eacute;ment aux dispositions des articles L.335-2 et suivants du Code de Propri&eacute;t&eacute; Intellectuelle.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">5. Liens hypertextes et cookies</h2>
          
          <p className="mb-4">
            Le site contient un certain nombre de liens hypertextes vers d&apos;autres sites, mis en place avec l&apos;autorisation du propri&eacute;taire du site. Cependant, le propri&eacute;taire du site n&apos;a pas la possibilit&eacute; de v&eacute;rifier le contenu des sites ainsi visit&eacute;s, et n&apos;assumera en cons&eacute;quence aucune responsabilit&eacute; de ce fait.
          </p>
          <p className="mb-4">
            La navigation sur le site est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l&apos;identification de l&apos;utilisateur, mais qui enregistre des informations relatives &agrave; la navigation d&apos;un ordinateur sur un site. Les donn&eacute;es ainsi obtenues visent &agrave; faciliter la navigation ult&eacute;rieure sur le site, et ont &eacute;galement vocation &agrave; permettre diverses mesures de fr&eacute;quentation.
          </p>
          <p className="mb-4">
            Le refus d&apos;installation d&apos;un cookie peut entra&icirc;ner l&apos;impossibilit&eacute; d&apos;acc&eacute;der &agrave; certains services. L&apos;utilisateur peut toutefois configurer son ordinateur pour refuser l&apos;installation des cookies.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">6. Protection des donn&eacute;es personnelles</h2>
          
          <p className="mb-4">
            En France, les donn&eacute;es personnelles sont notamment prot&eacute;g&eacute;es par la loi n&deg; 78-87 du 6 janvier 1978, la loi n&deg; 2004-801 du 6 ao&ucirc;t 2004, l&apos;article L. 226-13 du Code p&eacute;nal et le R&egrave;glement Europ&eacute;en 2016/679 du 27 avril 2016 relatif &agrave; la protection des personnes physiques &agrave; l&apos;&eacute;gard du traitement des donn&eacute;es &agrave; caract&egrave;re personnel et &agrave; la libre circulation de ces donn&eacute;es (RGPD).
          </p>
          <p className="mb-4">
            &Agrave; l&apos;occasion de l&apos;utilisation du site, peuvent &ecirc;tre recueillies : l&apos;URL des liens par l&apos;interm&eacute;diaire desquels l&apos;utilisateur a acc&eacute;d&eacute; au site, le fournisseur d&apos;acc&egrave;s de l&apos;utilisateur, l&apos;adresse de protocole Internet (IP) de l&apos;utilisateur.
          </p>
          <p className="mb-4">
            En tout &eacute;tat de cause le propri&eacute;taire du site ne collecte des informations personnelles relatives &agrave; l&apos;utilisateur que pour le besoin de certains services propos&eacute;s par le site. L&apos;utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu&apos;il proc&egrave;de par lui-m&ecirc;me &agrave; leur saisie. Il est alors pr&eacute;cis&eacute; &agrave; l&apos;utilisateur du site l&apos;obligation ou non de fournir ces informations.
          </p>
          <p className="mb-4">
            Conform&eacute;ment aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative &agrave; l&apos;informatique, aux fichiers et aux libert&eacute;s, tout utilisateur dispose d&apos;un droit d&apos;acc&egrave;s, de rectification et d&apos;opposition aux donn&eacute;es personnelles le concernant, en effectuant sa demande &eacute;crite et sign&eacute;e, accompagn&eacute;e d&apos;une copie du titre d&apos;identit&eacute; avec signature du titulaire de la pi&egrave;ce, en pr&eacute;cisant l&apos;adresse &agrave; laquelle la r&eacute;ponse doit &ecirc;tre envoy&eacute;e.
          </p>
          <p className="mb-4">
            Aucune information personnelle de l&apos;utilisateur du site n&apos;est publi&eacute;e &agrave; l&apos;insu de l&apos;utilisateur, &eacute;chang&eacute;e, transf&eacute;r&eacute;e, c&eacute;d&eacute;e ou vendue sur un support quelconque &agrave; des tiers.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">7. Droit applicable et juridiction comp&eacute;tente</h2>
          
          <p className="mb-4">
            Les pr&eacute;sentes conditions du site sont r&eacute;gies par les lois fran&ccedil;aises et toute contestation ou litiges qui pourraient na&icirc;tre de l&apos;interpr&eacute;tation ou de l&apos;ex&eacute;cution de celles-ci seront de la comp&eacute;tence exclusive des tribunaux dont d&eacute;pend le si&egrave;ge social de la soci&eacute;t&eacute;. La langue de r&eacute;f&eacute;rence, pour le r&egrave;glement de contentieux &eacute;ventuels, est le fran&ccedil;ais.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">8. Contactez-nous</h2>
          
          <p className="mb-4">
            Pour toute question, information sur les produits pr&eacute;sent&eacute;s sur le site, ou concernant le site lui-m&ecirc;me, vous pouvez laisser un message &agrave; l&apos;adresse suivante : contact@votresalon.fr.
          </p>
        </div>
      </section>
    </div>
  );
}