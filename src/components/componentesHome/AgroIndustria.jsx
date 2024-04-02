import React from "react";
import '../componentesHome/agroIndustria.css'

import engrenagem from '../imagensComponentes/Engreanagem.png'
import agroIndustria from '../imagensComponentes/AgroIndustrial.png'

import { Link } from "react-router-dom";

function AgroIndustria() {


    return (
        <>
            <div className="conteinerAgroIndustria">
            <div className="ConteinerBarraIntroducao">
                                <div className='baraIntroducao3'></div>
                                <img className='engrenagem' src={engrenagem} alt='engrenagem' />
                            </div>
                <div className="conteinertituloIntroducao">
                    <div className="tituloIntroducao">
                        <h1>Agro Indústria</h1>
                    </div>
                </div>
                <div className="textoAgroIndustria">
                    <p> Na Agro Indústria, a GMC Industrial oferece serviços
                        e peças especializadas com soluções inovadoras,
                        impulsionando seu negócio para novos patamares de excelência
                    </p>
                </div>
                <div className="ImagemAgroIndustria">
                <img className='agroIndustria' src={agroIndustria} alt='agoIndustria' />
                </div>

                <div className='conteinerBotaoTextAgroIndustria'>
                    <div className='texteBotaoAgroIndustria'>
                        <p>
                        Descubra agora mesmo. Clique em <span className='colorTextoAgroI'>'Serviços'</span>  ou em <span className='colorTextoAgroI'>'Ver todas as peças' </span>
                        para explorar nossa incrível variedade de peças essenciais.
                        </p>
                    </div>
                    <div className='conteinerBotoesAgroIndustria'> 
                        <div className='botao1conteinerAgroIndustria'>
                            <Link to='/peças'>
                            <button className='botao1AgroIndustria'>
                                Ver todas as peças
                            </button>
                            </Link>
                        </div>
                        <div className='botao2conteinerAgroIndustria'>
                            <Link to='/servicos'>
                            <button className='botao2AgroIndustria' >
                                Serviços
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default AgroIndustria;