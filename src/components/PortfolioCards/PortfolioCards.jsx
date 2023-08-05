import "./PortfolioCards.css"

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import ampliacionChacras1 from "../../img/ampliacionChacras1.jpeg"
import ampliacionChacras2 from "../../img/ampliacionChacras2.jpeg"
import ampliacionChacras3 from "../../img/ampliacionChacras3.jpeg"
import ampliacionChacras4 from "../../img/ampliacionChacras4.jpeg"
import ampliacionChacras5 from "../../img/ampliacionChacras5.jpeg"
import ampliacionChacras6 from "../../img/ampliacionChacras6.jpeg"
import ampliacionTorreon1 from "../../img/ampliacionTorreon1.jpeg"
import ampliacionTorreon2 from "../../img/ampliacionTorreon2.jpeg"
import ampliacionTorreon3 from "../../img/ampliacionTorreon3.jpeg"
import ampliacionTorreon4 from "../../img/ampliacionTorreon4.jpeg"
import casaCorralito1 from "../../img/casaCorralito1.jpeg"
import casaCorralito2 from "../../img/casaCorralito2.jpeg"
import casaCorralito3 from "../../img/casaCorralito3.jpeg"
import casaCorralito4 from "../../img/casaCorralito4.jpeg"
import edificioPeru1 from "../../img/edificioPeru1.jpeg"
import edificioPeru2 from "../../img/edificioPeru2.jpeg"
import edificioPeru3 from "../../img/edificioPeru3.jpeg"
import edificioPeru4 from "../../img/edificioPeru4.jpeg"
import edificioPeru5 from "../../img/edificioPeru5.jpeg"
import obraBotter1 from "../../img/obraBotter1.jpeg"
import obraBotter2 from "../../img/obraBotter2.jpeg"
import obraBotter3 from "../../img/obraBotter3.jpeg"
import obraBotter4 from "../../img/obraBotter4.jpeg"
import obraBotter5 from "../../img/obraBotter5.jpeg"

function PortfolioCards() {
    const portfolioCards = [
        {
            title: "Casa corralitos.",
            descripcion: "Sistema constructivo: EPS.",
            img1: casaCorralito1,
            img2: casaCorralito2,
            img3: casaCorralito3,
            img4: casaCorralito4,
            background: "white",
            textUno: "textBlue",
            textDos: "textGray"
        },
        {
            title: "Edificio Perú",
            descripcion: "Sistema constructivo: EPS.",
            img1: edificioPeru1,
            img2: edificioPeru2,
            img3: edificioPeru3,
            img4: edificioPeru4,
            img5: edificioPeru5,
            background: "blue",
            textUno: "textWhite",
            textDos: "textWhite",
        },
        {
            title: "Obra Botter",
            descripcion: "Ampliación y remodelación de departamentos.",
            img1: obraBotter1,
            img2: obraBotter2,
            img3: obraBotter3,
            img4: obraBotter4,
            img5: obraBotter5,
            background: "white",
            textUno: "textBlue",
            textDos: "textGray"
        },
        {
            title: "Ampliación Torreón",
            descripcion: "Sistema constructivo: Steel Frame.",
            img1: ampliacionTorreon1,
            img2: ampliacionTorreon2,
            img3: ampliacionTorreon3,
            img4: ampliacionTorreon4,
            background: "blue",
            textUno: "textWhite",
            textDos: "textWhite",
        },
        {
            title: "Ampliación Chacras",
            descripcion: "Sistema constructivo: New Panel",
            img1: ampliacionChacras1,
            img2: ampliacionChacras2,
            img3: ampliacionChacras3,
            img4: ampliacionChacras4,
            img5: ampliacionChacras5,
            img6: ampliacionChacras6,
            background: "white",
            textUno: "textBlue",
            textDos: "textGray"
        }
    ]

    return (
        <>
            {portfolioCards.map((proyecto, index) => (
                <CardGroup key={index} className={`d-flex flex-row overflow-x-scroll flex-nowrap ${proyecto.background}`} >
                    <Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Body >
                            <Card.Title className={`cardTitle ${proyecto.textUno}`}>{proyecto.title}</Card.Title>
                            <Card.Text className={`cardText  ${proyecto.textDos}`}>
                                {proyecto.descripcion}
                            </Card.Text>
                        </Card.Body >
                    </Card>
                    <Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Img variant="top" src={proyecto.img1} />
                    </Card>
                    <Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Img variant="top" src={proyecto.img2} />
                    </Card>
                    <Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Img variant="top" src={proyecto.img3} />
                    </Card>
                    <Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Img variant="top" src={proyecto.img4} />
                    </Card>
                    {proyecto.img5 ? (<Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Img variant="top" src={proyecto.img5} />
                    </Card>) : null}
                    {proyecto.img6 ? (<Card className={`portfolioCard ${proyecto.background}`}>
                        <Card.Img variant="top" src={proyecto.img6} />
                    </Card>) : null}
                </CardGroup>

            ))}
        </>
    )
}

export default PortfolioCards
