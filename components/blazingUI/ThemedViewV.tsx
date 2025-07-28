import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'center1' | 'center2' | 'spaceBetween';
};

export function ThemedViewV({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View
      style={[
        { backgroundColor },
        type === "default" ? styles.default : undefined,
        type === "center1" ? styles.center1 : undefined,
        type === "center2" ? styles.center2 : undefined,
        type === "spaceBetween" ? styles.spaceBetween : undefined,
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    flexDirection: "column",
  },
  center1: {
    flexDirection: "column",
    alignItems: "center",
  },
  center2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  spaceBetween: {
    flex:1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
