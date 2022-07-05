import React from 'react';
import { Menu } from '../../components/Menu';
import {
  MainStyle, ContainerStyle, RegistrationsStyle, LinkStyled,
} from './styles';
import { RegistrationIntroduction } from '../../components/RegistrationIntroduction';
import { RegistrationCard } from '../../components/RegistrationCard';

export function Registrations() {
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
          <LinkStyled to="/registrations">
            <RegistrationCard
              name="Vinícius de Almeida Freitas"
              className="Maternal 1"
              situation="approved"
            />
          </LinkStyled>
        </RegistrationsStyle>

      </MainStyle>
    </ContainerStyle>
  );
}
