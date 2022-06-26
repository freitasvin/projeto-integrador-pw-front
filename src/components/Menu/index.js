import React from 'react';
import {
  MenuStyle, MenuItemStyle, NavigationContainerStyle, LogoStyle,
} from './styles';
import homeIcon from '../../Images/Icons/Home.png';
import registrationIcon from '../../Images/Icons/Matriculas.png';
import userIcon from '../../Images/Icons/User.png';

export function Menu() {
  return (
    <NavigationContainerStyle>
      <MenuStyle>
        <MenuItemStyle>
          <img src={homeIcon} alt="matriculaIcon" />

          <span>Inicio</span>
        </MenuItemStyle>

        <MenuItemStyle>
          <img src={userIcon} alt="matriculaIcon" />

          <span>Perfil</span>
        </MenuItemStyle>

        <MenuItemStyle>
          <img src={registrationIcon} alt="matriculaIcon" />

          <span>Matricula(s)</span>
        </MenuItemStyle>
      </MenuStyle>

      <LogoStyle>
        Imagem
      </LogoStyle>

    </NavigationContainerStyle>
  );
}
