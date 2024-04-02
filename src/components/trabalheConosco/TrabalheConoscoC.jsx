import React from "react";
import "./trabalheonoscoc.css"
import Simbolo from "../../assets/images/hoverheader.png"

function TrabalheConoscoC () {
    return (
        <div className="trabalheConoscoc">
            
              <div className="tracoSimboloServico1">
                <img src={Simbolo} alt="Simbolo" />
            </div>

            <div className="trabalheConoscoCCCC">
            <div className="textosTrabalheConosco">
                <h1>Trabalhe conosco</h1>
                <p>Junte-se à nossa equipe ! Descubra oportunidades emocionantes para desenvolver sua 
                    carreira em um ambiente dinâmico e inovador. Faça parte do nosso time comprometido 
                    com o sucesso e crescimento mútuo.</p>
            </div>
            <div className="tracoTrabalheConosco"></div>

            <div className="textos2TrabalheConosco">
                <p>Cadastre-se em nosso site para integrar a equipe e 
                    ter acesso a oportunidades exclusivas de crescimento e 
                    participar de iniciativas inovadoras.</p>
            </div>
            </div>
        </div>
    )
}
export default TrabalheConoscoC;