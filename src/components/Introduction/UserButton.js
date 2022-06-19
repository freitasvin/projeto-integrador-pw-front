import React from 'react';
import userIcon from '../../Images/Icons/User.png';
import { UserButtonStyle } from './styles';

export function UserButton() {
  return (
    <UserButtonStyle className="user">
      <div className="user-link">
        <span>Login</span>
      </div>

      <div className="user-icon">
        <img src={userIcon} alt="user" />
      </div>
    </UserButtonStyle>
  );
}
