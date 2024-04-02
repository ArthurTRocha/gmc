import React from "react";
import "./peçasc.css"
import caixa from "../../assets/images/caixa.png"
import martelo from "../../assets/images/martelo.png"

function PeçasC () {
    return (
        <div className="pecasc">
            
            <div className="pecascc">
            <div className="textoPecasC">
                <h1>Encontre as Melhores Peças Indústriais </h1>
                <h3>Explore nossa seleção de peças indústriais 
                    para otimizar sua produção. Qualidade, durabilidade 
                    e desempenho excepcionais.</h3>
            </div>
            <div className="imagePecas">
                <img src={caixa} alt="Caixa" />
            </div>
            </div>
            <div className="marteloPecas">
                <img src={martelo} alt="Martelo" />
            </div>
        </div>
    )
}
export default PeçasC;