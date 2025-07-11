import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CursorValue from "./cursor-value";
import { act } from "react";

// Test basique : rendu et changement de valeur

describe("CursorValue Component", () => {
  it("display the current value", () => {
    render(<CursorValue min={0} max={10} value={5} onChange={() => {}} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onChange when the mouse moves left or right", () => {
    jest.useFakeTimers();
    const handleChange = jest.fn();
    render(<CursorValue min={0} max={10} value={5} onChange={handleChange} />);
    const container = screen.getByRole("slider");
    fireEvent.mouseMove(container, { clientX: 0 });
    act(() => {
      jest.advanceTimersByTime(60);
    });
    fireEvent.mouseMove(container, { clientX: 999 });
    act(() => {
      jest.advanceTimersByTime(60);
    });
    expect(handleChange).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
