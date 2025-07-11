import React from "react";
import "./spinner.css";

export interface SpinnerProps {
  /**
   * The size of the spinner
   */
  size?: "small" | "medium" | "large";
  /**
   * The type of spinner animation
   */
  type?: "line" | "dots";
  /**
   * Additional CSS classes
   */
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

  // For dots type, we need to render the individual dots
  if (type === "dots") {
    return (
      <div className={classNames} role="status" aria-label="Loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

  // For line type, just the base div with rotating border
  return (
    <div className={classNames} role="status" aria-label="Loading"></div>
  );
}
