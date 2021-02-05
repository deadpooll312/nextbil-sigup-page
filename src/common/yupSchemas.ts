import * as yup from "yup";

export const stringRequired = (text?: string) =>
    yup
        .string()
        .required(text || "Field is required")
        .trim();

export const emailRequired = (text?: string) =>
    yup
        .string()
        .email("Please enter a valid email address")
        .required(text || "Field is required");

export const booleanRequired = (text?: string) =>
    yup
        .boolean().oneOf([true], text || "Field is required");

export const signUpSchema = yup.object().shape({
    name: stringRequired("You must input your name").matches(
        /^[a-zA-Z]+$/,
        "Please enter a valid name"
    ),
    email: emailRequired("You must input your name"),
    password: stringRequired().min(6, "Password must contain at least 6 symbols"),
    country: stringRequired("You must select your country"),
    gender: stringRequired("You must select the gender"),
    agreement: booleanRequired("You must accept the policies"),
});