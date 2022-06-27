import React from 'react';
import { DropMenuStyle } from './styles';

export function DropMenu({ name, options, handler = () => {} }) {
  return (
    <DropMenuStyle type={name} aria-label={`${name} Select`}>
      <option value={0} hidden>{name}</option>
      {options && options.map((item) => (
        <option value={item.idState} onClick={handler}>{item.uf}</option>
      ))}
    </DropMenuStyle>
  );
}
