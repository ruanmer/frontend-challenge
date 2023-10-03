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
});
