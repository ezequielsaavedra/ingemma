import React, { useEffect } from 'react';

import HeaderSecciones from "../../components/HeaderSecciones/HeaderSecciones"
import PortfolioCards from '../../components/PortfolioCards/PortfolioCards'
import PortfolioDescription from '../../components/PortfolioDescription/PortfolioDescription'

function PortfolioScreen() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <HeaderSecciones />
            <PortfolioDescription />
            <PortfolioCards />
        </>
    )
}

export default PortfolioScreen