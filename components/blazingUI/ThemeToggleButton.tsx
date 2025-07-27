import { useAppTheme } from "@/context/ThemeContext";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={toggleTheme} style={{ padding: 10 }}>
      {theme === "light" ? (
        <Feather name="moon" size={24} color="black" />
      ) : (
        <Feather name="sun" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
