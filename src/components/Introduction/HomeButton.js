import React from 'react';
import { Link } from 'react-router-dom';
import { LinkStyled, HomeButtonStyle } from './styles';
import homeIcon from '../../Images/Icons/Home.png';

export function HomeButton() {
  return (
    <HomeButtonStyle>
      <Link to="/">
        <img src={homeIcon} alt="homeIcon" />
      </Link>

      <LinkStyled to="/">
        <span>Home</span>
      </LinkStyled>

    </HomeButtonStyle>
  );
}
