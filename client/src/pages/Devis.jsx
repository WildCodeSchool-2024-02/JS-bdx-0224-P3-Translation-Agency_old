import { useState, useEffect } from "react";
import "../styles/Devis.scss";
import { BsArrowRight } from "react-icons/bs";
import france from "../assets/images/france.png";
import italy from "../assets/images/italy.png";
import usa from "../assets/images/usa.png";
import germany from "../assets/images/germany.png";
import headerImg from "../assets/images/im4.jpg";

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

function Devis() {
  const [traduction, setTraduction] = useState({
    from: "Français",
    to: "Anglais",
    traducteur:
      "/src/assets/images/2.jpg" ||
      JSON.parse(window.localStorage.getItem("trad")).img,

    traducteurName:
      "Maitre Leslie Alexander" ||
      JSON.parse(window.localStorage.getItem("trad")).name,
  });

  useEffect(() => {
    const getData = () => {
      const props = window.location.search
        .split("?")
        .map((d) => {
          const pair = d.split("=");
          return pair[1];
        })
        .filter((c) => c !== undefined);
      const traducteurNameAndImg = JSON.parse(
        window.localStorage.getItem("trad")
      );
      if (props.length) {
        setTraduction({
          ...traduction,
          from: props[0],
          to: props[1],
        });
        if (traducteurNameAndImg.img && traducteurNameAndImg.name) {
          setTraduction({
            ...traduction,
            traducteurName: traducteurNameAndImg.name,
            traducteur: traducteurNameAndImg.img,
          });
        }
      }
    };
    getData();
  }, []);

  return (
    <div className="devis-main-container">
      <section className="devis-head-section">
        <img src={headerImg} alt="hello" className="devis-header-img" />
        <div>
          <h1 style={{ fontSize: "3dvw", color: "#6a00ff" }}>
            La traduction certifiée
          </h1>
          <h1>
            Obtenez une traduction certifiée fiable et rapide dès MAINTENANT!
          </h1>
          <p>
            Ne perdez plus de temps, obtenez une traduction certifiée fiable et
            rapide dès maintenant!
          </p>
          <button type="button" className="home-traducteurs-button">
            Commencer maintenant <BsArrowRight />
          </button>
        </div>
      </section>
      <section className="devis-form-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2%",
          }}
        >
          <img
            src={traduction.traducteur}
            alt="traducteur"
            className="devis-trad-img"
          />
          <div>
            <h3>{traduction.traducteurName}</h3>
            <p>Traductrice assermentée</p>
          </div>
        </div>
        <div>
          <p>De:</p>
          <div
            style={{
              display: "flex",
            }}
          >
            <select
              onChange={(e) =>
                setTraduction({ ...traduction, from: e.target.value })
              }
              className="devis-select"
            >
              <option value="Francais">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Italien">Italien</option>
              <option value="Allemand">Allemand</option>
            </select>
            <img src={getFlag(traduction.from)} alt="img from" />
          </div>
          <p>A:</p>
          <div style={{ display: "flex", gap: "5%" }}>
            <select
              className="devis-select"
              onChange={(e) =>
                setTraduction({ ...traduction, to: e.target.value })
              }
            >
              <option value="Anglais">Anglais</option>
              <option value="Francais">Français</option>
              <option value="Italien">Italien</option>
              <option value="Allemand">Allemand</option>
            </select>

            <img src={getFlag(traduction.to)} alt="img from" />
          </div>
        </div>
      </section>
      <form className="devis-form" action="#">
        <div style={{ display: "flex", gap: "1%", width: "100%" }}>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="prenom" />
        </div>
        <select className="devis-form-select">
          <option value="Anglais">Anglais</option>
          <option value="Francais">Français</option>
          <option value="Italien">Italien</option>
          <option value="Allemand">Allemand</option>
        </select>
        <input
          type="file"
          name="importfile"
          className="devis-form-file-import"
        />
        <button type="submit" className="devis-form-button">
          Voir le devis
        </button>
      </form>
    </div>
  );
}

export default Devis;
