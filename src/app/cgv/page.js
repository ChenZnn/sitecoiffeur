"use client";
import Navbar from '../components/Navbar';

export default function CGV() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* En-tête de page */}
      <header className="bg-gray-800 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Conditions Générales de Vente</h1>
        </div>
      </header>

      {/* Contenu des CGV */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          
          <h2 className="text-2xl font-bold mb-6">Article 1 - Objet et champ d'application</h2>
          
          <p className="mb-4">
            Les présentes Conditions Générales de Vente (ci-après "CGV") déterminent les droits et obligations des parties dans le cadre des prestations de coiffure proposées par Salon de Coiffure (ci-après "le Prestataire") à ses clients.
          </p>
          <p className="mb-4">
            Toute prestation accomplie par le Prestataire implique l'adhésion sans réserve du client aux présentes CGV et leur acceptation complète. Ces CGV prévalent sur tout autre document du client, notamment sur toutes conditions générales d'achat.
          </p>
          <p className="mb-4">
            Le Prestataire se réserve le droit de modifier les présentes CGV à tout moment. La version applicable est celle en vigueur à la date de la réservation ou de la commande passée par le client.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 2 - Prestations et tarifs</h2>
          
          <p className="mb-4">
            Les prestations offertes par le Prestataire sont celles qui figurent sur le site internet ou qui sont affichées dans le salon. Les prix sont indiqués en euros et TTC (toutes taxes comprises).
          </p>
          <p className="mb-4">
            Le Prestataire se réserve le droit de modifier ses tarifs à tout moment. Néanmoins, il s'engage à facturer les prestations commandées aux prix indiqués lors de l'enregistrement de la réservation.
          </p>
          <p className="mb-4">
            Des conditions tarifaires particulières peuvent être proposées en fonction des formules choisies ou lors d'opérations promotionnelles. Ces conditions particulières seront mentionnées clairement lors de la réservation.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 3 - Réservation et annulation</h2>
          
          <p className="mb-4">
            La réservation d'une prestation peut s'effectuer par téléphone, en ligne via le site internet ou directement au salon, sous réserve de disponibilité.
          </p>
          <p className="mb-4">
            Le client peut annuler ou reporter son rendez-vous sans frais jusqu'à 24 heures avant l'heure prévue. Toute annulation effectuée moins de 24 heures avant le rendez-vous pourra entraîner la facturation de la prestation réservée à hauteur de 50% de son prix.
          </p>
          <p className="mb-4">
            En cas de non-présentation du client à son rendez-vous sans annulation préalable, le Prestataire se réserve le droit de demander le paiement intégral de la prestation réservée pour toute réservation ultérieure.
          </p>
          <p className="mb-4">
            Le Prestataire se réserve le droit d'annuler une réservation en cas de force majeure ou d'événements exceptionnels. Dans ce cas, le client sera prévenu dans les meilleurs délais et aucune indemnité ne pourra être demandée.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 4 - Déroulement des prestations</h2>
          
          <p className="mb-4">
            Le client est invité à se présenter au salon quelques minutes avant l'heure de son rendez-vous. En cas de retard du client, le Prestataire se réserve le droit de réduire la durée de la prestation ou de l'annuler si ce retard compromet la bonne exécution des rendez-vous suivants.
          </p>
          <p className="mb-4">
            Avant toute prestation technique (coloration, permanente, etc.), le Prestataire réalise un diagnostic capillaire et peut conseiller le client sur la faisabilité de la prestation souhaitée. Le Prestataire se réserve le droit de refuser d'exécuter une prestation s'il estime qu'elle présente un risque pour les cheveux ou le cuir chevelu du client.
          </p>
          <p className="mb-4">
            Pour les prestations techniques, un test d'allergie peut être recommandé ou exigé. Le refus de se soumettre à ce test dégage la responsabilité du Prestataire en cas de réaction allergique.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 5 - Paiement</h2>
          
          <p className="mb-4">
            Le règlement des prestations s'effectue à la fin de la prestation, avant le départ du client. Les moyens de paiement acceptés sont : espèces, cartes bancaires, chèques (sous réserve d'acceptation).
          </p>
          <p className="mb-4">
            Aucun escompte ne sera consenti en cas de paiement anticipé. Le paiement est réputé réalisé lors de la remise des espèces ou lors de l'encaissement effectif du chèque ou du paiement par carte bancaire.
          </p>
          <p className="mb-4">
            En cas de défaut de paiement total ou partiel des prestations, le client devra verser au Prestataire une pénalité de retard égale à trois fois le taux de l'intérêt légal. Cette pénalité est calculée sur le montant TTC de la somme restant due, et court à compter de la date d'échéance sans qu'aucune mise en demeure préalable ne soit nécessaire.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 6 - Garantie et responsabilité</h2>
          
          <p className="mb-4">
            Le Prestataire s'engage à exécuter les prestations avec soin et diligence. Toutefois, sa responsabilité ne pourra pas être engagée en cas de résultat non conforme aux attentes du client si celui-ci n'a pas suivi les conseils du Prestataire ou s'il a fourni des informations erronées sur l'état de ses cheveux.
          </p>
          <p className="mb-4">
            Le Prestataire ne pourra être tenu responsable des dommages résultant d'une utilisation inappropriée par le client des produits recommandés ou vendus dans le salon.
          </p>
          <p className="mb-4">
            En cas d'insatisfaction concernant la prestation réalisée, le client est invité à en faire part au Prestataire dans un délai de 7 jours suivant la prestation. Le Prestataire s'efforcera d'y apporter une solution satisfaisante.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 7 - Produits</h2>
          
          <p className="mb-4">
            Les produits vendus dans le salon bénéficient de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).
          </p>
          <p className="mb-4">
            Les produits doivent être utilisés conformément aux instructions d'utilisation. Le Prestataire ne pourra être tenu responsable des dommages résultant d'une utilisation non conforme aux recommandations.
          </p>
          <p className="mb-4">
            Conformément aux dispositions légales, le client dispose d'un délai de 14 jours à compter de la réception des produits pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités. Les produits doivent être retournés dans leur emballage d'origine, non ouverts et en parfait état.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 8 - Données personnelles</h2>
          
          <p className="mb-4">
            Les informations personnelles collectées par le Prestataire sont enregistrées dans un fichier informatisé et sont nécessaires à la gestion des rendez-vous et à la relation commerciale.
          </p>
          <p className="mb-4">
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), le client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition aux données le concernant.
          </p>
          <p className="mb-4">
            Pour exercer ces droits ou pour toute question sur le traitement des données, le client peut contacter le Prestataire à l'adresse email suivante : contact@votresalon.fr.
          </p>
          <p className="mb-4">
            Pour plus d'informations sur la gestion des données personnelles, le client est invité à consulter la Politique de Confidentialité disponible sur le site internet ou au salon.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 9 - Propriété intellectuelle</h2>
          
          <p className="mb-4">
            Tous les éléments du site internet, de la documentation commerciale et des supports publicitaires du Prestataire, y compris les textes, logos, images, photographies, sont la propriété exclusive du Prestataire ou de ses partenaires.
          </p>
          <p className="mb-4">
            Toute reproduction, exploitation, rediffusion ou utilisation de ces éléments, même partielle, est strictement interdite sans l'autorisation écrite préalable du Prestataire.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 10 - Médiation et règlement des litiges</h2>
          
          <p className="mb-4">
            En cas de litige, le client s'adressera en priorité au Prestataire pour obtenir une solution amiable.
          </p>
          <p className="mb-4">
            Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, le client peut recourir au service de médiation proposé par le Prestataire. Le médiateur "droit de la consommation" ainsi proposé est [Nom du médiateur]. Ce médiateur peut être joint via son site : [site web du médiateur] ou à l'adresse : [adresse postale du médiateur].
          </p>
          <p className="mb-4">
            Après démarche préalable écrite des consommateurs vis-à-vis du Prestataire, le service de médiation peut être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti.
          </p>
          <p className="mb-4">
            À défaut de résolution amiable, tout litige sera porté devant les tribunaux compétents.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 11 - Droit applicable</h2>
          
          <p className="mb-4">
            Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
          <p className="mb-4">
            Si l'une des clauses des présentes CGV venait à être déclarée nulle par une décision de justice, cette nullité ne saurait emporter la nullité de l'ensemble des autres clauses, qui continueraient à produire leur effet.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Article 12 - Contact</h2>
          
          <p className="mb-4">
            Pour toute question relative aux présentes CGV, vous pouvez nous contacter :
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li>Par téléphone : 01 23 45 67 89</li>
            <li>Par email : contact@votresalon.fr</li>
            <li>Par courrier : Salon de Coiffure, 123 Avenue des Coiffeurs, 75000 Paris</li>
          </ul>
        </div>
      </section>
    </div>
  );
}