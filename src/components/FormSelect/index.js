import React from 'react';
import { SelectStyled, ItemStyle } from './styles';

export function FormSelect({
  inputId,
  inputLabel,
  size,
  values = [],
}) {
  return (
    <ItemStyle>
      <label htmlFor={inputId}>
        {inputLabel}
        <br />
        <SelectStyled id={inputId} size={size}>
          <option value="0" hidden> </option>
          {values.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </SelectStyled>
      </label>
    </ItemStyle>
  );
}
