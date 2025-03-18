import { useState } from 'react'
import './Main.css'
import { GiInvertedDice1 } from "react-icons/gi";
import { GiInvertedDice2 } from "react-icons/gi";
import { GiInvertedDice3 } from "react-icons/gi";
import { GiInvertedDice4 } from "react-icons/gi";
import { GiInvertedDice5 } from "react-icons/gi";
import { GiInvertedDice6 } from "react-icons/gi";
import ImagemDado from './ImagemDado';

function Main() {

    const [dado, setDado] = useState(<ImagemDado />);
    const [tentativas, setTentativas] = useState(3);
    const [total, setTotal] = useState(0);
    const [pontos, setPontos] = useState();

    const [listaDados, setListaDados] = useState([
        <GiInvertedDice1 />, 
        <GiInvertedDice2 />,
        <GiInvertedDice3 />, 
        <GiInvertedDice4 />, 
        <GiInvertedDice5 />, 
        <GiInvertedDice6 />
    ]);

    function rolarDado(){

        
        let num_tentativas = tentativas
        let meta = total

        let resultado = Math.floor(Math.random() * listaDados.length)

        setDado(listaDados[resultado])

        if (num_tentativas > 0) {
            
            let resultado = Math.floor(Math.random() * listaDados.length)
    
            setDado(listaDados[resultado])
            
            if(resultado === 0 || resultado === 2 || resultado === 4){

                meta = (meta + resultado + 1)
                num_tentativas = num_tentativas + 1

            }else{

                meta = (meta + resultado + 1)
                num_tentativas = num_tentativas -2

            }

        }else{

            meta = 'Perdeu!'

        };

        setTentativas(num_tentativas);
        setTotal(meta);
        setPontos(meta);

    }

  return (

    <div className='container__main'>

        <div className="main__top">

            <div className="main__top--card__dado">
                {dado}
            </div>
            
        </div>

        <div className="main__center">

            <button className="main__center--botao__jogar" onClick={rolarDado}>Rolar</button>

        </div>

        <div className="main__bottom">

            <div className="main__bottom--tentativas">
                <label htmlFor="" className='numero__tentativas'>Meta: 50 pontos</label>
                <label htmlFor="" className='numero__tentativas'>Tentativas: {tentativas}</label>
            </div>

            <div className="main__bottom--total">

                <div className="main__bottom--total__pontos">
                    {total}
                </div>

                <label htmlFor="" className="main__bottom--mensagem">Total de pontos somados: {pontos}</label>

            </div>

        </div>
      
    </div>
  )
}

export default Main
