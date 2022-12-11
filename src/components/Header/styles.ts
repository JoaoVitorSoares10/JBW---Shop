import Styled from "styled-components";

export const Container = Styled.header`
    padding: 0.5rem 2rem;

    background: #fff;
    box-shadow: 0px 0px 5px var(--dark-blue); 
    position: fixed;
    top: 0rem;
    left: 0rem;
    right: 0rem;

    z-index: 1;
`;

export const Content = Styled.nav`
    margin: auto;
    width: 90%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 6rem;
    }

    button {
        background: var(--dark-blue);
        color: #fff;

        transition: transform 0.3s;

        border: 1px solid var(--dark-blue);
        margin: 0 0.5rem;

        &:hover{
            background: #fff;
            color: var(--dark-blue)
        }
    }
`;