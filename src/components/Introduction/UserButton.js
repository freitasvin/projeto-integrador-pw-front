import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../Images/Icons/User.png';
import { UserButtonStyle, LinkStyled } from './styles';

export function UserButton() {
  return (
    <UserButtonStyle className="user">
      <LinkStyled to="/login">
        <span>Login</span>
      </LinkStyled>

      <Link to="/login">
        <img src={userIcon} alt="loginIcon" />
      </Link>
    </UserButtonStyle>
  );
}
