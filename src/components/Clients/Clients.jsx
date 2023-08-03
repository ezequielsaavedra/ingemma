import "./Clients.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import React from "react";
import logoLauro from "../../img/logoLauro.png";
import logoHectorDominguez from "../../img/logoHectorDominguez.png";

function Clients() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Nuestros clientes</h2>
          </Col>
          <Col>
            <img src={logoLauro} alt="logo LAURO" width={165} height={154} />
          </Col>
          <Col>
            <img
              src={logoHectorDominguez}
              alt="logo Hector Dominguez"
              width={200}
              height={135}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clients;
