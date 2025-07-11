import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// Define metadata for the component
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "text"]
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Define stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "medium"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    size: "medium"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
    size: "medium"
  }
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
    size: "medium"
  }
};

export const Small: Story = {
  args: {
    variant: "primary",
    children: "Small Button",
    size: "small"
  }
};

export const Large: Story = {
  args: {
    variant: "primary",
    children: "Large Button",
    size: "large"
  }
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    size: "medium",
    disabled: true
  }
};
