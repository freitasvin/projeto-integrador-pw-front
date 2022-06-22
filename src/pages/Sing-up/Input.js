import React from 'react';
import { InputStyled } from './styles';

export function Input({ inputId, inputLabel }) {
  return (
    <label htmlFor={inputId}>
      {inputLabel}
      <InputStyled type="text" id={inputId} />
    </label>
  );
}
