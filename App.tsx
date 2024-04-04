import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import { THEME } from "src/theme";
import { Routes } from "@routes/index";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
