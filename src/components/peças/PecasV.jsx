import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';
import "./pecasv.css";

function PecasV() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [modoFiltroOn, setModoFiltroOn] = useState(false);
  const [loading, setLoading] = useState(true); // Adicionado estado para controle de carregamento

  const urlHospedagem = "https://www.api.gmcindustrial.com.br/"

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const urlCompleta = urlHospedagem + "api/v1/Produtos";
    try {
      const response = await fetch(urlCompleta);
      const data = await response.json();
      setProdutos(data);
      setLoading(false); // Define que o carregamento está completo
    } catch (error) {
      console.error("Erro ao buscar peças:", error);
    }
  };

  useEffect(() => {
    const fetchCategorias = async () => {
      const urlCompleta = urlHospedagem + "api/v1/Categorias";
      try {
        const response = await fetch(urlCompleta);
        const data = await response.json();
        
        const categoriasComSelected = data.map((categoria) => ({
          ...categoria,
          selected: false,
        }));
  
        setCategorias(categoriasComSelected);
      } catch (error) {
        console.error("Erro ao buscar peças:", error);
      }
    };
  
    fetchCategorias();
  }, []);

  async function procurarProdutosPorCategoriaId(id) {
    const urlCompleta = urlHospedagem + "api/v1/Categoria/Produtos/" + id;
    try {
      const response = await axios.get(urlCompleta);
      setProdutos(response.data);
      setModoFiltroOn(true);
  
      // Desmarcar outros checkboxes
      setCategorias((prevCategorias) => 
        prevCategorias.map((categoria) => ({
          ...categoria,
          selected: categoria.categoriaId === id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }
  

  function exibirTodosProdutos() {
    fetchProdutos();
    setModoFiltroOn(false);
  }

  async function BuscarProdutoPorNome() {
    const dadosBusca = document.getElementById("campoPesquisa").value;
    const urlCompleta = urlHospedagem + "api/v1/Produto/" + dadosBusca;
    try {
      // Substitua a URL abaixo pela sua API ou fonte de dados
      const response = await fetch(urlCompleta);
      const data = await response.json();

      setProdutos(data);
      setModoFiltroOn(true);
    } catch (error) {
      alert("Nenhum produto encontrado.");
    }

  }
  return (
    <div className="pecasV">
      <div className="textosPecasV">
        <h1>Peças</h1>
      </div>

      <div className="inputBuscaPecasV">
      {/* <a href="https://api.whatsapp.com/send?phone=5531990872160" target="_blank"> */}
          <FaWhatsapp className="iconePecasV" />
      {/* </a> */}
        <input id="campoPesquisa" placeholder="Digite o nome da peça..."></input>
        <button onClick={BuscarProdutoPorNome}>Pesquisar</button>
      </div>

      <div className="inputBuscaPecasVM">
        <FaWhatsapp className="iconePecasV" />
        <input id="campoPesquisa" placeholder="Digite o nome da peça..."></input>
        <button onClick={BuscarProdutoPorNome}>Pesquisar</button>
      </div>

      <div className="categoriasCategoriasV">
        {modoFiltroOn && (
          <label>
            <input type="checkbox" onChange={exibirTodosProdutos} />
            Exibir Todos Produtos
          </label>
        )}
     {categorias.map((categoria) => (
  <div key={categoria.categoriaId} className="categoria1CategoriasV">
    <label>
      <input
        type="checkbox"
        onChange={() => procurarProdutosPorCategoriaId(categoria.categoriaId)}
        checked={categoria.selected}
      />
      {categoria.nome}
    </label>
  </div>
))}
      </div>


      <div className="pecasPecasV">
      {loading ? (
        // Exibe a mensagem de carregamento enquanto os dados estão sendo buscados
        <h2>Carregando peças...</h2>
      ) : (
        // Mapeia o array de peças para renderizar dinamicamente
        produtos.map((produto) => (
          <div key={produto.produtoId} className="peca1pecasV">
            <img src={`https://api.gmcindustrial.com.br/produtos/${produto.nomeImagem}`} alt={produto.titulo} />
            <h1>{produto.nome}</h1>
            <p>{produto.descricao}</p>
            <button>
              <a href="https://api.whatsapp.com/send?phone=5531990872160" target="_blank">
                <FaWhatsapp className="iconePecasV" />
                Saiba mais
              </a>
            </button>
          </div>
        ))
      )}
    </div>
  </div>
);
}

export default PecasV;
