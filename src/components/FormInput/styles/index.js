import styled from 'styled-components';

export const InputStyled = styled.input`
  height: 20px;
  border: 2px solid #797979;
  border-radius: 10px;

  ${(props) => props.size === 'large' && `
    width: 650px;
  `}
  ${(props) => props.size === 'large-medium' && `
    width: 440px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'medium' && `
    width: 310px;
    margin-right: 28px;
  `}
  ${(props) => props.size === 'medium-small' && `
    width: 230px;
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

export const TextAreaStyled = styled.textarea`
  margin-top: 5px;
  height: 200px;
  border: 2px solid #797979;
  border-radius: 10px;

  ${(props) => props.size === 'large' && `
    width: 650px;
  `}
  ${(props) => props.size === 'large-medium' && `
    width: 440px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'medium' && `
    width: 310px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'medium-small' && `
    width: 230px;
    margin-right: 20px;
  `}
  ${(props) => props.size === 'small-medium' && `
    width: 180px;
    margin-right: 20px;
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

  input {
    margin-top: 5px;
    box-sizing: border-box;
    padding: 10px 0 13px 10px;
  }

  input, label {
    display: block;
  }
`;
