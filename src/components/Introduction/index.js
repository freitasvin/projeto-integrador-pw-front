import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Nursery-Logo/logo-1.png';
import {
  IntroductionContainerStyle, IntroductionStyle, LogoStyle, HeaderStyle,
} from './styles';
import { HomeButton } from './HomeButton';
import { UserButton } from './UserButton';

export function IntroductionContainer({
  homeButton = true,
  userButton = true,
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
        <span>
          <LogoStyle>
            <img src={logo} alt="logo" />
          </LogoStyle>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </span>

        {footerSingup && (
        <div>
          <Link to="/sign-up" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Cadastre-se</h3>
          </Link>
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
