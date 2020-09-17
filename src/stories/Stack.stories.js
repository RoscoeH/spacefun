import React, { useState } from "react";

import Stack from "../components/stack";
import Heart from "../components/heart";

export default {
  title: "Spacefun/Stack",
  component: Stack,
  argTypes: {
    count: { control: "number"}
  },
};

const SIZE = 48;
const Template = (args) => {
  const [count, setCount] = useState(args.count);

  return (
    <div>
    <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setCount(count + 1)}>+</button><br></br>
  <Stack count={count}>


    <svg width={SIZE} height={SIZE}>
      <g transform={`translate(${SIZE / 4}, ${SIZE / 4})`}>
        <Heart />
      </g>
    </svg>
  </Stack>
  </div>
)
};

export const Static = Template.bind({});
Static.args = {
  count: 3
};