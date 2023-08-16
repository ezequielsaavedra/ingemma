import "./BimMethodology.css";

import { Col, Container, Row } from "react-bootstrap";

import { Link } from 'react-router-dom';
import React from "react";

function BimMethodology() {
  return (
    <Container className="containerBim">
      <Row className="containerBim2">
        <Col >
          <h2>Metodología BIM</h2>
          <div className="detalleBimContainer">
            <p className="detalleBim1">Ingemma </p>
            <p className="detalleBim2">
              se destaca por trabajar con metodología{" "}
            </p>
            <p className="detalleBim1">BIM </p>
            <p className="detalleBim2">
              (Building Information Modeling), una innovadora metodología que
              transforma la manera en que concebimos, diseñamos, construimos y
              gestionamos proyectos. A través de un enfoque colaborativo y basado
              en datos, integramos de forma inteligente todas las disciplinas del
              proyecto, permitiendo una visualización tridimensional en tiempo
              real, una{" "}
            </p>
            <p className="detalleBim1">
              mejor planificación, optimización de recursos y una mayor eficiencia
              en cada etapa.
            </p>
            <p className="detalleBim3">
              Descubre cómo nuestra experiencia en la metodología puede impulsar
              tu proyecto hacia el éxito.
            </p>
          </div>
          <Link to="/BIM">
          <input className="botonSaberMas" type="button" value="Quiero saber mas"></input>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BimMethodology;
