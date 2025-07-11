import React from "react";
import "./card.css";

export interface CardProps {
  children: React.ReactNode;
  variant?: "static-rainbow" | "dynamic-rainbow";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Card({
  children,
  variant = "static-rainbow",
  size = "medium",
  onClick,
  disabled = false,
  className = ""
}: CardProps) {
  return (
    <div
      className={`card card-${variant} card-${size} ${className}`}
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
}
