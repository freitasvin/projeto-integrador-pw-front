import React from 'react';
import { ProfileIntroductionStyle } from './styles';

export function ProfileIntroduction({
  title,
  subTitle,
}) {
  return (
    <ProfileIntroductionStyle>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </ProfileIntroductionStyle>
  );
}
