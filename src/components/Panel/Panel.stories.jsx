import React from "react";
import Panel from "./Panel";
import Text from "../Text";

export default {
  component: Panel,
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = {
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac
        augue eu tortor vehicula pretium.
      </Text>
    ),
  },
};
