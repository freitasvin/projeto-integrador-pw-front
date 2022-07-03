import React from 'react';
import {
  HeaderContainer, HeaderLeftContent, HeaderMiddleContent, HeaderRigthContent,
} from './styles';
import Logo from '../../Images/Nursery-Logo/logo-1.png';

import { HomeButton } from './HomeButton';
import { UserButton } from './UserButton';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftContent>
        <HomeButton />
      </HeaderLeftContent>
      <HeaderMiddleContent>
        <img src={Logo} alt="Logo do sistema" />
      </HeaderMiddleContent>
      <HeaderRigthContent>
        <UserButton />
      </HeaderRigthContent>
    </HeaderContainer>
  );
}
