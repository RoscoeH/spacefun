import React from "react";

import Ship from "../components/ship";

export default {
  title: "Spacefun/Ship",
  component: Ship,
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
    healing: { control: "boolean" },
    shielding: { control: "boolean" },
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

export const Healing = Template.bind({});
Healing.args = {
  color: "pink",
  healing: true,
};

export const Shielding = Template.bind({});
Shielding.args = {
  color: "pink",
  shielding: true,
};
