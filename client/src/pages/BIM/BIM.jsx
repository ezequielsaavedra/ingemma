import "./BIM.css"

import React, { useEffect } from 'react';

import BIMCards from "../../components/BIMCards/BIMCards"
import BIMCarousel from "../../components/BIMCarousel/BIMCarousel"
import BIMDescription from '../../components/BIMDescription/BIMDescription'
import BIMPreguntasFrecuentes from "../../components/BIMPreguntasFrecuentes/BIMPreguntasFrecuentes";
import HeaderSecciones from "../../components/HeaderSecciones/HeaderSecciones"

function BIM() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <HeaderSecciones />
            <div className="imgBackground">
                <BIMDescription />
                <BIMCards />
                <BIMCarousel />
            </div>
            <div>
                <BIMPreguntasFrecuentes />
            </div>
        </div>
    )
}

export default BIM