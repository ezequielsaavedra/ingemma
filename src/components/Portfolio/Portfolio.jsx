import "./Portfolio.css";
import portfolioMaschwitz from "../../img/portfolioMaschwitz.png";
import portfolioEdificioPeru from "../../img/portfolioEdificioPeru.png";
import portfolioAmpliacionTorreon from "../../img/portfolioAmpliacionTorreon.png";
import portfolioCasaCorralitos from "../../img/portfolioCasaCorralitos.png";
import portfolioBotter from "../../img/portfolioBotter.png";
import portfolioAmpliacionChacras from "../../img/portfolioAmpliacionChacras.png";

function Portfolio() {
  return (
    <div className="containerPortfolio">
      <h2>Portfolio</h2>
      <p>
        Nuestros proyectos construidos son el reflejo de la calidad de nuestros
        servicios en Ingemma. Todos ellos comparten el uso de la Tecnología BIM,
        que nos permite secuenciar el proceso desde el diseño hasta la
        construcción, pasando por la ingeniería y la fabricación. Nuestros
        proyectos son multidisciplinares y están categorizados según el servicio
        y sector al que se dirigen, brindando soluciones integrales y
        personalizadas.
      </p>
      <div className="row rowPortfolio">
        <div className="col">
          <img src={portfolioMaschwitz} alt="Portfolio Maschwitz" />
        </div>
        <div className="col">
          <img src={portfolioEdificioPeru} alt="Portfolio Edificio Peru" />
        </div>
        <div className="col">
          <img
            src={portfolioAmpliacionTorreon}
            alt="Portfolio Ampliacion Torreon"
          />
        </div>
      </div>
      <div>
        <button>Ver mas</button>
      </div>
    </div>
  );
}

export default Portfolio;
