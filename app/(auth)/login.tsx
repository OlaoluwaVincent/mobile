import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import React from "react";

export default function Login() {
  return (
    <ThemedView className="flex-1">
      <ThemedText>Login</ThemedText>
      <Button href={"/register"}>Register Here</Button>
    </ThemedView>
  );
}
