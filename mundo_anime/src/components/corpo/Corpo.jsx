import './Corpo.css'

function Corpo() {
  return (
    <div className='container-corpo'>

        <div className="corpoEsquerda">

            <div className="corpoEsquerdaUm">

                <div className="corpoEsquerdaUmCima">
                    
                </div>

                <div className="corpoEsquerdaUmBaixo">

                    <button className='botao-acessar'>Acessar Animes...</button>

                </div>
                
            </div>

            <div className="corpoEsquerdaDois">

                <div className="corpoEsquerdaDoisCima">

                    {/* <h1>Eu vou ficar bem. Afinal, eu sou o mais forte que existe.</h1> */}
                    
                </div>

                <div className="corpoEsquerdaDoisBaixo">

                </div>

            </div>

        </div>

        <div className="corpoDireita">

            <div className="parteCimaDireita">

            </div>

            <div className="parteBaixoDireita">

            </div>

        </div>
      
    </div>
  )
}

export default Corpo
