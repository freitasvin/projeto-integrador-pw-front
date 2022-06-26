import React from 'react';
import { ItemStyle, SubmitStyled } from './styles';

export function FormSubmit({
  inputId,
  value,
}) {
  return (
    <ItemStyle>
      <SubmitStyled type="submit" id={inputId} value={value} />
    </ItemStyle>
  );
}
