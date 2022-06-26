import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IntroductionContainerStyle = styled.div`
    background: linear-gradient(180deg, #30DFF2 46.88%, #00ADC0 100%);
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    min-width: 30%;
    color: white;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const LogoStyle = styled.div`
    img {
    width: 125px;
    height: 120px;
    }
`;

export const IntroductionStyle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-grow: 1;
    justify-content: space-between;
    padding: 10% 10% 5% 10%;

    h1 {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 0;
    }

    h2 {
        font-weight: 200;
        margin-top: 0;
    }

    h3, h4 {
        font-weight: 200;
    }
`;

export const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 60px;
    font-size: 14px;
    font-weight: bolder;
    vertical-align: middle;

    img {
    width: 30px;
    height: 30px;
    }
`;

export const HomeButtonStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


    img {
    margin-right: 13px;
    }

`;

export const UserButtonStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
    margin-left: 15px;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: white;
    transition: border-bottom;

    h3 {
        font-size: 25px;
        transition: border-bottom;

        &:hover {
            color: #a6b1b3
        }
    }

 &:hover { 
    border-bottom: solid 1px white;
    }

`;
