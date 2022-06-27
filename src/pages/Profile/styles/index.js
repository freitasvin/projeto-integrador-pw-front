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
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 100px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  float: left;
  align-items: center;
  margin-top: 2%;

  img {
    padding-bottom: 20px;
  }

  input {
    margin-bottom: 15px;
  }
`;

export const Break = styled.div`
    height: 0;
    flex-basis: 100%
`;

export const ProfileIntroductionStyle = styled.div`


`;
