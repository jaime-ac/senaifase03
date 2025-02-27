import './CardProduto.css'

function CardProduto({imagem, marca, preco}) {
  return (
    <div className="box__card--produto">

          <div className="card__imagem">

            <img src={imagem} alt="imagem do tênis" className='imagem__tenis'/>

          </div>

          <div className="card__marca">

            <p>{marca}</p>

          </div>

          <div className="card__preco">

            <p>${preco.toFixed(2)}</p>

          </div>


        </div>
  )
}

export default CardProduto
