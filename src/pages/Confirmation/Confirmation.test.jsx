import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StoreProvider } from "../../utils/store";
import { signUp } from "../../services/auth";
import ConfirmationPage from "./index";

jest.mock("../../services/auth", () => ({
  signUp: jest.fn(() => Promise.resolve()),
}));

describe("Confirmation", () => {
  it("should navigate back to home when the back button is clicked", () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <ConfirmationPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(window.location.pathname).toBe("/more-info");
  });

  it("should navigate to success page if data are submitted", async () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <ConfirmationPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    await waitFor(() =>
      fireEvent.click(screen.getByRole("button", { name: "Submit" })),
    );

    expect(window.location.pathname).toBe("/success");
  });

  it("should navigate to error page if data are not submitted", async () => {
    signUp.mockRejectedValue(new Error("Bad Request"));

    render(
      <BrowserRouter>
        <StoreProvider>
          <ConfirmationPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    await waitFor(() =>
      fireEvent.click(screen.getByRole("button", { name: "Submit" })),
    );

    expect(window.location.pathname).toBe("/error");
  });
});
