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
            Bienvenue sur notre site de services de traduction professionnelle.{" "}
            <br />
            Que vous ayez besoin de traduire des documents juridiques, des
            contenus marketing, des articles techniques, ou des correspondances
            personnelles, notre équipe de traducteurs expérimentés est là pour
            vous aider <br />
            Nous offrons des services de traduction précis et fiables dans une
            multitude de langues, garantissant que votre message est transmis
            avec exactitude et dans le respect des nuances culturelles <br />
            Faites confiance à notre expertise pour obtenir des traductions de
            haute qualité qui répondent à vos besoins spécifiques et dépassent
            vos attentes <br />
            Contactez-nous dès aujourd'hui pour un devis personnalisé et
            découvrez comment nous pouvons vous assister dans tous vos projets
            de traduction.
            <br />
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
              title="interprétation professionnel"
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
              title="interprétation professionnel"
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
