import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 20px;
  border: 2px solid #797979;
  border-radius: 10px;

  ${(props) => props.size === 'large' && `
    width: 650px;
  `}
  ${(props) => props.size === 'medium' && `
    width: 310px;
  `}
  ${(props) => props.size === 'medium-small' && `
    width: 290px;
  `}
  ${(props) => props.size === 'small-medium' && `
    width: 180px;
  `}
  ${(props) => props.size === 'small' && `
    width: 84px;
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
