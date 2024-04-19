import { Center, HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

// type Props = {
//   title: string;
// };

export function HistoryCard() {
  return (
    <HStack
      px={5}
      py={4}
      mb={3}
      w={"full"}
      rounded={"md"}
      bg={"gray.600"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <VStack mr={5}>
        <Heading color={"white"} fontSize={"md"} textTransform={"capitalize"}>
          Costas
        </Heading>

        <Text color={"gray.100"} fontSize={"lg"} numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color={"gray.300"} fontSize={"md"}>
        08:56
      </Text>
    </HStack>
  );
}
