import React from 'react';
import { InputStyled, ItemStyle } from './styles';

export function FormInput({
  type,
  inputId,
  inputLabel,
  size,
}) {
  return (
    <ItemStyle>
      <label htmlFor={inputId}>
        {inputLabel}
        <InputStyled type={type} id={inputId} size={size} />
      </label>
    </ItemStyle>
  );
}
