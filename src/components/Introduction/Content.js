import React from 'react';
import logo from '../../Images/Nursery-Logo/logo-1.png';
import { IntroductionStyle } from '../../styles/IntroductionStyle';
import { LogoStyle } from '../../styles/LogoStyle';

function Introduction() {
    return (
        <IntroductionStyle>
            <span>
            <LogoStyle>
                <img src={logo} alt="logo"></img>
            </LogoStyle>
                <h1>
                    Bem-Vindo
                </h1>
                <h2>
                    Está procurando uma <br/> creche para seu filho(a)?
                </h2>

                <h2>
                    Não perca tempo!
                </h2>
            </span>


            <div>
                <h3>Cadastre-se</h3>
                <h4>Usuário Comum | Diretor</h4>
            </div>
            
        </IntroductionStyle>
    )
}

export default Introduction;