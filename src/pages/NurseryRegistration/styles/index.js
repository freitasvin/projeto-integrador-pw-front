import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MainStyle = styled.div`
    font-weight: 500;
    color: #03B7DA;
    display: flex;
    flex-basis: 75%;
    flex-direction: column;
    padding: 50px 85px 0 100px;

  h1 {
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
  max-width: 87%;


  input {
    margin-bottom: 15px;
  }
`;

export const BreakStyle = styled.div`
  flex-basis: 100%;
  height: 0;
`;
