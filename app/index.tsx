import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView scrollable className="flex-1 px-5">
      <View className="gap-5 pt-5">
        <View className="mx-auto">
          <ThemedText type="title" className="text-5xl text-center font-bold">
            Your GateWay to{" "}
            <Text className="text-darkblue-tabDefault dark:text-blue-primary">University</Text>{" "}
            Success Starts{" "}
            <Text className="text-darkblue-tabDefault dark:text-blue-primary">Here</Text>
          </ThemedText>
        </View>
        <ThemedText className="text-gray-700 text-lg text-justify">
          Get the edge you need to stand out in your POST-UTME screening.
        </ThemedText>

        <Button className="w-52 px-8 py-3">Start Learning Now</Button>
      </View>
    </ThemedView>
  );
}
