import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Api } from '../../services';
import { FormInput } from '../../components/FormInput';
import {
  Break,
  FormStyled, RegistrationContainer, RegistrationFormContainer, RegistrationHeaderContainer,
} from './style';
import { FormSubmit } from '../../components/FormSubmit';
import { notifyError, notifySuccess } from '../../utils/toastEmitter';

export function Registrate() {
  const { idNursery, idVacancy } = useParams();
  const [vacancy, setVacancy] = useState({});

  const [childrenName, setChildrenName] = useState('');
  const [childrenBirthdate, setchildrenBirthdate] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [observations, setObservations] = useState('');

  const getCurrentVacancy = async (vacancies) => {
    const currentVacancy = vacancies.find((v) => v.idVacancy.toString() === idVacancy.toString());
    setVacancy(currentVacancy);
  };

  useEffect(() => {
    Api.get(`/nurseries/${idNursery}`).then((res) => {
      getCurrentVacancy(res.data.vacancies);
    });
  }, []);

  const childrenNameHandler = (e) => {
    setChildrenName(e.target.value);
  };
  const childrenBirthdateHandler = (e) => {
    setchildrenBirthdate(e.target.value);
  };
  const fatherNameHandler = (e) => {
    setfatherName(e.target.value);
  };
  const motherNameHandler = (e) => {
    setMotherName(e.target.value);
  };
  const observationsHandler = (e) => {
    setObservations(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post(`/nurseries/${idNursery}/vacancies/${idVacancy}/registration`, {
      childrenName,
      childrenBirthdate,
      motherName,
      fatherName,
      information: observations,
    }, { headers: { authorization: localStorage.getItem('accessToken') } })
      .then(() => {
        const reg = localStorage.getItem('registrations');
        const newReg = {
          idRegistration: new Date().getTime(), childrenName, childrenBirthdate, motherName, fatherName, information: observations, situation: 'pending', className: 'Maternal 1',
        };
        if (reg) {
          reg.push(newReg);
          localStorage.setItem('registrations', JSON.stringify(reg));
        } else {
          localStorage.setItem('registrations', JSON.stringify([newReg]));
        }

        notifySuccess('Matr??cula solicitada com sucesso');
        setChildrenName('');
        setchildrenBirthdate('');
        setfatherName('');
        setMotherName('');
        setObservations('');
      }).catch((error) => {
        notifyError(error.response.data.error);
      });
  };

  return (
    <>
      <Header />
      <RegistrationContainer>
        <RegistrationHeaderContainer>
          <h1>{vacancy.class}</h1>
          <h3>Siga as instru????es e realize a matr??cula do seu filho(a)</h3>
        </RegistrationHeaderContainer>

        <RegistrationFormContainer>
          <FormStyled onSubmit={handleSubmit}>
            <FormInput
              value={childrenName}
              type="text"
              inputId="sonName"
              inputLabel="Nome do(a) filho(a)"
              size="large-medium"
              onChangeHandler={childrenNameHandler}
            />
            <FormInput
              value={childrenBirthdate}
              type="text"
              inputId="sonBirthdate"
              inputLabel="Data de nascimento"
              size="small-medium"
              onChangeHandler={childrenBirthdateHandler}
            />
            <FormInput
              value={fatherName}
              type="text"
              inputId="fatherName"
              inputLabel="Nome do pai"
              size="large"
              onChangeHandler={fatherNameHandler}
            />
            <FormInput
              value={motherName}
              type="text"
              inputId="motherName"
              inputLabel="Nome da m??e"
              size="large"
              onChangeHandler={motherNameHandler}
            />
            <FormInput
              value={observations}
              type="text"
              inputId="observations"
              inputLabel="Observa????es"
              size="large"
              textArea
              placeholder="Digite observa????es sobre seu filho(a) que possam ser ??teis para n??s."
              onChangeHandler={observationsHandler}
            />
            <Break />
            <FormSubmit value="Solicitar matr??cula" />
          </FormStyled>
        </RegistrationFormContainer>

      </RegistrationContainer>
    </>
  );
}
