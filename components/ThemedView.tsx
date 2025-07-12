import { useThemeColor } from "@/hooks/useThemeColor";
import { cn } from "@/lib/utils";
import { SafeAreaView, ScrollView, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
  scrollable?: boolean;
  page?: boolean;
  className?: string;
};

export function ThemedView({
  style,
  className,
  lightColor,
  darkColor,
  safe,
  scrollable,
  page,
  children,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");
  const insets = useSafeAreaInsets();

  const shouldFallback = !className || !/bg-/.test(className);

  const mergedStyle = shouldFallback ? [{ backgroundColor }, style] : style;

  if (safe) {
    if (scrollable) {
      return (
        <SafeAreaView
          style={[
            shouldFallback && { backgroundColor },
            { paddingTop: insets.top, paddingBottom: insets.bottom },
          ]}
        >
          <ScrollView
            contentContainerStyle={[{ flexGrow: 1 }, page && { paddingBottom: insets.bottom }]}
            className={cn(className)}
            {...otherProps}
          >
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
      <ScrollView
        contentContainerStyle={[{ flexGrow: 1 }, page && { paddingBottom: insets.bottom }]}
        style={mergedStyle}
        className={cn(className)}
        {...otherProps}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      style={[mergedStyle, page && { paddingBottom: insets.bottom }]}
      className={cn(className)}
      {...otherProps}
    >
      {children}
    </View>
  );
}
