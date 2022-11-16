import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { LinkProps } from "react-router-dom";

export interface LinkButtonProps extends LinkProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function LinkButton({
  asChild,
  children,
  className,
  ...props
}: LinkButtonProps) {
  const Comp = asChild ? Slot : "li";
  return (
    <Comp className="list-none">
      <Link
        className={clsx(
          "py-3 px-6 bg-transparent rounded font-semibold text-cyan-500 text-sm border-solid border-2 border-cyan-500  hover:bg-cyan-500 hover:text-gray-900 transition-colors  ",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </Comp>
  );
}
