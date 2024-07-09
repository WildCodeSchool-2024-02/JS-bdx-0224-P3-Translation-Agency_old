/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import "../styles/Traducteur.scss";
import Card from "../components/Card";
import trad1 from "../assets/images/1.jpg";
import trad2 from "../assets/images/2.jpg";
import trad3 from "../assets/images/3.webp";
import trad4 from "../assets/images/4.jpeg";
import france from "../assets/images/france.png";
import italy from "../assets/images/italy.png";
import usa from "../assets/images/usa.png";
import germany from "../assets/images/germany.png";
import headerImg from "../assets/images/im1.jpg";
import lastSectionImg1 from "../assets/images/im2.jpg";
import lastSectionImg2 from "../assets/images/im3.webp";

export default function Traducteur() {
  const [traduction, setTraduction] = useState({
    from: "Francais",
    to: "Anglais",
    traducteur: 0,
    name: "Maitre Jenny Wilson",
  });

  const getFlag = (value) => {
    if (value === "Francais") {
      return france;
    }
    if (value === "Anglais") {
      return usa;
    }
    if (value === "Italien") {
      return italy;
    }
    if (value === "Allemand") {
      return germany;
    }
    return france;
  };
  return (
    <page className="traducteur-page">
      <section className="home-head-container">
        <img className="home-head-img" src={headerImg} alt="traduction" />
        <div>
          <h3>
            Obtenez une traduction certifiée fiable et rapide dès maintenant!
          </h3>
          <p>
            Besoin d'une traduction officielle reconnue par des institutions,
            des entreprises et des autorités légales dans le monde entier?
            Faites appel à notre service de traduction certifiée! Nos
            traducteurs assermentés, agréés ou accrédités garantissent
            l'exactitude et la fidélité de vos documents. Chaque traduction est
            accompagnée d'un cachet, d'une signature et d'une déclaration
            formelle pour une acceptation universelle. Ne perdez plus de temps,
            obtenez une traduction certifiée fiable et rapide dès maintenant!
          </p>
        </div>
      </section>
      <section className="home-traducteurs-section">
        <div className="home-traducteurs-div">
          <h1>Nos traducteurs certifiés</h1>
          <div style={{ display: "flex" }}>
            <select
              onChange={(e) =>
                setTraduction({ ...traduction, from: e.target.value })
              }
              id="country"
              className="home-select-traducteurs-left"
            >
              <option value="Francais">Francais</option>
              <option value="Anglais">Anglais</option>
              <option value="Italien">Italien</option>
              <option value="Allemand">Allemand</option>
            </select>
            <select
              onChange={(e) =>
                setTraduction({ ...traduction, to: e.target.value })
              }
              className="home-select-traducteurs-right"
            >
              <option value="Anglais">Anglais</option>
              <option value="Francais">Francais</option>
              <option value="Italien">Italien</option>
              <option value="Allemand">Allemand</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>De: </p>
            <img src={getFlag(traduction.from)} alt="img from" />
            <p>A: </p>
            <img src={getFlag(traduction.to)} alt="img from" />
          </div>
          <div className="home-traducteurs-cards">
            <div
              onClick={() =>
                window.localStorage.setItem(
                  "trad",
                  JSON.stringify({
                    name: "Maitre Oprah Winfrey",
                    img: trad1,
                  })
                )
              }
              className={
                traduction.traducteur === 1
                  ? "card-container-clicked"
                  : "card-container"
              }
            >
              <Card
                img={trad1}
                name="Maitre Oprah Winfrey"
                type="Traducteur acermenté"
              />
            </div>
            <div
              onClick={() =>
                window.localStorage.setItem(
                  "trad",
                  JSON.stringify({
                    name: "Maitre Leslie Alexander",
                    img: trad2,
                  })
                )
              }
              className={
                traduction.traducteur === 2
                  ? "card-container-clicked"
                  : "card-container"
              }
            >
              <Card
                img={trad2}
                name="Maitre Leslie Alexander"
                type="Traducteur acermenté"
              />
            </div>
            <div
              onClick={() => {
                window.localStorage.setItem(
                  "trad",
                  JSON.stringify({ name: "Maitre Jenny Wilson", img: trad3 })
                );
              }}
              className={
                traduction.traducteur === 3
                  ? "card-container-clicked"
                  : "card-container"
              }
            >
              <Card
                img={trad3}
                name="Maitre Jenny Wilson"
                type="Traducteur acermenté"
              />
            </div>
            <div
              onClick={() =>
                window.localStorage.setItem(
                  "trad",
                  JSON.stringify({ name: "Maitre Francis joe", img: trad4 })
                )
              }
              className={
                traduction.traducteur === 4
                  ? "card-container-clicked"
                  : "card-container"
              }
            >
              <Card
                img={trad4}
                name="Maitre Francis joe"
                type="Traducteur acermenté"
              />
            </div>
          </div>
          <button
            onClick={() => {
              window.location.replace(
                `/devis?from=${traduction.from}?to=${traduction.to}?traducteur=${traduction.traducteur}`
              );
            }}
            className="home-traducteurs-button"
            type="button"
          >
            Commencez maintenant
          </button>
        </div>
      </section>
      <section className="home-description-section">
        <img src={lastSectionImg1} alt="sec1" />
        <div className="home-description-texts">
          <div>
            <h2 className="home-description-title">ADMINISTRATION</h2>
            <h2>
              Actes de naissance
              <br />
              Casier judiciaire
              <br />
              Actes de mariage
              <br />
              Actes de famille
              <br />
              Cartes d'identité / Passeports
              <br />
              Actes de décès
            </h2>
          </div>
          <div>
            <h2 className="home-description-title">INSTRUCTION</h2>
            <h2>
              Diplômes
              <br />
              Titres universitaires
              <br />
              Certificats de langues
              <br />
              Bulletins scolaires
            </h2>
          </div>
        </div>
      </section>
      <section className="home-description-section">
        <div className="home-description-texts">
          <div>
            <h2 className="home-description-title">NOTAIRE</h2>
            <h2>
              Actes de l'Assemblée Générale
              <br />
              Statuts
              <br />
              Statuts de la société
              <br />
              Contrats d'achat et de vente
              <br />
              Hypothèques et droits réels
              <br />
              Successions et testaments
              <br />
              Procurations
            </h2>
          </div>
          <div>
            <h2 className="home-description-title">TRIBUNAL</h2>
            <h2>
              Communications judiciaires
              <br />
              Documents
              <br />
              judiciaires Poursuites Documents
              <br />
              de notification Pièces
              <br />
              justificatives Jugements
            </h2>
          </div>
        </div>
        <img src={lastSectionImg2} alt="sec1" />
      </section>
      <section className="home-devis-section">
        <h2>METTEZ- NOUS A L’EPREUVE</h2>
        <button className="home-traducteurs-button" type="button">
          Obenez un devis instantané
        </button>
      </section>
    </page>
  );
}
