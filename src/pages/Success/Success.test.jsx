import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { StoreProvider } from "../../utils/store";
import SuccessPage from "./index";

describe("Success", () => {
  it("should navigate to home when restart is clicked", async () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <SuccessPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Restart" }));

    expect(window.location.pathname).toBe("/");
  });
});
