import React from "react";
import "../styles/obrigado.css"
import palmas from "../assets/images/palmas.png"
import Simbolo from "../assets/images/hoverheader.png"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeaderM from "../components/header/headerM";


function Obrigado () {
    return (
        <div className="obrigado">
             <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>
            <div className="obrigadoC">
               <div className="tracoSimboloServico1">
                <img src={Simbolo} alt="Simbolo" />
            </div>
            <div className="palmasObrigado">
                <img src={palmas} alt="Palmas" />
            </div>
            <div className="textosObrigado">
                <h1>Obrigado !</h1>          
                <h2>O Formulário foi enviado com sucesso.</h2>
                  </div>
                  </div>
                  <Footer/>
        </div>
    )
}
export default Obrigado;