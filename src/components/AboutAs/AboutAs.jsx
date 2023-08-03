import "./AboutAs.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import React from "react";

function AboutAs() {
  return (
    <div>
      <Container fluid>
        <Row>
          <h2>¿Por qué elegir a Ingemma?</h2>
          <p>
            Ingemma es un equipo multidisciplinario de profesionales altamente
            capacitados que ofrece soluciones arquitectónicas y servicios de
            ingeniería personalizados en los sectores de oil&gas, metalmecánica
            y civil. Con una amplia experiencia y conocimientos en diversos
            rubros, trabajamos desde el diseño conceptual hasta la ingeniería de
            detalle, asegurando que cada proyecto se desarrolle de manera
            eficiente y cumpla con los más altos estándares de calidad. Nos
            destacamos por nuestro compromiso con la excelencia y la entrega de
            resultados de calidad que cumplen con los estándares más exigentes
            de la industria.
          </p>
          <Col sm={12} md={6} xl={4}>
            <h3>Mision</h3>
            <p>
              Proporcionar servicios de ingeniería y soluciones arquitectónicas
              de vanguardia, impulsando la implementación de metodologías BIM y
              promoviendo la innovación en la gestión de proyectos industriales.
            </p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h3>Visión</h3>
            <p>
              Ser aliado estratégico de confianza en el desarrollo de proyectos
              de ingeniería y arquitectura, brindando soluciones que optimicen
              eficientemente los recursos y garanticen resultados exitosos.
            </p>
          </Col>
          <Col sm={12} md={6} xl={4}>
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
    </div>
  );
}

export default AboutAs;