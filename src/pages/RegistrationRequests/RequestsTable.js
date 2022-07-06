/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { TableStyled } from './styles';

export function RequestsTable() {
  const [registrations, setRegistrations] = useState([]);

  const registrationAcceptHandler = (idRegistration) => {
    const newRegistrations = registrations.map((regis) => {
      if (regis.idRegistration === idRegistration) {
        regis.situation = 'approved';
        return regis;
      }
      return regis;
    });

    localStorage.setItem('registrations', JSON.stringify(newRegistrations));
    setRegistrations(newRegistrations);
  };

  const registrationRefuseHandler = (idRegistration) => {
    const newRegistrations = registrations.map((regis) => {
      if (regis.idRegistration === idRegistration) {
        regis.situation = 'refused';
        return regis;
      }
      return regis;
    });

    localStorage.setItem('registrations', JSON.stringify(newRegistrations));
    setRegistrations(newRegistrations);
  };

  useEffect(() => {
    const regis = JSON.parse(localStorage.getItem('registrations'));
    setRegistrations(regis);
  }, []);

  return (
    <TableStyled>
      <thead>
        <tr>
          <th>Nome da criança</th>
          <th>Nome do responsável</th>
          <th>Situação</th>
          <th colSpan="2">Aceitar</th>
        </tr>
      </thead>
      <tbody>
        {registrations.length > 0 && registrations.map((reg) => (
          <tr>
            <td>{reg.childrenName}</td>
            <td>{reg.fatherName}</td>
            <td>{reg.situation}</td>
            <td>
              <button type="button" onClick={() => { registrationAcceptHandler(reg.idRegistration); }} style={{ color: 'green' }}>Sim</button>
            </td>
            <td>
              <button type="button" onClick={() => { registrationRefuseHandler(reg.idRegistration); }} style={{ color: 'red' }}>Não</button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
