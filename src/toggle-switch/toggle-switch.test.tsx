import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ToggleSwitch, ToggleSwitchProps } from "./toggle-switch";

describe("ToggleSwitch", () => {
  const defaultProps: ToggleSwitchProps = {
    testId: "test-toggle-switch"
  };

  it("renders correctly", () => {
    render(<ToggleSwitch {...defaultProps} />);
    const toggleSwitch = screen.getByTestId("test-toggle-switch");
    expect(toggleSwitch).toBeInTheDocument();
  });

  it("renders with label when provided", () => {
    render(<ToggleSwitch {...defaultProps} label="Test Label" />);
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
  });

  it("starts unchecked by default", () => {
    render(<ToggleSwitch {...defaultProps} />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });

  it("starts checked when defaultChecked is true", () => {
    render(<ToggleSwitch {...defaultProps} defaultChecked={true} />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("toggles state when clicked", () => {
    render(<ToggleSwitch {...defaultProps} />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-checked", "false");

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("aria-checked", "true");

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });

  it("toggles state when Enter key is pressed", () => {
    render(<ToggleSwitch {...defaultProps} />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-checked", "false");

    fireEvent.keyDown(switchElement, { key: "Enter" });
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("toggles state when Space key is pressed", () => {
    render(<ToggleSwitch {...defaultProps} />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-checked", "false");

    fireEvent.keyDown(switchElement, { key: " " });
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("calls onChange when toggled", () => {
    const handleChange = jest.fn();
    render(<ToggleSwitch {...defaultProps} onChange={handleChange} />);
    const switchElement = screen.getByRole("switch");

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledWith(true);

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("works in controlled mode", () => {
    const handleChange = jest.fn();
    const { rerender } = render(<ToggleSwitch {...defaultProps} checked={false} onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveAttribute("aria-checked", "false");

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledWith(true);

    // Simulate parent component updating the checked prop
    rerender(<ToggleSwitch {...defaultProps} checked={true} onChange={handleChange} />);
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("does not toggle when disabled", () => {
    const handleChange = jest.fn();
    render(<ToggleSwitch {...defaultProps} disabled onChange={handleChange} />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-disabled", "true");
    expect(switchElement).toHaveAttribute("tabIndex", "-1");

    fireEvent.click(switchElement);
    expect(handleChange).not.toHaveBeenCalled();
    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(<ToggleSwitch {...defaultProps} size="small" />);
    let container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--small");

    rerender(<ToggleSwitch {...defaultProps} size="medium" />);
    container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--medium");

    rerender(<ToggleSwitch {...defaultProps} size="large" />);
    container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--large");
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<ToggleSwitch {...defaultProps} variant="primary" />);
    let container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--primary");

    rerender(<ToggleSwitch {...defaultProps} variant="secondary" />);
    container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--secondary");

    rerender(<ToggleSwitch {...defaultProps} variant="success" />);
    container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--success");
  });

  it("applies checked class when checked", () => {
    render(<ToggleSwitch {...defaultProps} defaultChecked={true} />);
    const container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--checked");
  });

  it("applies disabled class when disabled", () => {
    render(<ToggleSwitch {...defaultProps} disabled />);
    const container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("toggle-switch--disabled");
  });

  it("applies custom className", () => {
    render(<ToggleSwitch {...defaultProps} className="custom-class" />);
    const container = screen.getByTestId("test-toggle-switch");
    expect(container).toHaveClass("custom-class");
  });

  it("has proper accessibility attributes", () => {
    render(<ToggleSwitch {...defaultProps} label="Accessibility Switch" />);
    const switchElement = screen.getByRole("switch");
    const label = screen.getByText("Accessibility Switch");

    expect(switchElement).toHaveAttribute("role", "switch");
    expect(switchElement).toHaveAttribute("aria-checked");
    expect(switchElement).toHaveAttribute("tabIndex", "0");
    expect(label).toHaveAttribute("for", "test-toggle-switch-input");
    expect(switchElement).toHaveAttribute("id", "test-toggle-switch-input");
  });
});
