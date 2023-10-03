import Text from "./Text";

export default {
  component: Text,
  parameters: {
    layout: "centered",
  },
};

export const Body = {
  args: {
    children: "Text",
  },
};

export const Title = {
  args: {
    variant: "title",
    children: "Title",
  },
};

export const Error = {
  args: {
    color: "error",
    children: "Error!",
  },
};
