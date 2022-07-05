import styled from 'styled-components';

export const SelectStyled = styled.select`
  height: 26px;
  border: 2px solid #797979;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  color: black;

  ${(props) => props.size === 'large' && `
    width: 658px;
  `}
  ${(props) => props.size === 'large-medium' && `
    width: 558px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'medium' && `
    width: 310px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'medium-small' && `
    width: 298px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'small-medium' && `
    width: 180px;
    margin-right: 25px;
  `}
  ${(props) => props.size === 'small' && `
    width: 98px;
    margin-right: 30px;
  `}
`;

export const ItemStyle = styled.div`
  float: left;
  height: max-content;

  label {
    font-weight: 500;
    color: #03B7DA;
  }

  select {
    margin-top: 5px;
  }

  input, label {
    display: block;
  }
`;
