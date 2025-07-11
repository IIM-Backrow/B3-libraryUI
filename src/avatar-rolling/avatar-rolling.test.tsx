import React from "react";
import { render, screen, act } from "@testing-library/react";
import AvatarRolling from "./avatar-rolling";

const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg";

describe("AvatarRolling", () => {
  it("renders the avatar image", () => {
    render(<AvatarRolling minSpeed={1} maxSpeed={2} avatar={AVATAR_URL} />);
    const img = screen.getByAltText("avatar") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(AVATAR_URL);
  });

  it("has the correct class", () => {
    render(<AvatarRolling minSpeed={1} maxSpeed={2} avatar={AVATAR_URL} />);
    const container = screen.getByRole("img", { hidden: true }).parentElement;
    expect(container).toHaveClass("avatar-rolling");
  });

  it("moves after a short delay", () => {
    jest.useFakeTimers();

    render(<AvatarRolling minSpeed={2} maxSpeed={2} avatar={AVATAR_URL} />);
    const container = document.querySelector(".avatar-rolling") as HTMLElement;

    // Get initial transform (should be empty or default)
    const initialTransform = container.style.transform || "";

    // Advance timers and wrap in act() to handle React state updates
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Get transform after animation has had time to run
    const afterTransform = container.style.transform;

    // The transform should now contain translate and rotate values
    expect(afterTransform).not.toBe(initialTransform);
    expect(afterTransform).toMatch(/translate\(-?\d+(\.\d+)?px,\s*-?\d+(\.\d+)?px\)/);
    expect(afterTransform).toMatch(/rotate\(-?\d+(\.\d+)?deg\)/);

    jest.useRealTimers();
  });
});
