import React from "react";

import { Buttons, Container, ItemInfo, Text, ItemImg, ItemPrice, ItemQuantity, ItemTitle} from "./styles";
import { ProductType } from '../../types/productType';

interface ProductListItemProps {
    productItem: ProductType,
    onRemoveItem: (idItem: number) => void,
    onChangeQuantity: (idItem: number, type:number) => void,
}

export function ProductListItem({productItem, onRemoveItem, onChangeQuantity}:ProductListItemProps) {
    const price:number = productItem.price * parseInt(productItem.quantity);

    return (
        <Container>
            <ItemImg>   
                <img src={productItem.img_url} alt="Product" />
            </ItemImg>
            <ItemInfo>
                <ItemTitle>
                    <Text size="1.2rem" weight="600">{productItem.title} </Text>
                </ItemTitle>
                <div>
                    <ItemQuantity>
                        <button onClick={()=>onChangeQuantity(productItem.id, 1)}>-</button>
                        <Text size="1rem" weight="600">{productItem.quantity}</Text>
                        <button onClick={()=>onChangeQuantity(productItem.id, 0)}>+</button>
                    </ItemQuantity>
                    <ItemPrice>
                        <Text size="1rem" weight="600">
                            {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                            }).format(price)}    
                        </Text> 
                    </ItemPrice>
                    <Buttons>
                        <button onClick={()=>onRemoveItem(productItem.id)}>Remover Item</button>
                    </Buttons>
                </div>
            </ItemInfo>
        </Container>
    )
}