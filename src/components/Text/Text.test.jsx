import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./index";

describe("Text", () => {
  it("should render as a body text", () => {
    render(<Text>Content</Text>);

    expect(screen.getByText("Content").tagName).toBe("P");
  });

  it("should render as a title", () => {
    render(<Text variant="title">Content</Text>);

    expect(screen.getByText("Content").tagName).toBe("H1");
  });
});
