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
  const [hidden, setHidden] = useState(false);
  const inc = () => (count < 5 ? setCount(count + 1) : null);
  const dec = () => (count > 1 ? setCount(count - 1) : null);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <button onClick={toggleHidden}>{hidden ? "show" : "hide"}</button>
      <br></br>

      <svg width="256" height="256">
        <g transform={`translate(${args.flipped ? 36 * 5 : 0} 16)`}>
          <Stack count={count} hidden={hidden} flipped={args.flipped}>
            {args.item}
          </Stack>
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

export const Flipped = Template.bind({});
Flipped.args = {
  count: 2,
  item: <Heart />,
  flipped: true,
};
