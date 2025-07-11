import type { Meta, StoryObj } from "@storybook/react";
import CountButton from "./count-button";

const meta: Meta<typeof CountButton> = {
  title: "Components/CountButton",
  component: CountButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    // Ajout d'une taille personnalisable pour l'exemple
    style: { control: "object" }
  }
};
export default meta;

type Story = StoryObj<typeof CountButton>;

export const Count: Story = {
  args: {
    label: "Compteur"
  }
};

export const SuperCompteur: Story = {
  args: {
    label: "Super Compteur"
  }
};

export const MiniCompteur: Story = {
  args: {
    label: "Mini Compteur",
    style: { fontSize: "1rem" }
  }
};

export const MaxiCompteur: Story = {
  args: {
    label: "Maxi Compteur",
    style: { fontSize: "2.5rem" }
  }
};

export const EmojiCompteur: Story = {
  args: {
    label: "🎉 Compteur 🎉"
  }
};
