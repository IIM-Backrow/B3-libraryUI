import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./spinner";

// Define metadata for the component
const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    type: {
      control: { type: "select" },
      options: ["line", "dots"]
    },
    className: { control: "text" }
  }
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

// Define stories
export const Default: Story = {
  args: {
    size: "medium",
    type: "line"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    type: "line"
  }
};

export const SmallDots: Story = {
  args: {
    size: "small",
    type: "dots"
  }
};

export const Medium: Story = {
  args: {
    size: "medium",
    type: "line"
  }
};

export const MediumDots: Story = {
  args: {
    size: "medium",
    type: "dots"
  }
};

export const Large: Story = {
  args: {
    size: "large",
    type: "line"
  }
};

export const LargeDots: Story = {
  args: {
    size: "large",
    type: "dots"
  }
};
