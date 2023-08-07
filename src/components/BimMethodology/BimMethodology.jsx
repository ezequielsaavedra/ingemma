import "./BimMethodology.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function BimMethodology() {
  return (
    <Container className="containerBim">
      <Row>
        <Col>
          <h2>Metodología BIM</h2>
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
          <button>Quiero saber mas</button>
        </Col>
      </Row>
    </Container>
  );
}

export default BimMethodology;
