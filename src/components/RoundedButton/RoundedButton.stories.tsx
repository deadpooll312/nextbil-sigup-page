import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import RoundedButton from "./index";

export default {
    title: "RoundedButton",
    component: RoundedButton,
};

const Template: Story<ComponentProps<typeof RoundedButton>> = (args) => (
    <RoundedButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    text: "Submit",
};

export const Disabled = Template.bind({});
Disabled.args = {
    text: "Submit",
    disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
    text: "Submit",
    loading: true
};
