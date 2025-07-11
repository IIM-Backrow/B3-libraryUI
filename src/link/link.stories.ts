import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const meta = {
  title: "Components/Link",
  component: Link,
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "https://example.com",
    children: "Default Link"
  }
};

export const External: Story = {
  args: {
    to: "https://example.com",
    children: "External Link",
    external: true
  }
};

export const CustomStyled: Story = {
  args: {
    to: "https://example.com",
    children: "Styled Link",
    className: "custom-link-class",
    style: { color: "purple", fontWeight: "bold" }
  }
};

export const WithOnClick: Story = {
  args: {
    to: "#",
    children: "Clickable Link",
    onClick: (e) => {
      e.preventDefault();
      alert("Link clicked!");
    }
  }
};
