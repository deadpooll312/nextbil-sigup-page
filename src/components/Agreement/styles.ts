import styled from "styled-components";

export const AgreementContainer = styled.label`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;
    position: relative;
    display: block;
    cursor: pointer;
    font: normal normal normal 14px/17px Roboto;
    letter-spacing: 0px;
    opacity: 1;
    user-select: none;
    
    &:hover input ~ .checkmark {
        background-color: #eee;
    }
    
    & input:checked ~ .checkmark {
      background-color: #0094FF;
    }
    
    & input:checked ~ .checkmark:after {
      display: block;
    }
    
    & .checkmark:after {
        left: 50%;
        top: 50%;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    
    & .error {
        top: 15px;
    }
`;

export const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

export const CheckMark = styled.span`
    position: absolute;
    border: 1px solid #0094FF;
    border-radius: 3px;
    background-color: #fff;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    
    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

export const AgreementText = styled.p`
    padding-left: 25px;
    font: normal normal normal 14px/17px Roboto;
    letter-spacing: 0px;
    opacity: 1;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #0094FF;
`;