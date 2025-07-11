import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import CrazyCheckbox from "./crazy-checkbox";

describe("CrazyCheckbox Component", () => {
  it("renders with default props", () => {
    render(<CrazyCheckbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByText("Check me!")).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<CrazyCheckbox label="Custom label" />);
    expect(screen.getByText("Custom label")).toBeInTheDocument();
  });

  it("starts unchecked by default", () => {
    render(<CrazyCheckbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("starts checked when defaultChecked is true", () => {
    render(<CrazyCheckbox defaultChecked={true} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("can be disabled", () => {
    render(<CrazyCheckbox disabled={true} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("calls onChange when clicked", () => {
    const handleChange = jest.fn();
    render(<CrazyCheckbox onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true, 1);
  });

  it("works in controlled mode", () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <CrazyCheckbox checked={false} onChange={handleChange} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true, 1);

    rerender(<CrazyCheckbox checked={true} onChange={handleChange} />);
    expect(checkbox).toBeChecked();
  });

  it("evolves through different stages on multiple clicks", () => {
    render(<CrazyCheckbox label="Test" />);
    const checkbox = screen.getByRole("checkbox");
    const container = checkbox.closest(".crazy-checkbox-container");

    fireEvent.click(checkbox);
    expect(container).toHaveClass("stage-sparkle");

    fireEvent.click(checkbox);
    expect(container).toHaveClass("stage-blink");
    expect(screen.getByText("T'es sûr ?")).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(container).toHaveClass("stage-explosion");
    expect(screen.getByText("BOOM! 💥")).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(container).toHaveClass("stage-spin");
    expect(screen.getByText("Ok t'as gagné 🙄")).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(container).not.toHaveClass("stage-sparkle");
    expect(container).not.toHaveClass("stage-blink");
    expect(container).not.toHaveClass("stage-explosion");
    expect(container).not.toHaveClass("stage-spin");
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<CrazyCheckbox className="custom-class" />);
    const container = screen.getByRole("checkbox").closest(".crazy-checkbox-container");
    expect(container).toHaveClass("custom-class");
  });

  it("has correct accessibility attributes", () => {
    render(<CrazyCheckbox id="test-checkbox" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("id", "test-checkbox");
  });

  it("does not trigger onChange when disabled", () => {
    const handleChange = jest.fn();
    render(<CrazyCheckbox disabled={true} onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("shows victory message on fourth click", async () => {
    jest.useFakeTimers();
    render(<CrazyCheckbox />);
    const checkbox = screen.getByRole("checkbox");

    // Click 4 times to reach victory stage
    for (let i = 0; i < 4; i++) {
      fireEvent.click(checkbox);
    }

    expect(screen.getByText("Mission accomplie! 🎉")).toBeInTheDocument();

    // Use act to wrap the timer advancement
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    
    expect(screen.queryByText("Mission accomplie! 🎉")).not.toBeInTheDocument();

    jest.useRealTimers();
  });
});
