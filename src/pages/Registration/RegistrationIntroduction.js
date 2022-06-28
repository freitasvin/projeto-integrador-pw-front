import React from 'react';
import { RegistrationIntroductionStyle } from './styles';

export function RegistrationIntroduction({
  title,
  subTitle,
}) {
  return (
    <RegistrationIntroductionStyle>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </RegistrationIntroductionStyle>
  );
}
