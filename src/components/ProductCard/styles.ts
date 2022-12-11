import Styled from 'styled-components';

export const Container = Styled.div`
    width: 14rem;
    padding: 0.5rem;

    background: #fff;
    border: 1px solid #ddd;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;  

    transition: transform 0.3s;

    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ProductImg = Styled.div`
    width: 12rem;
    height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-height: 12rem;
        max-width: 12rem;
    }
`;

export const ProductInfo = Styled.div`
    width: 100%;

    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

interface TextProps {
    height?: string,
    size: string,
    weight: string,
    color?: string
}

export const Text = Styled.p<TextProps>`
    height: ${(props) => props.height};
    font-size: ${(props) => props.size};
    margin-bottom: 0.5rem;
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color}
`;
