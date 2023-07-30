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
                        <Navbar.Brand href="#" className="headerBrand">
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
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="headerText"> 
                                <img src={logo} alt="logo"
                                width="174"
                                height="47"
                                className="d-inline-block align-top" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1" className="headerText">INICIO</Nav.Link>
                                    <Nav.Link href="#action2" className="headerText">LA EMPRESA</Nav.Link>
                                    <Nav.Link href="#action3" className="headerText">METODOLOGÍA BIM</Nav.Link>
                                    <Nav.Link href="#action4" className="headerText">SERVICIOS</Nav.Link>
                                    <Nav.Link href="#action5" className="headerText">PORTFOLIO</Nav.Link>
                                    <Nav.Link href="#action6" className="headerText">CONTACTO</Nav.Link>
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