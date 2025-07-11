import React from "react";
import "./spinner.css";

export interface SpinnerProps {
  size?: "small" | "medium" | "large";
  type?: "line" | "dots";
  className?: string;
}

export default function Spinner({
  size = "medium",
  type = "line",
  className = ""
}: SpinnerProps) {
  const classNames = [
    "spinner",
    `spinner-${size}`,
    `spinner-${type}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (type === "dots") {
    return (
      <div className={classNames} role="status" aria-label="Loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

  return (
    <div className={classNames} role="status" aria-label="Loading"></div>
  );
}
