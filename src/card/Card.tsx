import React from "react";
import "./Card.css";

export interface CardProps {
    children: React.ReactNode;
    variant?: "static-rainbow" | "dynamic-rainbow";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    variant = "static-rainbow",
    size = "medium",
    onClick,
    disabled = false,
    className = "",
}) => {
    return (
        <div
            className={`card card-${variant} card-${size} ${className}`}
            onClick={onClick}
            aria-disabled={disabled}
        >
            {children}
        </div>
    );
};

export default Card;