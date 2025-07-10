import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CountButton } from "./count-button";

describe("CountButton", () => {
  it("incrémente le compteur et applique l'animation au clic", () => {
    const { getByText, getByRole } = render(<CountButton />);
    const button = getByRole("button");
    expect(button.textContent).toContain("0");
    fireEvent.click(button);
    expect(button.textContent).toContain("1");
    expect(button.className).toContain("crazy-animate");
  });
});
