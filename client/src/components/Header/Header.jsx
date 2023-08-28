import "./Header.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react'
import logo from '../../img/logo.jpeg';

function Header() {

    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="d-flex align-items-end" sticky="top" bg="light" data-bs-theme="light" >
                    <Container fluid>
                            <Navbar.Brand href="#inicio" className="headerBrand">
                                <img src={logo} alt="logo"
                                    width="174"
                                    height="47"
                                    className="d-inline-block align-top" />
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            className="navBar"
                            scroll={true}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="headerBrand">
                                    <img src={logo} alt="logo"
                                        width="174"
                                        height="47"
                                        className="d-inline-block align-top" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#inicio" className="headerText">INICIO</Nav.Link>
                                    <Nav.Link href="#componentAboutAs" className="headerText" >LA EMPRESA</Nav.Link>
                                    <Nav.Link href="#componentBimMethodology" className="headerText" >METODOLOGÍA BIM</Nav.Link>
                                    <Nav.Link href="#componentServices" className="headerText" >SERVICIOS</Nav.Link>
                                    <Nav.Link href="#componentPortafolio" className="headerText">PORTAFOLIO</Nav.Link>
                                    <Nav.Link href="#componentContact" className="headerText">CONTACTO</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header
