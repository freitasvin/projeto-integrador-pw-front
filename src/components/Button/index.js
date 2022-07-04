import React from 'react';
import { ButtonStyled } from './style';

export function Button({ value }) {
  return (
    <ButtonStyled>
      {value}
    </ButtonStyled>
  );
}
