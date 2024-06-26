import {
  HStack,
  Heading,
  IImageProps,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";
import { TouchableHighlightProps, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableHighlightProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity>
      <HStack
        bg={"gray.500"}
        alignItems={"center"}
        p={2}
        pr={4}
        rounded={"md"}
        mb={3}
      >
        <Image
          resizeMode="center"
          source={{
            uri: "https://static1.minhavida.com.br/articles/cc/fc/4c/1d/homem-fazendo-remada-baixa-orig-1.jpg",
          }}
          alt="Imagem do exercicio"
          w={16}
          h={16}
          rounded={"md"}
          mr={4}
        />
        <VStack flex={1}>
          <Heading fontSize={"lg"} color={"white"}>
            Remada baixa
          </Heading>
          <Text fontSize={"sm"} color={"gray.200"} mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color={"gray.300"} />
      </HStack>
    </TouchableOpacity>
  );
}
