import "./BIM.css"

import BIMCards from "../../components/BIMCards/BIMCards"
import BIMCarousel from "../../components/BIMCarousel/BIMCarousel"
import BIMDescription from '../../components/BIMDescription/BIMDescription'
import React from 'react'

function BIM() {
    return (
        <div>
            <div className="imgBackground">
                <BIMDescription />
                <BIMCards/>
                <BIMCarousel/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default BIM