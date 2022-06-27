import React from 'react';
import {
  ContainerStyle, FormStyled, MainStyle, Break,
} from './styles';
import { Menu } from '../../components/Menu';
import { FormInput } from '../../components/FormInput';
import { FormSubmit } from '../../components/FormSubmit';
import profileIcon from '../../Images/Icons/Profile.png';
import { ProfileIntroduction } from './ProfileIntroduction';

export function Profile() {
  return (
    <ContainerStyle>
      <Menu />
      <MainStyle>
        <ProfileIntroduction
          title="Meu perfil"
          subTitle="Verifique e edite as informações do perfil"
        />
        <FormStyled>
          <img src={profileIcon} alt="profileIcon" />

          <Break />

          <FormInput
            type="text"
            inputId="diplayName"
            inputLabel="Nome completo"
            size="large-medium"
          />
          <FormInput
            type="text"
            inputId="displayBirthday"
            inputLabel="Data de Nascimento"
            size="small-medium"
          />
          <FormInput
            type="email"
            inputId="displayEmail"
            inputLabel="E-mail"
            size="medium"
          />
          <FormInput
            type="tel"
            inputId="displayPhone"
            inputLabel="Telefone"
            size="medium"
          />
        </FormStyled>

        <FormStyled>
          <h4>Alterar senha</h4>
          <Break />
          <FormInput
            type="password"
            inputId="password"
            inputLabel="Nova senha"
            size="medium"
          />
          <FormInput
            type="password"
            inputId="passwordRepeat"
            inputLabel="Digite novamente"
            size="medium"
          />
          <Break />
          <FormSubmit
            inputId="submitNewPassword"
            value="Salvar"
          />

        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
