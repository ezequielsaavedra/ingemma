import "./Contact.css";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consult, setConsult] = useState("");

  console.log(name, email, consult);

  const enviarEmail = async () => {
    setLoading(true);

    try {
      await axios.post("/api/form", {
        name,
        email,
        consult,
      });
      setName("");
      setEmail("");
      setConsult("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="containerContact">
        <Row className="rowContact1">
          <h2>Contáctanos</h2>
          <h3 className="sendingEmail">Enviando email...</h3>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="containerContact">
      <Row className="rowContact1">
        <h2>Contáctanos</h2>
        <form>
          <Row className="rowContact2">
            <Col sm={12} md={12} xl={6} className="colContact">
              <label>Nombre y apellido</label>
              <input
                type="text"
                placeholder="Escribe aqui tu nombre y apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col sm={12} md={12} xl={6} className="colContact">
              <label>Email</label>
              <input
                type="email"
                placeholder="Escribe aqui tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="rowContact3">
            <Col sm={12} md={12} xl={12} className="colContact">
              <label>Consulta</label>
              <textarea
                rows="4"
                placeholder="Escribe aqui tu consulta"
                value={consult}
                onChange={(e) => setConsult(e.target.value)}
              ></textarea>
            </Col>
          </Row>
        </form>
      </Row>
      <button type="submit" className="botonEnviar" onClick={enviarEmail}>
        Enviar
      </button>
    </Container>
  );
};

export default Contact;
