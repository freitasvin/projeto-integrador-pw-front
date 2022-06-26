import React from 'react';
import { SelectStyled } from './styles';

export function Select({
  inputId,
  inputLabel,
  size,
  type,
}) {
  return (
    <label htmlFor={inputId}>
      {inputLabel}
      <br />
      <SelectStyled type={type} id={inputId} size={size} required="true">
        <option defaultValue="0" selected hidden> </option>
        <option value="1">Teste</option>
      </SelectStyled>
    </label>
  );
}
