import styled from 'styled-components';

export const IntroductionContainerStyle = styled.div`
    background: linear-gradient(180deg, #30DFF2 46.88%, #00ADC0 100%);
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    color: white;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const LogoStyle = styled.div`
    img {
    width: 125px;
    height: 120px;
    }
`;

export const IntroductionStyle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-grow: 1;
    justify-content: space-between;
    padding: 30% 10% 5% 10%;

    h1 {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 0;
    }

    h2 {
        font-weight: 200;
        margin-top: 0;
    }

    h3, h4 {
        font-weight: 200;
    }
`;

export const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 60px;
    font-size: 14px;
    font-weight: bolder;
    vertical-align: middle;

    img {
    width: 30px;
    height: 30px;
    }
`;

export const HomeButtonStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


    img {
    margin-right: 15px;
    }

`;

export const UserButtonStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
    margin-left: 15px;
    }
`;
