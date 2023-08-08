import './BIMCarousel.css';

import React, { useEffect, useState } from 'react';

import img1 from "../../img/ampliacionChacras1.jpeg";
import img2 from "../../img/ampliacionChacras2.jpeg";
import img3 from "../../img/ampliacionChacras3.jpeg";
import img4 from "../../img/ampliacionChacras4.jpeg";
import img5 from "../../img/ampliacionChacras5.jpeg";

const BIMCarousel = () => {
    const [activeCard, setActiveCard] = useState(2);
    const cards = [img1, img2, img3, img4, img5];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prevActiveCard) => (prevActiveCard + 1) % cards.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const reorderCards = (offset) => {
        const reorderedCards = cards.map((_, index) =>
            cards[(index + offset + cards.length) % cards.length]
        );
        return reorderedCards;
    };

    const reorderedCards = reorderCards(-activeCard);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {reorderedCards.map((card, index) => (
                    <div
                        key={index}
                        className={`carousel-card ${index === 2 ? 'active' : ''}`}
                    >
                        <img src={card} alt={`Card ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BIMCarousel;
