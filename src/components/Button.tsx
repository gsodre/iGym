import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type IProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: IProps) {
  return (
    <ButtonNativeBase
      h={14}
      width={"full"}
      rounded={"sm"}
      bg={"green.700"}
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Text color={"white"} fontFamily={"heading"} fontSize={"sm"}>
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
