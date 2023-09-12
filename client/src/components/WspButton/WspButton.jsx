import "./WspButton.css";
import React from "react";
import whatsapp from "../../img/whatsApp.jpeg";
import { Link } from "react-router-dom";

function WspButton() {
  const phoneNumber = "5492612595581";
  return (
    <div className="wspButton">
      <Link to={`https://wa.me/${phoneNumber}`}>
        <img src={whatsapp} alt="whatsapp logo" className="icon" />
      </Link>
    </div>
  );
}

export default WspButton;
