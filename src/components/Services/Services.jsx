import "./Services.css";
import serviceOilAndGas from "../../img/serviceOilAndGas.png";
import serviceCivil from "../../img/serviceCivil.png";
import serviceMetalmecanica from "../../img/serviceMetalmecanica.png";
import serviceArquitectura from "../../img/serviceArquitectura.png";

function Services() {
  return (
    <div className="containerServices">
      <div>
        <h2>Servicios</h2>
        <p>
          En Ingemma, ofrecemos una amplia gama de servicios especializados y
          multidisciplinarios para satisfacer aquellas necesidades de nuestros
          clientes en los campos de Oil & Gas, Civil, Metalmecánica y
          Arquitectura.
        </p>
      </div>
      <div className="rowServices">
        <div className="col-xl-3 col-md-6 col-sm-12 colServices">
          <img src={serviceOilAndGas} alt="Servicio Oil & Gas" />
          <h3>Oil & Gas</h3>
          <ul>
            <li>Ingeniería conceptual, básica y de detalle.</li>
            <li>Listado de cómputo de materiales, líneas y equipos.</li>
            <li>Piping y equipos.</li>
            <li>Instrumentación y electricidad.</li>
            <li>Diagramas P&ID.</li>
            <li>Relevamiento en campo.</li>
            <li>Planos conforme a obra.</li>
            <li>Isométricos constructivos y maquetas 3D.</li>
          </ul>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 colServices">
          <img src={serviceCivil} alt="Servicio Civil" />
          <h3>Civil</h3>
          <ul>
            <li>Gestión de proyectos civiles.</li>
            <li>Planos civiles.</li>
            <li>Análisis estructural y memoria de cálculos.</li>
            <li>Verificación sísmica.</li>
            <li>Supervisión de obras civiles.</li>
            <li>Asesoramiento técnico especializado.</li>
            <li>Relevamiento en campo.</li>
            <li>Planos conforme a obra.</li>
          </ul>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 colServices">
          <img src={serviceArquitectura} alt="Servicio Arquitectura" />
          <h3>Arquitectura</h3>
          <ul>
            <li>Modelado de arquitectura.</li>
            <li>Modelado de instalaciones - MEP.</li>
            <li>Análisis de interferencias - Clash Detection.</li>
            <li>Planos constructivos.</li>
            <li>Documentación y gestión municipal.</li>
          </ul>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 colServices">
          <img src={serviceMetalmecanica} alt="Servicio Metalmecanica" />
          <h3>Metalmecánica</h3>
          <ul>
            <li>Diseño mecánico y estructura.</li>
            <li>Análisis de elementos finitos.</li>
            <li>Planos constructivos.</li>
            <li>Modelados 3D.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
