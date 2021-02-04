import React from "react";

import FormElement from "../FormElement";
import {IInput} from "../../common/types";

import {InputComponent, Icon} from "./styles";

const Input: React.FC<IInput> = ({icon, ...rest}) => {
    return <FormElement name={rest.name}>
        {!!icon && <Icon>{icon}</Icon>}
        <InputComponent withicon={!!icon ? 'showIcon' : undefined} {...rest} />
    </FormElement>
};

export default Input;