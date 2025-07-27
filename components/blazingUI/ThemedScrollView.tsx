import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle
} from "react-native";

export type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export function ThemedScrollView({
  lightColor,
  darkColor,
  style,
  contentContainerStyle,
  ...rest
}: ThemedScrollViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <ScrollView
      style={[{ backgroundColor }, style]}
      contentContainerStyle={contentContainerStyle}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      {...rest}
    />
  );
}
