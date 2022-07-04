import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MainStyle = styled.div`
    font-weight: 500;
    color: #03B7DA;
    height: 100vh;
    display: flex;
    flex-basis: 75%;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 100px;

  h1 {
    color: #03B7DA;
    font-size: 20px;
    font-weight: 500;
    flex-basis: 100%;
    margin-bottom: 20px;
  }

  img {
    margin-bottom: 20px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  float: left;
  align-items: center;

  input {
    margin-bottom: 15px;
  }

  img {
    width: 270px;
  }

  button {
    float: right;
  }
`;

export const BreakStyle = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const RegistrationIntroductionStyle = styled.div`
`;

export const RegistrationsStyle = styled.div`
  width: 500px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border: 4px solid;
  border-color: #03B7DA;
  border-radius: 10px;
  overflow-y: scroll;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #03B7DA;
    transition: border-bottom;
    margin-top: 20px;


    &:hover { 
        border-bottom: solid 1px #03B7DA;
        }
    `;
