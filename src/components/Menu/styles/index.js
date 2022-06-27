import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainerStyle = styled.div`
    background: linear-gradient(180deg, #30DFF2 46.88%, #00ADC0 100%);
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    min-width: 25%;
    color: white;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const MenuStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    margin-left: 35px;
    margin-top: 35px;
`;

export const MenuItemStyle = styled.div`
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }

`;

export const LogoStyle = styled.div`
    display: flex;
    justify-content: center;

    img {
    width: 125px;
    height: 120px;
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
