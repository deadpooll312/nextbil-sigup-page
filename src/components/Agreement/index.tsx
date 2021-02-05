import React, {useRef} from "react";

import {IAgreement} from "../../common/types";

import {AgreementContainer, Checkbox, CheckMark, AgreementText, Link} from "./styles";
import FormElement from "../FormElement";

const Agreement: React.FC<IAgreement> = (props) => {
    const CheckboxRef = useRef<HTMLInputElement>(null);
    const onClickCheckMark = () => {
        if (CheckboxRef.current) {
            CheckboxRef.current.click()
        }
    };

    return <AgreementContainer htmlFor={props.name} onClick={onClickCheckMark}>
        <FormElement name={props.name} className="error">
            <Checkbox
                {...props}
                ref={CheckboxRef}
                type="checkbox"
            />
            <CheckMark onClick={onClickCheckMark} className="checkmark" />
            <AgreementText>Accept <Link href="#link">terms</Link> and <Link
                href="#link">conditions</Link></AgreementText>
        </FormElement>
    </AgreementContainer>

};

export default Agreement;