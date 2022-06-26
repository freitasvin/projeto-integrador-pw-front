import React from 'react';
import { DropMenuStyle } from './styles';

export function DropMenu({ type }) {
  return (
    <DropMenuStyle type={type} aria-label={`${type} Select`}>
      <option value="0" hidden>{type}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </DropMenuStyle>
  );
}
