import React, { useState, CSSProperties, useRef } from "react";
import "./count-button.css";

export interface CountButtonProps {
  label?: string;
  style?: CSSProperties;
}

export default function CountButton({ label = "Compteur", style }: CountButtonProps) {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const buttonRef = useRef<React.ComponentRef<"button">>(null);

  const handleClick = () => {
    setCount((c) => c + 1);
    setAnimate(false);
    // Force reflow pour relancer l'animation
    void buttonRef.current?.offsetWidth;
    setAnimate(true);
  };

  return (
    <button
      ref={buttonRef}
      id="crazy-btn"
      className={`crazy-btn${animate ? " crazy-animate" : ""}`}
      onClick={handleClick}
      onAnimationEnd={() => setAnimate(false)}
      style={style}
    >
      {label} : {count}
    </button>
  );
}
