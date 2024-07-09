import { useState } from "react";
import "../styles/ContactForm.scss";
import contactImg from "../assets/images/contact.jpg";

function ContactForm() {
  const [name, setname] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`${name} Your form has been submitted successfully!`);
  };
  return (
    <>
      <img src={contactImg} alt="" style={{ width: "100%", height: "60dvh" }} />
      <div className="container_contact">
        <h1 className="title_contact">Contactez votre Agence de traduction</h1>
        <p className="p_contact">
          N'hésitez pas à nous contacter via l'un des moyens ci-dessous, et
          notre équipe se fera un plaisir de vous aider.
        </p>
        <form className="ContactForm" onSubmit={handleSubmit}>
          <div>
            <input
              className="inputContact"
              type="text"
              minLength="5"
              id="Name"
              placeholder="Nom"
              required
              onChange={(e) => setname(e.target.value)}
            />
            <input
              className="inputContact"
              type="text"
              minLength="5"
              id="Prénom"
              placeholder="Prénom"
              required
              onChange={(e) => setprénom(e.target.value)}
            />
          </div>
          <input
            className="inputContact"
            type="email"
            id="email"
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="inputContact"
            type="email"
            placeholder="numéro de telephone"
            required
            onChange={(e) => setnumero(e.target.value)}
          />
          <input
            className="inputContact"
            type="email"
            placeholder="numéro de telephone"
            required
            onChange={(e) => setmsg(e.target.value)}
          />
          <button className="contactButton" type="submit">
            Envoyer votre message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
