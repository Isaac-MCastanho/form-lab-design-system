import { Meta, StoryObj } from "@storybook/react";
import { ActionButton, ButtonProps } from ".";

export default {
  title: "Components/Action Button",
  component: ActionButton,
  args: {
    children: "Create account",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
