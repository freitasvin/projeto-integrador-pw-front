import React from 'react';
import homeIcon from '../Images/Icons/Home.png';
import userIcon from '../Images/Icons/User.png';


function Header() {
    return(
    <header className='header'>
        <div className='home'>
            <div className='home-icon'>
                <img src={homeIcon} alt="home" />
            </div>
            <div className='home-link'>
                <span>Home</span>
            </div>
        </div>

        <div className='user'>
            <div className='user-link'>
                <span>Login</span>
            </div>

            <div className='user-icon'>
                <img src={userIcon} alt="user" />
            </div>
        </div>
    </header>
    )
}

export default Header