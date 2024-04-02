import './pecash.css';

import React, { useRef, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import construction from '../imagensComponentes/constructionRed.png'
import engrenagem from '../imagensComponentes/Engreanagem.png'
import imagem1 from '../imagensComponentes/1.png';
import imagem2 from '../imagensComponentes/2.png';
import prego from "../../assets/images/prego.png";
import correias from "../../assets/images/correia.png"
import rolamentos from "../../assets/images/rolamentos industriais.png"
import caneca from "../../assets/images/caneca.png"

function PecasH() {

    const settingss = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1300,
        arrows: false, 
      };

    return (
        <div className='pecasH'>
            <div className="imageMarteloTexto">
                <img src={construction} alt="Martelo" />
                <h1>Peças</h1>
            </div>
                            <div className="ConteinerBarraIntroducao">
                                <div className='baraIntroducao2'></div>
                                <img className='engrenagem' src={engrenagem} alt='engrenagem' />
                            </div>

                            <div className="textoCarouselPecasH">
                            <div className="textoPecasHCentral">
                            <div className="textosPecasH">
                                <h2>
                                Explore a excelência em peças indústriais com a GMC Industrial. 
                                Oferecemos uma gama <span>diversificada</span> de mais de 60 peças, garantindo 
                                qualidade e desempenho superior para <span>impulsionar</span> sua produção
                                </h2>
                                <div className="textosPecasH2">
                                <h2>
                                Oferecemos uma extensa gama de componentes, garantindo <span>eficiência </span> 
                                e <span>durabilidade</span> para impulsionar seus processos produtivos
                                </h2>
                            </div>
                            </div>
                            </div>
                          
                          <div className="carouselPecasSwiper">

                          <Slider {...settingss}>

        <div className="card1PecasH">
                    <img src={rolamentos} alt="Imagem" />
                    <h3>Rolamentos </h3>
                    <p>Disco metálico com furo central, posicionado entre porca e parafuso. 
                        Distribui carga, evita danos e assegura fixação estável em montagens.</p>
                </div>

                <div className="card2PecasH">
                <img src={correias} alt="Imagem" />
                <h3>Correia Laminada</h3>
                <p>Dispositivo mecânico com corpo cilíndrico e rosca, usado para fixar objetos. 
                    Possui cabeça variada para facilitar aperto e remoção.</p>
                </div>

                <div className="card3PecasH">
                <img src={caneca} alt="Imagem" />
                <h3>Peças para elevadores de canecas</h3>
                <p>
        Peças para elevadores de canecas industriais, como canecas, correntes, 
        polias e motores, são cruciais para a eficiência e confiabilidade no 
        transporte vertical de materiais a granel em operações industriais.
        </p>
                </div>

        </Slider>
        
      
                                </div>
                           
                                </div>
                                <div className="buttonPecasH">
                                <Link to='/peças'>
                                <button>
                                Ver todas as peças
                                </button>
                                </Link>
                                </div>
                              

    </div>
    );
}

export default PecasH;
