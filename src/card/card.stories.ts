import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["static-rainbow", "dynamic-rainbow"]
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    onClick: { action: "clicked" }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// Define stories

export const StaticRainbow: Story = {
  args: {
    variant: "static-rainbow",
    children: "Static Rainbow Card",
    size: "medium"
  }
};
export const DynamicRainbow: Story = {
  args: {
    variant: "dynamic-rainbow",
    children: "Dynamic Rainbow Card",
    size: "medium"
  }
};
export const Small: Story = {
  args: {
    children: "Small Card",
    size: "small"
  }
};

export const Large: Story = {
  args: {
    children: "Large Card",
    size: "large"
  }
};
