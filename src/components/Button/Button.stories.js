import Button from "./Button";

export default {
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export const Primary = {
  args: {
    children: "Button",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    children: "Button",
  },
};
