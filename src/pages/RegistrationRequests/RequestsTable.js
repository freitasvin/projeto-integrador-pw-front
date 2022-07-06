import React from 'react';
import { TableStyled } from './styles';

export function RequestsTable() {
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
        <tr>
          <td>Leonardo Bazan</td>
          <td>Vinícius de Almeida Freitas</td>
          <td>Na pista</td>
          <td>Sim</td>
          <td>Não</td>
        </tr>
        <tr>
          <td>Danilo Raizel</td>
          <td>Vinícius de Almeida Freitas</td>
          <td>Brecado</td>
          <td>Sim</td>
          <td>Não</td>
        </tr>
        <tr>
          <td>Danilo Raizel</td>
          <td>Vinícius de Almeida Freitas</td>
          <td>Brecado</td>
          <td>Sim</td>
          <td>Não</td>
        </tr>
      </tbody>
    </TableStyled>
  );
}
