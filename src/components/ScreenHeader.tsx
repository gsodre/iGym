import { Center, HStack, Heading, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg={"gray.600"} pb={6} pt={16}>
      <Heading color={"gray.100"} fontSize={"xl"}>
        {title}
      </Heading>
    </Center>
  );
}
