import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { Input } from './Input';
import { Select } from './Select';
import {
  ContainerStyle, MainStyle, FormStyled, ItemStyle, SubmitStyled,
} from './styles';

export function SingUp() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Cadastre-se"
        subtitle="Para realizar o seu cadastro preencha corretamente os campos ao lado!"
        footerWarning
        userButton={false}
      />

      <MainStyle>
        <FormStyled>
          <h1>Informações Pessoais</h1>
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
          <h1>Informações do endereço</h1>
          <ItemStyle>
            <Select
              type="text"
              inputId="select-state"
              inputLabel="Estado"
              size="small"
            />
          </ItemStyle>
          <ItemStyle>
            <Select
              type="text"
              inputId="select-city"
              inputLabel="Cidade"
              size="small-medium"
            />
          </ItemStyle>
          <ItemStyle>
            <Select
              type="text"
              inputId="select-neighborhood"
              inputLabel="Bairro"
              size="medium"
            />
          </ItemStyle>
          <ItemStyle>
            <Input
              type="text"
              inputId="house-number"
              inputLabel="Nº da casa"
              size="small"
            />
          </ItemStyle>
          <ItemStyle>
            <Input
              type="text"
              inputId="postal-code"
              inputLabel="CEP"
              size="small-medium"
            />
          </ItemStyle>
          <ItemStyle>
            <Input
              type="text"
              inputId="complement"
              inputLabel="Complemento"
              size="medium"
            />
          </ItemStyle>
          <ItemStyle>
            <label htmlFor="address-proof">
              Comprovante de residência
              <input type="file" id="address-proof" />
            </label>
          </ItemStyle>
        </FormStyled>

        <ItemStyle>
          <SubmitStyled type="submit" id="submitButton" value="Salvar" />
        </ItemStyle>

      </MainStyle>
    </ContainerStyle>
  );
}
