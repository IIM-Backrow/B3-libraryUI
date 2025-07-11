import { useState, useRef } from "react";
import "./crazy-checkbox.css";

export interface CrazyCheckboxProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean, clickCount: number) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
  id?: string;
}

export function CrazyCheckbox({
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  label = "Check me!",
  className = "",
  id = "crazy-checkbox"
}: CrazyCheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const [clickCount, setClickCount] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(label);
  const [showMessage, setShowMessage] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const createConfetti = () => {
    if (!containerRef.current) return;

    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b", "#eb4d4b"];

    for (let i = 0; i < 12; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDelay = Math.random() * 0.3 + "s";

      containerRef.current.appendChild(confetti);

      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 1000);
    }
  };

  const handleClick = () => {
    if (disabled) return;

    const newChecked = !isChecked;
    const newClickCount = clickCount + 1;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    setClickCount(newClickCount);

    // Handle different click stages
    switch (newClickCount) {
      case 1:
        setCurrentLabel(label);
        break;
      case 2:
        setCurrentLabel("Are you sure?");
        break;
      case 3:
        createConfetti();
        setCurrentLabel("BOOM! 💥");
        break;
      case 4:
        setCurrentLabel("Ok you won 🙄");
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
        break;
      case 5:
        setClickCount(0);
        setCurrentLabel(label);
        setShowMessage(false);
        break;
      default:
        break;
    }

    onChange?.(newChecked, newClickCount);
  };

  const getContainerClasses = () => {
    const baseClasses = ["crazy-checkbox-container", className];

    switch (clickCount) {
      case 1:
        baseClasses.push("stage-sparkle");
        break;
      case 2:
        baseClasses.push("stage-blink");
        break;
      case 3:
        baseClasses.push("stage-explosion");
        break;
      case 4:
        baseClasses.push("stage-spin");
        break;
      default:
        break;
    }

    if (disabled) baseClasses.push("crazy-checkbox-disabled");

    return baseClasses.filter(Boolean).join(" ");
  };

  return (
    <div className={getContainerClasses()} ref={containerRef}>
      <label className="crazy-checkbox-label" htmlFor={id}>
        <input
          ref={checkboxRef}
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleClick}
          disabled={disabled}
          className="crazy-checkbox-input"
        />
        <span className="crazy-checkbox-custom"></span>
        <span className="crazy-checkbox-text">{currentLabel}</span>
      </label>

      {showMessage && <div className="crazy-checkbox-message">Mission accomplished! 🎉</div>}
    </div>
  );
}
