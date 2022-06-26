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
  ${(props) => props.size === 'medium' && `
    width: 318px;
  `}
  ${(props) => props.size === 'medium-small' && `
    width: 298px;
  `}
  ${(props) => props.size === 'small-medium' && `
    width: 188px;
  `}
  ${(props) => props.size === 'small' && `
    width: 94px;
    margin-right: 15px;
  `}
`;

export const ItemStyle = styled.div`
  float: left;
  height: max-content;
  margin-left: 20px;

  label {
    font-weight: 500;
    color: #03B7DA;
  }

  input {
    margin-top: 5px;
  }

  input, label {
    display: block;
  }
`;
