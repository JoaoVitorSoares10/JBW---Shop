import { Coupons, Modal, CloseButton, ModalHeader, Text} from './styles';
import React, { useContext } from 'react';
import { Context } from '../../Context/context';

import { StaticImage } from "gatsby-plugin-image"

interface ProductModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function CouponModal({ isOpen, onRequestClose}: ProductModalProps) {
    const { coupons } = useContext(Context);

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
            <ModalHeader>
                <StaticImage src="../../images/coupon.png" alt="Coupon" />
                <h2>Temos alguns cupons de desconto para você</h2>
            </ModalHeader>
            <Coupons>  
                {coupons.map((item) =>(
                    <div key={item.id}>
                        <Text color="#1ba6e9" size="1.5rem" weight="600">{item.cod}</Text>
                        <Text size="1rem">{item.name}</Text>
                    </div>
                ))}
            </Coupons>
        </Modal>
    )
}