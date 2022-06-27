import React from 'react';
import {
  ContainerStyle, FormStyled, MainStyle, Break,
} from './styles';
import { Menu } from '../../components/Menu';
import { FormInput } from '../../components/FormInput';
import profileIcon from '../../Images/Icons/Profile.png';

export function Profile() {
  return (
    <ContainerStyle>
      <Menu />
      <MainStyle>
        <div>
          <h2>Meu Perfil</h2>
          <h4>Gerencie ou edite as informações do perfil</h4>
        </div>

        <FormStyled>
          <img src={profileIcon} alt="profileIcon" />

          <Break />

          <FormInput
            type="text"
            inputId="diplayName"
            inputLabel="Nome completo"
            size="large-medium"
          />
        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
