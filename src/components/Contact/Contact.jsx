import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

function Contact() {
  return (
    <Container className="containerContact">
      <form>
        <Row className="rowContact1">
          <h2>Contáctanos</h2>
          <Row className="rowContact2">
            <Col sm={12} md={12} xl={6} className="colContact">
              <label>Nombre y apellido</label>
              <input
                type="text"
                placeholder="Escribe aqui tu nombre y apellido"
                id="nombre"
              />
            </Col>
            <Col sm={12} md={12} xl={6} className="colContact">
              <label>Email</label>
              <input
                type="email"
                placeholder="Escribe aqui tu email"
                id="email"
              />
            </Col>
          </Row>
          <Row className="rowContact3">
            <Col sm={12} md={12} xl={12} className="colContact">
              <label>Tu consulta</label>
              <input
                type="text"
                placeholder="Escribe aqui tu consulta"
                id="consulta"
              />
            </Col>
          </Row>
        </Row>
        <input className="botonEnviar" type="button" value="Enviar"></input>
      </form>
    </Container>
  );
}

export default Contact;
