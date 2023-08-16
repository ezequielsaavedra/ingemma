import "./Home.css"

import React, { useEffect } from 'react';

import AboutAs from "../../components/AboutAs/AboutAs"
import BimMethodology from "../../components/BimMethodology/BimMethodology"
import CarouselLanding from '../../components/CarouselLanding/CarouselLanding'
import Clients from "../../components/Clients/Clients"
import Contact from "../../components/Contact/Contact"
import Header from "../../components/Header/Header"
import Portfolio from "../../components/Portfolio/Portfolio"
import Services from "../../components/Services/Services"

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <Header />
            <div id="inicio">
                <CarouselLanding />
            </div>
            <div id="componentAboutAs">
                <AboutAs />
            </div>
            <div id="componentBimMethodology">
                <BimMethodology />
            </div>
            <div id="componentServices">
                <Services />
            </div>
            <div id="componentPortfolio">
                <Portfolio />
            </div>
            <div id="componentClients">
                <Clients />
            </div>
            <div id="componentContact">
                <Contact />
            </div>
        </>
    )
}

export default Home