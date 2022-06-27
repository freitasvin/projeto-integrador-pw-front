import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../Images/Icons/User.png';
import { UserButtonStyle, LinkStyled } from './styles';

export function UserButton() {
  const [userActive, setUserActive] = useState(false);

  useEffect(() => {
    const userActiveLs = localStorage.getItem('idUser');
    if (userActiveLs) {
      setUserActive(true);
    }
  });

  return (
    <UserButtonStyle className="user">
      <LinkStyled to={userActive ? '/' : '/login'}>
        <span>{ userActive ? 'Perfil' : 'Login' }</span>
      </LinkStyled>

      <Link to={userActive ? '/' : '/login'}>
        <img src={userIcon} alt="loginIcon" />
      </Link>

    </UserButtonStyle>
  );
}
