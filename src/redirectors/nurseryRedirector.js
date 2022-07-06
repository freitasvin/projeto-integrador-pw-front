import React, { useEffect, useState } from 'react';
import { NurseryListAdm } from '../pages/NurseryListAdm';
import { NurseryRegistration } from '../pages/NurseryRegistration';

export function NurseryRedirector() {
  const [level, setLevel] = useState(3);

  const setCurrentNursery = () => {
    localStorage.setItem('currentNursery', JSON.stringify({
      nurseryName: 'Creche teste',
      cnpj: '98.577.064/0001-54',
      street: 'Rua exemplo da creche',
      number: '123',
      complement: 'Complement test',
      neighborhood: 'Das torres',
      director: 'Leonardo Bazan Picinin',
    }));
    return true;
  };

  useEffect(() => {
    const idLevel = parseInt(localStorage.getItem('idLevel'), 10);
    setLevel(idLevel);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {level === 2 && setCurrentNursery() && <NurseryRegistration /> }
      {level === 1 && setCurrentNursery() && <NurseryListAdm /> }
    </>
  );
}
