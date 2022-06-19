import styled from 'styled-components';

export const SearchResultLabelStyle = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;

    span {
    font-size: 20px;
    font-family: 'exo 2';
    font-weight: 500;
    color: #03B7DA;
    }

    img {
        background: linear-gradient(180deg, #2FDFF2 0%, #03B7DA 100%);
        border-radius: 25px;
        border: 3px solid #03B7DA;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`;