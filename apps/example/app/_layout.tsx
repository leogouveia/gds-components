import { Stack } from "expo-router";
import {TamaguiProvider} from "tamagui";
import {config} from "@/tamagui.config";
import { useColorScheme } from "react-native";


export default function RootLayout() {
  const colorScheme = useColorScheme()
  return <TamaguiProvider config={config} defaultTheme={colorScheme || "light"}>
    <Stack />
  </TamaguiProvider>;
}
