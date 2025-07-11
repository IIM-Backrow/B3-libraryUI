import React, { useRef, useState, useEffect } from "react";
import "./cursor-value.css";

export interface CursorValueProps {
  min: number;
  max: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

function CursorValue({
  min,
  max,
  step = 1,
  value,
  onChange,
  className = ""
}: CursorValueProps) {
  const [internalValue, setInternalValue] = useState<number>(value ?? min);
  const [isRunning, setIsRunning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const valueRef = useRef<number>(internalValue);

  // Sync external value
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      valueRef.current = value;
    }
  }, [value]);

  useEffect(() => {
    valueRef.current = internalValue;
  }, [internalValue]);

  useEffect(() => {
    if (isRunning && direction) {
      intervalRef.current = setInterval(() => {
        let next =
          direction === "left"
            ? valueRef.current - step
            : valueRef.current + step;

        next = Math.max(min, Math.min(max, next));

        if (next !== valueRef.current) {
          setInternalValue(next);
          valueRef.current = next;
          if (onChange) onChange(next);
        }
      }, 50);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [isRunning, direction, step, min, max, onChange]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      setDirection("left");
      setIsRunning(true);
    } else {
      setDirection("right");
      setIsRunning(true);
    }
  };

  const handleMouseLeave = () => {
    setIsRunning(false);
    setDirection(null);
  };

  return (
    <div
      className={`cursor-value-container ${className}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="slider"
      aria-valuenow={internalValue}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-orientation="horizontal"
    >
      <div className="cursor-value-track">
        <div
          className="cursor-value-thumb"
          style={{ left: `${((internalValue - min) / (max - min)) * 100}%` }}
        />
      </div>
      <div className="cursor-value-value">{internalValue}</div>
    </div>
  );
}

export default CursorValue;
