import React from "react";
import { render, screen } from "@testing-library/react";
import SelectField from "./index";

describe("SelectField", () => {
  it("should render", () => {
    render(
      <SelectField>
        <option value="">Select</option>
      </SelectField>,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should render with value", () => {
    render(
      <SelectField value="select2">
        <option value="select1">Option 1</option>
        <option value="select2">Option 2</option>
      </SelectField>,
    );

    expect(screen.getByRole("combobox")).toHaveDisplayValue("Option 2");
  });
});
