import Styled from 'styled-components';
import { darken } from 'polished';

export const Container = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #fff;
    border-radius: 10px;

    padding: 1rem;

    margin-bottom: 0.5rem;
`;

export const ItemImg = Styled.div`  
    width: 3rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    img {
        max-width: 3rem;
        max-height: 3rem;
    } 
`;

export const ItemInfo = Styled.div`  
    padding: 0 1rem; 
    flex: 8;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
    }
`;

export const ItemTitle = Styled.div`  
    padding: 0 1rem;
    min-width: 280px;
`;

export const ItemQuantity= Styled.div` 
    margin: 0 1rem; 
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100px;

    border: 1px solid #ddd;
    border-radius: 5px;

    button {
        background: none;
        font-size: 1.2rem;
        color: var(--dark-blue);
    }
`;

export const ItemPrice= Styled.div` 
    display: flex;
    align-items: center;
    justify-content: center; 

    min-width: 110px;

    padding: 0 1rem; 
`;

export const Buttons = Styled.div`
    min-width: 100px;

    button {
        background: #fff;
        color: #fdae42;

        &:hover {
            background: #fff;
            color: ${darken(0.2,  "#fdae42")}
        }
    }
`;

interface TextProps {
    size: string,
    weight: string
}

export const Text = Styled.p<TextProps>`
    font-size: ${props=>props.size};
    font-weight: ${props=>props.weight};
    color: ${props=>props.color};
`;
