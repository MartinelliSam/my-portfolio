import "./Contact.css";
import { useRef, useState } from "react";
import Icons from "components/Icons.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const [success, setSuccess] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setSuccess(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact">
      <h2>Contactez-moi !</h2>
      <div id="contact-container">
        <div className="contact-form">
          {!success && (
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-name">
                <label htmlFor="name">Votre nom * :</label>
                <input type="text" name="name" id="name" required autoComplete="off"/>
              </div>
              <div className="contact-email">
                <label htmlFor="email">Votre e-mail * :</label>
                <input type="email" name="email" id="email" required autoComplete="off"/>
              </div>
              <div className="contact-phone">
                <label htmlFor="phone-number">Votre numéro de téléphone <span className="example">(ex: 0123456789)</span> :</label>
                <input type="tel" name="phone-number" id="phone-number" pattern="[0-9]{10}" autoComplete="off"/>
              </div>
              <div className="contact-message">
                <label htmlFor="message">Votre message * :</label>
                <textarea rows="8" cols="50" name="message" id="message" required autoComplete="off"/>
              </div>
              <div className="required-fields">* Champs obligatoires</div>
              <div className="contact-accept">
                <input type="checkbox" name="accept" id="accept" required autoComplete="off"/>
                <label htmlFor="accept">
                  J'accepte que les données soumises soient utilisées pour me
                  contacter. Aucun autre traitement ne sera effectué avec ces
                  données.
                </label>
              </div>
              <button className="contact-submit" type="submit" value="Send">
                Envoyer
              </button>
            </form>
          )}
          {success && <p className="confirmation-msg">Votre message a bien été envoyé !</p>}
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/samantha-martinelli-b6bb63297/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-bounce">
              <Icons name="LinkedIn" />
            </span>
          </a>
          <a
            href="https://github.com/MartinelliSam"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-bounce">
              <Icons name="Github" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
