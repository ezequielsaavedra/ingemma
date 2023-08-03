import "./BimMethodology.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import React from "react";

function BimMethodology() {
  return (
    <div>
      <Container>
        <Row>
          <h2>Metodología BIM</h2>
          <p>
            Ingemma se destaca por trabajar con metodología BIM (Building
            Information Modeling), una innovadora metodología que transforma la
            manera en que concebimos, diseñamos, construimos y gestionamos
            proyectos. A través de un enfoque colaborativo y basado en datos,
            integramos de forma inteligente todas las disciplinas del proyecto,
            permitiendo una visualización tridimensional en tiempo real, una
            mejor planificación, optimización de recursos y una mayor eficiencia
            en cada etapa. Descubre cómo nuestra experiencia en la metodología
            puede impulsar tu proyecto hacia el éxito.
          </p>
          <button>Quiero saber mas</button>
        </Row>
      </Container>
    </div>
  );
}

export default BimMethodology;
