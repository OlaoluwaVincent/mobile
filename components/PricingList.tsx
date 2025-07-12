import { PRICING_DETAILS } from "@/constants/examSteps";
import { useThemeColors } from "@/hooks/useThemeColor";
import { cn } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Button } from "./ui/Button";

export default function PricingList() {
  return (
    <ThemedView className="mt-8">
      <ThemedText type="title" className="text-4xl text-center">
        Select the Plan that Fits You Best
      </ThemedText>
      <ThemedText type="defaultSemiBold" className="text-center mt-4">
        Start with our free plan or unlock full potential with premium features
      </ThemedText>

      <PricingCard />
    </ThemedView>
  );
}

function PricingCard() {
  const color = useThemeColors();

  return (
    <ThemedView className="gap-y-5 mx-5 mt-8">
      {PRICING_DETAILS.map((subscription) => (
        <ThemedView
          key={subscription.id}
          className={cn([
            "p-10 rounded-lg bg-blue-tabDefault/20 flex-1 justify-between",
            subscription.paid ? "border border-primary dark:border-darkprimary" : "",
          ])}
        >
          <ThemedText type="title" className="text-2xl">
            {subscription.title}
          </ThemedText>
          <ThemedText type="subtitle" className="font-normal text-base">
            {subscription.desc}
          </ThemedText>

          <View className="flex-row items-center my-3">
            <ThemedText type="title" className="text-xl">
              {subscription.price}
            </ThemedText>
            <Text className="text-gray-700 dark:text-gray-200">/month</Text>
          </View>

          <ThemedView className="gap-3 my-3 bg-transparent">
            {subscription.benefits.map((benefit, index) => (
              <View key={index} className="gap-2 items-center flex-row">
                <Ionicons
                  name="checkmark"
                  color={subscription.paid ? color.success : color.primary}
                />
                <ThemedText key={index}>{benefit}</ThemedText>
              </View>
            ))}
          </ThemedView>

          <Button
            href={subscription.paid ? "/login" : "/create"}
            className={cn([
              subscription.paid
                ? "bg-primary dark:bg-darkprimary text-white"
                : "bg-white border dark:bg-primary/60 border-gray-400 text-gray-800",
              "w-full mx-auto py-3 justify-center items-center my-3",
            ])}
          >
            {!subscription.paid ? "Get Started" : "Try Exam Mode"}
          </Button>
        </ThemedView>
      ))}
    </ThemedView>
  );
}
