import { IPressableProps, Pressable, Text } from "native-base";

type Props = IPressableProps & {
  name: string;
  isActive?: boolean;
};

export function Group({ name, isActive = false, ...rest }: Props) {
  return (
    <Pressable
      w={24}
      h={10}
      mr={3}
      rounded={"md"}
      bg={"gray.600"}
      overflow={"hidden"}
      isPressed={isActive}
      alignItems={"center"}
      justifyContent={"center"}
      _pressed={{ borderColor: "green.500", borderWidth: 1 }}
      {...rest}
    >
      <Text
        fontSize={"xs"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color={isActive ? "green.500" : "gray.200"}
      >
        {name}
      </Text>
    </Pressable>
  );
}
