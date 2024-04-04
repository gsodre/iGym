import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack flex={1} px={10} pb={16}>
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
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />
          <Input placeholder="E-mail" key={"E-mail"} autoCapitalize="none" />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button title="Voltar para o login" variant={"outline"} mt={24} />
      </VStack>
    </ScrollView>
  );
}
