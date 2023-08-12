import "./PortfolioDescription.css"

import Background from "../../img/portfolioBackground.jpeg"
import Card from 'react-bootstrap/Card';
import React from 'react'

function PortfolioDescription() {
    return (
        <Card className="text-white">
            <Card.Img src={Background} alt="Portfolio image" />
            <Card.ImgOverlay className="d-flex align-content-around flex-wrap justify-content-center " >
                <Card.Title className="portfolioTitle">Portfolio</Card.Title>
                <Card.Text className="portfolioDescription">
                    Nuestros proyectos realizados son el reflejo de nuestros servicios. todos ellos comparten el uso de herramientas
                    informaticas y gestion que nos permiten secuenciar el proceso desde el diseño hasta su construccion pasando
                    por la ingenieria y la fabricacion. Nuestros proyectos son multidisciplinarios y están categorizados según el servicio y el sector al que se dirigen, brindando soluciones integrales y personalizadas.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default PortfolioDescription