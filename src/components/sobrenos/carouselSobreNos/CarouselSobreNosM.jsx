import React from "react";
import "./carouselsobrenosm.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fotoscarousel from "../../../assets/images/nada.png"

function CarouselSobreNosM () {
   
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1800,
        arrows: false, 
      };
    
      return (
        <div className="carouselSobreNosM">
          <Slider {...settings}>
            <div className="carouselFotosM">
              <img src={fotoscarousel} alt="Imagem 1" />
            </div>
            <div className="carouselFotos1M">
              <img src={fotoscarousel} alt="Imagem 2" />
            </div>
            <div className="carouselFotos2M">
              <img src={fotoscarousel} alt="Imagem 3" />
            </div>
            <div className="carouselFotos3M">
              <img src={fotoscarousel} alt="Imagem 4" />
            </div>
            {/* <div className="carouselFotos4M">
              <img src={fotoscarousel} alt="Imagem 4" />
            </div> */}
          </Slider>
        </div>
    )
}
export default CarouselSobreNosM;