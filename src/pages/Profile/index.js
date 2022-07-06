import React, { useEffect, useState } from 'react';
import {
  ContainerStyle, FormStyled, MainStyle, Break,
} from './styles';
import { Menu } from '../../components/Menu';
import { FormInput } from '../../components/FormInput';
import { FormSubmit } from '../../components/FormSubmit';
import profileIcon from '../../Images/Icons/Profile.png';
import { Api } from '../../services';
import { notifyError, notifySuccess } from '../../utils/toastEmitter';

export function Profile() {
  const [userData, setUserData] = useState({});
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState({});
  const [accessToken, setAccessToken] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    Api.post('changePassword', {
      currentPassword, newPassword,
    }, {
      headers: { authorization: accessToken },
    }).then((res) => {
      notifySuccess(res.data.message);
    }).catch((err) => {
      notifyError(err.response.data.error);
    });
  };

  useEffect(() => {
    const accessTokenStorage = localStorage.getItem('accessToken');
    Api.get('profile', { headers: { authorization: accessTokenStorage } }).then((res) => {
      setAccessToken(accessTokenStorage);
      setUserData(res.data);
    }).catch((res) => {
      notifyError(res.data.error);
    });
  }, []);

  const currentPasswordHandler = (e) => {
    setCurrentPassword(e.target.value);
  };
  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <ContainerStyle>
      <Menu
        activeProfile
      />
      <MainStyle>
        <h2>Meu perfil</h2>
        <h4>Verifique e edite as informações do perfil</h4>
        <FormStyled>
          <img src={profileIcon} alt="profileIcon" />

          <Break />

          <FormInput
            type="text"
            inputId="diplayName"
            inputLabel="Nome completo"
            size="large-medium"
            value={userData.name}
            disabled
          />
          <FormInput
            type="text"
            inputId="displayBirthday"
            inputLabel="Data de Nascimento"
            size="small-medium"
            value={userData.birthdate}
            disabled
          />
          <FormInput
            type="email"
            inputId="displayEmail"
            inputLabel="E-mail"
            size="medium"
            value={userData.email}
            disabled
          />
          <FormInput
            type="tel"
            inputId="displayPhone"
            inputLabel="Telefone"
            size="medium"
            value={userData.phone}
            disabled
          />
        </FormStyled>

        <FormStyled onSubmit={handleChangePassword}>
          <h2>Alterar senha</h2>
          <Break />
          <FormInput
            type="password"
            inputId="currentPassword"
            inputLabel="Senha atual"
            value={currentPassword}
            onChangeHandler={currentPasswordHandler}
            size="medium"
          />
          <FormInput
            type="password"
            inputId="newPassword"
            inputLabel="Nova senha"
            onChangeHandler={newPasswordHandler}
            value={newPassword}
            size="medium"
          />
          <Break />
          <FormSubmit
            inputId="submitNewPassword"
            value="Salvar"
          />

        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
