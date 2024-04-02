import React from "react";
import "./servicoc.css"
import Simbolo from "../imagensComponentes/nadaa.png"
import { Link } from "react-router-dom";

function ServicoC () {
    return (
        <div className="servicoc">
            <div className="textoServicoC">
                <h1>
                Serviços
                </h1>
                <p>A GMC Industrial se destaca por oferecer serviços especializados, 
                    desde consultoria e manutenção até soluções personalizadas, 
                    impulsionando a eficiência e o sucesso operacional 
                    de sua indústria</p>
            </div>
            <Link to='/servicos'><button className="buttonServicoC">Mais serviços</button></Link>
            <div className="simbolotexto">
                <img src={Simbolo} alt="Simbolo" />
                <div className="textoSimbolo">
                <h3>Consultoria em gestão de produção</h3>
                <h3>Manutenção de máquinas e equipamentos industriais</h3>
                </div>
            </div>
            <div className="unirDivSimboloServicoC">
            <div className="corPretaServicoC"></div>

            <div className="simbolotexto2">
                <div className="textoSimbolo2">
                <h3>Pintura industrial</h3>
                <h3>Serviço de manutenção Elétrica</h3>
                </div>
                <img src={Simbolo} alt="Simbolo" />
            </div>
            </div>
        </div>
    )
}
export default ServicoC;