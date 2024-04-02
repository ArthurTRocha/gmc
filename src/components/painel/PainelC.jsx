import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./painelc.css"
import Produto from "../produtos/Produto";
import Categoria from "../categoria/Categoria";
import { CiLogout } from "react-icons/ci";

function PainelC() {
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        handleAutenticacao();
    }, [navigate]);

    async function logout() {
        await localStorage.removeItem("token");
        await localStorage.removeItem("dataExpiracao");
        navigate("/paineladm");
    }

    function handleAutenticacao() {
        const dataExpiracao = localStorage.getItem("dataExpiracao");
      
        if (dataExpiracao) {
          const dataExpiracaoAtual = new Date(dataExpiracao);
          const dataAtual = new Date();
      
          // Calcula a diferença em milissegundos entre as datas
          const diferencaEmMilissegundos = dataAtual - dataExpiracaoAtual;
      
          // Calcula a diferença em horas
          const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
      
          // Se a diferença for maior ou igual a 8 horas, remove o token
          if (diferencaEmHoras >= 8) {
            localStorage.removeItem("token");
            localStorage.removeItem("dataExpiracao");
            navigate("/paineladm");
          } else {
            const token = localStorage.getItem("token");
            setToken(token);
          }
        } else {
            navigate("/paineladm");
        }
      }


      function scrollToCategoria() {
        const categoria = document.getElementById('categoria');
        if (categoria) {
          categoria.scrollIntoView({ behavior: 'smooth' });
        }
      }


      function scrollToProduto() {
        const produto = document.getElementById('produto');
        if (produto) {
          produto.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <div className="painel">
            <h1>Painel</h1>
            <button className='buttonPainel' onClick={scrollToCategoria}>Categorias</button>
            <button className='buttonPainel' onClick={scrollToProduto}>Produtos</button>
            <Produto />
            <Categoria />
            <button className='sairpainel' onClick={logout}>
              <CiLogout/>
            </button>
        </div>
    )
}
export default PainelC;