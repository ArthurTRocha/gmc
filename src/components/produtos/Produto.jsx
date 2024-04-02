import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./produto.css"

function Produto() {
    const [dataProduto, setDataProduto] = useState({
        produtoId: 0,
        nome: '',
        descricao: '',
        arquivo: null,
        preco: '',
        categoriaId: ''
    });
    const [todosProdutos, setTodosProdutos] = useState([]);
    const [todasCategorias, setTodasCategorias] = useState([]);
    const [todosUsuarios, setTodosUsuarios] = useState([]); 
    const [modoEdicao, setModoEdicao] = useState(false);
    const token = localStorage.getItem('token');
    const urlHospedagem = "https://api.gmcindustrial.com.br";

    useEffect(() => {
        async function getProdutoInfo() {
            const endpoint = '/api/v1/Produtos';
            const urlCompleta = `${urlHospedagem}${endpoint}`;

            try {
                const resposta = await axios.get(urlCompleta);

                setTodosProdutos(resposta.data);
            } catch (error) {
                console.error('Erro ao fazer a requisição GET:', error);
            }
        };
        getProdutoInfo();
    }, []);

    useEffect(() => {
        async function getCategoriaData() {
            const endpoint = '/api/v1/Categorias';
            const urlCompleta = `${urlHospedagem}${endpoint}`;

            try {
                const resposta = await axios.get(urlCompleta);
                setTodasCategorias(resposta.data);
            } catch (error) {
                console.error('Erro ao fazer a requisição GET:', error);
            }
        };
        getCategoriaData();
    }, []);

    const handleInputChange = (campo, valor) => {
        setDataProduto((prevState) => ({
            ...prevState,
            [campo]: valor
        }));
    };

    const enviarDadosProduto = () => {

        const camposEmBranco = Object.values(dataProduto).some(valor => valor === '');

        if (camposEmBranco) {
            console.error('Não é possível enviar dados do produto com campos em branco.');
            return;
        }

        // Configuração do cabeçalho com o esquema de autenticação Bearer
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        };


        // Objeto contendo os dados do produto
        const dadosProduto = {
            produtoId: 0,
            nome: dataProduto.nome,
            descricao: dataProduto.descricao,
            arquivo: dataProduto.arquivo,
            preco: dataProduto.preco,
            categoriaId: dataProduto.categoriaId
        };
        const endpoint = '/api/v1/Produto';
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        // Requisição POST usando Axios
        axios.post(urlCompleta, dadosProduto, config)
            .then(response => {
                console.log('Dados do produto enviados com sucesso:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao enviar dados do produto:', error);
                // Lógica adicional em caso de erro
            });
    };

    const alterarDadosProduto = () => {

        const camposEmBranco = Object.values(dataProduto).some(valor => valor === '');

        if (camposEmBranco) {
            console.error('Não é possível enviar dados do produto com campos em branco.');
            return;
        }

        // Configuração do cabeçalho com o esquema de autenticação Bearer
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        };


        // Objeto contendo os dados do produto
        const dadosProduto = {
            produtoId: dataProduto.produtoId,
            nome: dataProduto.nome,
            descricao: dataProduto.descricao,
            arquivo: dataProduto.arquivo,
            preco: dataProduto.preco,
            categoriaId: dataProduto.categoriaId
        };
        const endpoint = '/api/v1/Produto/' + dataProduto.produtoId;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        // Requisição POST usando Axios
        axios.put(urlCompleta, dadosProduto, config)
            .then(response => {
                console.log('Dados do produto alterados com sucesso:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao alterar dados do produto:', error);
                // Lógica adicional em caso de erro
            });
    };

    const handleImagemChange = (e) => {
        const imagemSelecionada = e.target.files[0];
        setDataProduto({ ...dataProduto, arquivo: imagemSelecionada });
    };

    async function getProdutoById(id) {
        const endpoint = '/api/v1/Produto/' + id;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        try {
            const resposta = await axios.get(urlCompleta);
            setModoEdicao(true)
            setDataProduto(resposta.data);
        } catch (error) {
            console.error('Erro ao fazer a requisição GET:', error);
        }
    };

    function deletarProduto(id) {
        const endpoint = '/api/v1/Produto/' + id;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.delete(urlCompleta, config)
            .then(() => {
                console.log("Produto deletado com sucesso.");
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao fazer a requisição DELETE:', error);
            });
    }

    const handleCategoriaChange = (e) => {
        const categoriaIdSelecionada = e.target.value;
        setDataProduto({
          ...dataProduto,
          categoriaId: categoriaIdSelecionada,
        });
      };

    function scrollToeditarProdutos() {
        const produto = document.getElementById('produto');
        if (produto) {
            produto.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function acharEmailPeloId(id) {

    }

    return (
        <div className="produto" id='produto' >
            <h1>Produtos</h1>
            <div>
                {modoEdicao && (
                    <button onClick={() => setModoEdicao(false)}>Cancelar Edição</button>
                )}
            </div>
            <div className='inputProduto1'>
                <h3>Nome</h3>
                <input type="text" value={dataProduto.nome} onChange={(e) => handleInputChange('nome', e.target.value)} />
            </div>
            {modoEdicao && (
                <div className='inputProduto1'>
                    <h3>ProdutoID</h3>
                    <input type="id" value={dataProduto.produtoId} onChange={(e) => handleInputChange('produtoId', e.target.value)} />
                </div>
            )}
            <div className='inputProduto2'>
                <h3>Descrição</h3>
                <input type="text" value={dataProduto.descricao} onChange={(e) => handleInputChange('descricao', e.target.value)} />
            </div>
            <div className='inputProduto3'>
                <h3>Imagem</h3>
                <input type="file" onChange={handleImagemChange} />
            </div>
            <div className='inputProduto1'>
                <h3>Preço</h3>
                <input type="number" value={dataProduto.preco} onChange={(e) => handleInputChange('preco', e.target.value)} />
            </div>
            <div className='inputProduto1'>
                <h3>Categoria</h3>
                <select value={dataProduto.categoriaId} onChange={handleCategoriaChange}>
                    {todasCategorias.map((categoria) => (
                        <option key={categoria.categoriaId} value={categoria.categoriaId}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
            </div>
            <div className='buttonCadastrarProduto'>
                {!modoEdicao ? (
                    <button onClick={enviarDadosProduto}>Cadastrar Produto</button>
                ) : (
                    <button onClick={alterarDadosProduto}>Update Produto</button>
                )}
            </div>


            <div className='listaprodutos' >
                <h1>Lista de Produtos</h1>
                <ul>
                    {todosProdutos.map((produto) => (
                        <li key={produto.produtoId}>
                            <p><strong>ID:</strong> {produto.produtoId}</p>
                            <p><strong>Nome:</strong> {produto.nome}</p>
                            <p><strong>Preço:</strong> R${produto.preco.toFixed(2)}</p>
                            <p><strong>Categoria ID:</strong> {produto.categoriaId}</p>
                            <p><strong>Descrição:</strong> {produto.descricao}</p>
                            <p><strong>Imagem:</strong> {produto.nomeImagem}</p>
                            <p><strong>Cadastrado Por:</strong> {produto.criadoPor}</p>
                            <p><strong>Atualizado Por:</strong> {produto.atualizadoPor}</p>
                            <img src={`https://api.gmcindustrial.com.br/produtos/${produto.nomeImagem}`} alt={produto.titulo} />
                            <button onClick={() => {
                                scrollToeditarProdutos();
                                getProdutoById(produto.produtoId);
                            }}>Editar Produto</button>
                            <button onClick={() => deletarProduto(produto.produtoId)}>Excluir Produto</button>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}
export default Produto;