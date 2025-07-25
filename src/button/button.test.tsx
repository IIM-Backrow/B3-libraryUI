import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./button";

describe("Button Component", () => {
  it("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
