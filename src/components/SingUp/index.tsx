import React, {useState} from "react";
import {Formik} from "formik";
import { useMutation } from "@apollo/client";

import {TSignUp} from "../../common/types";
import {SIGN_UP_USER_MUTATION} from "../../generated/signupUser";

import SignUpForm from "./form";
import {initialValues} from "./constants";
import {signUpSchema} from "../../common/yupSchemas";

const SingUp: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState<string>("");
    const [signup] = useMutation(SIGN_UP_USER_MUTATION);

    const removeGlobalError = () => setGlobalError("");

    const onSubmit = (values: TSignUp, {setSubmitting, setErrors}: any) => {
        if (values.agreement) delete values.agreement;

        setLoading(true);
        signup({variables: {signUpInput : values}})
            .then(({data}) => {
                // alert data after success request
                alert(data);
            })
            .catch((err) => {
                if (err.graphQLErrors[0].validationErrors) {
                    const errors: { [key: string]: string } = {};

                    err.graphQLErrors[0].validationErrors?.forEach(
                        (validationErr: {[key: string]: string}) => {
                            Object.values(validationErr.constraints).forEach(
                                (message: string) => errors[validationErr.property] = message
                            );
                        }
                    );
                    setErrors(errors);
                } else {
                    setGlobalError(err.graphQLErrors[0].message)
                }

            })
            .finally(() => {
                setSubmitting(false);
                setLoading(false)
            })
    };

    return <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
    >
        {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              dirty,
              isValid,
          }) => (<SignUpForm
            loading={loading}
            globalError={globalError}
            removeGlobalError={removeGlobalError}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            dirty={dirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
        />
    )}
    </Formik>
};

export default SingUp;