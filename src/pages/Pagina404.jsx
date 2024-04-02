import React from "react";
import "../styles/pagina404.css"
import erro from "../assets/images/404.png"
import Header from "../components/header/Header"
import HeaderM from "../components/header/HeaderM"
import Footer from "../components/footer/Footer"

function Pagina404 () {
    return (
        <div className="pagina404P">
             <div className="headerP"><Header/></div>
            <div className="headerPM"><HeaderM/></div>
            <div className="pagina404">
            <img src={erro} alt="Imagem de uma pasta" />
            <h1>Página não encontrada !</h1>
            <h2>Está página não existe em nosso site.</h2>
            </div>
            <Footer/>
        </div>
    )
}
export default Pagina404;