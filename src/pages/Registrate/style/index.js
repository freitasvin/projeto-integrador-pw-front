import styled from 'styled-components';

export const RegistrationContainer = styled.div`
  padding: 70px 200px;
`;

export const RegistrationHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  h1 {
    font-weight: 400;
    background: -webkit-linear-gradient(#30DFF2, #00ADC0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
  h3 {
    font-weight: 400;
    background: -webkit-linear-gradient(#30DFF2, #00ADC0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    margin-top: 10px;
  }
`;

export const RegistrationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  h4{
    font-weight: 400;
    background: -webkit-linear-gradient(#30DFF2, #00ADC0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    margin-top: 10px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  float: left;
  align-items: center;
  margin-top: 2%;
  max-width: 66%;

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
