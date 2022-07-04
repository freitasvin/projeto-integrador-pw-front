import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 70px 200px;
`;
export const VacancyContainer = styled.div`
  margin-right: 80px;
`;

export const NurseryDetailContent = styled.div`
  display: flex;
  margin-left: 50px;
  flex-direction: column;

  h1 {
    font-size: 40px;
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
    margin: 0px 0px 0px 20px;
  }

  h5{
    font-weight: 400;
    background: -webkit-linear-gradient(#30DFF2, #00ADC0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
