import React, { useState, CSSProperties } from "react";
import "./count-button.css";

export interface CountButtonProps {
  label?: string;
  style?: CSSProperties;
}

export const CountButton: React.FC<CountButtonProps> = ({ label = "Compteur", style }) => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setCount((c) => c + 1);
    setAnimate(false);
    // Force reflow pour relancer l'animation
    void document.getElementById("crazy-btn")?.offsetWidth;
    setAnimate(true);
  };

  return (
    <button
      id="crazy-btn"
      className={`crazy-btn${animate ? " crazy-animate" : ""}`}
      onClick={handleClick}
      onAnimationEnd={() => setAnimate(false)}
      style={style}
    >
      {label} : {count}
    </button>
  );
};

export default CountButton;
