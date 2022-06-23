import React from 'react';
import { InputStyled } from './styles';

export function Input({
  inputId,
  inputLabel,
  size,
  type,
}) {
  return (
    <label htmlFor={inputId}>
      {inputLabel}
      <InputStyled type={type} id={inputId} size={size} required="true" />
    </label>
  );
}
