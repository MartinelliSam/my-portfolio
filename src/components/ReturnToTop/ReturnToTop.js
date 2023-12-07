import './ReturnToTop.css';
import { scrollToTop } from "components/scrollUtils.js";

export default function ReturnToTop() {
  return (
    <div className="return-container">
      <button className="return-to-top" onClick={scrollToTop}>
        Retour en haut
      </button>
    </div>
  );
}
