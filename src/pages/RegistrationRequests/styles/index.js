import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const MainStyle = styled.div`
    font-weight: 500;
    color: #03B7DA;
    display: flex;
    flex-basis: 75%;
    flex-direction: column;
    padding: 50px 85px 0 100px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  float: left;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const RequestsContainer = styled.div`
  margin-top: 25px;
`;

export const SearchButtonStyle = styled.button`
  width: max-content;
  background: linear-gradient(180deg, #30DFF2 0%, #00B4D8 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: #30DFF2;
  margin-top: 20px;

  img {
      width: 30px;
  }
`;

export const TableContainer = styled.div`
  width: 800px;
  max-height: 290px;
  min-height: 290px;
  border: 2px solid #797979;
  border-radius: 10px;
  overflow-y: scroll;
`;

export const TableStyled = styled.table`
  width: 780px;
  text-align: center;
  color: black;
  font-size: 15px;
  text-align: left;
  border-collapse: collapse;
  
  td, th{
    padding: 8px 8px 8px 8px;
    border-right: 1px solid black;
  }
  tr {
    background: #BCBCBC40;
  }

  th {
    font-weight: 400;
    color: #797979;
    background: white;
  }

  tr:nth-child(even) {
    background: white;
  }

  td:last-child, th:last-child {
  border :none;
  }

`;
