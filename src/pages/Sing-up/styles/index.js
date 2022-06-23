import styled, { css } from 'styled-components';

export const ContainerStyle = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
`;

export const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  margin-bottom: 2%;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const FormStyled = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;

  input, label {
    display: block;
  }
`;

export const BreakStyle = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const ItemStyle = styled.div`
  float: left;
  height: max-content;
  margin-left: 20px;
`;

export const InputStyled = styled.input`
  height: 20px;
  border: 2px solid #797979;
  border-radius: 10px;

  ${(props) => props.size === 'large' && css`
    width: 650px;
  `}
  ${(props) => props.size === 'medium' && css`
    width: 310px;
  `}
  ${(props) => props.size === 'medium-small' && css`
    width: 290px;
  `}
  ${(props) => props.size === 'small-medium' && css`
    width: 180px;
  `}
  ${(props) => props.size === 'small' && css`
    width: 80px;
  `}
`;

export const SelectStyled = styled.select`
  text-align: center;
  font-size: 14px;
  color: black
  border: 2px solid #797979;
  border-radius: 10px;

  ${(props) => props.size === 'large' && css`
    width: 650px;
  `}
  ${(props) => props.size === 'medium' && css`
    width: 310px;
  `}
  ${(props) => props.size === 'medium-small' && css`
    width: 290px;
  `}
  ${(props) => props.size === 'small-medium' && css`
    width: 180px;
  `}
  ${(props) => props.size === 'small' && css`
    width: 80px;
  `}
`;
