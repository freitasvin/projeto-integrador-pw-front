import React from 'react';
import { InputStyled, ItemStyle, TextAreaStyled } from './styles';

export function FormInput({
  textArea = false,
  type,
  inputId,
  inputLabel,
  size,
  value,
  placeholder,
  onChangeHandler = () => {},
}) {
  return (
    <ItemStyle>
      <label htmlFor={inputId}>
        {inputLabel}
        {!textArea && (
        <InputStyled
          type={type}
          id={inputId}
          size={size}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e)}
        />
        )}
        {textArea && (
          <>
            <br />
            <TextAreaStyled
              type={type}
              id={inputId}
              size={size}
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChangeHandler(e)}
            />
          </>
        )}
      </label>
    </ItemStyle>
  );
}
