import "./BIMPreguntasFrecuentes.css"

import { Col, Container, Row } from "react-bootstrap";

import React from 'react'
import logoPreguntas from "../../img/bimPreguntas.PNG"

function BIMPreguntasFrecuentes() {
    return (
        <Container fluid>
            <Row className="mb-5 mt-5">
                <h1 className="mb-5">
                    Preguntas Frecuentes
                </h1>
            </Row>
            <Row >
                <Col sm={2} >
                    <img src={logoPreguntas} alt="logo pregunta" />
                </Col>
                <Col sm={9} className="mt-3">
                    <h2  className="bimPreguntasTitle">¿Qué es el modelo BIM?</h2>
                    <p className="bimPreguntasText"> Se define como «metodología de trabajo colaborativo para la gestión de proyectos de edificación
                        u obra civil a través de una maqueta digital». Una maqueta 3D conformada por una gran base
                        de datos de fácil consulta. De este modo, cada uno de los trabajos que intervienen en el proyecto
                        es analizable durante todo el proceso de producción y ciclo de vida de la construcción, ofreciendo seguridad y un gran ahorro en tiempo y recursos.</p>
                </Col>
            </Row>
            <Row>
            <Col sm={2}>
                    <img src={logoPreguntas} alt="logo pregunta" />
                </Col>
                <Col sm={9} className="mt-3">
                    <h2 className="bimPreguntasTitle">¿Cómo funciona?</h2>
                    <p className="bimPreguntasText">No se trata de una herramienta digital al uso, de uno o varios programas con tecnología 3D.
                        El sistema BIM propone un modelo integral de trabajo a través del modelado y gestión
                        de la información en un ambiente de trabajo colaborativo. Sería un error identificarlo
                        como una mera evolución de programas 3D (CAD), más bien se trata de una nueva forma
                        de concebir el trabajo compartiendo la información, generando una especie de enriquecedor big data.
                    </p>
                </Col>
            </Row>
            <Row>
            <Col sm={2}>
                    <img src={logoPreguntas} alt="logo pregunta" />
                </Col>
                <Col sm={9} className="mt-3">
                    <h2  className="bimPreguntasTitle">¿Qué beneficios aporta al cliente?</h2>
                    <p className="bimPreguntasText">En primer lugar, información y transparencia. El primer beneficiado del modelo colaborativo BIM
                        es el cliente, que accede a través de la plataforma a toda la información en tiempo real. Ofrece
                        un control adicional durante todos los procesos de ejecución y mantenimiento, al igual que sobre
                        presupuestos y plazos de ejecución. Además, favorece un modelado del edificio o de la infraestructura
                        adaptado a sus requerimientos y necesidades.</p>
                </Col>
            </Row>
            <Row>
            <Col sm={2}>
                    <img src={logoPreguntas} alt="logo pregunta" />
                </Col>
                <Col sm={9} className="mt-3">
                    <h2  className="bimPreguntasTitle">¿Qué problemas pueden presentarse?</h2>
                    <p className="bimPreguntasText">Hablamos de un modelo en implantación, corrección y evolución, por lo que todos los agentes implicados están en fase de aprendizaje. Hay un común acuerdo en la importancia de la figura
                        del líder, que desde una perspectiva global gobierne todos los procesos de la plataforma de trabajo. También requiere del fuerte compromiso de todos los miembros del proyecto, ya que exige
                        la participación de todas las partes implicadas.</p>
                </Col>
            </Row>
            <Row className="mb-5">
            <Col sm={2} >
                    <img src={logoPreguntas} alt="logo pregunta" />
                </Col>
                <Col sm={9} className="mt-3">
                    <h2 className="bimPreguntasTitle">¿Por qué debo adoptarlo?</h2>
                    <p className="bimPreguntasText">Hablar de BIM no es hablar de un hipotético futuro. Si bien es cierto que aún hoy es una realidad
                        en construcción, y que de su evolución dependerá si se convierte en un estándar generalizado
                        de trabajo, cada vez son más las empresas que trabajan con él. Un hecho que en gran parte viene impuesto por la creciente inclusión del uso de BIM en las licitaciones públicas y privadas.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default BIMPreguntasFrecuentes