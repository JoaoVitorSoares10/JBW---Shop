import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --blue: #D6EFFB;
        --soft-blue: #F1F6F7;
        --dark-blue: #1ba6e9;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #444;
    }

    html {
        @media(max-width: 1080px){
            font-size: 98.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
        @media(max-width: 480px){
            font-size: 76.5%;
        }
        @media(max-width: 420px){
            font-size: 66%;
        }
        @media(max-width: 360px){
            font-size: 55%;
        }
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background: var(--background);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        border: 0;
        cursor: pointer;
        padding: 0.6rem 1.5rem;
        border-radius: 10px;
        font-size: 0.8rem;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #555;
    }

    .react-modal-overlay {
        position: fixed;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background: rgb(0, 0, 0, 0.5);
    }
`;