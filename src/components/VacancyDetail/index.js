import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VacancyDetailContent, VacancyButton } from './styles';

export function VacancyDetail({
  className,
  vacancies,
  description,
  // idVacancy,
}) {
  const navigate = useNavigate();

  const handlerButton = () => {
    navigate('/');
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
