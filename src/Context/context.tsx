import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Coupon } from '../types/couponType';
import { ProductType } from '../types/productType';

interface ProductsProviderProps {
    children: ReactNode;
}

interface ProductContextData {
    techProducts: ProductType[],
    bookProducts: ProductType[],
    clothesProducts: ProductType[],
    homeProducts: ProductType[],  
    coupons: Coupon[];
}

export const Context = createContext<ProductContextData>({} as ProductContextData);

export function ContextProvider({ children }:ProductsProviderProps){
    const [techProducts, setTechProducts] = useState<ProductType[]>([]);
    const [bookProducts, setBookProducts] = useState<ProductType[]>([]);
    const [clothesProducts, setClothesProducts] = useState<ProductType[]>([]);
    const [homeProducts, setHomeProducts] = useState<ProductType[]>([]);
    const [coupons, setCoupons] = useState<Coupon[]>([]);

    useEffect(() => {
        api.get('coupons').then(response => setCoupons(response.data))
    }, [])

    useEffect(() => {
        api.get('tech').then(response => setTechProducts(response.data))
        api.get('books').then(response => setBookProducts(response.data))
        api.get('clothes').then(response => setClothesProducts(response.data))
        api.get('home').then(response => setHomeProducts(response.data))
    }, []);

    return(
        <Context.Provider value={{ techProducts, bookProducts, clothesProducts, homeProducts, coupons }}>
            {children}
        </Context.Provider>
    )
}