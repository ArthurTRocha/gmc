import React from "react";
import "./servicos1.css"
import Simbolo from "../../../assets/images/hoverheader.png"

function Servicos1 () {
    return (
        <div className="servicos1">
            <div className="tracoSimboloServico1">
                <img src={Simbolo} alt="Simbolo" />
            </div>
            <div className="textosServicos1">
            <h1>Serviços</h1>
            <p>Transformando desafios em soluções. Nossos serviços são a resposta para eficiência, 
                inovação e excelência. Conecte-se ao sucesso com nossa expertise</p>
            </div>
      
        </div>
    )
}
export default Servicos1;