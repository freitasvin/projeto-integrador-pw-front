import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { ContainerStyle } from './styles';

export function Profile() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Bem-vindo"
        subtitle="Está procurando uma creche para seu filho(a)? Não perca tempo!"
        introduction={false}
        userButton={false}
        homeButton={false}
      />
    </ContainerStyle>
  );
}
