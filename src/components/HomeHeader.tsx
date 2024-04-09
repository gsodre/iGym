import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg={"gray.600"} pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto
        mr={4}
        size={16}
        alt="Imagem do usuário"
        source={{ uri: "https://github.com/gsodre.png" }}
      />

      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          Olá,
        </Text>
        <Heading color={"gray.100"} fontSize={"md"}>
          Gabriel Sodré
        </Heading>
      </VStack>

      <Icon as={MaterialIcons} name="logout" color={"gray.200"} size={7} />
    </HStack>
  );
}
