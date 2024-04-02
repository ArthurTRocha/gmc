import React from "react";
import "../styles/sobrenos.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import SobreNosC from "../components/sobrenos/sobreNosC/SobreNosC"
import SobreNosCC from "../components/sobrenos/sobreNosCC/SobreNosCC"
import HeaderM from "../components/header/headerM";

function SobreNos () {
    return (
        <div className="sobreNos">
            <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>           
             <SobreNosC/>

            <SobreNosCC/>

            <Footer/>
        </div>
    )
}
export default SobreNos;