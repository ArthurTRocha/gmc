import React from "react";
import "../styles/servicos.css"
import Servicos1 from "../components/servicos/servicos1/Servicos1"
import Servicos2 from "../components/servicos/servicos2/Servicos2"
import Servicos3 from "../components/servicos/servicos3/Servicos3"
import Servicos4 from "../components/servicos/servicos4/Servicos4"
import Servicos5 from "../components/servicos/servicos5/Servicos5"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import HeaderM from "../components/header/headerM";

function Servicos () {
    return (
        <div className="servicos">
            <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>            
            <Servicos1/>
            <Servicos2/>
            <Servicos3/>
            <Servicos4/>
            <Servicos5/>
            <Footer/>
        </div>
    )
}
export default Servicos;