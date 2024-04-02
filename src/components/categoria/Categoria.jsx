import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./categoria.css"

function Categoria() {
    const [dataCategoria, setDataCategoria] = useState({
        categoriaId: 0,
        nome: '',
        produtos: null
    });
    const [todasCategorias, setTodasCategorias] = useState([]);
    const [modoEdicao, setModoEdicao] = useState(false);
    const token = localStorage.getItem('token');
    const urlHospedagem = "https://api.gmcindustrial.com.br";

    useEffect(() => {
        async function getCategoriaInfo() {
            const endpoint = '/api/v1/Categorias';
            const urlCompleta = `${urlHospedagem}${endpoint}`;

            try {
                const resposta = await axios.get(urlCompleta);

                setTodasCategorias(resposta.data);
            } catch (error) {
                console.error('Erro ao fazer a requisição GET:', error);
            }
        };
        getCategoriaInfo();
    }, []);

    const handleInputChange = (campo, valor) => {
        setDataCategoria((prevState) => ({
            ...prevState,
            [campo]: valor
        }));
    };

    const enviarDadosCategoria = () => {

        const camposEmBranco = Object.values(dataCategoria).some(valor => valor === '');

        if (camposEmBranco) {
            console.error('Não é possível enviar dados de categoria com campos em branco.');
            return;
        }

        // Configuração do cabeçalho com o esquema de autenticação Bearer
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        // Objeto contendo os dados da categoria
        const dadosCategoria = {
            categoriaId: 0,
            nome: dataCategoria.nome,
            produtos: null
        };
        const endpoint = '/api/v1/Categoria';
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        // Requisição POST usando Axios
        axios.post(urlCompleta, dadosCategoria, config)
            .then(response => {
                console.log('Dados de categoria enviados com sucesso:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao enviar dados da categoria:', error);
                // Lógica adicional em caso de erro
            });
    };

    const alterarDadosCategoria = () => {

        const camposEmBranco = Object.values(dataCategoria).some(valor => valor === '');

        if (camposEmBranco) {
            console.error('Não é possível enviar dados da categoria com campos em branco.');
            return;
        }

        // Configuração do cabeçalho com o esquema de autenticação Bearer
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        // Objeto contendo os dados da categoria
        const dadosCategoria = {
            categoriaId: dataCategoria.categoriaId,
            nome: dataCategoria.nome,
            produtos: null
        };

        const endpoint = '/api/v1/Categoria/' + dataCategoria.categoriaId;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        // Requisição POST usando Axios
        axios.put(urlCompleta, dadosCategoria, config)
            .then(response => {
                console.log('Dados da categoria alterados com sucesso:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao alterar dados da categoria:', error);
                // Lógica adicional em caso de erro
            });
    };

    const handleImagemChange = (e) => {
        const imagemSelecionada = e.target.files[0];
        if (imagemSelecionada) {
            const nomeArquivo = imagemSelecionada.name;
            setDataCategoria({ ...dataCategoria, imagemUrl: nomeArquivo });
        }
    };

    async function getCategoriaById(id) {
        const endpoint = '/api/v1/Categoria/' + id;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        try {
            const resposta = await axios.get(urlCompleta);
            setModoEdicao(true)
            setDataCategoria(resposta.data);
        } catch (error) {
            console.error('Erro ao fazer a requisição GET:', error);
        }
    };

    function deletarCategoria(id) {
        const endpoint = '/api/v1/Categoria/' + id;
        const urlCompleta = `${urlHospedagem}${endpoint}`;

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.delete(urlCompleta, config)
            .then(() => {
                console.log("Categoria deletado com sucesso.");
                window.location.reload();
            })
            .catch(error => {
                console.error('Erro ao fazer a requisição DELETE:', error);
            });
    }

    function scrollToeditarCategoria() {
        const categoria = document.getElementById('categoria');
        if (categoria) {
            categoria.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return (
        <div className="categoria" id='categoria'>
            <h1>Categorias</h1>
            
            <div>
                {modoEdicao && (
                    <button onClick={() => setModoEdicao(false)}>Cancelar Edição</button>
                )}
            </div>
            <div>
                <h3>Nome</h3>
                <input type="text" value={dataCategoria.nome} onChange={(e) => handleInputChange('nome', e.target.value)} /> 
            </div>
            {modoEdicao && (
                <div>
                    <h3>Categoria ID</h3>
                    <input type="id" value={dataCategoria.categoriaId} onChange={(e) => handleInputChange('categoriaId', e.target.value)} /> 
                </div>
            )}
           
            <div className='buttonCadastrarCategoria'>
                {!modoEdicao ? (
                    <button onClick={enviarDadosCategoria}>Cadastrar Categoria</button>
                ) : (
                    <button onClick={alterarDadosCategoria}>Update Categoria</button>
                )}

                <div className='listadeCategorias'>
                    <h2>Lista de Categorias</h2>
                    <ul>
                        {todasCategorias.map((categoria) => (
                            <li key={categoria.categoriaId}>
                            <p><strong>ID:</strong> {categoria.categoriaId}</p>            
                            <p><strong>Nome:</strong> {categoria.nome}</p>
                            <p><strong>Cadastrado Por:</strong> {categoria.criadoPor}</p>
                            <p><strong>Atualizado Por:</strong> {categoria.atualizadoPor}</p>           
                            <button onClick={() => {
                                    scrollToeditarCategoria(); 
                                    getCategoriaById(categoria.categoriaId);
                                    }}>Editar Categoria</button>
                                <button onClick={() => deletarCategoria(categoria.categoriaId)}>Excluir Categoria</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}
export default Categoria;