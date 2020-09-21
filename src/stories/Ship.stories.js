import React from "react";

import Ship from "../components/ship";

export default {
  title: "Spacefun/Ship",
  component: Ship,
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
    flipped: { control: "boolean" },
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

export const Flipped = Template.bind({});
Flipped.args = {
  flipped: true,
};

export const FlippedAndHealing = Template.bind({});
FlippedAndHealing.args = {
  flipped: true,
  healing: true,
};

export const FlippedAndShielding = Template.bind({});
FlippedAndShielding.args = {
  flipped: true,
  shielding: true,
};
