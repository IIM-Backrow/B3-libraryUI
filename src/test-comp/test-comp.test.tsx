import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestComp from "./test-comp";
import { TestCompProps } from "./test-comp.types";

describe("TestComp", () => {
  const defaultProps: TestCompProps = {
    text: "Test Button",
    variant: "primary",
    disabled: false
  };

  it("renders with default props", () => {
    render(<TestComp {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("test-comp", "test-comp--primary");
  });

  it("renders with custom text", () => {
    render(<TestComp text="Custom Text" />);
    expect(screen.getByRole("button", { name: "Custom Text" })).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const { rerender } = render(<TestComp variant="secondary" />);
    expect(screen.getByRole("button")).toHaveClass("test-comp--secondary");

    rerender(<TestComp variant="danger" />);
    expect(screen.getByRole("button")).toHaveClass("test-comp--danger");
  });

  it("handles disabled state correctly", () => {
    render(<TestComp disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("test-comp--disabled");
  });

  it("calls onClick when clicked", () => {
    const mockClick = jest.fn();
    render(<TestComp onClick={mockClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const mockClick = jest.fn();
    render(<TestComp onClick={mockClick} disabled={true} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<TestComp className="custom-class" />);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("has correct default text when no text prop is provided", () => {
    render(<TestComp />);
    expect(screen.getByRole("button", { name: "Test Component" })).toBeInTheDocument();
  });

  it("combines all class names correctly", () => {
    render(<TestComp variant="danger" disabled={true} className="extra-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("test-comp", "test-comp--danger", "test-comp--disabled", "extra-class");
  });
});
