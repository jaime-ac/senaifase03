//ela é uma função da biblieta que vai criar o elemento que vai monitorar o caminho ou rota das páginas e levar pra lá;
import { createBrowserRouter } from "react-router-dom"; 

//para definir as minhas rotas de navegação, preciso importar primeiro todas as páginas que desejo determinar suas respectivas rotas;
import Avisos from "../pages/Avisos"
import Contato from "../pages/Contato"
import Home from "../pages/Home"
import Produtos from "../pages/Produtos"

const router = createBrowserRouter([

    //dentro do meu objeto eu crio uma estrutura com dois propriedades principais para a navegação
    //o {path: ""...} é a rota ou seja o endereço de algum elemento ou página
    // e o {...element: <>} é o elemento ou página ao qual a rota deve levar

    {path: "/", element: <Home />}, 
    {path: "/contato", element: <Contato />},
    {path: "/avisos", element: <Avisos />},
    {path: "/produtos", element: <Produtos />},

]);

//quando você define as rotas, você exporta ele para ser usado na main.jsx através do RouterProvider, nesse caso não precisamos mais importar o App na main, mas sim este arquivo "router" na main
export default router;