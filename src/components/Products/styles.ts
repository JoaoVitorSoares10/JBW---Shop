import Styled from 'styled-components';

export const Container = Styled.main`
    padding-top: 0rem;
    width: 100%;
    position: relative;
`;

export const ProductsHeader = Styled.div`
    width: 100%;
    background: var(--blue);
    padding: 10rem 0;
`;

export const Panel = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 2rem;
`;

export const ProductsHeaderInfo = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 0 0;

    text-align: left;
    color: #333;

    span {
        font-size: 2.5rem;
        font-weight: 600;
    }

    p{
        font-size: 1.2rem;
        font-weight: 500;
    }
`;

export const ProductsHeaderImg = Styled.div`
    img {
        width: 25rem;
    }

    @media(max-width: 460px){
        display: none;
    }
`;

export const ProductsContainer = Styled.div`
    max-width: 1460px;
    position: absolute;
    top: 35rem;
    left: 2rem;
    right: 2rem;
    margin: 0 auto;

    @media(max-width: 460px){
        top: 25rem;
    }
`;