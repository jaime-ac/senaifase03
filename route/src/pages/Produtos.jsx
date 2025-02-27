import CardProduto from '../components/CardProduto';
import Navbar from '../components/Navbar'
import './Produtos.css';

function Produtos() {

  const airJordans = [
    { 
      id: 1,
      name: "Air Jordan 1 Retro High OG 'Bred'", 
      image: "/images/1.webp", 
      price: 550 
    },
    { 
      id: 2,
      name: "Air Jordan 1 Retro High OG 'Royal'", 
      image: "/images/2.webp", 
      price: 500 
    },
    { 
      id: 3,
      name: "Air Jordan 1 Retro High OG 'Chicago'", 
      image: "/images/3.png", 
      price: 600 
    },
    { 
      id: 4,
      name: "Air Jordan 3 Retro 'Black Cement'", 
      image: "/images/4.jpeg", 
      price: 450 
    },
    { 
      id: 5,
      name: "Air Jordan 3 Retro 'White Cement'", 
      image: "/images/5.webp", 
      price: 480 
    },
    { 
      id: 6,
      name: "Air Jordan 4 Retro 'Bred'", 
      image: "/images/6.png", 
      price: 520 
    },
    { 
      id: 7,
      name: "Air Jordan 4 Retro 'Military Blue'", 
      image: "/images/7.webp", 
      price: 530 
    },
    { 
      id: 8,
      name: "Air Jordan 5 Retro 'Grape'", 
      image: "/images/8.webp", 
      price: 470 
    },
    { 
      id: 9,
      name: "Air Jordan 6 Retro 'Infrared'", 
      image: "/images/9.webp", 
      price: 490 
    },
    { 
      id: 10,
      name: "Air Jordan 7 Retro 'Bordeaux'", 
      image: "/images/10.webp", 
      price: 460 
    },
    { 
      id: 11,
      name: "Air Jordan 8 Retro 'Aqua'", 
      image: "/images/11.webp", 
      price: 500 
    },
    { 
      id: 12,
      name: "Air Jordan 9 Retro 'Space Jam'", 
      image: "/images/12.png", 
      price: 510 
    },
    { 
      id: 13,
      name: "Air Jordan 11 Retro 'Concord'", 
      image: "/images/13.webp", 
      price: 650 
    },
    { 
      id: 14,
      name: "Air Jordan 12 Retro 'Flu Game'", 
      image: "/images/14.png", 
      price: 480 
    },
    { 
      id: 15,
      name: "Air Jordan 13 Retro 'Bred'", 
      image: "/images/15.png", 
      price: 490 
    }
  ];
  
   
  return (

    <div className='produtos__container'>

      <Navbar />
      
      <div className="header__produtos">

        <h2>Nossos Produtos</h2>

      </div>

      <div className="cards__produtos">

          {airJordans.map((tenis) => (

            <CardProduto key={tenis.id} imagem={tenis.image} marca={tenis.name} preco={tenis.price}/>

          ))};

      </div>

    </div>
  )
}

export default Produtos
