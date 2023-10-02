import React from "react";
import { render, screen } from "@testing-library/react";
import TextField from "./index";

describe("TextField", () => {
  it("should render", () => {
    render(<TextField />);

    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
  });

  it("should render an email input", () => {
    render(<TextField type="email" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
  });

  it("should render with value", () => {
    render(<TextField value="Input value" />);

    expect(screen.getByRole("textbox")).toHaveDisplayValue("Input value");
  });

  it("should render with placeholder", () => {
    render(<TextField placeholder="Input" />);

    expect(screen.getByPlaceholderText("Input")).toBeInTheDocument();
  });
});
