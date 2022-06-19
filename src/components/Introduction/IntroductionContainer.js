import React from "react";
import Header from "../Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import {IntroductionContainerStyle} from '../../styles/IntroductionContainerStyle';

function IntroductionContainer() {
    return (
    <IntroductionContainerStyle> {/* Esquerda*/}
        <Header />
        <Introduction />
    </IntroductionContainerStyle>
    )
}

export default IntroductionContainer;