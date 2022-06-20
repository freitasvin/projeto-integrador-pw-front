import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../Images/Icons/Home.png';
import { HomeButtonStyle } from './styles';

export function HomeButton() {
  return (
    <HomeButtonStyle>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <img src={homeIcon} alt="home" />
        <span>Home</span>
      </Link>
    </HomeButtonStyle>
  );
}
