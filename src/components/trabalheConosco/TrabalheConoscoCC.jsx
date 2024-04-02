import React from "react";
import "./trabalheconoscocc.css"
import { FaUser } from "react-icons/fa";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { MdEmail } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";

function TrabalheConoscoCC () {
    return (
        <div className="trabalheConoscoCC">

<div className="inputsTrabalheConosco">


<form action="https://formsubmit.co/contato@gmcindustrial.com.br " method="POST" >
<input type="hidden" name="_next" value="https://gmcindustrial.com.br/Obrigado"/> 
<input type="hidden" name="_captcha" value="false"/>


  <div className="textosInputsTC">
    <h1>Dados Pessoais  <FaUser className="iconeInputsTC"/> </h1>
  </div>

  <div className="inputsTC-1">

<div className="nomesInputTC">
<input type="text" name="name" 
required 
placeholder='Nome completo'
className="inputTC_11"/>
</div>



<div className="dataNascimento_Nacionalidade">
  <div className="dataNascimento">
 
<input type="text" name="text"  
      placeholder="Data de nascimento"
      className="inputTC_1"/>
  </div>

  <div className="nacionalidade">
  <input type="text" name="text"  
      placeholder="Nacionalidade"
      className="inputTC_1"/>
  </div>

</div>
</div>










<div className="inputsTC-2">
<div className="textosInputsTC_1">
    <h1>Contato <MdEmail className="iconeInputsTC"/></h1> 
  </div>
<div className="emailTC">
<input type="email" name="email" 
placeholder="Email"
className="inputs"/>
</div>


<div className="telefone_Perfil">
<div className="telefoneTC">
<label >
    <PhoneInput
    country={''}
    placeholder="Telefone"               
    inputStyle={{
        backgroundColor: '#000',
        borderLeft: 'transparent',
        borderRight: 'transparent',
        borderTop: 'transparent',
        width: '100%',
        color: '#fff',
        borderRadius: '2vh',
        minHeight: '3em'
    }}
    inputProps={{
        name: 'telefone',
        required: true,
    }}
/>
    </label>

</div>
<div className="perfilTC">
<input type="text" name="text"  
      placeholder="Perfil Linkedin"
      className="input1"/>
</div>
</div>
</div>








<div className="inputsTC-3">
<div className="textosInputsTC_2">
    <h1>Cargos Disponíveis <IoMdBriefcase className="iconeInputsTC"/></h1> 
  </div>
  <div className="cargosDisponiveisTC">
      <select
        className="inputTC_19"
        type="text"
        name="text"
        required
        defaultValue="" 
      >
        <option value="" disabled hidden>
          Selecione um cargo
        </option>
        <option value="opcao1">Representante</option>
        <option value="opcao2">Auxiliar Administrativo</option>
        <option value="opcao3">Estágio para Auxiliar Administrativo</option>
      </select>
    </div>

</div>


      



<div className="buttonTCCC">
      <button className="cadastrarTC" type="submit" >
                Enviar
            </button>
            </div>

            </form>

</div>


        </div>
    )
}
export default TrabalheConoscoCC;