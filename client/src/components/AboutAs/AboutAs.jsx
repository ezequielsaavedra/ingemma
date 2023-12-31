import "./AboutAs.css";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import corazon from "../../img/aboutAsCorazon.png";
import estrella from "../../img/aboutAsEstrella.png";
import ojo from "../../img/aboutAsOjo.png";

function AboutAs() {
  return (
    <Container className="containerAboutAs">
      <Row className="rowAboutAs1">
        <Col >
          <h2>¿Por qué elegir a Ingemma?</h2>
          <div className="colAboutAs1">
            <p className="detalleAboutAs2">
              Ingemma es un equipo multidisciplinario de profesionales altamente
              capacitados que ofrece soluciones arquitectónicas y servicios de ingeniería personalizados
              en los sectores de oil&gas, metalmecánica y civil. Con una amplia
              experiencia y conocimientos en diversos rubros trabajamos desde el
              diseño conceptual hasta la ingeniería de detalle, asegurando que
              cada proyecto se desarrolle de manera eficiente y cumpla con los más
              altos estándares de calidad. Nos destacamos por nuestro compromiso
              con la excelencia y la entrega de resultados de calidad que cumplen
              con los estándares más exigentes de la industria.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="rowAboutAs2">
        <Col sm={10} md={4} xl={3} className="colAboutAs">
          <img src={estrella} alt="Estrella" />
          <h3>Mision</h3>
          <p>
            Proporcionar servicios de ingeniería y soluciones arquitectónicas de
            vanguardia, impulsando la implementación de metodologías BIM y
            promoviendo la innovación en la gestión de proyectos industriales.
          </p>
        </Col>
        <Col sm={10} md={4} xl={3} className="colAboutAs">
          <img src={ojo} alt="Ojo" />
          <h3>Visión</h3>
          <p>
            Ser aliado estratégico de confianza en el desarrollo de proyectos de
            ingeniería y arquitectura, brindando soluciones que optimicen
            eficientemente los recursos y garanticen resultados exitosos.
          </p>
        </Col>
        <Col sm={10} md={4} xl={3} className="colAboutAs">
          <img src={corazon} alt="Corazon" />
          <h3>Valores</h3>
          <ul>
            <li>Proactividad</li>
            <li>Confiabilidad</li>
            <li>Compromiso</li>
            <li>Organización</li>
            <li>Innovacion</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutAs;
