import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";

export const Home = () => {
  return (
    <header className="flex flex-col items-center">
      <Heading size="lg" className="mt-4 xs:max-sm:text-xl">
        Home
      </Heading>
      <Text size="lg" className="text-gray-400 mt-1 xs:max-sm:text-sm">
        Conheça a plataforma
      </Text>
    </header>
  );
};
