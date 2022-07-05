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
    display: flex;
    max-height: 100vh;
    flex-basis: 75%;
    flex-direction: column;
    padding: 50px 100px 0 100px;

  h1 {
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

export const RegistrationsStyle = styled.div`
  width: 800px;
  height: 470px;
  display: flex;
  flex-direction: column;
  
  overflow-y: scroll;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #03B7DA;
    `;
