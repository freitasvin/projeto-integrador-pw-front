import React from 'react';
import { InputStyled, ItemStyle } from './styles';

export function FormInput({
  type,
  inputId,
  inputLabel,
  size,
  value,
  onChangeHandler = () => {},
}) {
  return (
    <ItemStyle>
      <label htmlFor={inputId}>
        {inputLabel}
        <InputStyled
          type={type}
          id={inputId}
          size={size}
          value={value}
          onChange={(e) => onChangeHandler(e)}
        />
      </label>
    </ItemStyle>
  );
}
