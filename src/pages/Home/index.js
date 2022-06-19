import React from 'react';
import IntroductionContainer from '../../components/IntroductionContainer';
import MainContainer from '../../components/MainContainer';
import { ContainerStyle } from '../../styles/ContainerStyle';


function Home() {
    return (
        <ContainerStyle>
            <IntroductionContainer />
            <MainContainer />
        </ContainerStyle>
    )
}

export default Home;