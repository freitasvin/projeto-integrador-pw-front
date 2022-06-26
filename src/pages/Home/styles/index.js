import styled from 'styled-components';

export const ContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

export const MainStyle = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const SearchStyle = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    width: 780px;
    justify-content: space-between;
    
`;

export const SearchResultStyle = styled.div`
    min-width: 780px;
    min-height: 330px;
    border: 4px solid;
    border-color: #03B7DA;
    border-radius: 10px;
`;

export const SearchResultLabelStyle = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;

    span {
    font-size: 20px;
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

export const DropMenuStyle = styled.select`
    text-align: center;
    font-size: 18px;
    color: white;
    ${(props) => (props.type === 'UF' ? `
        width: 125px
        ` : `
        width: 200px
    `)
};

    height: 45px;
    background: linear-gradient(180deg, #30DFF2 0%, #00B4D8 100%);
    background-color: #30DFF2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    border-color: transparent;
`;

export const SearchButtonStyle = styled.button`
    width: 75px;
    height: 50px;
    background: linear-gradient(180deg, #30DFF2 0%, #00B4D8 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    border-color: #30DFF2;

    img {
        width: 30px;
        height: 30px
    }
`;
