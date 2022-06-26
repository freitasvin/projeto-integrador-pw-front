import styled from 'styled-components';

export const SubmitStyled = styled.input`
  height: 30px;
  width: 100px;
  color: white;
  background: linear-gradient(180deg, #30DFF2 0%, #00B4D8 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: #30DFF2;
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
