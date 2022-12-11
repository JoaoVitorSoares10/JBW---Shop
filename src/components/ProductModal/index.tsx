import React, { useState } from 'react';

import { Product, ProductImg, ProductInfo, Text, Modal, CloseButton } from './styles';
import { ProductType } from '../../types/productType';

import { navigate } from "gatsby"

interface ProductModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
    onSelectItem: (idItem: number, quantity:string) => void,
    productModal: ProductType
}

export function ProductModal({ isOpen, onRequestClose, productModal, onSelectItem }: ProductModalProps) {
    const [quantity, setQuantity] = useState<string>("1");
    const [isQualityValid, setIsQualityValid] = useState<boolean>(true)

    const handleAddProduct=()=>{
        if(parseInt(quantity) <= 0 || isNaN(parseInt(quantity))){
            setIsQualityValid(false);
        }else{
            onSelectItem(productModal.id, quantity)
            navigate("/list");
        }
    }    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <CloseButton>
                <button onClick={onRequestClose}>X</button>
            </CloseButton>
            <Product>
                <ProductImg>
                    <img src={productModal.img_url} alt={productModal.desc} />
                </ProductImg>
                <ProductInfo>
                    <Text size="1.5rem" weight="600">{productModal.title}</Text>
                    <Text size="1rem" weight="400"  color="#666">{productModal.desc}</Text>
                    <Text size="2.5rem" weight="600">
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(productModal.price)}
                    </Text>
                    <Text>Quantidade:</Text>
                    <input type="number" id="quantindade" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    {!isQualityValid && <p>0 unidades selecionadas</p>}
                    <button onClick={()=>handleAddProduct()}>Adicionar ao Carrinho</button>
                </ProductInfo>
            </Product>
        </Modal>
    )
}