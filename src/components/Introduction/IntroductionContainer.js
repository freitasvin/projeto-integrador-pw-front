import React from "react";
import Header from "../Header/Header";
import Content from "./Content";
import {IntroductionContainerStyle} from '../../styles/IntroductionContainerStyle';

function IntroductionContainer(props) {
    return (
    <IntroductionContainerStyle> {/* Esquerda*/}
        <Header user={false} />
        <Content />
    </IntroductionContainerStyle>
    )
}

export default IntroductionContainer;