import { Logotype } from "../../Logotype";
import { Link } from "react-router-dom";
import { LinkNav } from "../LinkNav";
import { LinkButton } from "../LinkButton";
import { Text } from "../Text";
import * as C from "./style";
import { useState } from "react";
import { ButtonBurger } from "../ButtonBurger";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <C.Conatiner>
      <Link to="/">
        <Logotype />
      </Link>

      <ButtonBurger onClick={handleMenu} isOpen={isOpenMenu} />

      <C.Nav open={isOpenMenu}>
        <ul className=" flex-1 flex items-center justify-center gap-8 h-full relative bottom-[-2px] max-md:h-auto max-md:flex-none max-md:flex-col">
          <LinkNav
            onClick={() => {
              setIsOpenMenu(false);
            }}
            className=""
            to="/"
          >
            Home
          </LinkNav>
          <LinkNav
            onClick={() => {
              setIsOpenMenu(false);
            }}
            to="/about"
          >
            Sobre
          </LinkNav>
          <LinkNav
            onClick={() => {
              setIsOpenMenu(false);
            }}
            to="/community"
          >
            Comunidade
          </LinkNav>
        </ul>

        <div className="flex gap-8">
          <Text className="font-semibold transition-colors">
            <Link
              onClick={() => {
                setIsOpenMenu(false);
              }}
              to="/SignIn"
            >
              Entrar
            </Link>
          </Text>
          <LinkButton
            onClick={() => {
              setIsOpenMenu(false);
            }}
            to="/createanaccount"
          >
            Criar Conta
          </LinkButton>
        </div>
      </C.Nav>
    </C.Conatiner>
  );
};
