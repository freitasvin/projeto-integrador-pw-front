import React from 'react';
import HomeBack from './HomeBack';
import User from './User';

import { HeaderStyle } from '../../styles/HeaderStyle';


function Header(props) {

    return (
        <HeaderStyle>
            <HomeBack />
            <User />
        </HeaderStyle>
    )
}

export default Header