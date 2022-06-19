import React from 'react';
import IntroductionContainer from '../../components/Introduction/IntroductionContainer';
import MainContainer from '../../components/Main/MainContainer';
import { ContainerStyle } from '../../styles/ContainerStyle';


function Home() {
    return (
        <ContainerStyle>
            <IntroductionContainer/>
            <MainContainer/>
        </ContainerStyle>
    )
}

export default Home;