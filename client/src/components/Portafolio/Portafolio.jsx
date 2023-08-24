import "./Portafolio.css";
import "bootstrap/dist/css/bootstrap.css";

import { Carousel, Col, Container, Row } from "react-bootstrap";

import { Link } from 'react-router-dom';
import React from "react";
import portafolioAmpliacionChacras from "../../img/portafolioAmpliacionChacras.png";
import portafolioAmpliacionTorreon from "../../img/portafolioAmpliacionTorreon.png";
import portafolioBotter from "../../img/portafolioBotter.png";
import portafolioCasaCorralitos from "../../img/portafolioCasaCorralitos.png";
import portafolioEdificioPeru from "../../img/portafolioEdificioPeru.png";
import portafolioMaschwitz from "../../img/portafolioMaschwitz.png";

function Portafolio() {
  return (
    <Container className="containerPortafolio">
      <Row className="rowPortafolio1">
        <Col>
          <h2>Portafolio</h2>
          <p>
            Nuestros proyectos construidos son el reflejo de la calidad de
            nuestros servicios en Ingemma. Todos ellos comparten el uso de la
            Metodología BIM, que nos permite secuenciar el proceso desde el diseño
            hasta la construcción, pasando por la ingeniería y la fabricación.
            Nuestros proyectos son multidisciplinares y están categorizados según
            el servicio y sector al que se dirigen, brindando soluciones
            integrales y personalizadas.
          </p>
        </Col>
      </Row>
      <Row className="rowPortafolio2">
        <Col sm={10} md={4} xl={3}>
          <Carousel indicators={false} fade>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portafolioMaschwitz}
                alt="Portafolio Maschwitz"
              />
              <Carousel.Caption>
                <h3>Maschwitz</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portafolioCasaCorralitos}
                alt="Portafolio Casa Corralitos"
              />
              <Carousel.Caption>
                <h3>Casa Corralitos</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={10} md={4} xl={3}>
          <Carousel indicators={false} fade>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portafolioEdificioPeru}
                alt="Portafolio Edificio Peru"
              />
              <Carousel.Caption>
                <h3>Edificio Peru</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portafolioBotter}
                alt="Portafolio Botter"
              />
              <Carousel.Caption>
                <h3>Botter</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={10} md={4} xl={3}>
          <Carousel indicators={false} fade>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portafolioAmpliacionTorreon}
                alt="Portafolio Ampliacion Torreon"
              />
              <Carousel.Caption>
                <h3>Ampliacion Torreon</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portafolioAmpliacionChacras}
                alt="Portafolio Ampliacion Chacras"
              />
              <Carousel.Caption>
                <h3>Ampliacion Chacras</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Link to="/portafolio">
        <input className="botonVerMas" type="button" value="Ver más"></input>
      </Link>
    </Container>
  );
}

export default Portafolio;
