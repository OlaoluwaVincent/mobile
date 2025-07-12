import { useThemeColor } from "@/hooks/useThemeColor";
import { cn } from "@/lib/utils";
import { SafeAreaView, ScrollView, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
  scrollable?: boolean;
  className?: string;
};

export function ThemedView({
  style,
  className,
  lightColor,
  darkColor,
  safe,
  scrollable,
  children,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const insets = useSafeAreaInsets();

  // If no bg-* class, fallback to backgroundColor
  const shouldFallback = !className || !/bg-/.test(className);

  const mergedStyle = shouldFallback ? [{ backgroundColor }, style] : style;

  const commonProps = {
    style: mergedStyle,
    className: cn(className),
    ...otherProps,
  };

  if (safe) {
    if (scrollable) {
      return (
        <SafeAreaView
          style={[
            shouldFallback && { backgroundColor },
            { paddingTop: insets.top, paddingBottom: insets.bottom },
          ]}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} {...commonProps}>
            {children}
          </ScrollView>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView
        style={[
          shouldFallback && { backgroundColor },
          { paddingTop: insets.top, paddingBottom: insets.bottom },
          style,
        ]}
        className={cn(className)}
        {...otherProps}
      >
        {children}
      </SafeAreaView>
    );
  }

  if (scrollable) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} {...commonProps}>
        {children}
      </ScrollView>
    );
  }

  return <View {...commonProps}>{children}</View>;
}
