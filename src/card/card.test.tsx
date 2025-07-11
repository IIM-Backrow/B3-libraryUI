import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./card";

describe("Card Component", () => {
  it("renders Card with children", () => {
    render(<Card>Sublime Card</Card>);
    expect(screen.getByText("Sublime Card")).toBeInTheDocument();
  });
});
