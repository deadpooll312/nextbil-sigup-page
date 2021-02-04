import React from "react";

import {IRadio} from "../../common/types";

import {RadioGroup, RadioItem, Label, RadioMark} from "./styles";
import FormElement from "../FormElement";

const Radio: React.FC<IRadio> = ({options, ...rest}) => {
    return <RadioGroup>
        <FormElement name={rest.name}>
            {options.map((item) => (
                <Label key={item.value} id={item.value}>
                    <RadioItem
                        {...rest}
                        value={item.value}
                        type="radio"
                    />
                    <RadioMark className="radio-mark"/>
                    {item.label}
                </Label>)
            )}
        </FormElement>
    </RadioGroup>

};

export default Radio;