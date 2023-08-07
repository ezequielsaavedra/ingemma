import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import serviceOilAndGas from "../../img/serviceOilAndGas.png";
import serviceCivil from "../../img/serviceCivil.png";
import serviceMetalmecanica from "../../img/serviceMetalmecanica.png";
import serviceArquitectura from "../../img/serviceArquitectura.png";

function Services() {
  return (
    <Container className="containerServices">
      <Row>
        <h2>Servicios</h2>
        <p>
          En Ingemma, ofrecemos una amplia gama de servicios especializados y
          multidisciplinarios para satisfacer aquellas necesidades de nuestros
          clientes en los campos de Oil & Gas, Civil, Metalmecánica y
          Arquitectura.
        </p>
      </Row>
      <Row className="rowServices">
        <Col sm={10} md={5} xl={2} className="colServices">
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
        </Col>
        <Col sm={10} md={5} xl={2} className="colServices">
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
        </Col>
        <Col sm={10} md={5} xl={2} className="colServices">
          <img src={serviceArquitectura} alt="Servicio Arquitectura" />
          <h3>Arquitectura</h3>
          <ul>
            <li>Modelado de arquitectura.</li>
            <li>Modelado de instalaciones - MEP.</li>
            <li>Análisis de interferencias - Clash Detection.</li>
            <li>Planos constructivos.</li>
            <li>Documentación y gestión municipal.</li>
          </ul>
        </Col>
        <Col sm={10} md={5} xl={2} className="colServices">
          <img src={serviceMetalmecanica} alt="Servicio Metalmecanica" />
          <h3>Metalmecánica</h3>
          <ul>
            <li>Diseño mecánico y estructura.</li>
            <li>Análisis de elementos finitos.</li>
            <li>Planos constructivos.</li>
            <li>Modelados 3D.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
