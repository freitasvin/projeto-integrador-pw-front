import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuStyle, MenuItemStyle, NavigationContainerStyle, LogoStyle, LinkStyled,
} from './styles';
import homeIcon from '../../Images/Icons/Home.png';
import registrationIcon from '../../Images/Icons/Matriculas.png';
import userIcon from '../../Images/Icons/User.png';
import logoutIcon from '../../Images/Icons/Sair.png';
import logo from '../../Images/Nursery-Logo/logo-1.png';

export function Menu() {
  return (
    <NavigationContainerStyle>
      <MenuStyle>
        <MenuItemStyle>

          <Link to="/">
            <img src={homeIcon} alt="matriculaIcon" />
          </Link>

          <LinkStyled to="/">
            <span>Inicio</span>
          </LinkStyled>

        </MenuItemStyle>

        <MenuItemStyle>

          <Link to="/profile">
            <img src={userIcon} alt="userIcon" />
          </Link>

          <LinkStyled to="/profile">
            <span>Perfil</span>
          </LinkStyled>

        </MenuItemStyle>

        <MenuItemStyle>

          <Link to="/matricula">
            <img src={registrationIcon} alt="registrationIcon" />
          </Link>

          <LinkStyled to="/matricula">
            <span>Matricula(s)</span>
          </LinkStyled>

        </MenuItemStyle>

        <MenuItemStyle>

          <Link to="/">
            <img src={logoutIcon} alt="logoutIcon" />
          </Link>

          <LinkStyled
            to="/"
            onClick={() => {
              localStorage.removeItem('idUser');
              localStorage.removeItem('idLevel');
              localStorage.removeItem('name');
              localStorage.removeItem('email');
              localStorage.removeItem('accessToken');
            }}
          >
            <span>Sair</span>
          </LinkStyled>

        </MenuItemStyle>
      </MenuStyle>

      <LogoStyle>
        <img src={logo} alt="logo" />
      </LogoStyle>

    </NavigationContainerStyle>
  );
}
