import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text } from "react-native";

export default function Profile() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
    </ThemedView>
  );
}
