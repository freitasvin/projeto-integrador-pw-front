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
  padding-right: 200px;
  margin-bottom: 2%;

  h1 {
    color: #03B7DA;
    font-size: 20px;
    font-weight: 500;
    flex-basis: 100%;
  }
`;

export const FormStyled = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
`;

export const BreakStyle = styled.div`
  flex-basis: 100%;
  height: 0;
`;
