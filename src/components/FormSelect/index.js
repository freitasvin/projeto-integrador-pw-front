import React from 'react';
import { SelectStyled, ItemStyle } from './styles';

export function FormSelect({
  inputId,
  inputLabel,
  size,
  type,
}) {
  return (
    <ItemStyle>
      <label htmlFor={inputId}>
        {inputLabel}
        <br />
        <SelectStyled type={type} id={inputId} size={size}>
          <option value="0" hidden> </option>
          <option value="1">Teste</option>
        </SelectStyled>
      </label>
    </ItemStyle>
  );
}