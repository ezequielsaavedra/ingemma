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
    const carousel = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6]
    return (

        <Carousel controls={false} indicators={false} >
            {carousel.map((img, index) => (
                <Carousel.Item key={index} interval={500}>
                    <img
                        className="d-block w-100 carouselImg"
                        src={img}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))
            }
        </Carousel>
    )
}

export default CarouselLanding
