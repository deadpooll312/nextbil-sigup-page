import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Input from "./index";
import {Formik} from "formik";
import {LockIcon, MessageIcon} from "../icons";

export default {
    title: "Input",
    component: Input,
};

const Template: Story<ComponentProps<typeof Input>> = (args) => (
    <Formik initialValues={{name: ""}} onSubmit={(value) => alert(value)}>
        {({
              values,
              handleChange,
          }) => (
            <Input {...args} name="name" onChange={handleChange} value={values.name} />
        )}
    </Formik>
);

export const Default = Template.bind({});
Default.args = {
    name: "name",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    name: "name",
    placeholder: "Enter your name..."
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    name: "name",
    placeholder: "Email",
    type: "email",
    icon: <MessageIcon/>
};

export const Password = Template.bind({});
Password.args = {
    name: "name",
    placeholder: "Password",
    type: "password",
    icon: <LockIcon/>
};
