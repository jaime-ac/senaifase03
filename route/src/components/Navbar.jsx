//a função Link me permite navegar entre as páginas com um clique;
import { Link } from "react-router-dom"; 
import "./Navbar.css";

function Navbar() {

  return (

    <div className="navbar__container">

        {/* aqui eu uso a função link para linkar cada aba de navegação na Navbar a sua respectiva página */}
        <Link to="/" className="texto__navbar">Home</Link>
        <Link to="/produtos" className="texto__navbar">Produtos</Link>
        <Link to="/avisos" className="texto__navbar">Avisos</Link>
        <Link to="/contato" className="texto__navbar">Contato</Link>
      
    </div>
  )
}

export default Navbar
