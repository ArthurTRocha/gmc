import React, { useState } from 'react';
import axios from 'axios';
import './paineladmc.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PainelAdmC() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    senha: ""
  });


  const apiUrl = 'https://api.gmcindustrial.com.br';

  const fazerLogin = async (dados) => {
    try {

      const resposta = await axios.post(
        `${apiUrl}/api/v1/Usuario/Login`,
        dados,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      // Faça algo com a resposta, se necessário
      const data = resposta.data;
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('dataExpiracao', data.expiration);
        navigate('/painel');
      }
    } catch (erro) {
      // Lide com erros de requisição, se necessário
      console.error('Erro na requisição POST:', erro.message);
    }
  };

  const handleInputChange = (campo, valor) => {
    setData((prevState) => ({
      ...prevState,
      [campo]: valor
    }));
  };

  return (
    <div className="painelAdmC">
      <h1>Login</h1>
      <div className="inputPainelAdmC">
        <label>Usuário:</label>
        <input type="text" value={data.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="Digite seu usuário" />

        <label>Senha:</label>
        <input type="password" value={data.senha} onChange={(e) => handleInputChange('senha', e.target.value)} placeholder="Digite sua senha" />
        <button onClick={() => fazerLogin(data)}>Entrar</button>
      </div>
      <Link to='/home'>Volta para home</Link>
    </div>
  )
}

export default PainelAdmC;
