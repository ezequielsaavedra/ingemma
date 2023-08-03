import "./Portfolio.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import React from "react";

function Portfolio() {
  return (
    <div>
      <Container>
        <Row>
          <h2>Portfolio</h2>
          <p>
            Nuestros proyectos construidos son el reflejo de la calidad de
            nuestros servicios en Ingemma. Todos ellos comparten el uso de la
            Tecnología BIM, que nos permite secuenciar el proceso desde el
            diseño hasta la construcción, pasando por la ingeniería y la
            fabricación. Nuestros proyectos son multidisciplinares y están
            categorizados según el servicio y sector al que se dirigen,
            brindando soluciones integrales y personalizadas.
          </p>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
        <Row>
            <button>Ver mas</button>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
