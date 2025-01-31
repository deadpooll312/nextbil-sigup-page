import React from "react";

import FormElement from "../FormElement";
import {ISelect} from "../../common/types";
import {ArrowIcon} from "../icons";

import {SelectComponent, IconWrapper} from "./styles";

const Select: React.FC<ISelect> = ({list, ...rest}) => {
    const options = list.map(item => <option key={item.value} value={item.value} >{item.label}</option>);

    return <FormElement name={rest.name}>
        <SelectComponent {...rest}>
            {options}
        </SelectComponent>
        <IconWrapper><ArrowIcon /></IconWrapper>
    </FormElement>
};

export default Select;