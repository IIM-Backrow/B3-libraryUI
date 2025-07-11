import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "./spinner";

describe("Spinner Component", () => {
  it("renders with default props", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("spinner", "spinner-medium", "spinner-line");
    expect(spinner).toHaveAttribute("aria-label", "Loading");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Spinner size="small" />);
    expect(screen.getByRole("status")).toHaveClass("spinner-small");

    rerender(<Spinner size="medium" />);
    expect(screen.getByRole("status")).toHaveClass("spinner-medium");

    rerender(<Spinner size="large" />);
    expect(screen.getByRole("status")).toHaveClass("spinner-large");
  });

  it("renders with different types", () => {
    const { rerender } = render(<Spinner type="line" />);
    expect(screen.getByRole("status")).toHaveClass("spinner-line");

    rerender(<Spinner type="dots" />);
    expect(screen.getByRole("status")).toHaveClass("spinner-dots");
  });

  it("renders dots type with three dot elements", () => {
    render(<Spinner type="dots" />);
    const spinner = screen.getByRole("status");
    const dots = spinner.querySelectorAll(".dot");
    expect(dots).toHaveLength(3);
  });

  it("renders line type without dot elements", () => {
    render(<Spinner type="line" />);
    const spinner = screen.getByRole("status");
    const dots = spinner.querySelectorAll(".dot");
    expect(dots).toHaveLength(0);
  });

  it("applies custom className", () => {
    render(<Spinner className="custom-spinner" />);
    expect(screen.getByRole("status")).toHaveClass("custom-spinner");
  });

  it("combines all class names correctly", () => {
    render(<Spinner size="large" type="dots" className="extra-class" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("spinner", "spinner-large", "spinner-dots", "extra-class");
  });

  it("has correct accessibility attributes", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveAttribute("role", "status");
    expect(spinner).toHaveAttribute("aria-label", "Loading");
  });

  it("renders small dots spinner correctly", () => {
    render(<Spinner size="small" type="dots" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("spinner", "spinner-small", "spinner-dots");
    expect(spinner.querySelectorAll(".dot")).toHaveLength(3);
  });

  it("renders medium dots spinner correctly", () => {
    render(<Spinner size="medium" type="dots" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("spinner", "spinner-medium", "spinner-dots");
    expect(spinner.querySelectorAll(".dot")).toHaveLength(3);
  });

  it("renders large dots spinner correctly", () => {
    render(<Spinner size="large" type="dots" />);
    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("spinner", "spinner-large", "spinner-dots");
    expect(spinner.querySelectorAll(".dot")).toHaveLength(3);
  });
});
