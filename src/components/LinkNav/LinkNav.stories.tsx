import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { LinkNav, LinkNavProps } from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Link Nav",
  component: LinkNav,
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
} as Meta<LinkNavProps>;

export const Default: StoryFn<LinkNavProps> = ({ children }: LinkNavProps) => {
  return (
    <MemoryRouter>
      <LinkNav isActive={false} to="/">
        {children}
      </LinkNav>
    </MemoryRouter>
  );
};

Default.args = {
  children: "Home",
  isChild: false,
};

export const Active: StoryFn<LinkNavProps> = ({
  children,
  isActive,
}: LinkNavProps) => {
  return (
    <MemoryRouter>
      <LinkNav isActive={isActive} to="/">
        {children}
      </LinkNav>
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
