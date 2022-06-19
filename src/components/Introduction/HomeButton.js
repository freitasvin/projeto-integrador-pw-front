import React from 'react';
import homeIcon from '../../Images/Icons/Home.png';
import { HomeButtonStyle } from './styles';

export function HomeButton() {
  return (
    <HomeButtonStyle>
      <div className="homeback-icon">
        <img src={homeIcon} alt="home" />
      </div>
      <div className="homeback-link">
        <span>Home</span>
      </div>
    </HomeButtonStyle>
  );
}
