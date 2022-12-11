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

export const ModalHeader = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;

    img{
        max-width: 4rem;
        max-height: 4rem;
        margin-right: 1rem;
    }
`;

export const Coupons = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 1rem 2rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        background: var(--blue);
        margin-top: 1rem;

        border-radius: 10px;
        padding: 1rem;
    }
`;

interface TextProps {
    size?: string,
    weight?: string,
    color?: string,
}

export const Text = Styled.p<TextProps>`
    font-size: ${props=>props.size};
    font-weight: ${props=>props.weight};
    color: ${props=>props.color};
    margin-bottom: 0.2rem;

    span {
        font-size: 1rem;
    }
`;


