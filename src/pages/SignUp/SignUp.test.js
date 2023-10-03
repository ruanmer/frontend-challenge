import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpPage from "./index";

describe("SignUp", () => {
  it("should require all fields to be filled", () => {
    render(<SignUpPage />);

    fireEvent.submit(screen.getByRole("form"));

    expect(screen.getByText("All fields are required!")).toBeInTheDocument();
  });

  it("should require a valid email", () => {
    render(<SignUpPage />);

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "My First Name" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "myemailcom" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "MyPassword" },
    });

    fireEvent.submit(screen.getByRole("form"));

    expect(screen.getByText("Email is invalid!")).toBeInTheDocument();
  });
});
