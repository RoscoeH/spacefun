import React from "react";

import Shield from "../components/shield";

export default {
  title: "Spacefun/Shield",
  component: Shield,
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
  },
};

const SIZE = 64;
const Template = (args) => (
  <svg width={SIZE} height={SIZE}>
    <g transform={`translate(${SIZE / 4}, ${SIZE / 4})`}>
      <Shield {...args} />
    </g>
  </svg>
);

export const Static = Template.bind({});
