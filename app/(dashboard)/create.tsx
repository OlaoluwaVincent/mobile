import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text } from "react-native";

export default function Create() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create Testimony</Text>
    </ThemedView>
  );
}
