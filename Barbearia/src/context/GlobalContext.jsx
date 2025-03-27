import { children, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

    const listaCortes = [{}];
    const listaTrancas = [{}];

    return(
        <GlobalContext.Provider value={{listaCortes, listaTrancas}}>
            {children}
        </GlobalContext.Provider>
    )

}
