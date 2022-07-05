import styled from 'styled-components';

export const RegistrationCardContainer = styled.div`
  display: flex;
  width: 750px;
  height: 140px;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
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
