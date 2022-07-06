import React, { useEffect, useState } from 'react';
import {
  FormStyled, ContainerStyle, MainStyle, BreakStyle,
} from './styles';
import { Menu } from '../../components/Menu';
import { FormInput } from '../../components/FormInput';
import { RegistrationIntroduction } from '../../components/RegistrationIntroduction';
import { FormSubmit } from '../../components/FormSubmit';

export function NurseryRegistration() {
  const [currentNursery, setCurrentNursery] = useState({});
  const [className, setClassName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const nursery = JSON.parse(localStorage.getItem('currentNursery'));
    setCurrentNursery(nursery);
  }, []);

  const createVacancy = () => {
    let vacancies = [];
    vacancies = JSON.parse(localStorage.getItem('vacancies'));
    vacancies.push({ className, amount, description });
    localStorage.setItem('vacancies', JSON.stringify(vacancies));
  };

  return (
    <ContainerStyle>
      <Menu
        activeNursery
      />

      <MainStyle>

        <RegistrationIntroduction
          title="Informações da creche"
          subTitle="Verifique as informações referente a sua creche"
          addNurseryImage
        />

        <FormStyled id="form2" onSubmit={() => { createVacancy(); }}>
          <FormInput
            type="text"
            inputId="nurseryName"
            inputLabel="Nome da Creche"
            disabled
            value={currentNursery.nurseryName}
            size="large"
          />
          <FormInput
            type="text"
            inputId="street"
            inputLabel="Rua"
            disabled
            value={currentNursery.street}
            size="medium"
          />

          <FormInput
            type="text"
            inputId="nursery-number"
            inputLabel="Numero"
            disabled
            value={currentNursery.number}
            size="small"
          />

          <FormInput
            type="text"
            inputId="postal-code"
            inputLabel="CEP"
            value="85660-000"
            size="small-medium"
          />

          <FormInput
            type="text"
            inputId="complement"
            inputLabel="Complemento"
            disabled
            value={currentNursery.complement}
            size="medium"
          />

          <FormInput
            type="text"
            inputId="cnpj"
            inputLabel="CNPJ"
            disabled
            value={currentNursery.cnpj}
            size="medium"
          />

          <h1>Cadastrar vagas</h1>
          <FormInput
            type="text"
            inputId="className"
            inputLabel="Nome da turma"
            value={className}
            onChangeHandler={(e) => {
              setClassName(e.target.value);
            }}
            size="small-medium"
          />
          <FormInput
            type="text"
            inputId="amount"
            inputLabel="Quantidade de vagas"
            value={amount}
            onChangeHandler={(e) => {
              setAmount(e.target.value);
            }}
            size="small-medium"
          />
          <FormInput
            type="text"
            inputId="description"
            inputLabel="Descrição da turma"
            value={description}
            onChangeHandler={(e) => {
              setDescription(e.target.value);
            }}
            size="small-medium"
          />
          <BreakStyle />
          <FormSubmit inputId="Cadastrar vagas" value="Cadastrar vagas" />
        </FormStyled>
      </MainStyle>
    </ContainerStyle>
  );
}
