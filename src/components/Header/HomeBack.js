import React from 'react';
import homeIcon from '../../Images/Icons/Home.png';
import { HomeBackStyle } from '../../styles/HomeBackStyle';

function HomeBack(){
    return(
    <HomeBackStyle>
        <div className='homeback-icon'>
            <img src={homeIcon} alt="home" />
        </div>
        <div className='homeback-link'>
            <span>Home</span>
        </div>
    </HomeBackStyle>
    )
}

export default HomeBack;