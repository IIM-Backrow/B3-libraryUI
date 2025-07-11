import { useState } from "react";
import "./toggle-switch.css";

export interface ToggleSwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  label?: string;
  className?: string;
  testId?: string;
}

export function ToggleSwitch({
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  size = "medium",
  variant = "primary",
  label,
  className = "",
  testId = "toggle-switch"
}: ToggleSwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !isChecked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  const classes = [
    "toggle-switch",
    `toggle-switch--${size}`,
    `toggle-switch--${variant}`,
    isChecked ? "toggle-switch--checked" : "",
    disabled ? "toggle-switch--disabled" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} data-testid={testId}>
      {label && (
        <label className="toggle-switch__label" htmlFor={`${testId}-input`}>
          {label}
        </label>
      )}
      <div
        id={`${testId}-input`}
        className="toggle-switch__track"
        onClick={handleToggle}
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <div className="toggle-switch__thumb" />
      </div>
    </div>
  );
}
