import { Cake } from "phosphor-react";

import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

import { Theme } from "../../Theme/Theme";

export const Community = () => {
  return (
    <header className="flex flex-col items-center">
      <Heading size="lg" className="mt-4 xs:max-sm:text-xl">
        Comunidade
      </Heading>
      <Text size="lg" className="text-gray-400 mt-1 xs:max-sm:text-sm">
        Essa é a galera por trás de tudo
      </Text>
    </header>
  );
};
