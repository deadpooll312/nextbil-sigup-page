import React, {ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes} from "react";

export type ILabelValue = {
    label: string,
    value: string
}

export interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
    options: ILabelValue[],
    name: string,
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    icon?: JSX.Element;
}

export interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement>{
    withicon?: string;
}

export interface IFormElement {
    name: string,
    className?: string,
}

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string
    list: ILabelValue[]
}

export interface IRoundedButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string | JSX.Element,
    loading?: boolean
}

export interface IAgreement {
    name: string,
    value: any,
    disabled: boolean,
    onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export type TSignUp = {
    name: string,
    email: string,
    password: string
    country: string,
    gender: string,
    agreement?: boolean
}

export interface SignUpFormProps {
    loading: boolean;
    globalError: string;
    removeGlobalError: () => void;
    handleSubmit: () => void;
    handleChange: (e: string | React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    values: any;
    dirty: boolean;
    isValid: boolean;
    isSubmitting: boolean;
}