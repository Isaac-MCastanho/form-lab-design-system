import { ReactNode, useState } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface LinkNavProps extends LinkProps {
  children: ReactNode;
  className?: string;
  isChild?: boolean;
}

export const LinkNav = ({
  isChild = false,
  className,
  children,
  ...props
}: LinkNavProps) => {
  const [isActiveLink, setIsActiveLink] = useState(false);

  const Comp = isChild ? Slot : "li";
  return (
    <Comp
      className={clsx(
        isActiveLink ? "border-solid border-b-2 border-b-cyan-500  " : "",
        "list-none flex items-center h-full  "
      )}
    >
      <NavLink
        className={({ isActive, isPending }) => {
          isActive ? setIsActiveLink(true) : setIsActiveLink(false);
          return isActive
            ? "text-gray-100 "
            : "text-gray-400 hover:text-gray-100 transition-colors";
        }}
        {...props}
      >
        {children}
      </NavLink>
    </Comp>
  );
};
