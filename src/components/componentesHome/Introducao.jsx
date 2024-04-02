import React from "react";

import logo from '../imagensComponentes/gmcLogo.png'
import engrenagem from '../imagensComponentes/Engreanagem.png'


import '../componentesHome/introducao.css'

function introducao() {


    return (
        <>
            <div className="divPaiIntroducao">
                <div className="conteinerIntroducao">

                    <div className='conteinerLogo' >
                        <img className='logo' src={logo} alt='gmc' />
                    </div>

                    <div className="textosIntroducao">
                    <div className="ConteinerBarraIntroducao">
                                <div className='baraIntroducao3'></div>
                                <img className='engrenagem' src={engrenagem} alt='engrenagem' />
                            </div>
                        <div className="conteinertituloIntroducao">
                    
                            <div className="tituloIntroducao">
                                <h1>GMC Industrial</h1>
                            </div>
                        </div>
                        <div className="TextoIntroducao">
                            <h3>A GMC Industrial destaca-se no mercado pela venda
                                de peças industriais de alta qualidade. Além disso,
                                oferece serviços abrangentes, incluindo consultoria
                                especializada, serviços de pintura e manutenção,
                                proporcionando soluções integradas para as necessidades
                                variadas do setor industrial.
                            </h3>
                        </div>

                        <div className="listaIntroducao">
                            <div className="conteinerListaIntrducao">
                                <div className='uiBlackIntroducao'> </div>
                                <h3> Serviços </h3>
                            </div>
                            <div className="conteinerListaIntrducao">
                                <div className='uiRedIntroducao'> </div>
                                <h3> Peças </h3>
                            </div>
                            <div className="conteinerListaIntrducao">
                                <div className='uiBlackIntroducao'> </div>
                                <h3> Manutenção</h3>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default introducao;
