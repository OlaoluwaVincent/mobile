import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function Header() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <>
      <ThemedView
        className="flex-row-reverse items-center justify-between p-4 bg-white dark:bg-gray-800"
        style={{ paddingTop: insets.top }}
      >
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons
            name="menu"
            size={24}
            color={"white"}
            className="p-2 bg-blue-icon rounded-full"
          />
        </Pressable>
        <Link href={"/"}>
          <ThemedText className="font-bold text-2xl text-blue-primary">
            My<Text className="text-blue-tabSelected">post</Text>
            <Text>UTME</Text>
          </ThemedText>
        </Link>
      </ThemedView>
      <StatusBar style="auto" />
    </>
  );
}
