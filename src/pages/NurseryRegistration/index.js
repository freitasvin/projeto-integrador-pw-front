import React from 'react';
import {
  FormStyled, ContainerStyle, MainStyle,
} from './styles';
import { Menu } from '../../components/Menu';
import { FormInput } from '../../components/FormInput';
import { FormSelect } from '../../components/FormSelect';
import { FormSubmit } from '../../components/FormSubmit';
import { RegistrationIntroduction } from '../../components/RegistrationIntroduction';

export function NurseryRegistration() {
  return (

    <ContainerStyle>
      <Menu
        activedNursery
      />

      <MainStyle>

        <RegistrationIntroduction
          title="Minhas matrícula(s)"
          subTitle="Verifique as informações referente a matrículas"
          addNurseryImage
        />

        <FormStyled id="form2">
          <h1>Informações da creche</h1>

          <FormInput
            type="text"
            inputId="nurseryName"
            inputLabel="Nome da Creche"
            size="large"
          />

          <FormSelect
            inputId="select-state"
            inputLabel="Estado"
            size="small"
          />

          <FormSelect
            inputId="select-city"
            inputLabel="Cidade"
            size="small-medium"
          />

          <FormSelect
            inputId="select-neighborhood"
            inputLabel="Bairro"
            size="medium"
          />

          <FormInput
            type="text"
            inputId="nursery-number"
            inputLabel="Numero"
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

          <FormInput
            type="text"
            inputId="cnpj"
            inputLabel="CNPJ"
            size="medium"
          />
        </FormStyled>

        <FormSubmit
          inputId="submit"
          value="Solicitar"
        />

      </MainStyle>
    </ContainerStyle>
  );
}
