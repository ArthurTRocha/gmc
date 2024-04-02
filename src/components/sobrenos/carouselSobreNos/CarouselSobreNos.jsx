import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fotoscarousel from "../../../assets/images/nada.png"

import "./carouselsobrenos.css"




function CarouselSobreNos() {


    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 800,
      arrows: false, 
    };
  
    return (
      <div className="carouselSobreNos">
        <Slider {...settings}>
          <div className="carouselFotos">
            <img src={fotoscarousel} alt="Imagem 1" />
          </div>
          <div className="carouselFotos1">
            <img src={fotoscarousel} alt="Imagem 2" />
          </div>
          <div className="carouselFotos2">
            <img src={fotoscarousel} alt="Imagem 3" />
          </div>
          <div className="carouselFotos3">
            <img src={fotoscarousel} alt="Imagem 4" />
          </div>
          <div className="carouselFotos4">
            <img src={fotoscarousel} alt="Imagem 4" />
          </div>
        </Slider>
      </div>
    );
  }

export default CarouselSobreNos;