import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export function BouncingBars() {
  // Create animated values for each bar
  const bars = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    bars.forEach((anim, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: -10,
            duration: 300,
            delay: index * 100,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, []);

  return (
    <ThemedView className="absolute -bottom-4 -right-4 p-4 rounded-xl shadow-lg border dark:border-gray-200 border-gray-800">
      <View className="flex-row items-center space-x-2">
        <View className="flex-row gap-1">
          {bars.map((anim, i) => (
            <Animated.View
              key={i}
              style={{
                transform: [{ translateY: anim }],
              }}
              className={cn([
                "w-2 rounded-full",
                i === 0 && "h-6 bg-blue-400",
                i === 1 && "h-8 bg-purple-400",
                i === 2 && "h-4 bg-pink-400",
                i === 3 && "h-7 bg-yellow-400",
              ])}
            />
          ))}
        </View>
        <ThemedText type="default" className="ml-2">
          Progress
        </ThemedText>
      </View>
    </ThemedView>
  );
}
