import React from 'react';
import { IntroductionContainer } from '../../components/Introduction';
import { Input } from './Input';
import { ContainerStyle, MainStyle, FormStyled } from './styles';

function Login() {
  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Cadastre-se"
        subtitle="Para realizar o seu cadastro preencha corretamente os campos ao lado!"
        footerWarning
      />

      <MainStyle>
        <FormStyled>
          <h1>Informações Pessoais</h1>
          <div className="break" />
          <div className="item" style={{ flexGrow: 1 }}>
            <Input inputId="entire-name" inputLabel="Nome Completo" />
          </div>
          <div className="break" />
          <div className="item">
            <label htmlFor="email">
              Email
              <input type="text" id="email" />
            </label>
          </div>
          <div className="item">
            <label htmlFor="phone">
              Telefone
              <input type="text" id="phone" />
            </label>
          </div>
          <div className="item">
            <label htmlFor="password">
              Crie uma senha
              <input type="password" id="password" />
            </label>
          </div>
          <div className="item">
            <label htmlFor="password-repeat">
              Repita a senha
              <input type="password" id="password-repeat" />
            </label>
          </div>
        </FormStyled>

        <FormStyled>
          <h1>Informações do endereço</h1>
          <label htmlFor="state">
            Estado
            <select type="" id="state">
              <option defaultValue="0" selected hidden>Selecione</option>
              <option value="1">Dois vizinhos</option>
            </select>
          </label>
          <label htmlFor="city">
            Cidade
            <input type="text" id="city" />
          </label>
          <label htmlFor="neighborhood">
            Bairro
            <input type="text" id="neighborhood" />
          </label>
          <label htmlFor="house-number">
            Nº da casa
            <input type="text" id="house-number" />
          </label>
          <label htmlFor="postal-code">
            CEP
            <input type="text" id="postal-code" />
          </label>
          <label htmlFor="complement">
            Complemento
            <input type="text" id="complement" />
          </label>

        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}

export default Login;
