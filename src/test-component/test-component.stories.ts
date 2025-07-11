import type { Meta, StoryObj } from "@storybook/react";
import TestComponent from "./test-component";

const meta = {
  title: "Components/TestComponent",
  component: TestComponent,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    to: { control: "text" },
    children: { control: "text" },
    external: { control: "boolean" },
    onClick: { action: "clicked" },
    className: { control: "text" }
  }
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "https://example.com",
    children: "Default TestComponent"
  }
};

export const External: Story = {
  args: {
    to: "https://example.com",
    children: "External TestComponent",
    external: true
  }
};

export const CustomStyled: Story = {
  args: {
    to: "https://example.com",
    children: "Styled TestComponent",
    className: "custom-testcomponent-class",
    style: { color: "purple", fontWeight: "bold" }
  }
};

export const WithOnClick: Story = {
  args: {
    to: "#",
    children: "Clickable TestComponent",
    onClick: (e) => {
      e.preventDefault();
      alert("Link clicked!");
    }
  }
};
