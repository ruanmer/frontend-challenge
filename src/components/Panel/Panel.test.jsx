import React from "react";
import { render, screen } from "@testing-library/react";
import Panel from "./index";

describe("Panel", () => {
  it("should render", () => {
    render(<Panel>Content</Panel>);

    expect(screen.getByText("Content")).toBeInTheDocument();
  });
});
