import React from "react";

import Logo from "../components/logo";

export default {
  title: "Spacefun/Logo",
  component: Logo,
  argTypes: {
    backgroundColor: { control: "color" },
    children: { control: "text" },
  },
};

const Template = (args) => <Logo {...args} />;

export const Static = Template.bind({});
Static.args = {
  children: "Spacefun",
};

export const Animated = Template.bind({});
Animated.args = {
  children: "Spacefun",
};
