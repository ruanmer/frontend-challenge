import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { StoreProvider } from "../../utils/store";
import ErrorPage from "./index";

describe("Error", () => {
  it("should navigate to home when restart is clicked", async () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <ErrorPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Restart" }));

    expect(window.location.pathname).toBe("/");
  });
});
