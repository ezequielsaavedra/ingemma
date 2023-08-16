import "./HeaderSecciones.css"

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import logo from '../../img/logo.jpeg';

function HeaderSecciones() {

    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand}  sticky="top" bg="light" data-bs-theme="light" >
                    <Container fluid className="d-flex justify-content-center">
                        <Link to="/">
                            <Navbar.Brand href="#" className="headerBrand d-flex ">
                                <img src={logo} alt="logo"
                                    width="174"
                                    height="47"
                                    className="d-inline-block align-top" />
                            </Navbar.Brand>
                        </Link>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default HeaderSecciones
