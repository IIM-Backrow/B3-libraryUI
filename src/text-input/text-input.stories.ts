import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./text-input";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "boolean" },
    fullWidth: { control: "boolean" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search", "date"]
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    required: { control: "boolean" }
  }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder text"
  }
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    helperText: "We'll never share your email with anyone else",
    type: "email",
    placeholder: "Enter your email"
  }
};

export const WithError: Story = {
  args: {
    label: "Password",
    helperText: "Password must be at least 8 characters",
    error: true,
    type: "password",
    placeholder: "Enter your password"
  }
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    disabled: true,
    value: "You cannot change this",
    placeholder: "This is disabled"
  }
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    fullWidth: true,
    placeholder: "This input takes up the full width"
  }
};

export const WithStartAdornment: Story = {
  args: {
    label: "With Start Adornment",
    placeholder: "Search...",
    startAdornment: "🔍"
  }
};

export const WithEndAdornment: Story = {
  args: {
    label: "With End Adornment",
    placeholder: "Enter amount",
    type: "number",
    endAdornment: "$"
  }
};

export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true
  }
};
