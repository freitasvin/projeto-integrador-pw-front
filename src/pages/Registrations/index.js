import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import {
  MainStyle, ContainerStyle, RegistrationsStyle, LinkStyled,
} from './styles';
import { RegistrationIntroduction } from '../../components/RegistrationIntroduction';
import { RegistrationCard } from '../../components/RegistrationCard';

export function Registrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const reg = JSON.parse(localStorage.getItem('registrations'));
    setRegistrations(reg || []);
  }, []);

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

        {registrations.length > 0 ? (
          <RegistrationsStyle>
            <LinkStyled to="/registrations">
              {registrations.map((regis) => (
                <RegistrationCard
                  name={regis.childrenName}
                  className={regis.className}
                  situation={regis.situation}
                />
              )) }

            </LinkStyled>
          </RegistrationsStyle>
        )
          : (
            <RegistrationIntroduction subTitle="Você não possui nenhuma matricula pendente ou ativa" />
          )}

      </MainStyle>
    </ContainerStyle>
  );
}
