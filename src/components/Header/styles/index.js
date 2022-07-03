import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: linear-gradient(180deg, #30DFF2 46.88%, #00ADC0 100%);
  padding: 10px 30px;
  background-color: blue;

  display: grid;
  grid-template-columns: auto auto auto;
`;

export const HeaderLeftContent = styled.div`
  display: flex;
  align-itens: center;
  justify-content: start;

  img {
    width: 30px;
    height: 30px;
  }
`;
export const HeaderMiddleContent = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;

  img {
    width: 60px;
    height: 60px;
  }
`;
export const HeaderRigthContent = styled.div`
  display: flex;
  align-itens: center;
  justify-content: end;

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
