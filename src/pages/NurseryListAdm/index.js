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

export function NurseryListAdm() {
  const searchButtonHandler = () => {
  };

  return (
    <ContainerStyle>
      <Menu
        activeNursery
      />

      <MainStyle>

        <RegistrationIntroduction
          title="Creches registradas"
          subTitle="Verifique as informações referente as creches registradas no sistema"
          image="default"
          nurseryName="Nome da creche"
        />

        <RequestsContainer>
          <FormStyled>
            <FormSelect
              inputId="className"
              inputLabel="Selecione a cidade"
              size="small-medium"
            />
            <FormSelect
              inputId="situation"
              inputLabel="Situação o estado"
              size="small-medium"
            />
            <FormInput
              inputId="studentName"
              inputLabel="Nome da creche"
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
