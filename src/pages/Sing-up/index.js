import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { Input } from './Input';
import { Select } from './Select';
import {
  ContainerStyle, MainStyle, FormStyled, BreakStyle, ItemStyle,
} from './styles';

function Login() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Cadastre-se"
        subtitle="Para realizar o seu cadastro preencha corretamente os campos ao lado!"
        footerWarning
      />

      <MainStyle>
        <FormStyled>
          <h1>Informações Pessoais</h1>
          <BreakStyle />
          <ItemStyle>
            <Input
              type="text"
              inputId="entire-name"
              inputLabel="Nome Completo"
              size="large"
            />
          </ItemStyle>
          <div className="break" />
          <ItemStyle>
            <Input
              type="email"
              inputId="email"
              inputLabel="E-mail"
              size="medium"
            />
          </ItemStyle>
          <ItemStyle>
            <Input
              type="tel"
              inputId="phone"
              inputLabel="Telefone"
              size="medium"
            />
          </ItemStyle>
          <ItemStyle>
            <Input
              type="password"
              inputId="password"
              inputLabel="Crie uma senha"
              size="medium"
            />
          </ItemStyle>
          <ItemStyle>
            <Input
              type="password"
              inputId="password-repeat"
              inputLabel="Repita a senha"
              size="medium"
            />
          </ItemStyle>
        </FormStyled>

        <FormStyled>
          <Select
            type="text"
            inputId="state"
            inputLabel="Estado"
            size="small"
          />
          <Select
            type="text"
            inputId="city"
            inputLabel="Cidade"
            size="small-medium"
          />
          <label htmlFor="neighborhood">
            Bairro
            <input type="text" id="neighborhood" />
          </label>
          <label htmlFor="house-number">
            Nº da casa
            <input type="text" id="house-number" />
          </label>
          <label htmlFor="postal-code">
            CEP
            <input type="text" id="postal-code" />
          </label>
          <label htmlFor="complement">
            Complemento
            <input type="text" id="complement" />
          </label>

        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}

export default Login;
