import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";

export default function Register() {
  return (
    <ThemedView className="flex-1">
      <ThemedText>Register</ThemedText>

      <Button href={"/login"}>Login Here</Button>
    </ThemedView>
  );
}
