import React from 'react';
import userIcon from '../../Images/Icons/User.png';
import { UserStyle } from '../../styles/UserStyle'; 

function User() {
    return (
    <UserStyle className='user'>
        <div className='user-link'>
            <span>Login</span>
        </div>

        <div className='user-icon'>
            <img src={userIcon} alt="user" />
        </div>
    </UserStyle>
    )
}

export default User;