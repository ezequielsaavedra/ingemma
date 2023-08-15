import "./Home.css"

import AboutAs from "../../components/AboutAs/AboutAs"
import BimMethodology from "../../components/BimMethodology/BimMethodology"
import CarouselLanding from '../../components/CarouselLanding/CarouselLanding'
import Clients from "../../components/Clients/Clients"
import Contact from "../../components/Contact/Contact"
import Portfolio from "../../components/Portfolio/Portfolio"
import React from 'react'
import Services from "../../components/Services/Services"

function Home() {
    return (
        <>
            <CarouselLanding />
            <div className="componentAboutAs">
                <AboutAs />
            </div>
            <div className="componentBimMethodology">
                <BimMethodology />
            </div>
            <div className="componentServices">
                <Services />
            </div>
            <div className="componentPortfolio">
                <Portfolio />
            </div>
            <div className="componentClients">
                <Clients />
            </div>
            <div className="componentContact">
                <Contact />
            </div>
        </>
    )
}

export default Home