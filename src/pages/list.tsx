import React from "react";
import { ContextProvider } from "../Context/context";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Header } from "../components/Header";
import { SelectProducts } from "../components/SelectProducts";

export default function List(){
    return(
        <ContextProvider>
            <GlobalStyle />
            <Header />
            <SelectProducts />
        </ContextProvider>
    );
}