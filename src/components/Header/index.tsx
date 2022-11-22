import { Logotype } from "../../Logotype";
import { Link } from "react-router-dom";
import { LinkNav } from "../LinkNav";
import { LinkButton } from "../LinkButton";
import { Text } from "../Text";
import * as C from "./style";
import { useEffect, useState } from "react";
import { ButtonBurger } from "../ButtonBurger";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const updateScroll = () => {
    const mainRoot = document.querySelector("#mainRoot");
    let scrollOf = 0;

    scrollOf = mainRoot?.scrollTop ? mainRoot?.scrollTop : 0;
    setScroll(scrollOf ? scrollOf : 0);
  };

  useEffect(() => {
    const mainRoot = document.querySelector("#mainRoot");

    mainRoot?.addEventListener("scroll", updateScroll);

    return () => mainRoot?.removeEventListener("scroll", updateScroll);
  }, [scroll]);
  return (
    <C.Container
      isScholl={scroll > 20 ? true : false}
      className="flex gap-32 max-md:gap-0"
    >
      <Link to="/">
        <Logotype />
      </Link>

      <ButtonBurger onClick={handleMenu} isOpen={isOpenMenu} />

      <C.Nav
        className="max-break1:bg-gray-900 gap-32 transition-all"
        open={isOpenMenu}
      >
        <ul className=" flex-1 flex items-center justify-center gap-8 h-full relative bottom-[-2px] max-break1:h-auto max-break1:flex-none max-break1:flex-col">
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
              to="/signin"
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
    </C.Container>
  );
};
