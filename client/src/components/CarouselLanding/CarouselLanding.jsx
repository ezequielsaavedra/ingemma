import "./CarouselLanding.css"

import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import carousel1 from '../../img/carousel1.jpeg';
import carousel2 from '../../img/carousel2.jpeg';
import carousel3 from '../../img/carousel3.jpeg';
import carousel4 from '../../img/carousel4.jpeg';
import carousel5 from '../../img/carousel5.jpeg';
import carousel6 from '../../img/carousel6.jpeg';

function CarouselLanding() {
    const carousel = [
        {
            src: carousel1,
            text: "Construyendo el futuro con presicion y eficiencia."
        },
        {
            src: carousel2,
            text: "Impulsando el progreso con soluciones técnicas avanzadas."
        },
        {
            src: carousel3,
            text: "Ingeniería y arquitectura en perfecta armonía."
        },
        {
            src: carousel4,
            text: "Proyectos personalizados de alta calidad."
        },
        {
            src: carousel5,
            text: "Ingeniería inteligente con metodología BIM."
        },
        {
            src: carousel6,
            text: "Calidad y precisión en la ingeniería de detalle."
        }]
    return (
        <Carousel controls={false} fade>
            {carousel.map((img, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block carouselImg"
                        src={img.src}
                        alt="First slide"
                    />
                        <Carousel.Caption className="carouselTextContainer">
                            <h3 className="carouselText">{img.text}</h3>
                        </Carousel.Caption>
                </Carousel.Item>
            ))
            }
        </Carousel>
    )
}

export default CarouselLanding
