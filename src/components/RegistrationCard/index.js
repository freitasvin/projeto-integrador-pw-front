import React from 'react';
import { RegistrationCardContainer, RegistrationCardContent, RegistrationImage } from './style';
import vacancyApproved from '../../Images/Icons/vaga-aprovada.png';

export function RegistrationCard({
  name,
  situation,
  className,
}) {
  return (
    <RegistrationCardContainer>
      <RegistrationCardContent>
        <span>{name}</span>
        <span>{className}</span>
      </RegistrationCardContent>
      {situation === 'approved'
      && <RegistrationImage src={vacancyApproved} alt="situationImage" />}
      {situation === 'pending' && <h4 style={{ color: 'blue' }}>Matricula pendente</h4> }
      {situation === 'refused' && <h4 style={{ color: 'red' }}>Matricula recusada</h4> }
    </RegistrationCardContainer>
  );
}
