import React from "react";

import Button from "../components/button";
import Play from "../components/play";

export default {
  title: "Spacefun/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PlayButton = Template.bind({});
PlayButton.args = {
  children: (
    <svg width={26} height={26}>
      <Play />
    </svg>
  ),
};
