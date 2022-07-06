import styled from 'styled-components';

export const ContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    h4, h2{
      font-weight: 400;
      background: -webkit-linear-gradient(#30DFF2, #00ADC0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      margin-top: 10px;
    }
`;

export const MainStyle = styled.div`
    font-weight: 500;
    color: #03B7DA;
    max-height: 100vh;
    flex-basis: 75%;
    display: flex;
    flex-direction: column;
    padding: 50px 85px 0px 100px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  float: left;
  align-items: center;
  margin-top: 2%;
  max-width: 70%;

  img {
    padding-bottom: 20px;
  }

  input {
    margin-bottom: 15px;
  }
`;

export const Break = styled.div`
    height: 15px;
    flex-basis: 100%
`;

export const ProfileIntroductionStyle = styled.div`
  
`;
