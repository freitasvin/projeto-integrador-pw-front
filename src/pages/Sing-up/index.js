import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { FormInput } from '../../components/FormInput';
import { FormSelect } from '../../components/FormSelect';
import { FormAttachment } from '../../components/FormAttachment';
import { FormSubmit } from '../../components/FormSubmit';
import {
  ContainerStyle, MainStyle, FormStyled,
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
        <FormStyled id="form1">
          <h1>Informações Pessoais</h1>
          <FormInput
            type="text"
            inputId="entire-name"
            inputLabel="Nome Completo"
            size="large"
          />

          <div className="break" />

          <FormInput
            type="email"
            inputId="email"
            inputLabel="E-mail"
            size="medium"
          />

          <FormInput
            type="tel"
            inputId="phone"
            inputLabel="Telefone"
            size="medium"
          />

          <FormInput
            type="password"
            inputId="password"
            inputLabel="Crie uma senha"
            size="medium"
          />

          <FormInput
            type="password"
            inputId="password-repeat"
            inputLabel="Repita a senha"
            size="medium"
          />

        </FormStyled>

        <FormStyled id="form2">
          <h1>Informações do endereço</h1>

          <FormSelect
            type="text"
            inputId="select-state"
            inputLabel="Estado"
            size="small"
          />

          <FormSelect
            type="text"
            inputId="select-city"
            inputLabel="Cidade"
            size="small-medium"
          />

          <FormSelect
            type="text"
            inputId="select-neighborhood"
            inputLabel="Bairro"
            size="medium"
          />

          <FormInput
            type="text"
            inputId="house-number"
            inputLabel="Nº da casa"
            size="small"
          />

          <FormInput
            type="text"
            inputId="postal-code"
            inputLabel="CEP"
            size="small-medium"
          />

          <FormInput
            type="text"
            inputId="complement"
            inputLabel="Complemento"
            size="medium"
          />

          <FormAttachment
            inputId="address-proof"
            inputLabel="Comprovante de residência"
          />
        </FormStyled>

        <FormSubmit
          inputId="submit"
          value="Salvar"
        />

      </MainStyle>
    </ContainerStyle>
  );
}
