import React from 'react';
import logo from '../Images/Nursery-Logo/logo-1.png';

function Introduction() {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="logo"></img>
            </div>
            <h1>
                Bem-Vindo
            </h1>
            <h2>
                Está procurando uma <br /> Creche para seu filho(a)?
            </h2>
            <h2>
                Não perca tempo!
            </h2>
        </div>
    )
}

export default Introduction;