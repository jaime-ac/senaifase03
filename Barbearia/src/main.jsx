// import './index.css'
import router from './router/routes.jsx'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { GlobalContextProvider } from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(

  <GlobalContextProvider>
    
    <RouterProvider router={router}>
    </RouterProvider>
  </GlobalContextProvider>
  
)
