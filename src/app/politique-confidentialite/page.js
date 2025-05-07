"use client";
import Navbar from '../components/Navbar';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Politique de Confidentialit&eacute;</h1>
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
            Chez Salon de Coiffure, nous accordons une grande importance &agrave; la protection de vos donn&eacute;es personnelles. Cette politique de confidentialit&eacute; vous informe de la mani&egrave;re dont nous recueillons, utilisons et prot&eacute;geons vos informations lorsque vous utilisez notre site web et nos services.
          </p>
          <p className="mb-4">
            En utilisant notre site web et nos services, vous acceptez les pratiques d&eacute;crites dans la pr&eacute;sente politique de confidentialit&eacute;. Nous nous r&eacute;servons le droit de modifier cette politique &agrave; tout moment. Les modifications prendront effet d&egrave;s leur publication sur notre site.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">1. Collecte des donn&eacute;es personnelles</h2>
          
          <p className="mb-4">
            Nous collectons les donn&eacute;es personnelles suivantes :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Informations d&apos;identification (nom, pr&eacute;nom)</li>
            <li>Coordonn&eacute;es (adresse e-mail, num&eacute;ro de t&eacute;l&eacute;phone)</li>
            <li>Informations relatives aux rendez-vous (date, heure, service demand&eacute;)</li>
            <li>Historique des services utilis&eacute;s</li>
            <li>Donn&eacute;es de navigation sur notre site web (cookies, adresse IP)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">2. M&eacute;thodes de collecte</h2>
          
          <p className="mb-4">
            Nous collectons vos donn&eacute;es personnelles par les moyens suivants :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Formulaires de contact et de prise de rendez-vous sur notre site web</li>
            <li>Communications par e-mail, t&eacute;l&eacute;phone ou en personne</li>
            <li>Cookies et technologies similaires lors de votre navigation sur notre site</li>
            <li>Informations fournies lors de votre visite dans notre salon</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">3. Finalit&eacute;s du traitement</h2>
          
          <p className="mb-4">
            Nous utilisons vos donn&eacute;es personnelles aux fins suivantes :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Gestion des rendez-vous et des services</li>
            <li>Communication avec vous concernant nos services</li>
            <li>Am&eacute;lioration de notre site web et de nos services</li>
            <li>Envoi d&apos;informations promotionnelles (avec votre consentement)</li>
            <li>Respect de nos obligations l&eacute;gales et r&eacute;glementaires</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">4. Base l&eacute;gale du traitement</h2>
          
          <p className="mb-4">
            Le traitement de vos donn&eacute;es personnelles est fond&eacute; sur les bases l&eacute;gales suivantes :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li><strong>Ex&eacute;cution d&apos;un contrat :</strong> Traitement n&eacute;cessaire &agrave; l&apos;ex&eacute;cution de nos services</li>
            <li><strong>Consentement :</strong> Lorsque vous nous donnez explicitement votre accord pour traiter vos donn&eacute;es</li>
            <li><strong>Int&eacute;r&ecirc;t l&eacute;gitime :</strong> Lorsque le traitement est n&eacute;cessaire aux fins de nos int&eacute;r&ecirc;ts l&eacute;gitimes</li>
            <li><strong>Obligation l&eacute;gale :</strong> Lorsque le traitement est n&eacute;cessaire pour respecter une obligation l&eacute;gale</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">5. Conservation des donn&eacute;es</h2>
          
          <p className="mb-4">
            Nous conservons vos donn&eacute;es personnelles aussi longtemps que n&eacute;cessaire pour atteindre les finalit&eacute;s pour lesquelles elles ont &eacute;t&eacute; collect&eacute;es, sauf si la loi exige ou permet une p&eacute;riode de conservation plus longue.
          </p>
          <p className="mb-4">
            Les donn&eacute;es relatives aux rendez-vous sont conserv&eacute;es pendant 3 ans &agrave; compter de votre dernier rendez-vous. Les donn&eacute;es de facturation sont conserv&eacute;es pendant 10 ans conform&eacute;ment aux obligations l&eacute;gales.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">6. Partage des donn&eacute;es personnelles</h2>
          
          <p className="mb-4">
            Nous ne vendons pas vos donn&eacute;es personnelles &agrave; des tiers. Nous pouvons partager vos donn&eacute;es avec :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Notre personnel autoris&eacute;</li>
            <li>Des prestataires de services (h&eacute;bergement web, syst&egrave;me de r&eacute;servation, etc.)</li>
            <li>Des autorit&eacute;s publiques lorsque la loi l&apos;exige</li>
          </ul>
          <p className="mb-4">
            Tous nos prestataires de services sont tenus de respecter la confidentialit&eacute; et la s&eacute;curit&eacute; de vos donn&eacute;es personnelles.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">7. Cookies et technologies similaires</h2>
          
          <p className="mb-4">
            Notre site web utilise des cookies pour am&eacute;liorer votre exp&eacute;rience de navigation. Les cookies sont de petits fichiers texte stock&eacute;s sur votre appareil qui nous permettent de :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Assurer le bon fonctionnement du site</li>
            <li>M&eacute;moriser vos pr&eacute;f&eacute;rences</li>
            <li>Analyser l&apos;utilisation du site pour l&apos;am&eacute;liorer</li>
          </ul>
          <p className="mb-4">
            Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour &ecirc;tre averti lorsqu&apos;un cookie est envoy&eacute;. Cependant, certaines fonctionnalit&eacute;s du site peuvent ne pas fonctionner correctement si les cookies sont d&eacute;sactiv&eacute;s.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">8. Vos droits</h2>
          
          <p className="mb-4">
            Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD), vous disposez des droits suivants concernant vos donn&eacute;es personnelles :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li><strong>Droit d&apos;acc&egrave;s :</strong> Vous pouvez demander une copie des donn&eacute;es personnelles que nous d&eacute;tenons &agrave; votre sujet</li>
            <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de donn&eacute;es inexactes ou incompl&egrave;tes</li>
            <li><strong>Droit &agrave; l&apos;effacement :</strong> Vous pouvez demander la suppression de vos donn&eacute;es dans certaines circonstances</li>
            <li><strong>Droit &agrave; la limitation du traitement :</strong> Vous pouvez demander la limitation du traitement de vos donn&eacute;es</li>
            <li><strong>Droit &agrave; la portabilit&eacute; :</strong> Vous pouvez demander le transfert de vos donn&eacute;es &agrave; un tiers</li>
            <li><strong>Droit d&apos;opposition :</strong> Vous pouvez vous opposer au traitement de vos donn&eacute;es dans certaines circonstances</li>
            <li><strong>Droit de retirer votre consentement :</strong> Vous pouvez retirer votre consentement &agrave; tout moment</li>
          </ul>
          <p className="mb-4">
            Pour exercer ces droits, veuillez nous contacter &agrave; l&apos;adresse email suivante : contact@votresalon.fr
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">9. S&eacute;curit&eacute; des donn&eacute;es</h2>
          
          <p className="mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropri&eacute;es pour prot&eacute;ger vos donn&eacute;es personnelles contre la perte, l&apos;acc&egrave;s non autoris&eacute;, la divulgation, l&apos;alt&eacute;ration et la destruction.
          </p>
          <p className="mb-4">
            Cependant, aucune m&eacute;thode de transmission sur Internet ou de stockage &eacute;lectronique n&apos;est totalement s&eacute;curis&eacute;e. Nous ne pouvons donc pas garantir une s&eacute;curit&eacute; absolue.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">10. Transferts internationaux de donn&eacute;es</h2>
          
          <p className="mb-4">
            Nous ne transf&eacute;rons pas vos donn&eacute;es personnelles en dehors de l&apos;Espace &Eacute;conomique Europ&eacute;en (EEE), sauf si des mesures de protection ad&eacute;quates sont en place conform&eacute;ment &agrave; la l&eacute;gislation applicable.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">11. Protection des mineurs</h2>
          
          <p className="mb-4">
            Notre site web et nos services ne sont pas destin&eacute;s aux personnes de moins de 16 ans. Nous ne collectons pas sciemment des donn&eacute;es personnelles concernant des enfants de moins de 16 ans. Si vous &ecirc;tes un parent ou un tuteur et que vous pensez que votre enfant nous a fourni des donn&eacute;es personnelles, veuillez nous contacter.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">12. Modifications de la politique de confidentialit&eacute;</h2>
          
          <p className="mb-4">
            Nous pouvons mettre &agrave; jour cette politique de confidentialit&eacute; de temps &agrave; autre. La version la plus r&eacute;cente sera toujours disponible sur notre site web avec la date de la derni&egrave;re mise &agrave; jour.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">13. Nous contacter</h2>
          
          <p className="mb-4">
            Si vous avez des questions concernant cette politique de confidentialit&eacute; ou la mani&egrave;re dont nous traitons vos donn&eacute;es personnelles, veuillez nous contacter :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Par email : contact@votresalon.fr</li>
            <li>Par t&eacute;l&eacute;phone : 01 23 45 67 89</li>
            <li>Par courrier : Salon de Coiffure, 123 Avenue des Coiffeurs, 75000 Paris</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">14. Droit de r&eacute;clamation</h2>
          
          <p className="mb-4">
            Si vous estimez que le traitement de vos donn&eacute;es personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une r&eacute;clamation aupr&egrave;s de la Commission Nationale de l&apos;Informatique et des Libert&eacute;s (CNIL) :
          </p>
          <p className="mb-4">
            CNIL<br />
            3 Place de Fontenoy<br />
            TSA 80715<br />
            75334 PARIS CEDEX 07<br />
            T&eacute;l : 01 53 73 22 22<br />
            Site web : <a href="https://www.cnil.fr" className="text-blue-600 hover:underline">www.cnil.fr</a>
          </p>
        </div>
      </section>
    </div>
  );
}