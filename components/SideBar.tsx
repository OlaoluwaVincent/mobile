import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function Sidebar() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1">
      <DrawerContentScrollView>
        <ThemedText className="text-xl font-semibold mb-4">Menu</ThemedText>
        <DrawerItem label="Home" onPress={() => router.push("/")} icon={() => <Text>🏠</Text>} />
        <DrawerItem
          label="Explore"
          onPress={() => router.push("/profile")}
          icon={() => <Text>🔍</Text>}
        />
        <DrawerItem
          label="Settings"
          onPress={() => router.push("/create")}
          icon={() => <Text>⚙</Text>}
        />
      </DrawerContentScrollView>
    </ThemedView>
  );
}
