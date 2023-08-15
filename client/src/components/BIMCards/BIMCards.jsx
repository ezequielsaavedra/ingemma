import "./BIMCards.css"

import { Col, Container, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import React from 'react'

function BIMCards() {
    return (
        <Container className="mt-5" >
            <Row className="d-flex  justify-content-between">
                <Col sm="10" md="6" d-flex justify-content-center>
                    <Card className="bimCards mb-5">
                        <Card.Body >
                            <Card.Title className="mb-5 mt-3">Proceso</Card.Title>
                            <Card.Text className="ms-4 mb-4 me-4 cardsText">
                                El sistema BIM es un enfoque integral que abarca todas las fases del ciclo de vida de un proyecto de construcción. Comienza con la creación de un modelo digital tridimensional detallado en el que colaboran profesionales de diversas disciplinas. Este modelo se actualiza constantemente, permitiendo una coordinación eficiente durante la construcción y brindando una valiosa herramienta de gestión de activos
                                una vez finalizada.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="10" md="6" className="d-flex justify-content-center" >
                    <Card className="bimCards mb-5">
                        <Card.Body>
                            <Card.Title className="mb-4 mt-3">Beneficios</Card.Title>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">1.</h6> Mejor coordinación.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">2.</h6> Reducción de costos y tiempos.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">3.</h6> Gestión en la toma de decisión.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">4.</h6> Análisis y simulaciones avanzadas.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">5.</h6> Mejora de la calidad del proyecto.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">6.</h6> Mantenimiento eficiente de activos.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">7.</h6> Colaboración y comunicación mejoradas.
                            </Card.Text>
                            <Card.Text className='d-flex flex-row ms-3 cardsText'>
                                <h6 className="me-2">8.</h6>Visualización y comprensión superior.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default BIMCards