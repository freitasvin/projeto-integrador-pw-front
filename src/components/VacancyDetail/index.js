import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VacancyDetailContent, VacancyButton } from './styles';
import { notifyError } from '../../utils/toastEmitter';

export function VacancyDetail({
  className,
  vacancies,
  description,
  idVacancy,
  idNursery,
}) {
  const navigate = useNavigate();

  const handlerButton = () => {
    const idUser = localStorage.getItem('idUser');
    if (idUser) {
      navigate(`/nursery/${idNursery}/registration/${idVacancy}`);
    } else {
      notifyError('Você deve realizar login para solicitar uma matrícula');
    }
  };

  return (
    <VacancyDetailContent>
      <h2>{className}</h2>
      <VacancyButton onClick={() => {
        handlerButton();
      }}
      >
        <h3>{`${vacancies} Vagas`}</h3>
      </VacancyButton>
      <h4>{description}</h4>
    </VacancyDetailContent>
  );
}
