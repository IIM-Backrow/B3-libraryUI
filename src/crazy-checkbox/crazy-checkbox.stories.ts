import type { Meta, StoryObj } from "@storybook/react";
import CrazyCheckbox from "./crazy-checkbox";

const meta = {
  title: "Components/CrazyCheckbox",
  component: CrazyCheckbox,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    defaultChecked: { control: "boolean" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    className: { control: "text" },
    id: { control: "text" },
    onChange: { action: "changed" }
  }
} satisfies Meta<typeof CrazyCheckbox>;

export default meta;
type Story = StoryObj<typeof CrazyCheckbox>;

export const Default: Story = {
  args: {
    label: "Check me!"
  }
};
export const CustomLabel: Story = {
  args: {
    label: "Click to go crazy!"
  }
};
export const DefaultChecked: Story = {
  args: {
    label: "Already checked",
    defaultChecked: true
  }
};
export const Disabled: Story = {
  args: {
    label: "Can't touch this",
    disabled: true
  }
};
