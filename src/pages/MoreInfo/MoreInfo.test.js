import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { StoreProvider } from "../../utils/store";
import MoreInfoPage from "./index";

jest.mock("../../services/colors", () => ({
  fetchColors: () => Promise.resolve(["blue", "red"]),
}));

describe("SignUp", () => {
  it("should require all fields to be filled", async () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <MoreInfoPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    await waitFor(() => fireEvent.submit(screen.getByRole("form")));

    expect(screen.getByText("All fields are required!")).toBeInTheDocument();
  });

  it("should fetch and render colors", async () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <MoreInfoPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    await waitFor(() =>
      expect(screen.getByRole("option", { name: "blue" })).toBeInTheDocument(),
    );

    expect(screen.getByRole("option", { name: "red" })).toBeInTheDocument();
  });

  it("should navigate to more info page if all fields are valid", async () => {
    render(
      <BrowserRouter>
        <StoreProvider>
          <MoreInfoPage />
        </StoreProvider>
      </BrowserRouter>,
    );

    await waitFor(() =>
      expect(screen.getByRole("option", { name: "blue" })).toBeInTheDocument(),
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "blue" },
    });

    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("form"));

    expect(window.location.pathname).toBe("/confirmation");
  });
});
