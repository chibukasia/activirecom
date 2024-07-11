import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ThemeProvider, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync()
export default function RootLayout() {

  const colorScheme = useColorScheme()
  const [loaded, error] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter_900Black
  })

  useEffect( ()=> {
    if(loaded || error){
      SplashScreen.hideAsync()
    }
  },[loaded])

  if (!loaded || !error){
    return null
  }
  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <StatusBar />
          <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" />
            <Stack.Screen name="profile"/>
            <Stack.Screen name="(tabs)"/>
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}
