import React from "react";
import "./sobrenosc.css"
import CarouselSobreNos from "../carouselSobreNos/CarouselSobreNos"
import Simbolo from "../../../assets/images/hoverheader.png"
import CarouselSobreNosM from "../carouselSobreNos/CarouselSobreNosM"


function SobreNosC () {
    return (
        <div className="sobreNosC">
            <div className="tracoSimboloServico1">
                <img src={Simbolo} alt="Simbolo" />
            </div>

            <div className="textosSobreNosC">
                <h1>Sobre nós</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Nec posuere purus sed dui lacinia turpis aliquet. 
                    Faucibus blandit pellentesque et at sollicitudin. 
                    Eget arcu ullamcorper egestas quis. Euismod.Lorem ipsum dolor sit amet consectetur. 
                    Nec posuere purus sed dui lacinia turpis aliquet. Faucibus blandit pellentesque et at sollicitudin. 
                    Eget arcu ullamcorper egestas quis. Euismod.</p>
            </div>
            <div className="carouselSobreNoosC">
                <CarouselSobreNos/>
            </div>
            <div className="carouselSobreNoosCM">
                <CarouselSobreNosM/>
            </div>
            <div className="textosSobreNosC2">
            <p>Lorem ipsum dolor sit amet consectetur. 
                Nec posuere purus sed dui lacinia turpis aliquet. 
                Faucibus blandit pellentesque et at sollicitudin. 
                Eget arcu ullamcorper egestas quis. Euismod.</p>
            </div>
       

        </div>
    )
}

export default SobreNosC;