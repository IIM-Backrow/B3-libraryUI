import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ToggleSwitch } from "./toggle-switch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable toggle switch component with smooth animations and various sizes and color variants."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size variant of the toggle switch"
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "danger"],
      description: "Color variant of the toggle switch"
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the toggle switch is disabled"
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Initial state of the toggle switch (uncontrolled)"
    },
    checked: {
      control: { type: "boolean" },
      description: "Controlled state of the toggle switch"
    },
    label: {
      control: { type: "text" },
      description: "Label text for the toggle switch"
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes"
    }
  },
  args: {
    onChange: fn()
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Toggle switch"
  }
};

export const Checked: Story = {
  args: {
    label: "Initially checked",
    defaultChecked: true
  }
};

export const Disabled: Story = {
  args: {
    label: "Disabled switch",
    disabled: true
  }
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked",
    disabled: true,
    defaultChecked: true
  }
};

export const WithoutLabel: Story = {
  args: {}
};

export const Controlled: Story = {
  args: {
    checked: true,
    label: "Controlled switch"
  },
  parameters: {
    docs: {
      description: {
        story: "Example of a controlled toggle switch. The checked state is managed externally."
      }
    }
  }
};
