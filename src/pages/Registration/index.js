import React from 'react';
import { Menu } from '../../components/Menu';
import { FormInput } from '../../components/FormInput';
// import { FormSubmit } from '../../components/FormSubmit';
import { ContainerStyle } from '../Sing-up/styles';
import { MainStyle, FormStyled, BreakStyle } from './styles';
import vacancyApproved from '../../Images/Icons/vaga-aprovada.png';
import { RegistrationIntroduction } from './RegistrationIntroduction';

export function Registration() {
  return (
    <ContainerStyle>
      <Menu
        activeRegistration
      />

      <MainStyle>

        <RegistrationIntroduction
          title="Minhas matrícula(s)"
          subTitle="Verifique as informações referente a matrículas"
        />

        <FormStyled>

          <img src={vacancyApproved} alt="vacancySituation" />

          <BreakStyle />

          <FormInput
            type="text"
            inputId="sonName"
            inputLabel="Nome do(a) filho(a)"
            size="large-medium"
          />
          <FormInput
            type="text"
            inputId="sonBirthday"
            inputLabel="Data de nascimento"
            size="small-medium"
          />
          <FormInput
            type="text"
            inputId="fatherName"
            inputLabel="Nome do pai"
            size="large"
          />
          <FormInput
            type="text"
            inputId="motherName"
            inputLabel="Nome da mãe"
            size="large"
          />
          <FormInput
            type="text"
            inputId="city"
            inputLabel="Cidade"
            size="medium"
          />
          <FormInput
            type="text"
            inputId="neighborhood"
            inputLabel="Bairro"
            size="medium"
          />
          <FormInput
            type="number"
            inputId="postalCode"
            inputLabel="CEP"
            size="small-medium"
          />
          <FormInput
            type="number"
            inputId="houseNumber"
            inputLabel="Número da casa"
            size="small-medium"
          />
          <FormInput
            type="text"
            inputId="complement"
            inputLabel="Complemento"
            size="medium-small"
          />
        </FormStyled>

      </MainStyle>
    </ContainerStyle>
  );
}
