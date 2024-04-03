import { IInputProps, Input as NativeBaseInput } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      h={14}
      px={4}
      mb={4}
      bg={"gray.700"}
      color={"white"}
      fontSize={"md"}
      borderWidth={0}
      fontFamily={"body"}
      placeholderTextColor={"gray.300"}
      {...rest}
    />
  );
}
