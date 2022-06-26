import styled from 'styled-components';

export const ContainerStyle = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
`;

export const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 150px;
  margin-bottom: 2%;

  h1 {
    color: #03B7DA;
    font-size: 20px;
    font-weight: 500;
    flex-basis: 100%;
    margin: 0 0 0 20px;
  }
`;

export const FormStyled = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
`;

export const BreakStyle = styled.div`
  flex-basis: 100%;
  height: 0;
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

export const SubmitStyled = styled.input`
  height: 30px;
  width: 100px;
  color: white;
  background: linear-gradient(180deg, #30DFF2 0%, #00B4D8 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: #30DFF2;
`;
