import React from 'react'
import { Container, ProductsHeader} from "./style";

export function PageNotFound(){
    return(
        <Container>
            <ProductsHeader>
                <h2>Pagina não encontrada!</h2>
            </ProductsHeader>
        </Container>
    )
}