import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='container__navbar'>

        <Link to="/">Home</Link>
        <Link to="/cortes">Cortes</Link>
        <Link to="/contato">Contato</Link>
      
    </nav>
  )
}

export default Navbar
