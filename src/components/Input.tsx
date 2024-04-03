import { IInputProps, Input as InputNativeBase } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <InputNativeBase
      h={14}
      px={4}
      mb={4}
      bg={"gray.700"}
      color={"white"}
      fontSize={"md"}
      borderWidth={0}
      fontFamily={"body"}
      placeholderTextColor={"gray.300"}
      _focus={{ borderWidth: 1, bg: "gray.700", borderColor: "green.500" }}
      {...rest}
    />
  );
}
