import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("should render", () => {
    render(<Button>Content</Button>);

    expect(screen.getByRole("button", { name: "Content" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("should render with provided type", () => {
    render(<Button type="submit">Content</Button>);

    expect(screen.getByRole("button", { name: "Content" })).toHaveAttribute(
      "type",
      "submit",
    );
  });
});
