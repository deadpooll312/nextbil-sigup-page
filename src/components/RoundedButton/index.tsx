import React from "react";
import {SpinnerDotted} from "spinners-react";

import {IRoundedButton} from "../../common/types";

import {ButtonComponent} from "./styles";

const RoundedButton: React.FC<IRoundedButton> = ({text, type="button", loading, ...rest}) => {
    return <ButtonComponent {...rest} type={type} disabled={rest.disabled || loading}>
        {loading
            ? <SpinnerDotted size={40} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" />
            : text
        }
    </ButtonComponent>
};

export default RoundedButton;