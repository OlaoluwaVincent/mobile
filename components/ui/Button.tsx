import { cn } from "@/lib/utils";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import { GestureResponderEvent, Pressable, PressableProps } from "react-native";
import { ThemedText } from "../ThemedText";

type Variant = "primary" | "secondary" | "success" | "danger";

type ButtonProps = PressableProps & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: Parameters<ReturnType<typeof useRouter>["push"]>[0];
};

const baseStyles = "px-4 py-2 rounded-lg active:opacity-80";

const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-primary dark:bg-darkblue-primary",
  secondary: "bg-blue-secondary dark:bg-darkblue-secondary",
  success: "bg-green-success dark:bg-darkgreen-success",
  danger: "bg-red-error dark:bg-darkred-error",
};

export function Button({
  children,
  variant = "primary",
  className,
  href,
  onPress,
  ...props
}: ButtonProps) {
  const router = useRouter();

  function handlePress(event: GestureResponderEvent) {
    if (href) {
      router.push(href);
    } else if (onPress) {
      onPress(event);
    }
  }

  return (
    <Pressable
      {...props}
      onPress={handlePress}
      className={cn([baseStyles, variantStyles[variant], className])}
    >
      <ThemedText className="font-semibold">{children}</ThemedText>
    </Pressable>
  );
}
