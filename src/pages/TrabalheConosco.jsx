import React from "react";
import "../styles/trabalheconosco.css"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TrabalheConoscoC from "../components/trabalheConosco/TrabalheConoscoC"
import TrabalheConoscoCC1 from "../components/trabalheConosco/TrabalheConoscoCC";
import HeaderM from "../components/header/headerM";


function TrabalheConosco () {
    return (
        <div className="trabalheConosco">
            <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>        
            <TrabalheConoscoC/>
        <TrabalheConoscoCC1/>
            <Footer/>
        </div>
    )
}
export default TrabalheConosco;