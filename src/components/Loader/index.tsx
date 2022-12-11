import React from 'react';

import { Container } from './styles';
const LoaderImg = require('../../images/Loader.svg');

export function Loader(){
    return(
        <Container>
            <img src={LoaderImg} alt="" />
        </Container>
    )
}