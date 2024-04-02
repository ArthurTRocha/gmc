import React from "react";
import "./servicos2.css"
import nada from "../../../assets/images/nada.png"
import nadaa from "../../../assets/images/nadaa.png"
import iconecard from "../../../assets/images/iconecard.png"
import cemp from "../../../assets/images/cemp.jpg"

function Servicos2 () {
    return (
        <div className="servicos2">
            <div className="servicoss2">
            <div className="servicos2TextosImages">
            <img src={cemp} alt="Consultoria Industrial" className="iconeNadaServicos2"/>
            <img src={nadaa} alt="Icone" className="iconNadaServicos2"/>
            <div className="textosServicos2">
            <h1>Consultoria em gestão de produção</h1>
            <p>Maximize sua eficiência produtiva com a Consultoria em Gestão. Estratégias 
                personalizadas para otimizar processos, reduzir custos e impulsionar resultados. 
                O caminho para uma produção mais eficaz começa aqui</p>
            </div>  
                </div>

                <div className="cardsServicos2">

                    <div className="card1Servico">
                        <img src={iconecard} alt="Icone Card" />
                        Eficiência
                    </div>

                    <div className="card2Servico">
                    <img src={iconecard} alt="Icone Card" />
                    Estratégias
                        </div>

                        <div className="card3Servico">
                        <img src={iconecard} alt="Icone Card" />
                        Resultados
                        </div>
                </div>

                </div>

        </div>
    )
}
export default Servicos2;