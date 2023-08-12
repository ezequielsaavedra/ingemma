import "./WspButton.css"

import React from 'react'
import whatsapp from '../../img/whatsApp.jpeg';

function WspButton() {
    return (
        <div className='wspButton'>
            <img src={whatsapp} alt="whatsapp logo" className="icon" />
        </div>
    ) 
}

export default WspButton
