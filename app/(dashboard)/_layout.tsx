import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  const color = colorScheme ?? "light";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarActiveTintColor: Colors[color].tint,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarItemStyle: {
          backgroundColor: Colors[color].background,
        },
        tabBarStyle: {
          backgroundColor: Colors.light.tabIconDefault,
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"person"}
              size={20}
              color={focused ? Colors[color].highlight : Colors[color].text}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"add"}
              size={20}
              color={focused ? Colors[color].highlight : Colors[color].text}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="testimonies"
        options={{
          title: "Testimonies",

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"chatbubble"}
              size={20}
              color={focused ? Colors[color].highlight : Colors[color].text}
            />
          ),
        }}
      />
    </Tabs>
  );
}
