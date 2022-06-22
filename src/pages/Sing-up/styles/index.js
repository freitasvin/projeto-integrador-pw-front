import styled from 'styled-components';

export const ContainerStyle = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
`;

export const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  margin-bottom: 2%;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const FormStyled = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;

  input, label {
    display: block;
  }

  .item {
    float: left;
    height: max-content;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }
`;

export const InputStyled = styled.input`
  width: 550px;
  height: 20px;
`;
