import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import MainContainer from '../../components/Main/MainContainer';
import { ContainerStyle } from '../../styles/ContainerStyle';

function Home() {
  return (
    <ContainerStyle>
      <IntroductionContainer userButton={false} homeButton={false} />
      <MainContainer />
    </ContainerStyle>
  );
}

export default Home;
