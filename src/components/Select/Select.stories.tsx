import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import {Formik} from "formik";

import Select from "./index";
import {COUNTRY_VALUES} from "../../common/constants";

export default {
    title: "Select",
    component: Select,
};

const Template: Story<ComponentProps<typeof Select>> = (args) => (
    <Formik initialValues={{country: ""}} onSubmit={(value) => alert(value)}>
        {({
              values,
              handleChange,
          }) => (
            <Select {...args} onChange={handleChange} value={values.country}  />
        )}
    </Formik>
);

export const Default = Template.bind({});
Default.args = {
    list: COUNTRY_VALUES,
    name: "country"
};
