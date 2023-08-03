import "./Services.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import React from "react";
import logoLauro from "../../img/logoLauro.png";

function Services() {
  return (
    <div>
      <Container>
        <Row>
          <h2>Servicios</h2>
          <p>
            En Ingemma, ofrecemos una amplia gama de servicios especializados y
            multidisciplinarios para satisfacer aquellas necesidades de nuestros
            clientes en los campos de Oil & Gas, Civil, Metalmecánica y
            Arquitectura.
          </p>
        </Row>
        <Row>
          <Col sm={3} md={3} xl={3}>
            <img src={logoLauro} alt="" />
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
          <Col sm={3} md={3} xl={3}>
            <img src={logoLauro} alt="" />
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
          <Col sm={3} md={3} xl={3}>
            <img src={logoLauro} alt="" />
            <h3>Metalmecánica</h3>
            <ul>
              <li>Diseño mecánico y estructura.</li>
              <li>Análisis de elementos finitos.</li>
              <li>Planos constructivos.</li>
              <li>Modelados 3D.</li>
            </ul>
          </Col>
          <Col sm={3} md={3} xl={3}>
            <img src={logoLauro} alt="" />
            <h3>Arquitectura</h3>
            <ul>
              <li>Modelado de arquitectura.</li>
              <li>Modelado de instalaciones - MEP.</li>
              <li>Análisis de interferencias - Clash Detection.</li>
              <li>Planos constructivos.</li>
              <li>Documentación y gestión municipal.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
