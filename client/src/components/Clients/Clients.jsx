import "./Clients.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import logoLauro from "../../img/logoLauro.png";
import logoHectorDominguez from "../../img/logoHectorDominguez.png";

function Clients() {
  return (
    <Container className="containerClients">
      <Row className="rowClients">
        <Col sm={4} md={4} xl={4} className="colClients">
          <h2>Nuestros clientes</h2>
        </Col>
        <Col sm={4} md={4} xl={4} className="colClients">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Clients;
