import styled from 'styled-components';

export const RegistrationCardContainer = styled.div`
  display: flex;
  width: 750px;
  height: 140px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  justify-content: space-between;
  `;
export const RegistrationCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  span {
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 10px;
    margin-left: 20px;
  } 
  `;

export const RegistrationImage = styled.img`
  width: 250px;
  margin-right: 30px;
  margin-top: 20px;
`;
