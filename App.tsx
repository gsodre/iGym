import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Text>iGym!</Text> : <View />}
    </NativeBaseProvider>
  );
}
