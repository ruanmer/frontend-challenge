import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpPage from "./index";

describe("SignUp", () => {
  it("should require all fields to be filled", () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });

    fireEvent.submit(screen.getByRole("form"));

    expect(screen.getByText("All fields are required!")).toBeInTheDocument();
  });

  it("should require a valid email", () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });

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

  it("should navigate to more info page if all fields are valid", () => {
    render(<SignUpPage />, { wrapper: BrowserRouter });

    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "My First Name" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "my@email.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "MyPassword" },
    });

    fireEvent.submit(screen.getByRole("form"));

    expect(window.location.pathname).toBe("/more-info");
  });
});
