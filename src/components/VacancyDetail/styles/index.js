import styled from 'styled-components';

export const VacancyDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h2{
    font-weight: 400;
    background: -webkit-linear-gradient(#30DFF2, #00ADC0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h4{
    font-weight: 400;
    background: -webkit-linear-gradient(#30DFF2, #00ADC0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3{
    color: white;
    font-weight: 400;
  }
`;

export const VacancyButton = styled.button`
  border: none;
  width: 250px;
  border-radius: 15px;
  background: linear-gradient(180deg, #30DFF2 0%, #00B4D8 100%);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover { 
    background: linear-gradient(180deg, #30DFF2 0%,#13cdf2 100%);
  }
`;
