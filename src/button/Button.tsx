import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  type = "button"
}) => {
  return (
    <button
      type={type}
      className={`button button-${variant} button-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
