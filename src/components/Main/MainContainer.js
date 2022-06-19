import React from 'react';
import { MainContainerStyle } from '../../styles/MainContainerStyle';
import Search from '../components/Search';
import SearchResult from './SearchResult';

function MainContainer() {
    return (
        <MainContainerStyle> {/* Direita*/}
            <Search />
            <SearchResult />
        </MainContainerStyle>
    )
}

export default MainContainer;