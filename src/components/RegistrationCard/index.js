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
    </RegistrationCardContainer>
  );
}
