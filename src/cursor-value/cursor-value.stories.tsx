import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import CursorValue from "./cursor-value";

const meta: Meta<typeof CursorValue> = {
  title: "Components/CursorValue",
  component: CursorValue,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    step: { control: { type: "number" } },
    value: { control: { type: "number" } },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof CursorValue>;

const Template = (args: React.ComponentProps<typeof CursorValue>) => {
  const [value, setValue] = useState<number>(args.value ?? args.min ?? 0);

  return (
    <CursorValue
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue); // permet de logguer dans Storybook actions
      }}
    />
  );
};

export const Default: Story = {
  render: Template,
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
  },
};

export const SmallSteps: Story = {
  render: Template,
  args: {
    min: 0,
    max: 10,
    step: 0.1,
    value: 5,
  },
};

export const LargeRange: Story = {
  render: Template,
  args: {
    min: -100,
    max: 100,
    step: 5,
    value: 0,
  },
};
