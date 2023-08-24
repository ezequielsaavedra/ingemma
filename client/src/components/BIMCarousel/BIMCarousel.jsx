import './BIMCarousel.css';

import React, { useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../img/bimCarousel1.jpeg";
import img2 from "../../img/bimCarousel2.png";
import img3 from "../../img/bimCarousel3.jpeg";
import img4 from "../../img/bimCarousel4.jpeg";
import img5 from "../../img/bimCarousel5.jpeg";

const BIMCarousel = () => {
    const [activeCard, setActiveCard] = useState(2);
    const cards = [img1, img2, img3, img4, img5];

    const handleIndicatorClick = (index) => {
        setActiveCard(index);
    };

    const handlePrevCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard - 1 + cards.length) % cards.length);
    };

    const handleNextCard = () => {
        setActiveCard((prevActiveCard) => (prevActiveCard + 1) % cards.length);
    };

    const reorderedCards = cards.map((_, index) =>
        cards[(index - activeCard + cards.length) % cards.length]
    );

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
            {reorderedCards.map((card, index) => {
                const distanceToCenter = Math.abs(index - 2);
                let scale = 1.2; 
                let rotation = 0; 
                let zIndex = 9000
                
                if (distanceToCenter === 1) {
                    scale= 0.9
                    rotation = index < 2 ? 45 : -45;
                    zIndex = 8000
                } else if (distanceToCenter === 2) {
                    scale = 0.8;
                    rotation = index < 2 ? 45 : -45;
                    zIndex = 7000
                }

                return (
                    <div
                        key={index}
                        className={`carousel-card ${index === 2 ? 'active' : ''} ${index < 2 ? 'left' : 'right'}`}
                        onClick={() => handleIndicatorClick((index + activeCard - 2 + cards.length) % cards.length)}
                        style={{ transform: `scale(${scale}) rotateY(${rotation}deg) `, zIndex:`${zIndex}` }}
                    >
                        <img src={card} alt={`Card ${index + 1}`} />
                    </div>
                );
            })}
        </div>
            <div className="carousel-indicators carousel-indicators-BIM">
                <div className="carousel-arrows">
                    <div className="arrow-left" onClick={handlePrevCard}>
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{ color: "#7b7b9b" }} />
                    </div>
                </div>
                {cards.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === activeCard ? 'indicator-active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    ></div>
                ))}
                <div className="carousel-arrows">
                    <div className="arrow-right" onClick={handleNextCard}>
                        <FontAwesomeIcon icon={faArrowRight} size="xl" style={{ color: "#7b7b9b" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BIMCarousel;
