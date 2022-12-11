import Styled from 'styled-components';

export const Container = Styled.main`
    padding-top: 0rem;
    width: 100%;
    background: var(--blue);
    position: relative;
`;

export const ProductsHeader = Styled.div`
    width: 100%;
    text-align: center;
    padding: 8rem 0rem 10rem 0rem;
`;

export const Content = Styled.div`
    position: absolute;
    top: 12rem;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin 0 auto;

    max-width: 1020px;
    min-height: 400px;

    h3{
        color: #555;
        font-weight: 400;

        display: block;
        margin: 0 auto;
    }

    h4{
        color: #777;
        font-weight: 400;

        display: block;
        margin: 0 auto;
    }
`;

export const ListSummary = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    table {
        width: 100%;
    }

    div{
        max-width: 100%;
        min-width: 300px;
        background: #fff;
        padding: 1rem;
        border-radius: 10px;
    }
`;

export const DiscountCoupon = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    input {
        padding: 0.6rem 1rem;
        width: 100%;

        border: 1px solid #ddd;
        border-radius: 10px;
        outline: none;
    }
`;

export const Button = Styled.button`   
    background: var(--dark-blue);
    color: #fff;
    transition: transform 0.3s;
    border: 1px solid var(--dark-blue);

    padding: 0.6rem 1rem;

    &:hover{
        background: #fff;
        color: var(--dark-blue)
    }
`;

interface TableTdProps {
    color?: string,
    size?: string,
    textAlign?: string,
}

export const TableTd = Styled.td<TableTdProps>`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    padding: 0.1rem 1rem 0rem 0rem;
`;