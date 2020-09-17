import React from "react";

import Heart from "../components/heart";

export default {
  title: "Spacefun/Heart",
  component: Heart,
  argTypes: {
    color: { control: "color" },
    size: { control: "number"}
  },
};

const SIZE = 64;
const Template = (args) => (
  <svg width={SIZE} height={SIZE}>
    <g transform={`translate(${SIZE / 4}, ${SIZE / 4})`}>
      <Heart {...args} />
    </g>
  </svg>
);

export const Static = Template.bind({});