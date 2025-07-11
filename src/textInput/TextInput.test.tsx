import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from "./TextInput";

describe("TextInput Component", () => {
    it("renders correctly with default props", () => {
        render(<TextInput />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
        render(<TextInput label="Username" />);
        expect(screen.getByText("Username")).toBeInTheDocument();
    });

    it("renders with helper text", () => {
        render(<TextInput helperText="Enter your username" />);
        expect(screen.getByText("Enter your username")).toBeInTheDocument();
    });

    it("displays error state correctly", () => {
        render(<TextInput error={true} helperText="Error message" />);
        const helperText = screen.getByText("Error message");
        expect(helperText).toHaveClass("text-input-helper-text-error");
    });

    it("handles onChange event", () => {
        const handleChange = jest.fn();
        render(<TextInput onChange={handleChange} />);

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "test" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("renders with placeholder", () => {
        render(<TextInput placeholder="Enter text here" />);
        expect(screen.getByPlaceholderText("Enter text here")).toBeInTheDocument();
    });

    it("applies fullWidth class when fullWidth is true", () => {
        const { container } = render(<TextInput fullWidth />);
        expect(container.firstChild).toHaveClass("text-input-fullwidth");
    });

    it("renders with start adornment", () => {
        render(<TextInput startAdornment={<span>$</span>} />);
        expect(screen.getByText("$")).toBeInTheDocument();
    });

    it("renders with end adornment", () => {
        render(<TextInput endAdornment={<span>.com</span>} />);
        expect(screen.getByText(".com")).toBeInTheDocument();
    });

    it("renders disabled input", () => {
        render(<TextInput disabled />);
        expect(screen.getByRole("textbox")).toBeDisabled();
    });

    it("applies custom className", () => {
        const { container } = render(<TextInput className="custom-class" />);
        expect(container.firstChild).toHaveClass("custom-class");
    });

    it("applies required attribute", () => {
        render(<TextInput required />);
        expect(screen.getByRole("textbox")).toHaveAttribute("required");
    });

    it("sets name attribute correctly", () => {
        render(<TextInput name="username" />);
        expect(screen.getByRole("textbox")).toHaveAttribute("name", "username");
    });

    it("sets id attribute correctly", () => {
        render(<TextInput id="username-input" />);
        expect(screen.getByRole("textbox")).toHaveAttribute("id", "username-input");
    });

    it("sets value correctly", () => {
        render(<TextInput value="test-value" />);
        expect(screen.getByRole("textbox")).toHaveValue("test-value");
    });
    it("correctly handles email type validation", () => {
        render(<TextInput type="email" value="test@example.com" />);
        const input = screen.getByRole("textbox");
        expect(input).toHaveAttribute("type", "email");
        expect(input).toHaveValue("test@example.com");
    });

    it("correctly handles number type", () => {
        render(<TextInput type="number" value="42" />);
        const input = screen.getByRole("spinbutton");
        expect(input).toHaveAttribute("type", "number");
        expect(input).toHaveValue(42);
    });

    it("correctly handles password type", () => {
        render(<TextInput type="password" value="secretpassword" />);
        const input = screen.getByDisplayValue("secretpassword");
        expect(input).toHaveAttribute("type", "password");
        expect(input).toHaveValue("secretpassword");
    });

    it("correctly handles date type", () => {
        render(<TextInput type="date" value="2023-10-15" />);
        const input = screen.getByDisplayValue("2023-10-15");
        expect(input).toHaveAttribute("type", "date");
        expect(input).toHaveValue("2023-10-15");
    });

    it("applies aria-invalid attribute when error is true", () => {
        render(<TextInput error={true} />);
        expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });
});
