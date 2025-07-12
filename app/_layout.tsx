import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { queryClient } from "@/queries/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <Drawer
            screenOptions={{
              header: () => <Header />,
              // headerShown: true, // Ensure header is shown
            }}
            drawerContent={() => <Sidebar />}
          >
            <Drawer.Screen name="index" />
            <Drawer.Screen name="(dashboard)" />
            <Drawer.Screen name="+not-found" />
          </Drawer>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
