import React from 'react';
import { VacancyDetailContent, VacancyButton } from './styles';

export function VacancyDetail({
  className,
  vacancies,
  description,
}) {
  return (
    <VacancyDetailContent>
      <h3>{className}</h3>
      <VacancyButton>
        <h3>{vacancies}</h3>
      </VacancyButton>
      <h3>{description}</h3>
    </VacancyDetailContent>
  );
}
