import React from "react";
import "./footer.css"
import logo from "../../assets/images/logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import arrow from "../../assets/images/arrowfooter.png"
import { Link } from "react-router-dom";

function Footer () {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    

    return (
        <div className="footer">
            <footer className="footerrr">
            <footer className="footerr">
                <div className="ladodireitoFooter">
                <div className="logoFooter">
                    <img src={logo} alt="Logo Footer" />
                </div>
                <div className="redesociaisFooter">
                  <a href="http://facebook.com/gmcindustrial" target="blanck"><FaFacebook className="iconeFooter"/></a>     
                  <a href="https://api.whatsapp.com/send?phone=5531990872160" target="_blank"><FaWhatsapp  className="iconeFooter" /></a>       
                    <a href="http://instagram.com/gmcindustrial" target="blanck"><FaInstagram  className="iconeFooter"/></a>            
                  <a href="https://www.linkedin.com/company/gmc-industrial/about/" target="blanck"><FaLinkedin  className="iconeFooter"/></a>     
                </div>
                </div>
                <div className="ladoesquerdo">
                    <div className="opcoesFooter">
                <Link to="/peças">Peças</Link>
                <Link to="/servicos">Serviços</Link>
                <Link to="/sobrenos">Sobre nós</Link>
                <Link to="/TrabalheConosco">Trabalhe Conosco</Link>
                </div>
                </div>
                </footer>

                <div className="parteFinalFooter">
                <p className="parteFinalFooterP">Todos os direitos autorais reservados 2024</p>
                <button className="buttonIMGFooter" onClick={scrollToTop}><img src={arrow} alt="Arrow" /></button>
                <p className="parteFinalFooterPM">Todos os direitos autorais reservados 2024</p>
                <p className="parteFinalFooterPD">Desenvolvido por FastPlay Comunicação</p>
                </div>
                </footer>
        </div>
    )
}
export default Footer;