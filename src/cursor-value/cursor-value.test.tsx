import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CursorValue from "./cursor-value";

// Test basique : rendu et changement de valeur

describe("CursorValue Component", () => {
  it("display the current value", () => {
    render(
      <CursorValue min={0} max={10} value={5} onChange={() => {}} />
    );
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onChange when the mouse moves left or right", () => {
    const handleChange = jest.fn();
    render(
      <CursorValue min={0} max={10} value={5} onChange={handleChange} />
    );
    const container = screen.getByRole("slider");
    fireEvent.mouseMove(container, { clientX: 0 });
    fireEvent.mouseMove(container, { clientX: 999 });
    expect(handleChange).toHaveBeenCalled();
  });
});
