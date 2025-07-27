import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

export function ThemedCheckbox({
  label,
  checked,
  onChange,
  style,
  disabled = false,
}: Props) {
  const borderColor = useThemeColor({}, "gray");
  const backgroundColor = useThemeColor({}, "background");
  const primary = useThemeColor({}, "primary");
  const textColor = useThemeColor({}, "text");

  return (
    <Pressable
      onPress={() => onChange(!checked)}
      style={({ pressed }) => [
        styles.container,
        style,
        disabled && { opacity: 0.4 },
        pressed && { opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      <View
        style={[
          styles.box,
          {
            borderColor,
            backgroundColor: checked ? primary : backgroundColor,
          },
        ]}
      >
        {checked && <Feather name="check" size={16} color="white" />}
      </View>
      {label && (
        <Text style={[styles.label, { color: textColor }]} numberOfLines={0}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "flex-start", // better for multiline
    alignItems: "center",
    flexWrap: "wrap",
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginTop: 2, // Align better with multiline text
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
    flex: 1,
  },
});

// usage
// const [checked, setChecked] = useState(false);

{/* <ThemedCheckbox
  label="I Agree with Terms of Service and Privacy Policy"
  checked={checked}
  onChange={setChecked}
/>; */}
