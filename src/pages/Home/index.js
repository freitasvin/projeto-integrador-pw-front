import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import MainContainer from '../../components/Main/MainContainer';
import { ContainerStyle } from '../../styles/ContainerStyle';

function Home() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Bem-vindo"
        subtitle="Está procurando uma creche para seu filho(a)? Não perca tempo!"
        footerSingup
      />
      <MainContainer />
    </ContainerStyle>
  );
}

export default Home;
