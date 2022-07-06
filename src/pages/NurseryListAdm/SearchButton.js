import React from 'react';
import { SearchButtonStyle } from './styles';
import SearchIcon from '../../Images/Icons/Lupa.png';

export function SearchButton({ handler = () => {} }) {
  return (
    <SearchButtonStyle onClick={() => {
      handler();
    }}
    >
      <img src={SearchIcon} alt="SearchIcon" />
    </SearchButtonStyle>
  );
}
