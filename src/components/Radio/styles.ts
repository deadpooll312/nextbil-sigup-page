import styled from "styled-components";

export const RadioGroup = styled.div`
    margin-top: 30px;
`;

export const Label = styled.label`
    display: inline-block;
    position: relative;
    cursor: pointer;

    margin: 0 17px 0 0;
    padding-left: 25px;
    text-align: center;     
    font: normal normal normal 14px/17px Roboto;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    
    &: hover input ~ .radio-mark{
        background-color: #eee;
    }
    
    & input:checked ~ .radio-mark{
      background-color: #0094FF;
    }
    
    & input:checked ~ .radio-mark:after {
      display: block;
    }
    
    & .radio-mark:after {
        top: 3px;
        left: 3px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
    }
`;

export const RadioItem = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

export const RadioMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    border: 1px solid #0094FF;
    border-radius: 50%;
    background-color: #fff;
      
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;
