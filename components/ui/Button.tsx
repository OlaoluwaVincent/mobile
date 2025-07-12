import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Pressable, PressableProps, Text } from "react-native";

type Variant = "primary" | "secondary" | "success" | "danger";

type ButtonProps = PressableProps & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};
const baseStyles = "px-4 py-2 rounded-lg active:opacity-80";

const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-primary dark:bg-darkblue-primary",
  secondary: "bg-blue-secondary dark:bg-darkblue-secondary",
  success: "bg-green-success dark:bg-darkgreen-success",
  danger: "bg-red-error dark:bg-darkred-error",
};

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <Pressable {...props} className={cn([baseStyles, variantStyles[variant], className])}>
      <Text className="text-white font-semibold">{children}</Text>
    </Pressable>
  );
}
