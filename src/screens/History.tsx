import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    { title: "26.08.22", data: ["Puxada frontal", "Remada unilateral"] },
    { title: "27.08.22", data: ["Puxada frontal"] },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        px={8}
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color={"gray.200"} fontSize={"md"} mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        ListEmptyComponent={() => (
          <Text color={"gray.100"} textAlign={"center"}>
            Não há exercícios registrados ainda. {"\n"}
            Bora lá?!
          </Text>
        )}
        contentContainerStyle={
          !exercises.length && { flex: 1, justifyContent: "center" }
        }
      />
    </VStack>
  );
}
