import React from "react";
import SelectField from "./SelectField";

export default {
  component: SelectField,
  parameters: {
    layout: "centered",
  },
};

export const Basic = {
  args: {
    children: <option value="">Select an option</option>,
  },
};
