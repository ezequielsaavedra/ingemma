import "./Contact.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import React from "react";

function Contact() {
  return (
    <div>
      <Container>
        <form>
          <Row>
            <h2>Contáctanos</h2>
            <Col sm={12} md={6} xl={6}>
              <label for="nombre">Nombre y apellido</label>
              <input
                type="text"
                placeholder="Escribe aqui tu nombre y apellido"
                id="nombre"
              />
            </Col>
            <Col sm={12} md={6} xl={6}>
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Escribe aqui tu email"
                id="email"
              />
            </Col>
          </Row>
          <Row>
            <label for="consulta">Tu consulta</label>
            <input
              type="text"
              placeholder="Escribe aqui tu consulta"
              id="consulta"
            />
          </Row>
          <input type="submit" />
        </form>
      </Container>
    </div>
  );
}

export default Contact;
