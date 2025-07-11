import React from "react";
import { render, screen } from "@testing-library/react";
import TestComponent from "./test-component";

describe("TestComponent component", () => {
  it("renders the link with correct href", () => {
    render(<TestComponent to="https://example.com">Example</TestComponent>);

    const linkElement = screen.getByText("Example");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("https://example.com");
  });

  it("renders external link with target and rel attributes", () => {
    render(
      <TestComponent to="https://example.com" external>
        External Link
      </TestComponent>
    );

    const linkElement = screen.getByText("External Link");
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
  });
});
