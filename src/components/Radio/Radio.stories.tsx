import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";

import Radio from "./index";
import {GENDER_VALUES} from "../../common/constants";
import {Formik} from "formik";

export default {
    title: "Radio",
    component: Radio,
};

const Template: Story<ComponentProps<typeof Radio>> = (args) => (
    <Formik initialValues={{gender: ""}} onSubmit={(value) => alert(value)}>
        {({
              values,
              handleChange,
          }) => (
            <Radio {...args} onChange={handleChange} value={values.gender}  />
        )}
    </Formik>
);

export const Default = Template.bind({});
Default.args = {
    options: GENDER_VALUES,
    name: "gender"
};
