import React from 'react';
import { SearchResultStyle } from '../../styles/SearchResultStyle';
import { SearchResultLabelStyle } from '../../styles/SearchResultLabelStyle';
import locale from '../Images/Icons/Localização.png';

function SearchResult(){
    return(
        <div>
            <SearchResultLabelStyle>
                <img src={locale} alt="locale"></img>
                <span>
                Creches disponíveis na sua região
                </span>
            </SearchResultLabelStyle>
            <SearchResultStyle>

            </SearchResultStyle>
        </div>
    )
};

export default SearchResult; 