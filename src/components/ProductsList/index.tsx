import React, { useState } from "react";

import Slider from "react-slick";

import { ProductCard } from '../ProductCard';
import { ProductModal } from "../ProductModal";

import { Container } from "./styles";

import { ProductType } from '../../types/productType';

interface ProductListType {
  title: string,
  products: ProductType[]
}

export function ProductsList({ title, products }:ProductListType) {
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);
  const [productIdModal, setProductIdModal] = useState<ProductType>({} as ProductType);

  const handleOpenProductModal =(productId:ProductType)=>{
    setIsProductModalOpen(true);
    setProductIdModal(productId);
  }

  const handleCloseProductModal =()=>{
    setIsProductModalOpen(false);
  }

  function handleAddProduct(idItem: number, quantity:string) {
    let itemsFromLocalStorage:ProductType[] = JSON.parse(localStorage.getItem('products') || '[]');
    let isExisting:boolean = false;

    for(let i:number = 0; i < itemsFromLocalStorage.length; i++) {
      if(itemsFromLocalStorage[i].id === idItem){
        let CurrentQuantity:number = parseInt(itemsFromLocalStorage[i].quantity) + parseInt(quantity);

        itemsFromLocalStorage[i].quantity = ""+CurrentQuantity;
        localStorage.setItem("products", JSON.stringify(itemsFromLocalStorage));
        isExisting = true;
      }
    }

    if (!isExisting) {
      let item = products.find(item => item.id === idItem);

      if(item){
        item.quantity = quantity;
        itemsFromLocalStorage.push(item);
        localStorage.setItem("products", JSON.stringify(itemsFromLocalStorage));
      } 
    }
  }

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <ProductModal 
          isOpen={isProductModalOpen}
          onRequestClose={handleCloseProductModal}
          productModal={productIdModal}
          onSelectItem={handleAddProduct}
      />
      <h2>{title}</h2>
      <div>
        {/* @ts-ignore */}
        {products.length !== 0 &&
          <Slider {...settings}>
            {products.map((productItem) => (
                <ProductCard
                  key={productItem.id}
                  productItem={productItem}
                  onOpenNewTransactionModal={handleOpenProductModal}
                />
            ))}
          </Slider>
        }
      </div>
    </Container>
  )
}