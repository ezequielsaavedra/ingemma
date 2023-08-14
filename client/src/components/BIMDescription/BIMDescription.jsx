import "./BIMDescription.css"

import Card from 'react-bootstrap/Card';
import React from 'react'

function BIMDescription() {
    return (
        <Card className="bimCard">
            <Card.Body>
                <Card.Title className="bimTitle fs-1 text-wrap mt-5"> Metodología </Card.Title>
                <Card.Title className="bimTitle fs-1 text-wrap">  BIM</Card.Title>
                <Card.Text className="textContainer">
                Ingemma se destaca por trabajar con BIM o Building Information Modeling. Es una metodología de trabajo colaborativa para la creación y gestión de un proyecto de construcción. Su objetivo es centralizar toda la información del proyecto en un único modelo de información digital creado por todos sus agentes participantes. La réplica tridimensional y virtual hacen que el BIM sea ideal para poder visualizar y analizar todas las etapas de una construcción. Toda esta información se puede extraer para desarrollar los presupuestos y así lograr una mejor planificación.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BIMDescription
