import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MoreInfoPage from "./index";
import { BrowserRouter } from "react-router-dom";

describe("SignUp", () => {
  it("should require all fields to be filled", () => {
    render(<MoreInfoPage />, { wrapper: BrowserRouter });

    fireEvent.submit(screen.getByRole("form"));

    expect(screen.getByText("All fields are required!")).toBeInTheDocument();
  });
});
