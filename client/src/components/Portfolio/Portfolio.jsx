import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";

import { Carousel, Col, Container, Row } from "react-bootstrap";

import { Link } from 'react-router-dom';
import React from "react";
import portfolioAmpliacionChacras from "../../img/portfolioAmpliacionChacras.png";
import portfolioAmpliacionTorreon from "../../img/portfolioAmpliacionTorreon.png";
import portfolioBotter from "../../img/portfolioBotter.png";
import portfolioCasaCorralitos from "../../img/portfolioCasaCorralitos.png";
import portfolioEdificioPeru from "../../img/portfolioEdificioPeru.png";
import portfolioMaschwitz from "../../img/portfolioMaschwitz.png";

function Portfolio() {
  return (
    <Container className="containerPortfolio">
      <Row className="rowPortfolio1">
        <h2>Portfolio</h2>
        <p>
          Nuestros proyectos construidos son el reflejo de la calidad de
          nuestros servicios en Ingemma. Todos ellos comparten el uso de la
          Tecnología BIM, que nos permite secuenciar el proceso desde el diseño
          hasta la construcción, pasando por la ingeniería y la fabricación.
          Nuestros proyectos son multidisciplinares y están categorizados según
          el servicio y sector al que se dirigen, brindando soluciones
          integrales y personalizadas.
        </p>
      </Row>
      <Row className="rowPortfolio2">
        <Col>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portfolioMaschwitz}
                alt="Portfolio Maschwitz"
              />
              <Carousel.Caption>
                <h3>Maschwitz</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portfolioCasaCorralitos}
                alt="Portfolio Casa Corralitos"
              />
              <Carousel.Caption>
                <h3>Casa Corralitos</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portfolioEdificioPeru}
                alt="Portfolio Edificio Peru"
              />
              <Carousel.Caption>
                <h3>Edificio Peru</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portfolioBotter}
                alt="Portfolio Botter"
              />
              <Carousel.Caption>
                <h3>Botter</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portfolioAmpliacionTorreon}
                alt="Portfolio Ampliacion Torreon"
              />
              <Carousel.Caption>
                <h3>Ampliacion Torreon</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                height={511}
                src={portfolioAmpliacionChacras}
                alt="Portfolio Ampliacion Chacras"
              />
              <Carousel.Caption>
                <h3>Ampliacion Chacras</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Link to="/portfolio">
      <input className="botonVerMas" type="button" value="Ver más"></input>
      </Link>
    </Container>
  );
}

export default Portfolio;
