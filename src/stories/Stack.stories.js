import React, { useState } from "react";

import Stack from "../components/stack";
import Heart from "../components/heart";
import Shield from "../components/shield";

export default {
  title: "Spacefun/Stack",
  component: Stack,
  argTypes: {
    count: { control: "number" },
  },
};

const Template = (args) => {
  const [count, setCount] = useState(args.count);
  const inc = () => (count < 5 ? setCount(count + 1) : null);
  const dec = () => (count > 1 ? setCount(count - 1) : null);

  return (
    <div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <br></br>

      <svg width="256" height="48">
        <g transform={`translate(0 16)`}>
          <Stack count={count}>{args.item}</Stack>
        </g>
      </svg>
    </div>
  );
};

export const Hearts = Template.bind({});
Hearts.args = {
  count: 3,
  item: <Heart />,
};

export const Shields = Template.bind({});
Shields.args = {
  count: 3,
  item: <Shield />,
};
