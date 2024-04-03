import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Center, NativeBaseProvider } from "native-base";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Center flex={1}>
        <Loading />
      </Center>
    </NativeBaseProvider>
  );
}
