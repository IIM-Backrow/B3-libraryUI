import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TestComp from "./test-comp";

const meta: Meta<typeof TestComp> = {
  title: "Components/TestComp",
  component: TestComp,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"]
    },
    disabled: {
      control: { type: "boolean" }
    },
    text: {
      control: { type: "text" }
    }
  },
  args: {
    onClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Primary Button"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: "Secondary Button"
  }
};

export const Danger: Story = {
  args: {
    variant: "danger",
    text: "Danger Button"
  }
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    text: "Disabled Button",
    disabled: true
  }
};

export const WithCustomText: Story = {
  args: {
    variant: "primary",
    text: "Custom Text Button"
  }
};
