import React, { useContext } from 'react';
import { Context } from '../../Context/context';

import { Loader } from '../Loader';
import { ProductsList } from "../ProductsList";

import { Container, ProductsHeader, Panel, ProductsHeaderInfo, ProductsHeaderImg, ProductsContainer} from "./styles";

import { StaticImage } from "gatsby-plugin-image"

export function Products() {
    const {techProducts, bookProducts, clothesProducts, homeProducts} = useContext(Context);

    return (
        <>
            {techProducts.length === 0 || bookProducts.length === 0 || clothesProducts.length === 0 || homeProducts.length === 0
            ?<Loader />
            :<Container>
                <ProductsHeader>
                    <Panel>
                        <ProductsHeaderInfo>
                            <span>Aqui <br/>você encontra</span>
                            <p>os melhores produtos e preços do mercado!</p>
                        </ProductsHeaderInfo>
                        <ProductsHeaderImg>
                            <StaticImage 
                                src="../../images/products.png" 
                                alt="products" 
                            />
                        </ProductsHeaderImg>
                    </Panel>
                </ProductsHeader>
                <ProductsContainer>
                    <ProductsList 
                        title="Tecnologia"
                        products={techProducts}
                    />
                    <ProductsList 
                        title="Literatura"
                        products={bookProducts}
                    />
                    <ProductsList 
                        title="Roupas"
                        products={clothesProducts}
                    />
                    <ProductsList 
                        title="Para casa"
                        products={homeProducts}
                    />
                </ProductsContainer>
            </Container>
            }
        </>
    )
}