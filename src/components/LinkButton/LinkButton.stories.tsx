import { Meta, StoryFn } from "@storybook/react";
import { LinkButton, LinkButtonProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Link Button",
  component: LinkButton,
  args: {
    children: "Create account",
    asChild: true,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<LinkButtonProps>;

export const Default: StoryFn<LinkButtonProps> = ({
  children,
}: LinkButtonProps) => {
  return (
    <MemoryRouter>
      <LinkButton to="/">{children}</LinkButton>
    </MemoryRouter>
  );
};
