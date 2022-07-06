import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IntroductionContainer } from '../../components/Introduction';
import { FormInput } from '../../components/FormInput';
import { FormSelect } from '../../components/FormSelect';
import { FormAttachment } from '../../components/FormAttachment';
import { FormSubmit } from '../../components/FormSubmit';
import {
  ContainerStyle, MainStyle, FormStyled, BreakStyle,
} from './styles';

import { notifyError, notifySuccess } from '../../utils/toastEmitter';
import { Api } from '../../services';

export function SingUp() {
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState({
    name: '',
    cpf: '000.000.000-00',
    rg: '0000000',
    birthdate: '11/11/2001',
    phone: '',
    email: '',
    password: '',
    image: null,
    repeatPassword: '',
    address: {
      idNeighborhood: 1,
      postalCode: '',
      street: '',
      number: 0,
      complement: '',
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userFormData.password !== userFormData.repeatPassword) {
      notifyError('Senhas não conferem');
      return;
    }

    Api.post('signup', userFormData).then((res) => {
      notifySuccess('Usuário cadastrado com sucesso');
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('idUser', res.data.idUser);
      localStorage.setItem('idLevel', res.data.idLevel);
      localStorage.setItem('name', res.data.name);
      localStorage.setItem('email', res.data.email);
      navigate('/');
    }).catch((err) => {
      notifyError(err.response.data.error);
    });
  };

  return (
    <ContainerStyle>
      <IntroductionContainer
        title="Cadastre-se"
        subtitle="Para realizar o seu cadastro preencha corretamente os campos ao lado!"
        footerWarning
        userButton={false}
      />

      <MainStyle>
        <FormStyled id="form1">
          <h1>Informações Pessoais</h1>
          <FormInput
            type="text"
            inputId="entire-name"
            inputLabel="Nome Completo"
            size="large"
            value={userFormData.name}
            onChangeHandler={(e) => {
              setUserFormData({ ...userFormData, name: e.target.value });
            }}
          />

          <div className="break" />

          <FormInput
            type="email"
            inputId="email"
            inputLabel="E-mail"
            size="medium"
            value={userFormData.email}
            onChangeHandler={(e) => {
              setUserFormData({ ...userFormData, email: e.target.value });
            }}
          />

          <FormInput
            type="tel"
            inputId="phone"
            inputLabel="Telefone"
            size="medium"
            value={userFormData.phone}
            onChangeHandler={(e) => {
              setUserFormData({ ...userFormData, phone: e.target.value });
            }}
          />

          <FormInput
            type="password"
            inputId="password"
            inputLabel="Crie uma senha"
            size="medium"
            value={userFormData.password}
            onChangeHandler={(e) => {
              setUserFormData({ ...userFormData, password: e.target.value });
            }}
          />

          <FormInput
            type="password"
            inputId="password-repeat"
            inputLabel="Repita a senha"
            size="medium"
            value={userFormData.repeatPassword}
            onChangeHandler={(e) => {
              setUserFormData({ ...userFormData, repeatPassword: e.target.value });
            }}
          />

        </FormStyled>

        <FormStyled id="form2" onSubmit={handleSubmit}>
          <h1>Informações do endereço</h1>

          <FormSelect
            inputId="select-state"
            inputLabel="Estado"
            size="small"
            values={['PR', 'RO']}
          />

          <FormSelect
            inputId="select-city"
            inputLabel="Cidade"
            size="small-medium"
            values={['Dois Vizinhos']}
          />

          <FormSelect
            inputId="select-neighborhood"
            inputLabel="Bairro"
            size="medium"
            values={['Das torres']}
          />

          <BreakStyle />

          <FormInput
            type="text"
            inputId="street"
            inputLabel="Nome da rua"
            size="large"
            value={userFormData.address.street}
            onChangeHandler={(e) => {
              setUserFormData({
                ...userFormData,
                address: {
                  ...userFormData.address, street: e.target.value,
                },
              });
            }}
          />

          <FormInput
            type="text"
            inputId="house-number"
            inputLabel="Nº da casa"
            size="medium-small"
            value={userFormData.address.number}
            onChangeHandler={(e) => {
              setUserFormData({
                ...userFormData,
                address: {
                  ...userFormData.address, number: parseInt(e.target.value, 10),
                },
              });
            }}
          />

          <FormInput
            type="text"
            inputId="postal-code"
            inputLabel="CEP"
            size="small-medium"
            value={userFormData.address.postalCode}
            onChangeHandler={(e) => {
              setUserFormData({
                ...userFormData,
                address: {
                  ...userFormData.address, postalCode: e.target.value,
                },
              });
            }}
          />

          <FormInput
            type="text"
            inputId="complement"
            inputLabel="Complemento"
            size="small-medium"
            value={userFormData.address.complement}
            onChangeHandler={(e) => {
              setUserFormData({
                ...userFormData,
                address: {
                  ...userFormData.address, complement: e.target.value,
                },
              });
            }}
          />

          <FormAttachment
            inputId="address-proof"
            inputLabel="Comprovante de residência"
          />

          <BreakStyle />

          <FormSubmit
            inputId="submit"
            value="Salvar"
          />
        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
