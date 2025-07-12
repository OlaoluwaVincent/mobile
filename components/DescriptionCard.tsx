import { cn } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

type IoniconsName = keyof typeof Ionicons.glyphMap;

type Props = {
  iconSize?: number;
  iconColor?: string;
  iconName?: IoniconsName;
  className?: string;
  title?: string;
  description?: string;
};

export default function DescriptionCard({
  className,
  description,
  iconName,
  iconSize = 20,
  iconColor,
  title,
}: Props) {
  return (
    <ThemedView
      className={cn([
        className,
        "gap-3 shadow-md p-5 rounded-md backdrop-blur-md dark:shadow-darkblue-primary/30 shadow-primary/50",
      ])}
    >
      {iconName && (
        <View className="p-4 rounded-xl bg-primary/20 w-16 items-center justify-center">
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </View>
      )}
      <ThemedText type="title" className="text-2xl font-bold">
        {title}
      </ThemedText>
      <ThemedText type="subtitle" className="text-justify font-light">
        {description}
      </ThemedText>
    </ThemedView>
  );
}
