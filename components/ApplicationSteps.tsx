import { STEPS } from "@/constants/examSteps";
import React from "react";
import { Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function ApplicationSteps() {
  return (
    <ThemedView className="gap-5">
      {STEPS.map((step) => (
        <View
          key={step.id}
          className="flex-row items-start gap-4 p-4 bg-green-success/20 rounded-md min-h-20"
        >
          <View className="rounded-lg bg-primary w-8 h-8 items-center justify-center">
            <Text className="text-lg text-white font-bold">{step.id}</Text>
          </View>

          <View className="flex-1">
            <ThemedText type="title" className="text-xl">
              {step.step}
            </ThemedText>
            <ThemedText type="subtitle" className="font-normal text-wrap text-base">
              {step.description}
            </ThemedText>
          </View>
        </View>
      ))}
    </ThemedView>
  );
}
