import "./AboutAs.css";
import estrella from "../../img/aboutAsEstrella.png";
import ojo from "../../img/aboutAsOjo.png";
import corazon from "../../img/aboutAsCorazon.png";

function AboutAs() {
  return (
    <div className="containerAboutAs">
      <div className="rowAboutAs1">
        <h2>¿Por qué elegir a Ingemma?</h2>
        <p className="detalleAboutAs1">Ingemma </p>
        <p className="detalleAboutAs2">
          es un equipo multidisciplinario de profesionales altamente capacitados
          que ofrece{" "}
        </p>
        <p className="detalleAboutAs1">
          soluciones arquitectónicas y servicios de ingeniería personalizados{" "}
        </p>
        <p className="detalleAboutAs2">
          en los sectores de oil&gas, metalmecánica y civil. Con una amplia
          experiencia y conocimientos en diversos rubros, trabajamos desde el
          diseño conceptual hasta la ingeniería de detalle, asegurando que cada
          proyecto se desarrolle de manera eficiente y cumpla con los más altos
          estándares de calidad. Nos destacamos por nuestro compromiso con la
          excelencia y la entrega de resultados de calidad que cumplen con los
          estándares más exigentes de la industria.
        </p>
      </div>
      <div className="row rowAboutAs2">
        <div className="col-xl-4 col-md-6 col-sm-12 colAboutAs">
          <img src={estrella} alt="Estrella" />
          <h3>Mision</h3>
          <p>
            Proporcionar servicios de ingeniería y soluciones arquitectónicas de
            vanguardia, impulsando la implementación de metodologías BIM y
            promoviendo la innovación en la gestión de proyectos industriales.
          </p>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 colAboutAs">
          <img src={ojo} alt="Ojo" />
          <h3>Visión</h3>
          <p>
            Ser aliado estratégico de confianza en el desarrollo de proyectos de
            ingeniería y arquitectura, brindando soluciones que optimicen
            eficientemente los recursos y garanticen resultados exitosos.
          </p>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-12 colAboutAs">
          <img src={corazon} alt="Corazon" />
          <h3>Valores</h3>
          <ul>
            <li>Proactividad</li>
            <li>Confiabilidad</li>
            <li>Compromiso</li>
            <li>Organización</li>
            <li>Innovacion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutAs;
