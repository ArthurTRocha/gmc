import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import engrenagem from "../../../assets/images/engrenagem.png"
import "./carouseldivsbnm.css"




function CarouseldivSBNM() {


    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1300,
      arrows: false, 
    };
  
    return (
      <div className="carouseldivSBNM">
        <Slider {...settings}>
        <div className="card1SobreNosM">
                    <img src={engrenagem} alt="Engranagem" />
                    <p>Lorem ipsum dolor sit amet consectetur. 
                        Nec posuere purus sed dui lacinia turpis aliquet. 
                        Faucibus blandit pellentesque et at sollicitudin. 
                        Eget arcu ullamcorper egestas quis. Euismod.</p>
                </div>

                <div className="card2SobreNosM">
                <img src={engrenagem} alt="Engranagem" />
                <p>Lorem ipsum dolor sit amet consectetur. 
                        Nec posuere purus sed dui lacinia turpis aliquet. 
                        Faucibus blandit pellentesque et at sollicitudin. 
                        Eget arcu ullamcorper egestas quis. Euismod.</p>
                </div>

                <div className="card3SobreNosM">
                <img src={engrenagem} alt="Engranagem" />
                <p>Lorem ipsum dolor sit amet consectetur. 
                        Nec posuere purus sed dui lacinia turpis aliquet. 
                        Faucibus blandit pellentesque et at sollicitudin. 
                        Eget arcu ullamcorper egestas quis. Euismod.</p>
                </div>

        </Slider>
      </div>
    );
  }

export default CarouseldivSBNM;