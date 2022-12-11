import { ContextProvider } from "../Context/context";
import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "../components/Header";
import { Products } from "../components/Products";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Index(){  
    return(
        <ContextProvider>
            <GlobalStyle/>
            <Header />
            <Products />
        </ContextProvider>
    );
}