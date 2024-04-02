import React from "react";
import "./header.css"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className="header">
            <header className="headerr">
                
                <div className="logoHeader">
                <img src={logo} alt="Logo GMC" />
                </div>

            <div className="opcoesHeader">
                <Link to="/home">Inicio</Link>
                <Link to="/peças">Peças</Link>
                <Link to="/servicos">Serviços</Link>
                <Link to="/sobrenos">Sobre nós</Link>
                <Link to="/TrabalheConosco">Trabalhe Conosco</Link>
            </div>
        
            </header>
        </div>
    )
}
export default Header;