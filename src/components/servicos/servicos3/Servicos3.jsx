import React from "react";
import "./servicos3.css"
import nada from "../../../assets/images/nada.png"
import nadaa from "../../../assets/images/nadaabranco.png"
import iconecard from "../../../assets/images/iconecard.png"
import manutencaoC from "../../../assets/images/manutencaoC.jpg"

function Servicos3 () {
    return (
        <div className="servicos3">
            <div className="servicoss3">
            <div className="servicos3TextosImages">
            <img src={nadaa} alt="Icone" className="iconNadaServicos3"/>
            <div className="textosServicos3">
            <h1>Manutenção de máquinas e equipamentos industriais</h1>
            <p>Garanta o pleno funcionamento de sua operação com a expertise em Manutenção de 
                Máquinas e Equipamentos Industriais. Eficiência, confiabilidade e durabilidade 
                para o seu parque industrial. Conte conosco para preservar o desempenho que 
                impulsiona seus negócios</p>
            </div>  
            <img src={manutencaoC} alt="Imagem Manutenção Industrial" className="iconeNadaServicos3"/>

                </div>

                <div className="cardsServicos3">

                    <div className="card1Servico3">
                        <img src={iconecard} alt="Icone Card" />
                        Durabilidade
                    </div>

                    <div className="card2Servico3">
                    <img src={iconecard} alt="Icone Card" />
                    Agilidade
                        </div>

                        <div className="card3Servico3">
                        <img src={iconecard} alt="Icone Card" />
                        Eficiência
                        </div>
                </div>

                </div>

        </div>
    )
}
export default Servicos3;