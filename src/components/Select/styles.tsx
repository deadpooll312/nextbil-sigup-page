import React from "react";
import styled from "styled-components";

export const SelectComponent = styled.select`
    background: #F5F8FA 0% 0% no-repeat padding-box;
    opacity: 1;
    color: #A2A2A2;
    position: relative;
    width: 100%;
    border: none;
    border-radius: 8px;
    opacity: 1;
    padding: 16px;
    appearance:none;
    
    background-color: #F5F8FA;
    background-image: url("../../assets/images/svg/arrow.svg");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    
    &:focus {
        outline: none !important;
        border: 0px solid #0094FF;
        box-shadow: 0 0 1px #719ECE;
    }  
`;


// const IconWrapperElement: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> = (props) => <span {...props}>{props.children}</span>   ;

export const IconWrapper = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotate(180deg);
`;