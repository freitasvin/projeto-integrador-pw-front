import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { ContainerStyle } from '../../styles/ContainerStyle';

function Login() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Cadastre-se"
        subtitle="Para realizar o seu cadastro preencha corretamente os campos ao lado!"
        footerWarning
      />
    </ContainerStyle>
  );
}

export default Login;
