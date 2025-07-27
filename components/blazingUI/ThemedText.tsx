import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import React from "react";
import { Linking, Platform, StyleSheet, Text, TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "bigTitle"
    | "semiBold"
    | "subtitle"
    | "gray"
    | "link";
  href?: string; // internal or external link
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  href,
  onPress,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const handlePress = () => {
    if (href) {
      if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        Linking.openURL(href).catch((err) =>
          console.error("Failed to open URL:", err)
        );
      } else {
        router.push(href);
      }
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <Text
      onPress={handlePress}
      style={[
        { color },
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "bigTitle" && styles.bigTitle,
        type === "semiBold" && styles.semiBold,
        type === "subtitle" && styles.subtitle,
        type === "gray" && styles.gray,
        type === "link" && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  semiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 36,
  },
  bigTitle: {
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gray: {
    fontSize: 16,
    lineHeight: 24,
    color: "#6c757d",
  },
  link: {
    fontSize: 16,
    lineHeight: 24,
    color: "#0a7ea4",
    textDecorationLine: Platform.OS === "ios" ? "underline" : "none",
  },
});
