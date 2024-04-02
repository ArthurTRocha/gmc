import React, { useState } from "react";
import "./oferecemos.css"
import engrenagem from '../imagensComponentes/Engreanagem.png'

function Oferecemos () {

    const [mostrarMensagems, setMostrarMensagems] = useState(false);

    const [mostrarMensagemp, setMostrarMensagemp] = useState(false);

    return (
        <div className="oferecemos">

   <div className="ConteinerBarraIntroducao">
                                <div className='baraIntroducao3'></div>
                                <img className='engrenagem' src={engrenagem} alt='engrenagem' />
                            </div>

            <div className="textosOferecemos">
                <h1>O que oferecemos </h1>
                <p>Oferecemos peças indústriais e serviços especializados, 
                    atendendo diversas demandas. Nosso amplo catálogo e soluções
                    personalizadas impulsionam a eficiência e inovação</p>
            </div>
            <div className="divsOferecemos">
            <div className="card1Oferecemos" onClick={() => setMostrarMensagems(true)}>
                <h3>Serviços</h3>
                </div>

                {mostrarMensagems && (
        <div className="mensagemOferecemosServicos">
             <p>
         GMC Industrial destaca-se por serviços especializados, consultoria, 
            manutenção e soluções personalizadas, impulsionando a 
            eficiência da sua produção.</p>
        </div>
      )}
               <div className="card2Oferecemos">
                <h3 onClick={() => setMostrarMensagemp(true)}>Peças Industriais</h3>
               </div>

               {mostrarMensagemp && (
        <div className="mensagemOferecemosServicos">
             <p>
             GMC Industrial oferece uma variedade de peças indústriais , 
             garantindo qualidade e desempenho superiores para 
             impulsionar sua produção.</p>
        </div>
      )}

            </div>
        </div>
    )
}
export default Oferecemos;