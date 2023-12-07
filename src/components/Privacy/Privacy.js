import "./Privacy.css";
import { Link } from "react-router-dom";
import ScrollButton from "components/ScrollButton/ScrollButton.js";

export default function Privacy() {
  return (
    <>
      <div className="privacy-container">
        <div className="privacy-header">Politique de confidentialité</div>
        <p className="last-update">Dernière mise à jour : 5 décembre 2023</p>
        <p className="privacy-item">
          Cette politique de confidentialité décrit nos politiques et procédures
          relatives à la collecte, à l'utilisation et à la divulgation de vos
          informations lorsque vous utilisez le formulaire de contact et vous
          informe de vos droits à la vie privée et de la manière dont la loi
          vous protège.
        </p>
        <p className="privacy-item">
          Nous utilisons vos données personnelles pour pouvoir vous contacter.
          En utilisant le formulaire de contact, vous acceptez la collecte et
          l'utilisation d'informations conformément à la présente politique de
          confidentialité. Cette politique de confidentialité a été créée à
          l'aide du générateur de politique de confidentialité.
        </p>
        <div className="privacy-title">Interprétation et définitions</div>
        <div className="privacy-subtitle">Interprétation</div>
        <p className="privacy-item">
          Les mots dont la lettre initiale est en majuscule ont des
          significations définies dans les conditions suivantes. Les définitions
          suivantes auront la même signification qu’elles apparaissent au
          singulier ou au pluriel.
        </p>
        <div className="privacy-subtitle">Définitions</div>
        <p className="privacy-item">
          Aux fins de cette politique de confidentialité :
        </p>
        <ul className="privacy-list">
          <li className="privacy-list-item">
            Compte désigne un compte unique créé pour vous permettre d'accéder à
            notre Service ou à des parties de notre Service.
          </li>
          <li className="privacy-list-item">
            Société affiliée désigne une entité qui contrôle, est contrôlée par
            ou est sous contrôle commun avec un parti, où « contrôle » désigne
            la propriété de 50 % ou plus des actions, des participations ou
            d'autres titres donnant droit à voter pour l'élection
            d'administrateurs ou d'autres dirigeants. autorité.
          </li>
          <li className="privacy-list-item">
            Société (appelée « la Société », « Nous », « Notre » ou « Notre »
            dans le présent Accord) fait référence à Samantha Martinelli.
          </li>
          <li className="privacy-list-item">
            Les cookies sont de petits fichiers placés sur votre ordinateur,
            appareil mobile ou tout autre appareil par un site Web, contenant
            les détails de votre historique de navigation sur ce site Web parmi
            ses nombreuses utilisations.
          </li>
          <li className="privacy-list-item">
            Le pays fait référence à : France
          </li>
          <li className="privacy-list-item">
            Appareil désigne tout appareil pouvant accéder au Service tel qu'un
            ordinateur, un téléphone portable ou une tablette numérique.
          </li>
          <li className="privacy-list-item">
            Les données personnelles sont toute information relative à une
            personne identifiée ou identifiable.
          </li>
          <li className="privacy-list-item">
            Service désigne le Site Internet.
          </li>
          <li className="privacy-list-item">
            Prestataire désigne toute personne physique ou morale qui traite les
            données pour le compte de la Société. Il fait référence à des
            sociétés tierces ou à des personnes employées par la Société pour
            faciliter le Service, pour fournir le Service au nom de la Société,
            pour exécuter des services liés au Service ou pour aider la Société
            à analyser la manière dont le Service est utilisé.
          </li>
          <li className="privacy-list-item">
            Les Données d'Utilisation font référence aux données collectées
            automatiquement, soit générées par l'utilisation du Service, soit à
            partir de l'infrastructure du Service elle-même (par exemple, la
            durée d'une visite d'une page).
          </li>
          <li className="privacy-list-item">
            Le site Web fait référence à Samantha Martinelli, accessible depuis
            www.samantha-martinelli.dev
          </li>
          <li className="privacy-list-item">
            Vous désigne la personne accédant ou utilisant le Service, ou la
            société ou autre entité juridique au nom de laquelle cette personne
            accède ou utilise le Service, selon le cas.
          </li>
        </ul>
        <div className="privacy-title">
          Collecte et utilisation de vos données personnelles
        </div>
        <div className="privacy-mid-title">Types de données collectées</div>
        <div className="privacy-subtitle">Données personnelles</div>
        <p className="privacy-item">
          Lors de l'utilisation de notre service, nous pouvons vous demander de
          nous fournir certaines informations personnelles identifiables qui
          peuvent être utilisées pour vous contacter ou vous identifier. Les
          informations personnelles identifiables peuvent inclure, sans s’y
          limiter :
        </p>
        <ul className="privacy-list">
          <li className="privacy-list-item">Adresse e-mail</li>
          <li className="privacy-list-item">Prénom et nom</li>
          <li className="privacy-list-item">Numéro de téléphone</li>
          <li className="privacy-list-item">Des données d'utilisation</li>
        </ul>
        <div className="privacy-subtitle">Des données d'utilisation</div>
        <p className="privacy-item">
          Les données d'utilisation sont collectées automatiquement lors de
          l'utilisation du service.
        </p>
        <p className="privacy-item">
          Les données d'utilisation peuvent inclure des informations telles que
          l'adresse de protocole Internet de votre appareil (par exemple,
          l'adresse IP), le type de navigateur, la version du navigateur, les
          pages de notre service que vous visitez, l'heure et la date de votre
          visite, le temps passé sur ces pages, l'appareil unique. identifiants
          et autres données de diagnostic.
        </p>
        <p className="privacy-item">
          Lorsque vous accédez au Service via ou via un appareil mobile, nous
          pouvons collecter automatiquement certaines informations, notamment,
          mais sans s'y limiter, le type d'appareil mobile que vous utilisez,
          l'identifiant unique de votre appareil mobile, l'adresse IP de votre
          appareil mobile, votre système d'exploitation, le type de navigateur
          Internet mobile que vous utilisez, les identifiants uniques de
          l'appareil et d'autres données de diagnostic.
        </p>
        <p className="privacy-item">
          Nous pouvons également collecter des informations que votre navigateur
          envoie chaque fois que vous visitez notre service ou lorsque vous
          accédez au service via ou via un appareil mobile.
        </p>
        <div className="privacy-subtitle">
          Utilisation de vos données personnelles
        </div>
        <p className="privacy-item">
          La Société peut utiliser les Données Personnelles aux fins suivantes :
        </p>
        <ul className="privacy-list">
          <li className="privacy-list-item">
            Pour vous contacter : pour vous contacter par e-mail, appels
            téléphoniques, SMS ou autres formes de communication électronique
            équivalentes, telles que les notifications push d'une application
            mobile concernant les mises à jour ou les communications
            informatives liées aux fonctionnalités, produits ou services
            souscrits, y compris les mises à jour de sécurité. , lorsque cela
            est nécessaire ou raisonnable pour leur mise en œuvre.
          </li>
          <li className="privacy-list-item">
            Pour gérer vos demandes : pour répondre et gérer vos demandes auprès
            de nous.
          </li>
          <li className="privacy-list-item">
            Avec votre consentement : nous pouvons divulguer vos informations
            personnelles à toute autre fin avec votre consentement.
          </li>
        </ul>
        <div className="privacy-subtitle">
          Conservation de vos données personnelles
        </div>
        <p className="privacy-item">
          La Société conservera vos données personnelles uniquement aussi
          longtemps que nécessaire aux fins énoncées dans la présente politique
          de confidentialité.
        </p>
        <p className="privacy-item">
          La Société prendra toutes les mesures raisonnablement nécessaires pour
          garantir que vos données sont traitées de manière sécurisée et
          conformément à la présente politique de confidentialité
        </p>
        <div className="privacy-subtitle">
          Suppression de vos données personnelles
        </div>
        <p className="privacy-item">
          Vous avez le droit de supprimer ou de demander que nous vous aidions à
          supprimer les données personnelles que nous avons collectées à votre
          sujet.
        </p>
        <p className="privacy-item">
          Notre Service peut vous donner la possibilité de supprimer certaines
          informations vous concernant du Service.
        </p>
        <p className="privacy-item">
          Vous pouvez nous contacter pour demander l'accès, la correction ou la
          suppression de toute information personnelle que vous nous avez
          fournie.
        </p>
        <div className="privacy-subtitle">Forces de l'ordre</div>
        <p className="privacy-item">
          Dans certaines circonstances, la Société peut être tenue de divulguer
          vos données personnelles si la loi l'exige ou en réponse à des
          demandes valides des autorités publiques (par exemple, un tribunal ou
          un organisme gouvernemental).
        </p>
        <div className="privacy-subtitle">Autres exigences légales</div>
        <p className="privacy-item">
          La Société peut divulguer vos données personnelles en croyant de bonne
          foi qu'une telle action est nécessaire pour :
        </p>
        <ul className="privacy-list">
          <li className="privacy-list-item">
            Se conformer à une obligation légale
          </li>
          <li className="privacy-list-item">
            Protéger et défendre les droits ou les biens de la Société
          </li>
          <li className="privacy-list-item">
            Prévenir ou enquêter sur d'éventuels actes répréhensibles en
            relation avec le Service
          </li>
          <li className="privacy-list-item">
            Protéger la sécurité personnelle des Utilisateurs du Service ou du
            public
          </li>
          <li className="privacy-list-item">
            Protéger contre la responsabilité légale
          </li>
        </ul>
        <div className="privacy-subtitle">
          Sécurité de vos données personnelles
        </div>
        <p className="privacy-item">
          La sécurité de vos données personnelles est importante pour nous, mais
          n'oubliez pas qu'aucune méthode de transmission sur Internet ni aucune
          méthode de stockage électronique n'est sécurisée à 100 %. Bien que
          nous nous efforcions d'utiliser des moyens commercialement acceptables
          pour protéger vos données personnelles, nous ne pouvons garantir leur
          sécurité absolue.
        </p>
        <div className="privacy-subtitle">Liens vers d'autres sites Web</div>
        <p className="privacy-item">
          Notre Service peut contenir des liens vers d'autres sites Web qui ne
          sont pas exploités par Nous. Si vous cliquez sur un lien tiers, vous
          serez dirigé vers le site de ce tiers. Nous vous conseillons fortement
          de consulter la politique de confidentialité de chaque site que vous
          visitez.
        </p>
        <p className="privacy-item">
          Nous n'avons aucun contrôle et n'assumons aucune responsabilité quant
          au contenu, aux politiques de confidentialité ou aux pratiques de tout
          site ou service tiers.
        </p>

        <div className="privacy-subtitle">
          Modifications de cette politique de confidentialité
        </div>
        <p className="privacy-item">
          Nous pouvons mettre à jour notre politique de confidentialité de temps
          à autre. Nous vous informerons de tout changement en publiant la
          nouvelle politique de confidentialité sur cette page.
        </p>
        <p className="privacy-item">
          Nous mettrons à jour la date de « Dernière mise à jour » en haut de
          cette politique de confidentialité.
        </p>

        <p className="privacy-item">
          Il vous est conseillé de consulter périodiquement cette politique de
          confidentialité pour tout changement. Les modifications apportées à
          cette politique de confidentialité entrent en vigueur dès leur
          publication sur cette page.
        </p>
        <div className="privacy-subtitle">Contactez-nous</div>
        <p className="privacy-item">
          Si vous avez des questions concernant cette politique de
          confidentialité, vous pouvez nous contacter :
          samantha.martinelli@hotmail.fr
        </p>
        <div className="privacy-courtesy">
          Généré à l'aide du générateur de politique de confidentialité
          TermsFeed
        </div>
        <Link to="/" className="return">
          Retour
        </Link>
        <ScrollButton />
      </div>
    </>
  );
}
