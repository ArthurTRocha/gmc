import React from "react";
import "./contato.css"
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import engrenagem from '../imagensComponentes/Engreanagem.png'


function Contato () {
    return (
        <div className="contato" id="contato">
            <div className="ConteinerBarraIntroducao">
                                <div className='baraIntroducao3'></div>
                                <img className='engrenagem' src={engrenagem} alt='engrenagem' />
                            </div>
                            <div className="conteinerContato">
            <div className="textoContato">
                <h1>Contato</h1>
                <p>Estamos à disposição para atendê-lo. 
                    Entre em contato conosco por telefone ou email 
                    para esclarecer dúvidas, solicitar orçamentos ou 
                    discutir suas necessidades.</p>
            </div>
            <div className="cardContato">
                <h3 className="h3cardContato"><MdOutlineEmail className="iconeContato"/>contato@gmcindutrial.com.br</h3>
                <h3><BsTelephone className="iconeContato"/>(31) 9 9087-2160</h3>
            </div>

        

            <div className="redesociaisContato">
            <a href="https://www.linkedin.com/company/gmc-industrial/about/" target="blanck"><FaLinkedin className="iconContato"/> </a>
            <a href="http://instagram.com/gmcindustrial" target="blanck"><FaInstagram className="iconContato"/> </a>
            <a href="https://api.whatsapp.com/send?phone=5531990872160" target="_blank"><FaWhatsapp className="iconContato"/> </a>
            <a href="http://facebook.com/gmcindustrial" target="blanck"><FaFacebook className="iconContato"/> </a>
             </div>

            </div>
        </div>
    )
}
export default Contato;