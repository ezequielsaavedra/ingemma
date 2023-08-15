import "./Clients.css";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import logoHectorDominguez from "../../img/logoHectorDominguez.png";
import logoLauro from "../../img/logoLauro.png";

function Clients() {
  return (
    <Container className="containerClients">
      <Row className="rowClients">
        <Col sm={10} md={5} xl={5} className="colClients">
          <h2>Nuestros clientes</h2>
        </Col>
        <Col sm={10} md={5} xl={5} className="colClients">
          <div>
            <img src={logoLauro} alt="logo LAURO" width={165} height={154} />
          </div>
          <div>
            <img
              src={logoHectorDominguez}
              alt="logo Hector Dominguez"
              width={200}
              height={135}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Clients;
