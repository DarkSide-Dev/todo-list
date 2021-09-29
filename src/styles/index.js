import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: auto;
    padding-bottom: 20px;
    box-sizing: border-box;
    padding-bottom: 20px;
    background-color: #478dd3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 30px;
    margin: 0;
    padding: 20px 0;
    font-family: monospace;
`;

export const List = styled.div`
    background-color: #8CB3DB;
    width: 100%;
    height: auto;
    border-radius: 5px;
    border-bottom: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media(min-width: 601px) {
        justify-content: center;
        align-items: center;
    }
`;

export const ListItem = styled.p`
    background-color: ${props=>props.color};
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    border: 2px solid #555;
    font-family: monospace;
    cursor: pointer;
    flex-wrap: wrap;
    position: relative;

    &:hover{
        background-color: ${props=>props.colorHover};
    }

    @media(max-width: 600px) {
        flex: 1;
        min-width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        min-height: 100px;
        align-items: flex-start;
    }

    @media(min-width: 601px) {
        width: 300px;
        margin-right: 5px;
        margin-left: 5px;
    } 
`;

export const Icon = styled.img`
    width: 40px;
    padding: 6px;
    margin: 10px 0;
    border-radius: 0;
    border: 2px solid black;
    background-color: ${props => props.color};
`;

export const ListItemP = styled.p`
    width: 100%;
    font-size: 20px;
    font-family: monospace;
    margin: 0;
    text-align: center;
`;

export const Button = styled.button`
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    background-color: #05da15;
    cursor: pointer;
    flex: 1;
    outline: none;

    &:hover{
        background-color: #04bf12;
    }
`;

export const Area = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const SelectButton = styled.button`
    background-color: ${props=>props.color};
    max-width: 100%;
    width: 300px;
    border: 1px solid #a0a096;
    border-top: 0;
    cursor: pointer;
    font-family: monospace;
    font-size: 17px;
    box-shadow: 0 2px 5px #173d62;
    color: ${props=>props.textColor};
    padding: 5px 0;
`;