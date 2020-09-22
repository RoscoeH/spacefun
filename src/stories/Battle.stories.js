import React from "react";

import Battle from "../components/battle";

export default {
  title: "Spacefun/Battle",
  component: Battle,
  // argTypes: {
  //   color: { control: "color" },
  //   size: { control: "number" },
  // },
};

const Template = (args) => <Battle {...args} />;

export const Static = Template.bind({});
