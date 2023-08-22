import React, { useEffect } from 'react';

import HeaderSecciones from "../../components/HeaderSecciones/HeaderSecciones"
import PortafolioCards from '../../components/PortafolioCards/PortafolioCards'
import PortafolioDescription from '../../components/PortafolioDescription/PortafolioDescription'

function PortafolioScreen() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <HeaderSecciones />
            <PortafolioDescription />
            <PortafolioCards />
        </>
    )
}

export default PortafolioScreen