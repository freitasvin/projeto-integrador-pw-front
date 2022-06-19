import styled from 'styled-components';

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
