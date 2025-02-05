import './Produto.css'
import { ImAlarm } from "react-icons/im";


// function Produto(props) {
function Produto({imagem, marca, preco, descricao, estoque}) {

  return (

    <div className='container-produto'>

        {/* <img className='imagem-sapato' src={props.imagem} /> */}
        <img className='imagem-sapato' src={imagem} />

        {/* <h4>{props.marca}</h4> */}
        <h4>{marca}</h4>

        {/* <label className='preco-produto'>R${props.preco.toFixed(2)}</label> */}
        <label className='preco-produto'>R${preco.toFixed(2)}</label>

        {/* <label className='descricao-produto'>{props.descricao}</label> */}
        <label className='descricao-produto'>{descricao}</label>

        <label className='descricao-produto'>{estoque}</label>

        {/* fazendo renderização condicional para mostrar algo se uma condição for atendida */}
        {preco <= 1300 && 
            <div className='promocao'>
                {/* <p>PROMOÇÃO</p> */}
                <ImAlarm />
            </div>
        }

    </div>

  )

}

export default Produto
