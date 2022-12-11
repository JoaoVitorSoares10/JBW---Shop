import Styled from 'styled-components';
import ReactModal from 'react-modal';

export const Modal = Styled(ReactModal)`
    background: #fff;
    width: 100%;
    max-width: 700px;
    padding: 0.5rem;
    position: relative;

    border-radius: 5px;
`;

export const CloseButton = Styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    
    background: var(--dark-blue);
    border-radius: 5px;

    button {
        background: none;
        font-size: 1.2rem;
        color: #fff;

        &:hover {
            color: #aaa;
        }
    }
`;

export const Product = Styled.div`
    display: flex;
    justify-content: space-between;
    background: #fff;

    margin-top: 1rem;
`;

export const ProductImg = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem 3rem 3rem;
    
    img{
        max-width: 15rem;
        max-height: 15rem;
    }
`;

export const ProductInfo = Styled.div`
    padding: 0 3rem 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 400px;

    input {
        font-size: 1rem;
        border-radius: 10px;
        border: 1px solid #aaa;
        outline: none;
        padding: 0.5rem;
    }

    input::-webkit-inner-spin-button { 
        all: unset; 
        min-width: 21px;
        min-height: 45px;
        margin: 17px;
        background-image: 
        linear-gradient(to top, transparent 0px, transparent 16px, #fff 16px, #fff 26px, transparent 26px, transparent 35px, #000 35px,#000 36px,transparent 36px, transparent 40px),
        linear-gradient(to right, transparent 0px, transparent 10px, #000 10px, #000 11px, transparent 11px, transparent 21px);
        transform: rotate(90deg) scale(0.8, 0.9);
        cursor:pointer;
    }

    button {
        background: var(--dark-blue);
        color: #fff;
        transition: transform 0.3s;
        border: 1px solid var(--dark-blue);
        padding: 0.8rem 4rem;
        margin-top: 1rem;
        width: 100%;

        &:hover{
            background: #fff;
            color: var(--dark-blue)
        }
    }
`;

interface TextProps {
    size?: string,
    weight?: string,
    color?:string
}

export const Text = Styled.p<TextProps>`
    color: ${props=>props.color};

    font-size: ${props=>props.size};
    font-weight: ${props=>props.weight};
    margin-bottom: 1rem;
`;


