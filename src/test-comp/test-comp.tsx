import React from "react";
import "./test-comp.css";
import { TestCompProps } from "./test-comp.types";

export default function TestComp({
  text = "Test Component",
  variant = "primary",
  disabled = false,
  onClick,
  className = ""
}: TestCompProps) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const classNames = ["test-comp", `test-comp--${variant}`, disabled && "test-comp--disabled", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} onClick={handleClick} disabled={disabled} type="button">
      {text}
    </button>
  );
}
