import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface LinkTextProps extends LinkProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  isChild?: boolean;
}

export const LinkText = ({
  isChild = false,
  className,
  children,
  isActive = false,
  ...props
}: LinkTextProps) => {
  const Comp = isChild ? Slot : "li";
  return (
    <Comp className="list-none inline-block h-full ">
      <Link
        className={clsx(
          isActive
            ? "border-solid border-b-2 border-b-cyan-500  disabled:text-gray-400"
            : "",
          `${
            isActive ? "text-gray-100" : "text-gray-400"
          } text-sm font-semibold h-full w-auto block hover:text-gray-100 transition-colors `,
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </Comp>
  );
};
