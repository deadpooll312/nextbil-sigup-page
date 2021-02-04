import React from 'react';

import Input from "../Input";
import {LockIcon, MessageIcon} from "../icons";
import Select from "../Select";
import Radio from "../Radio";
import Agreement from "../Agreement";
import RoundedButton from "../RoundedButton";
import {SignUpFormProps} from "../../common/types";
import {COUNTRY_VALUES, GENDER_VALUES} from "../../common/constants";

import {Form, GlobalError, Title} from "./styles";


const SignUpForm: React.FC<SignUpFormProps> = ({
   handleSubmit,
   globalError,
   handleChange,
   handleBlur,
   values,
   removeGlobalError,
   loading,
   dirty,
   isValid,
   isSubmitting
}) => {
    return <Form onSubmit={handleSubmit}>
        <Title>Create a new account</Title>
        {globalError && <GlobalError onClick={removeGlobalError}>{globalError}</GlobalError>}
        <Input
            name={"name"}
            placeholder="Enter your name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            disabled={loading}
        />
        <Input
            name={"email"}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            icon={<MessageIcon/>}
            disabled={loading}
        />
        <Input
            name={"password"}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            icon={<LockIcon/>}
            disabled={loading}
        />
        <Select
            name={"country"}
            list={COUNTRY_VALUES}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
            disabled={loading}
        />
        <Radio
            options={GENDER_VALUES}
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
            disabled={loading}
        />
        <Agreement
            name="agreement"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.agreement}
            disabled={loading}
        />
        <RoundedButton
            text="Sign up"
            loading={loading}
            type="submit"
            disabled={!dirty || !isValid || isSubmitting || loading}
        />
    </Form>
};

export default SignUpForm;