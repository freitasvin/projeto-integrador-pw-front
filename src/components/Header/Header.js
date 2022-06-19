import React from 'react';
import HomeBack from './HomeBack';
import User from './User';

import { HeaderStyle } from '../../styles/HeaderStyle';


function Header({homeBack = true, user = true}) {
    return (
        <HeaderStyle>
            {homeBack && <HomeBack />}
            {user && <User />}
        </HeaderStyle>
    )
}

export default Header