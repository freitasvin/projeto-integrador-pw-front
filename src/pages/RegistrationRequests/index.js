import React from 'react';
import { Menu } from '../../components/Menu';
import { FormSelect } from '../../components/FormSelect';
import { FormInput } from '../../components/FormInput';
import { SearchButton } from './SearchButton';
import { RequestsTable } from './RequestsTable';
import {
  MainStyle, ContainerStyle, RequestsContainer, FormStyled, TableContainer,
} from './styles';
import { RegistrationIntroduction } from '../../components/RegistrationIntroduction';

export function RegistrationRequests() {
  const searchButtonHandler = () => {
  };

  return (
    <ContainerStyle>
      <Menu
        activeRegistration
      />

      <MainStyle>

        <RegistrationIntroduction
          title="Minhas matrícula(s)"
          subTitle="Verifique as informações referente a matrículas"
          image="default"
          nurseryName="Nome da creche"
        />

        <RequestsContainer>
          <FormStyled>
            <FormSelect
              inputId="className"
              inputLabel="Selecione a turma"
              size="small-medium"
            />
            <FormSelect
              inputId="situation"
              inputLabel="Situação atual"
              size="small-medium"
            />
            <FormInput
              inputId="studentName"
              inputLabel="Nome da criança"
              placeholder="Faça uma pesquisa"
              size="medium"
            />
            <SearchButton handler={searchButtonHandler} />
          </FormStyled>

          <TableContainer>
            <RequestsTable />
          </TableContainer>

        </RequestsContainer>

      </MainStyle>
    </ContainerStyle>
  );
}
