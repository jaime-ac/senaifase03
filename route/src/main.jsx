import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(

  //quando chamo RouterProvider no lugar do App para gerenciar minha navegação, eu tenho que passar para a propriedade dele o arquivo de navegação que criei como argumento;
  //nesse caso passei o "router" que é o objeto que criamos para gerenciar a navegação lá no arquivo /routes/routes.jsx; e para isso precisa importar o arquivo "router" que exportamos;
  <RouterProvider router={router}>


  </RouterProvider>

)
