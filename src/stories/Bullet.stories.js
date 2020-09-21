import React from "react";

import Bullet from "../components/bullet";

export default {
  title: "Spacefun/Bullet",
  component: Bullet,
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
  },
};

const Template = (args) => (
  <svg width={128} height={640}>
    <g transform={`translate(${64}, ${512})`}>
      <Bullet {...args} />
    </g>
  </svg>
);

export const Static = Template.bind({});
Static.args = {};

export const HitShip = Template.bind({});
HitShip.args = { animation: "hitShip", loop: true };

export const HitBullet = Template.bind({});
HitShip.args = { animation: "hitBullet", loop: true };
