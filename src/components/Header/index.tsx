import React from "react";

import { Container, Content } from "./styles";
import { Link } from "gatsby";
import { useState } from "react";
import { CouponModal } from "../CouponModal";

import { StaticImage } from "gatsby-plugin-image"

export function Header(){
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    
    const handleOpenProductModal =()=>{
        setIsProductModalOpen(true);
    }

    const handleCloseProductModal =()=>{
        setIsProductModalOpen(false);
    }

    return(
        <Container>
            <CouponModal
                isOpen={isProductModalOpen}
                onRequestClose={handleCloseProductModal}
            />
            <Content>
                <Link style={{ textDecoration: 'none' }} to="/"><StaticImage src="../../images/logo.png" alt="Wishlist" /></Link>
                <div>
                    <button onClick={()=>handleOpenProductModal()}>Cupons</button>
                    <Link to="/list"><button>Carrinho</button></Link> 
                </div>
            </Content>
        </Container>
    )
}