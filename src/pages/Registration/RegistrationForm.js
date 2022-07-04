import React from 'react';
import { Link } from 'react-router-dom';
import {
  FormStyled, BreakStyle, ContainerStyle, MainStyle,
} from './styles';
import { FormInput } from '../../components/FormInput';
import { Button } from '../../components/Button';
import { Menu } from '../../components/Menu';
import { RegistrationIntroduction } from './RegistrationIntroduction';
import vacancyApproved from '../../Images/Icons/vaga-aprovada.png';

export function RegistrationForm() {
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

          <BreakStyle />

          <Link to="/registration">
            <Button value="< voltar" />
          </Link>
        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
