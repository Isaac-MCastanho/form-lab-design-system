import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

export const CreateAnAccount = () => {
  return (
    <header className="flex flex-col items-center">
      <Heading size="lg" className="mt-4 xs:max-sm:text-xl">
        Crie sua conta agora
      </Heading>
      <Text size="lg" className="text-gray-400 mt-1 xs:max-sm:text-sm">
        Faça parte do time, compartilhe suas conquistas
      </Text>
    </header>
  );
};
