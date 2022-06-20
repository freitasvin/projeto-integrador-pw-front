import React from 'react';
import { SearchButtonStyle } from './styles';
import SearchIcon from '../../Images/Icons/Lupa.png';

export function SearchButton() {
  return (
    <SearchButtonStyle>
      <img src={SearchIcon} alt="SearchIcon" />
    </SearchButtonStyle>
  );
}
