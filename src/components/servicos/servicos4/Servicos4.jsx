import React from "react";
import "./servicos4.css"
import nada from "../../../assets/images/nada.png"
import nadaa from "../../../assets/images/nadaavermelho.png"
import iconecard from "../../../assets/images/iconecard.png"
import pintura from "../../../assets/images/pintura.jpg"

function Servicos4 () {
    return (
        <div className="servicos4">
            <div className="servicoss4">
            <div className="servicos4TextosImages">
            <img src={pintura} alt="Imagem Pintura Industrial" className="iconeNadaServicos4"/>
            <img src={nadaa} alt="Icone" className="iconNadaServicos4"/>
            <div className="textosServicos4">
            <h1>Pintura Industrial</h1>
            <p>Transforme ambientes industriais com excelência e durabilidade. Nossa Pintura 
                Industrial vai além de cores, é proteção, resistência e qualidade. Renove 
                espaços com segurança e sofisticação, elevando o padrão estético e a 
                integridade de suas instalações</p>
            </div>  
                </div>

                <div className="cardsServicos4">

                    <div className="card1Servico4">
                        <img src={iconecard} alt="Icone Card" />
                        Qualidade
                    </div>

                    <div className="card2Servico4">
                    <img src={iconecard} alt="Icone Card" />
                    Resistência
                        </div>

                        <div className="card3Servico4">
                        <img src={iconecard} alt="Icone Card" />
                        Proteção
                        </div>
                </div>

                </div>

        </div>
    )
}
export default Servicos4;