import { Center, Heading, Image, Text, VStack } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        position="absolute"
        resizeMode="contain"
        source={BackgroundImg}
        alt="Pessoas treinando"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading
          mb={6}
          fontSize={"xl"}
          color={"gray.100"}
          fontFamily={"heading"}
        >
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  );
}
