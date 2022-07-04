import React from 'react';
import { Menu } from '../../components/Menu';
import {
  MainStyle, ContainerStyle, RegistrationsStyle, LinkStyled,
} from './styles';
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

        <RegistrationsStyle>
          <LinkStyled to="/registration/1">
            <span>Vinícius de Almeida Freitas | Situação: Aprovado</span>
          </LinkStyled>
        </RegistrationsStyle>

      </MainStyle>
    </ContainerStyle>
  );
}
