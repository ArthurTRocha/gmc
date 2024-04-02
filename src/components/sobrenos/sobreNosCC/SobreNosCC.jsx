import React from "react";
import "./sobrenoscc.css"
import engrenagem from "../../../assets/images/engrenagem.png"
import CarouseldivSBNM from "../carouselMobileSobreNos/CarouseldivSBNM";

function SobreNosCC () {
    return (
        <div className="sobreNosCC">
            <div className="carouselSobreNosM">
                <CarouseldivSBNM/>
            </div>
            <div className="sobreNosCCC">

                <div className="card1SobreNos">
                    <img src={engrenagem} alt="Engranagem" />
                    <p>Lorem ipsum dolor sit amet consectetur. 
                        Nec posuere purus sed dui lacinia turpis aliquet. 
                        Faucibus blandit pellentesque et at sollicitudin. 
                        Eget arcu ullamcorper egestas quis. Euismod.</p>
                </div>

                <div className="card2SobreNos">
                <img src={engrenagem} alt="Engranagem" />
                <p>Lorem ipsum dolor sit amet consectetur. 
                        Nec posuere purus sed dui lacinia turpis aliquet. 
                        Faucibus blandit pellentesque et at sollicitudin. 
                        Eget arcu ullamcorper egestas quis. Euismod.</p>
                </div>

                <div className="card3SobreNos">
                <img src={engrenagem} alt="Engranagem" />
                <p>Lorem ipsum dolor sit amet consectetur. 
                        Nec posuere purus sed dui lacinia turpis aliquet. 
                        Faucibus blandit pellentesque et at sollicitudin. 
                        Eget arcu ullamcorper egestas quis. Euismod.</p>
                </div>
            </div>
        </div>
    )
}
export default SobreNosCC;