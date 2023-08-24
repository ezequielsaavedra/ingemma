import "./PortafolioDescription.css"

import Background from "../../img/portafolioBackground.jpeg"
import Card from 'react-bootstrap/Card';
import React from 'react'

function PortafolioDescription() {
    return (
        <Card className="text-white">
            <Card.Img src={Background} alt="Portafolio image" className="cardImageBackground"/>
            <Card.ImgOverlay className="d-flex align-content-around flex-wrap justify-content-center" >
                <Card.Title className="portafolioTitle">Portafolio</Card.Title>
                <Card.Text className="portafolioDescription">
                    Nuestros proyectos realizados son el reflejo de nuestros servicios. todos ellos comparten el uso de herramientas
                    informaticas y gestion que nos permiten secuenciar el proceso desde el diseño hasta su construccion pasando
                    por la ingenieria y la fabricacion. Nuestros proyectos son multidisciplinarios y están categorizados según el servicio y el sector al que se dirigen, brindando soluciones integrales y personalizadas.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default PortafolioDescription