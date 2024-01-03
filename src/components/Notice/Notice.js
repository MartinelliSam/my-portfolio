import "./Notice.css";
import { Link } from "react-router-dom";
import ScrollButton from "components/ScrollButton/ScrollButton.js";

export default function Notice() {
  return (
    <>
      <div className="notice-container">
        <div className="notice-header">Mentions légales</div>
        <p className="last-update">Dernière mise à jour : 5 décembre 2023</p>
        <p className="notice-item">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site{" "}
          <a href="www.samantha-martinelli.dev" className="notice-link">
            www.samantha-martinelli.dev
          </a>
          l'identité des différents intervenants dans le cadre de sa réalisation
          et de son suivi.
        </p>
        <div className="notice-title">Edition du site</div>
        <p className="notice-item">
          Le présent site, accessible à l’URL{" "}
          <a href="www.samantha-martinelli.dev" className="notice-link">
            www.samantha-martinelli.dev
          </a>{" "}
          (le « Site »), est édité par :
        </p>
        <p className="notice-item">
          Samantha Martinelli, résidant 22 boulevard de Penevayre 12200
          Villefranche-de-Rouergue, de nationalité Française (France), né(e) le
          22/11/1987
        </p>
        <div className="notice-title">Hébergement</div>
        <p className="notice-item">
          Le Site est hébergé par la société Heroku, situé au 415 Mission Street
          Suite 300 San Francisco, CA 94105, USA (contact téléphonique ou email
          : +14159017000).
        </p>
        <div className="notice-title">Directeur de publication</div>
        <p className="notice-item">
          Le Directeur de la publication du Site est Samantha Martinelli.
        </p>
        <div className="notice-title">Nous contacter</div>
        <ul className="notice-list">
          <li className="notice-list-item">Par téléphone : +33619803856</li>
          <li className="notice-list-item">
            Par email : samantha.martinelli@hotmail.fr
          </li>
          <li className="notice-list-item">
            Par courrier : 22 boulevard de Penevayre 12200
            Villefranche-de-Rouergue
          </li>
        </ul>
        <div className="notice-title">Données personnelles</div>
        <p className="notice-item">
          Le traitement de vos données à caractère personnel est régi par notre
          Politique de confidentialité, disponible depuis la section "Politique
          de confidentialité", conformément au Règlement Général sur la
          Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
        </p>
        <div className="notice-title">Crédits</div>
        <p className="notice-item">
          Crédit des outils, images, polices utilisées :
        </p>
        <ul className="notice-list">
          <li className="notice-list-item">
            Logo : @Syammasfitria via{" "}
            <a href="https://www.canva.com/fr_fr/" className="notice-link">
              Canva
            </a>
          </li>
          <li className="notice-list-item">
            Icônes :{" "}
            <a href="https://www.svgrepo.com/" className="notice-link">
              SVG Repo
            </a>
          </li>
          <li className="notice-list-item">
            Fond d'écran : @DESIGNECOLOGIST via{" "}
            <a
              href="https://unsplash.com/fr/photos/imac-argento-acceso-Pmh0UoG1vlE"
              className="notice-link"
            >
              Unsplash
            </a>
          </li>
        </ul>
        <div className="notice-courtesy">
          Génération des mentions légales par{" "}
          <a href="https://www.legalstart.fr/" className="notice-link">
            Legalstart
          </a>
          .
        </div>
        <Link to="/" className="return">
          Retour
        </Link>
        <ScrollButton />
      </div>
    </>
  );
}
