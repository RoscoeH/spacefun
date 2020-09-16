import React from "react";

import Ship from "../components/ship";

export default {
  title: "Spacefun/Ship",
  component: Ship,
  argTypes: {
    color: { control: "color" },
  },
};

const SIZE = 256;
const Template = (args) => (
  <svg width={SIZE} height={SIZE}>
    <g transform={`translate(${SIZE / 2}, ${SIZE / 2})`}>
      <Ship {...args} />
    </g>
  </svg>
);

export const Static = Template.bind({});
Static.args = {
  color: "pink",
};
