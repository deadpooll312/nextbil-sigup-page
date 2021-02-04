import styled from "styled-components";
import React, {ButtonHTMLAttributes} from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => <button {...props}/>;

export const ButtonComponent = styled(Button)`
    width: 100%;
    // padding: 20px;
    height: 60px;
    border: none;
    background: ${props => props.disabled ? "#A2A2A2" : "#0094FF"};
    cursor: ${props => props.disabled ? "no-drop" : "pointer"};

    border-radius: 31px;
    opacity: 1;
    font: normal normal normal 18px/22px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    
    &: focus {
        outline: none !important;
        border: 0px solid #0094FF;
        box-shadow: 0 0 1px #719ECE;
    }
`;