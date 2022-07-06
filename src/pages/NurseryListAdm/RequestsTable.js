/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { TableStyled } from './styles';

export function RequestsTable() {
  const [nurseries, setNurseries] = useState([]);

  useEffect(() => {
    const nursery = JSON.parse(localStorage.getItem('currentNursery'));
    setNurseries([nursery]);
  }, []);

  return (
    <TableStyled>
      <thead>
        <tr>
          <th>Nome da creche</th>
          <th>Nome do responsável</th>
          <th>Situação</th>
          <th colSpan="2">Ativar ou Desativar</th>
        </tr>
      </thead>
      <tbody>
        {nurseries.length > 0 && nurseries.map((nursery) => (
          <tr>
            <td>{nursery.nurseryName}</td>
            <td>{nursery.director}</td>
            <td>{nursery.situation || 'Funcionando'}</td>
            <td>
              <button type="button" onClick={() => { nursery.situation = 'Funcionando'; }} style={{ color: 'green' }}>Sim</button>
            </td>
            <td>
              <button type="button" onClick={() => { nursery.situation = 'Inativo'; }} style={{ color: 'red' }}>Não</button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
