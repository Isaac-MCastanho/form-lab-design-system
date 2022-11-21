import * as C from "./styles";
import { useState } from "react";
import { clsx } from "clsx";

interface ButtonBurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ButtonBurger = ({ isOpen, onClick }: ButtonBurgerProps) => {
  return (
    <C.Container
      onClick={() => {
        onClick();
      }}
      className={clsx(isOpen ? "open" : "")}
    >
      <span></span>
      <span></span>
      <span></span>
    </C.Container>
  );
};
