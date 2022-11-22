import { Cake } from "phosphor-react";

import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

import { Theme } from "../../Theme/Theme";

export const About = () => {
  return (
    <div className="content-paddingTop">
      <header className="flex flex-col items-center">
        <Heading size="lg" className="mt-4 xs:max-sm:text-xl">
          Sobre nós
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1 xs:max-sm:text-sm">
          Conheça nosso projeto
        </Text>
      </header>
    </div>
  );
};
