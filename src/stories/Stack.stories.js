import React, { useState } from "react";

import Stack from "../components/stack";
import Heart from "../components/heart";

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
  const dec = () => (count > 2 ? setCount(count - 1) : null);

  return (
    <div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <br></br>

      <svg width="256" height="48">
        <g transform={`translate(0 16)`}>
          <Stack count={count}>
            <Heart />
          </Stack>
        </g>
      </svg>
    </div>
  );
};

export const Static = Template.bind({});
Static.args = {
  count: 3,
};
