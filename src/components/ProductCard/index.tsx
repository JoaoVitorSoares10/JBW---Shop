import React from "react";

import { Container, Text, ProductInfo, ProductImg } from "./styles";
import { ProductType } from '../../types/productType';

interface ProductCardProps {
    productItem: ProductType,
    onOpenNewTransactionModal: (Item: ProductType) => void
}

export function ProductCard({productItem, onOpenNewTransactionModal}:ProductCardProps){
     return(
        <Container onClick={()=>onOpenNewTransactionModal(productItem)} >
            <ProductImg>
                <img src={productItem.img_url} alt="" />
            </ProductImg>
            <ProductInfo>
                <Text height='1.5rem' size="0.7rem" weight="600">{productItem.title}</Text> 
                <Text height='2rem' size="0.7rem" weight="400" color="#666">{productItem.desc}</Text> 
                <Text size="1.2rem" weight="600">
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                    }).format(productItem.price)}    
                </Text> 
            </ProductInfo>
        </Container>
    )
}