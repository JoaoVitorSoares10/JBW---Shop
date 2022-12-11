import React from "react";
import { ContextProvider } from "../Context/context";

import { GlobalStyle } from "../styles/GlobalStyle";
import { Header } from "../components/Header";
import { PageNotFound } from "../components/PageNotFound";

export default function NotFoundPage(){
    return(
        <ContextProvider>
            <GlobalStyle />
            <Header />
            <PageNotFound />
        </ContextProvider>
    );
}