import React from "react";
import "./servicos5.css"
import nada from "../../../assets/images/nada.png"
import nadaa from "../../../assets/images/nadaabranco.png"
import iconecard from "../../../assets/images/iconecard.png"
import eletrico from "../../../assets/images/eletrico.jpg"

function Servicos5 () {
    return (
        <div className="servicos5">
            <div className="servicoss5">
            <div className="servicos5TextosImages">
            <img src={nadaa} alt="Icone" className="iconNadaServicos5"/>
            <div className="textosServicos5">
            <h1>Serviço de manutenção Eletrico</h1>
            <p>Confiabilidade energética é a chave para operações sem interrupções. 
                Nosso Serviço de Manutenção Elétrica oferece soluções ágeis, seguras e 
                eficientes. Conte conosco para preservar a integridade de seus sistemas, 
                mantendo sua produção sempre ligada à excelência</p>
            </div>  
            <img src={eletrico} alt="Imagem Pessoa" className="iconeNadaServicos5"/>

                </div>

                <div className="cardsServicos5">

                    <div className="card1Servico5">
                        <img src={iconecard} alt="Icone Card" />
                        Agilidade
                    </div>

                    <div className="card2Servico5">
                    <img src={iconecard} alt="Icone Card" />
                    Excelência                       
                     </div>

                        <div className="card3Servico5">
                        <img src={iconecard} alt="Icone Card" />
                        Integridade
                        </div>
                </div>

                </div>

        </div>
    )
}
export default Servicos5;