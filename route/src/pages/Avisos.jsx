import React from 'react'
import Navbar from '../components/Navbar'
import './Avisos.css';

function Avisos() {
  return (
    <div className='avisos__container'>

      <Navbar />

        <h1>Avisos: </h1>

        <ul>
            <li>Celular não pode;</li>
            <li>Joguinho idiota? Não pode também...</li>
            <li>Ficar vendo foto do menino Ney? Na, na...</li>
            <li>Componente começa com letra maíuscula...</li>
        </ul>

        
    </div>
  )
}

export default Avisos
