import React from 'react';
import logo from '../../Images/Nursery-Logo/logo-1.png';
import {
  IntroductionContainerStyle, IntroductionStyle, LogoStyle, HeaderStyle,
} from './styles';
import { HomeButton } from './HomeButton';
import { UserButton } from './UserButton';

export function IntroductionContainer({
  homeButton = true,
  userButton = true,
}) {
  return (
    <IntroductionContainerStyle>
      {' '}
      {/* Esquerda */}
      <HeaderStyle>
        {homeButton && <HomeButton />}
        {userButton && <UserButton />}
      </HeaderStyle>

      <IntroductionStyle>
        <span>
          <LogoStyle>
            <img src={logo} alt="logo" />
          </LogoStyle>
          <h1>
            Bem-Vindo
          </h1>
          <h2>
            Está procurando uma
            {' '}
            <br />
            {' '}
            creche para seu filho(a)?
          </h2>

          <h2>
            Não perca tempo!
          </h2>
        </span>

        <div>
          <h3>Cadastre-se</h3>
          <h4>Usuário Comum | Diretor</h4>
        </div>
      </IntroductionStyle>
    </IntroductionContainerStyle>
  );
}
