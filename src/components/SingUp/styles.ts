import styled from "styled-components";

export const Form = styled.form`
    margin: 0;
    padding: 32px 30px;
    
    position: absolute;
    top: 50%;
    right: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%) translateX(50%);
    
    width: 400px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
`;

export const Title = styled.h1`
    font: normal normal bold 28px/34px Roboto;
    padding-bottom: 37px;
    margin: 0;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    text-align: center;
`;

export const GlobalError = styled.div`
    color: red;
    padding: 20px;
    text-align: center;
    border: none;
    border-radius: 3px;
    background: #ffb3b3;
    margin-bottom: 10px;
    cursor: pointer;
    
    &: hover {
        background: #ffcccc;
    }
`;