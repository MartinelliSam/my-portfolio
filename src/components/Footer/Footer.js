import "./Footer.css";
import { Link } from "react-router-dom";


export default function Footer() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="footer-copyright">© {year} - Tous droits réservés - Samantha Martinelli</div>
      <Link to="/privacy" className="footer-link-one">Politique de confidentialité</Link>
      <Link to="/notice" className="footer-link-two">Mentions légales</Link>
    </footer>
  );
}
