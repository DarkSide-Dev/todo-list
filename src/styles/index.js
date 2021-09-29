import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
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
    max-width: 100%;
    width: 200px;
    height: auto;
    border-radius: 5px;
    border: 3px solid #555;
    border-bottom: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const ListItem = styled.p`
    background-color: ${props=>props.color};
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    border-bottom: 2px solid #555;
    margin: 0;
    font-family: monospace;
    cursor: pointer;
    flex-wrap: wrap;
    position: relative;

    &:hover{
        background-color: ${props=>props.colorHover};
    }
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
    margin-bottom: 20px;

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
`;

export const Icon = styled.img`
    width: 40px;
    position: absolute;
    right: -57px;
    background-color: gold;
    border-radius: 50%;
    padding: 5px;
`;