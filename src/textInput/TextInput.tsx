import React from "react";
import "./TextInput.css";

export interface TextInputProps {
    label?: string;
    helperText?: string;
    error?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    fullWidth?: boolean;
    type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date";
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    helperText,
    error = false,
    startAdornment,
    endAdornment,
    fullWidth = false,
    type = "text",
    className = "",
    disabled = false,
    placeholder,
    value,
    onChange,
    name,
    id,
    required,
}) => {
    return (
        <div className={`text-input ${fullWidth ? 'text-input-fullwidth' : ''} ${className}`}>
            {label && (
                <label className={`text-input-label ${error ? 'text-input-label-error' : ''}`}>
                    {label}
                </label>
            )}
            <div className={`text-input-wrapper ${error ? 'text-input-error' : ''}`}>
                {startAdornment && (
                    <div className="text-input-adornment text-input-start-adornment">
                        {startAdornment}
                    </div>
                )}
                <input
                    type={type}
                    className="text-input-field"
                    aria-invalid={error}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    required={required}
                />
                {endAdornment && (
                    <div className="text-input-adornment text-input-end-adornment">
                        {endAdornment}
                    </div>
                )}
            </div>
            {helperText && (
                <div className={`text-input-helper-text ${error ? 'text-input-helper-text-error' : ''}`}>
                    {helperText}
                </div>
            )}
        </div>
    );
};

export default TextInput;