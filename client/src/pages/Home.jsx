import homeVideo from "../assets/images/homepageVideo.mp4";
import card1Img from "../assets/images/card1.png";
import card2Img from "../assets/images/card2.jpg";
import card3Img from "../assets/images/card3.jpg";
import homeHeader1 from "../assets/images/home.png";
import homeHeader2 from "../assets/images/home1.png";
import HoverCard from "../components/HoverCard";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div>
      <section className="home-header-section">
        <div>
          <h3 className="subtitle">
            Des Services de Traduction et d'Interprétariat de Qualité Supérieure
          </h3>
          <h1>Finalisez votre Traduction dés MAINTENANT</h1>
          <p>
            Déposez vos documents en toute simplicité et recevez des traductions
            professionnelles dans les meilleurs délais.
          </p>
          <div className="home-header-section-btns">
            <button
              className="home-header-section-btn1"
              type="button"
              onClick={() => window.location.replace("/devis")}
            >
              Essayer Maintenant
            </button>
            <button
              className="home-header-section-btn2"
              type="button"
              onClick={() => window.location.replace("/traducteur")}
            >
              Contacter un specialiste
            </button>
          </div>
        </div>
        <div className="home-header-section-imgs">
          <div className="home-header-section-img1-container">
            <img src={homeHeader1} alt="" className="header-img1" />
          </div>
          <div className="home-header-section-img2-container">
            <img src={homeHeader2} alt="" className="header-img2" />
          </div>
        </div>
      </section>
      <section className="home-video-section">
        <video className="video" autoPlay muted loop>
          <source src={homeVideo} />
          Your browser does not support the video tag.
        </video>
        <div className="home-video-section-text">
          <h3>Qui sommes nous ?</h3>
          <p>
            Nous sommes une entreprise dédiée à fournir des services de
            traduction et d'interprétariat de haute qualité. Que vous ayez
            besoin de traduire des documents techniques, juridiques, ou
            marketing, notre équipe de traducteurs professionnels est là pour
            vous aider. nous garantissons des traductions précises et adaptées à
            vos besoins spécifiques.
          </p>
          <button type="button">En savoir plus ➡️</button>
        </div>
      </section>
      <section className="home-last-cards-section">
        <div>
          <h3>Notre mission :</h3>
          <p>
            Nous sommes une entreprise dédiée à fournir des services de <br />
            traduction et d'interprétariat de haute qualité. Que vous ayez{" "}
            <br />
            besoin de traduire des documents techniques, juridiques, ou <br />
            marketing, notre équipe de traducteurs professionnels est là pour{" "}
            <br />
            vous aider. Avec des années d'expérience et une expertise dans plus{" "}
            <br />
            de 50 langues, nous garantissons des traductions précises et <br />
            adaptées à vos besoins spécifiques.
          </p>
          <button className="home-header-section-btn1" type="button">
            Voir nos services ➡️
          </button>
        </div>
        <div className="home-last-cards">
          <div className="home-last-cards-groupe">
            <HoverCard
              className="home-hover-card"
              image={card1Img}
              title="Interprétation professionnel"
              texts={[
                "Interprétation Simultanée",
                "Traduction de Rapports d'Activité",
                "Traduction de Campagnes de Sensibilisation",
                "Traduction de Contenu Humanitaire",
              ]}
            />
            <HoverCard
              className="home-hover-card"
              image={card2Img}
              title="Interprétation professionnel"
              texts={[
                "Interprétation Simultanée",
                "Traduction de Rapports d'Activité",
                "Traduction de Campagnes de Sensibilisation",
                "Traduction de Contenu Humanitaire",
              ]}
            />
          </div>
          <HoverCard
            className="home-hover-card"
            image={card3Img}
            title="interprétation professionnel"
            texts={[
              "Interprétation Simultanée",
              "Traduction de Rapports d'Activité",
              "Traduction de Campagnes de Sensibilisation",
              "Traduction de Contenu Humanitaire",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
