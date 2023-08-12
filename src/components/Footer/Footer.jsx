import "./Footer.css"

import { Col, Row } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from '../../img/logo2.jpeg';

function Footer() {
    return (
        <div className="footerContainer">
            <Container fluid>
                <Row className="footerContainerDos">
                    <Col sm={10} md={4}>
                        <Nav className="me-auto my-2 my-lg-0 justify-content-center justify-content-lg-start flex-grow-1 pe-3">
                            <Nav.Item>
                                <Nav.Link href="#action2" className="footerBrand">
                                    <img src={logo} alt="logo"
                                        className="d-inline-block " />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10} md={8}>
                        <Nav className="me-auto my-2 my-lg-0 justify-content-center justify-content-lg-end flex-grow-1 pe-3">
                            <Nav.Item>
                                <Nav.Link href="#action2" >
                                    <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff", }} className="footerIcon" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#action3" >
                                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} className="footerIcon" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#action4" >
                                    <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff", }} className="footerIcon" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#action5" >
                                    <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff", }} className="footerIcon" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row >
                    <Col sm={10}  >
                        <p className="footerText" > Dirección: calle 1234 - Email: alejandrogonzales@ingemma.com.ar - Teléfono: (+5411)2612513512 </p>
                    </Col>
                    <Col sm={10} >
                        <p className="footerText">Email: fernandopensa@ingemma.com.ar - Teléfono: (+5411)2612438830</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer