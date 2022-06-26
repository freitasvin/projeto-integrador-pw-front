import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { ContainerStyle, MainStyle, FormStyled } from './styles';
import { FormInput } from '../../components/FormInput';
import { FormSubmit } from '../../components/FormSubmit';

function handleSubmit(event) {
  event.preventDefault();
}

export function Login() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        userButton={false}
        title="Login"
        subtitle="Insira as informações de acesso"
        footerSingup
      />

      <MainStyle>
        <FormStyled onSubmit={handleSubmit}>
          <FormInput
            type="email"
            inputId="email"
            inputLabel="E-mail"
            size="medium"
          />
          <FormInput
            type="password"
            inputId="password"
            inputLabel="Senha"
            size="medium"
          />
          <FormSubmit
            inputId="submit"
            value="Entrar"
          />
        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}