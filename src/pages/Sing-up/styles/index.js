import styled from 'styled-components';

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
    padding: 0 100px  0 50px;
    justify-content: space-around;

  h1 {
    color: #03B7DA;
    font-size: 20px;
    font-weight: 500;
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  float: left;
  align-items: center;
  max-width: 70%;


  input {
    margin-bottom: 15px;
  }
`;

export const BreakStyle = styled.div`
  flex-basis: 100%;
  height: 0;
`;
