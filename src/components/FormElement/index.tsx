import React from "react"
import {ErrorMessage} from "formik";

import {IFormElement} from "./../../common/types";

import {Div, Children, Error} from "./styles"

const FormElement: React.FC<IFormElement> = (
    {
        name,
        className,
        children,
    }
) => {
    return (
        <Div>
            <Children>
                {children}
            </Children>
            {name && (
                <ErrorMessage name={name}>
                    {(msg) => <Error className={className}>{msg}</Error>}
                </ErrorMessage>
            )}
        </Div>
    )
};

export default FormElement;
