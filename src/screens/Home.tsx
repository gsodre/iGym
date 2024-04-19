import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { useState } from "react";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const [groups, setGroups] = useState([
    "costas",
    "biceps",
    "triceps",
    "ombro",
  ]);
  const [exercise, setExercise] = useState([
    "Remada curvada",
    "Remada unilateral",
    "Puxada frontal",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        my={10}
        maxH={10}
        horizontal
        data={groups}
        keyExtractor={(item) => item}
        _contentContainerStyle={{ px: 8 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Group
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent={"space-between"} mb={5}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercícios
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"}>
            {exercise.length}
          </Text>
        </HStack>

        <FlatList
          data={exercise}
          keyExtractor={(item) => item}
          _contentContainerStyle={{ pb: 20 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ExerciseCard />}
        />
      </VStack>
    </VStack>
  );
}
