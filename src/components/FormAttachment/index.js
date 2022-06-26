import React from 'react';
import { ItemStyle } from './styles';

export function FormAttachment({
  inputId,
  inputLabel,
}) {
  return (
    <ItemStyle>
      <label htmlFor={inputId}>
        {inputLabel}
        <input type="file" id={inputId} />
      </label>
    </ItemStyle>
  );
}
