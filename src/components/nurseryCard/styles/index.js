import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NurseryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 140px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const NurseryImage = styled.img`
  max-height: 140px;
`;

export const NurseryCardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 140px;
  padding: 15px;
  margin-left: 15px;

  h2 {
    font-weight: 200;
    margin: 5px 5px 5px 0px;
  }

  h3 {
    font-weight: 150;
    margin: 2px 2px 2px 0px;
    color: gray;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;
