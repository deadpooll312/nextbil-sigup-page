import React, {InputHTMLAttributes} from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    withicon?: string;
}

const Input: React.FunctionComponent<InputProps> = (props) => <input {...props} />;

export const InputComponent = styled(Input)`
    width:  ${props => props.withicon ? "84%" : "92%"}; 
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 8px;
    opacity: 1;
    padding: 16px;
    padding-left: ${props => props.withicon ? "48px" : "16px"};
    font: normal normal normal 14px/17px Roboto;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    
    &:[type="password"] { 
        -webkit-text-security: circle !important;
    }
    
    ::placeholder {
      color: #A2A2A2;
      opacity: 1; /* Firefox */
    }

    &:focus {
        outline: none !important;
        border: 0px solid #0094FF;
        box-shadow: 0 0 1px #719ECE;
    }
`;

export const Icon = styled.span`
    position: absolute;
    top: 50%;
    left: 17px;
    transform: translateY(-50%);
    display: inline-flex;
`;