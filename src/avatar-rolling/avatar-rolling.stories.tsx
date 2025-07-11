import type { Meta, StoryObj } from "@storybook/react";
import AvatarRolling from "./avatar-rolling";
import React from "react";

const meta: Meta<typeof AvatarRolling> = {
  title: "Components/AvatarRolling",
  component: AvatarRolling,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  argTypes: {
    minSpeed: { control: { type: "number" } },
    maxSpeed: { control: { type: "number" } },
    avatar: { control: { type: "text" } },
    size: { control: { type: "number" } }
  }
};

export default meta;
type Story = StoryObj<typeof AvatarRolling>;

const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg";
const AVATAR_URL2 = "https://randomuser.me/api/portraits/women/44.jpg";
const AVATAR_URL3 = "https://randomuser.me/api/portraits/men/65.jpg";

const renderWithContainer = (
  width = 300,
  height = 200,
  background = "#eee"
) => {
  const Wrapped = (args: React.ComponentProps<typeof AvatarRolling>) => (
    <div style={{ position: "relative", width, height, background, overflow: "hidden" }}>
      <AvatarRolling {...args} />
    </div>
  );
  Wrapped.displayName = "AvatarRollingStoryContainer";
  return Wrapped;
};

export const Slow: Story = {
  args: {
    minSpeed: 0.2,
    maxSpeed: 0.5,
    avatar: AVATAR_URL,
    size: 80
  },
  render: renderWithContainer()
};

export const Fast: Story = {
  args: {
    minSpeed: 2,
    maxSpeed: 40,
    avatar: AVATAR_URL2,
    size: 80
  },
  render: renderWithContainer()
};

export const CustomSize: Story = {
  args: {
    minSpeed: 1,
    maxSpeed: 2,
    avatar: AVATAR_URL3,
    size: 120
  },
  render: renderWithContainer()
};

export const MultipleAvatars: Story = {
  render: () => (
    <div style={{ position: "relative", width: 500, height: 300, background: "#f0f0f0", overflow: "hidden" }}>
      <AvatarRolling minSpeed={0.5} maxSpeed={1.5} avatar={AVATAR_URL} size={80} />
      <AvatarRolling minSpeed={1} maxSpeed={10} avatar={AVATAR_URL2} size={100} />
      <AvatarRolling minSpeed={0.8} maxSpeed={5} avatar={AVATAR_URL3} size={70} />
    </div>
  )
};
