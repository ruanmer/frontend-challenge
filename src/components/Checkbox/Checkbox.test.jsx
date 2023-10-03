import React from "react";
import { render, screen } from "@testing-library/react";
import Checkbox from "./index";

describe("Checkbox", () => {
  it("should render", () => {
    render(<Checkbox />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should render with label", () => {
    render(<Checkbox label="Checkbox Label" />);

    expect(
      screen.getByRole("checkbox", { name: "Checkbox Label" }),
    ).toBeInTheDocument();
  });
});
