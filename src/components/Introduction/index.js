import React from 'react';
import logo from '../../Images/Nursery-Logo/logo-1.png';
import {
  IntroductionContainerStyle, IntroductionStyle, LogoStyle, HeaderStyle, LinkStyled,
} from './styles';
import { HomeButton } from './HomeButton';
import { UserButton } from './UserButton';

export function IntroductionContainer({
  homeButton = true,
  userButton = true,
  introduction = true,
  footerWarning = false,
  footerSingup = false,
  title,
  subtitle,
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
        {introduction && (
        <span>
          <LogoStyle>
            <img src={logo} alt="logo" />
          </LogoStyle>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </span>
        )}

        {footerSingup && (
        <div>
          <LinkStyled to="/sign-up">
            <h3>Cadastre-se</h3>
          </LinkStyled>
        </div>
        )}

        {footerWarning && (
        <div>
          <h2>ATENÇÃO</h2>
          <h3>uma vez preenchido os dados nao poderão ser alterdos.</h3>
        </div>
        )}
      </IntroductionStyle>
    </IntroductionContainerStyle>
  );
}
