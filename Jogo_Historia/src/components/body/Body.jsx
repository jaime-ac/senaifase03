import { useState } from 'react';
import './Body.css'

function Body() {
    
    const [imagem, setImagem] = useState('./images/inicio.png');
    const imagens = ['./images/casa-abandonada.png', './images/riqueza.png'];

    function rolarDado(){
        let i = Math.floor(Math.random() * imagens.length)
        setImagem(imagens[i])
    }

  return (
    <div className='container-body'>

        <div className="body_top">

            <img src="./images/contar-historia.png" alt="" className='ilustration_image'/>

            <label className="description_text">O dado decide o rumo, mas só você conta a história....🎲</label>
            
        </div>
        
        <div className="body_bottom">

            <div className="card_sort">

                <img src={imagem} alt="" className='image_result'/>

            </div>

            <div className="button_sort">

                <button className="button_sort--modification" onClick={rolarDado}>Rolar</button>

            </div>

        </div>
      
    </div>
  )
}

export default Body
