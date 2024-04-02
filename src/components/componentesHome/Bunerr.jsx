import React from "react";
import "./bunerr.css"
import icon1 from '../imagensComponentes/construction.png'
import icon2 from '../imagensComponentes/work.png'
import icon3 from '../imagensComponentes/raven.png'

import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Bunerr () {

    function scrollTocontato() {
        const contato = document.getElementById('contato');
        if (contato) {
            contato.scrollIntoView({ behavior: 'smooth' });
        }
      }


      const navigate = useNavigate();

      const redirecionarParaPagina = () => {
        navigate('/peças');
      };

    return (
        <div className="bunerr">
            <div className="bunerrTextos">
                <h1>Conheça a GMC</h1>
                <p>Sua parceira essencial em <span>soluções indústriais</span>.
                    Destacamos no fornecimento de peças de qualidade superior, 
                    abrangendo diversas indústrias. Além disso, oferecemos <span>serviços especializados</span>, 
                    impulsionando a eficiência operacional e a inovação. Conte conosco para elevar o 
                    padrão de excelência em sua produção.</p>
            </div>
            <div className="buttonBunerr">
                <button className="butaoBunerr" onClick={redirecionarParaPagina}>Ver todas as peças</button>
                <button className="butaoBunerr1" onClick={scrollTocontato}>Entre em contato</button>
            </div>
            <div className="cardsBunerr">
                <div className="cardBunerr">
                    <h1>+ de 60</h1>
                    <h2>Peças</h2>
                    <img src={icon1} alt="Imagem de um Martelo" />
                </div>
                <div className="card1Bunerr">
                    <h1>+ de 10</h1>
                    <h2>Serviços</h2>
                    <img src={icon2} alt="Imagem de uma Mala" />
                </div>
                <div className="card2Bunerr">
                    <h1>Foco</h1>
                    <h2>Em Agro Indústria</h2>
                    <img src={icon3} alt="Imagem de um Passaro" />
                </div>
            </div>


            <div className="redesSociaisBunerr">
            <a href="http://facebook.com/gmcindustrial" target="blanck"><FaFacebook className="iconeBunerr"/></a>
                <a href="https://api.whatsapp.com/send?phone=5531990872160" target="_blank"><FaWhatsapp className="iconeBunerr"/></a>
                <a href="http://instagram.com/gmcindustrial" target="blanck"><FaInstagram className="iconeBunerr"/></a>
                <a href="https://www.linkedin.com/company/gmc-industrial/about/" target="blanck"><FaLinkedin className="iconeBunerr"/></a>
            </div>
        </div>
    )
}
export default Bunerr;