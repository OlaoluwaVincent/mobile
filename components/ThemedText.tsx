import { useThemeColor } from "@/hooks/useThemeColor";
import { cn } from "@/lib/utils";
import { Text, TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  className?: string;
};

const typeStyles: Record<NonNullable<ThemedTextProps["type"]>, string> = {
  default: "text-base",
  defaultSemiBold: "text-base font-semibold",
  title: "text-2xl font-bold",
  subtitle: "text-xl font-bold",
  link: "text-base text-blue-600 dark:text-blue-400 underline",
};

export function ThemedText({
  lightColor,
  darkColor,
  type = "default",
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <Text {...rest} style={[{ color }]} className={cn(typeStyles[type], className)} />;
}
