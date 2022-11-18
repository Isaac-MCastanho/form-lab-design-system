import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { LinkText, LinkTextProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Link Text",
  component: LinkText,
  args: {
    isChild: false,
  },

  argTypes: {
    isActive: {
      table: {
        disable: true,
      },
    },

    isChild: {
      table: {
        disable: true,
      },
    },

    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<LinkTextProps>;

export const Default: StoryFn<LinkTextProps> = ({
  children,
}: LinkTextProps) => {
  return (
    <MemoryRouter>
      <LinkText isActive={false} to="/">
        {children}
      </LinkText>
    </MemoryRouter>
  );
};

Default.args = {
  children: "Home",
  isChild: false,
};

export const Active: StoryFn<LinkTextProps> = ({
  children,
  isActive,
}: LinkTextProps) => {
  return (
    <MemoryRouter>
      <LinkText isActive={isActive} to="/">
        {children}
      </LinkText>
    </MemoryRouter>
  );
};

Active.args = {
  children: "Contact",
  isActive: true,
};

Active.argTypes = {
  isActive: {
    table: {
      disable: false,
    },
  },
};
