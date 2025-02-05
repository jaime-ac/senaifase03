import Produto from '../produtos/Produto';

import './Corpo.css'
import { useState } from 'react';

function Corpo() {

    
    const [produtos, setProdutos] = useState([
        
        {
            id: Date.now(),
            imagem: './air-jordan-11.png',
            marca: 'Air Jordan 11',
            preco: 1500,
            descricao: 'Posturado e Calmo'   
        },
        {
            id: Date.now()+1,
            imagem: './air-jordan1-retro.png',
            marca: 'Air Jordan 1 Retro',
            preco: 1400,
            descricao: 'Posturado e Calmo'
        },
        {
            id: Date.now()+2,
            imagem: './air-jordan1-low.webp',
            marca: 'Air Jordan 1 Low',
            preco: 1300,
            descricao: 'Posturado e Calmo'
        },
        {
            id: Date.now()+3,
            imagem: './air-jordan3-retro.webp',
            marca: 'Air Jordan 3 Retro',
            preco: 1200,
            descricao: 'Posturado e Calmo'
        }
    ]);

    //tenho que criar um estado para cada input, de modo a poder trabalhar com eles em tempo real e da melhor maneira...
    const [inputImagem, setInputImagem] = useState('');
    const [inputMarca, setInputMarca] = useState('');
    const [inputPreco, setInputPreco] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');

    //função para cadastrar um novo tênis...
    function cadastrarTenis(){
        
        const produto = {
            id: Date.now(),
            imagem: inputImagem,
            marca: inputMarca,
            preco: Number(inputPreco),
            descricao: inputDescricao   
        }

        // console.log(produto)

        //([...produtos, produto]) => desmonta meu antigo array e monta um novo com o novo produto incluido;
        setProdutos([...produtos, produto])

    }

    // const [pontos, setPontos] = useState(0);

    // function clicou(){
    //     alert('Clicou mesmo, olha só...')
    // }

    // function aumentarPontos(){
        
    //     setPontos(pontos + 1);
    //     console.log(pontos);
    // }

  return (

    <div className='container-corpo'>

        <h2>Loja Air Jordan</h2>

        {/* <button className='botoes' onClick={clicou}>Clique aqui...</button>

        <button className='botoes' onClick={() => alert('Clicou no botão com arrow function...')}>Botão com arrow function</button>


        <div className='div-pontos'>

            <button className='botoes' onClick={aumentarPontos}>Aumentar Pontos</button>

            {pontos}

        </div> */}

        <div className='div-produtos'>

            {/* usando uma forma básica de listar produtos, chamando o componente e passando as informações através da desestruturação que fizemos na hora que substituimos os props no componente Produto */}

            <Produto imagem={'./public/air-jordan.png'} marca={'Air Jordan Bel Air'} preco={2499} descricao={'Um Maluco do Pedaço'}/>
            <Produto imagem={'./public/air-jordan-4.webp'} marca={'Air Jordan 4'} preco={1599} descricao={'Um Estilo Diferenciado'}/>
        
        </div>

        <div className='lista-cards'>

            {/* usando o map para listar produtos de uma lista de produtos... */}

            {produtos.map((produto) => (
                
                <Produto key={produto.id} imagem={produto.imagem} marca={produto.marca} preco={produto.preco} descricao={produto.descricao}/>

            ))}

        </div>

        <label htmlFor="">Cadastro de tênis</label>

        <div className='form-cadastro'>


            <div className="inputContainer">

                <label htmlFor="">Imagem</label>
                <input type='text' />

            </div>

            <div className="inputContainer">

                <label htmlFor="">Marca</label>

                <input type="text" 
                    value={inputMarca}
                    onChange={(event) => setInputMarca(event.target.value)}
                />

            </div>

            <div className="inputContainer">

                <label htmlFor="">Preço</label>
                <input type="text" 
                    value={inputPreco}
                    onChange={(event) => setInputPreco(event.target.value)}
                />

            </div>

            <div className="inputContainer">

                <label htmlFor="">Descrição</label>
                <input type="text" 
                    value={inputDescricao}
                    onChange={(event) => setInputDescricao(event.target.value)}
                />

            </div>

            <button className='botao-cadastrar' onClick={cadastrarTenis}>Cadastrar</button>

        </div>

    </div>

  )

}

export default Corpo
