import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IntroductionContainer } from '../../components/Introduction';
import { ContainerStyle, MainStyle, FormStyled } from './styles';
import { FormInput } from '../../components/FormInput';
import { FormSubmit } from '../../components/FormSubmit';
import { Api } from '../../services';
import { notifyError } from '../../utils/toastEmitter';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const apiCallLogin = async () => {
    const { data } = await Api.post('login', { email, password });
    return data;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await apiCallLogin();
      localStorage.setItem('idUser', user.idUser);
      localStorage.setItem('idLevel', user.idLevel);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('accessToken', user.accessToken);
      navigate('/');
    } catch (error) {
      notifyError(error.response.data.error);
    }
  };

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <ContainerStyle>
      <IntroductionContainer
        userButton={false}
        title="Login"
        subtitle="Insira as informações de acesso"
        footerSingup
      />

      <MainStyle>
        <FormStyled onSubmit={handleSubmit}>
          <FormInput
            type="email"
            inputId="email"
            inputLabel="E-mail"
            size="medium"
            value={email}
            onChangeHandler={onChangeEmailHandler}
          />
          <FormInput
            type="password"
            inputId="password"
            inputLabel="Senha"
            size="medium"
            value={password}
            onChangeHandler={onChangePasswordHandler}
          />
          <Link to="/profile">
            <FormSubmit
              inputId="submit"
              value="Entrar"
            />
          </Link>
        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
