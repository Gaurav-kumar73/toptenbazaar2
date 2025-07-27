import { ThemedButton } from "@/components/blazingUI/ThemedButton";
import { ThemedText } from "@/components/blazingUI/ThemedText";
import { ThemedTextInput } from "@/components/blazingUI/ThemedTextInput";
import { ThemedViewV } from "@/components/blazingUI/ThemedViewV";
import { Spacing } from "@/constants/Spacing";
import { router, Stack } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function Login() {
  const { width } = useWindowDimensions();
  // Clamp the width between 300 and 600
  const clampedWidth = Math.min(Math.max(width, 300), 600);

  function handleLogin() {
    router.replace("/(screens)/auth/otpConfirm");
  }

  return (
    <ThemedViewV style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // Adjust if needed
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Stack.Screen options={{ headerShown: false }} />

          <ImageBackground
            source={require("@/assets/appImages/loginScreen/greenBackground.png")}
            style={[styles.imageBackground, { width: clampedWidth }]}
            resizeMode="stretch"
          >
            <Image
              source={require("@/assets/appImages/loginScreen/vegetables2.png")}
              style={styles.image1}
            />
            <Image
              source={require("@/assets/appImages/loginScreen/greenCircle.png")}
              style={styles.image2}
            />
          </ImageBackground>

          <ThemedViewV style={styles.infoContainer}>
            <ThemedViewV>
              <ThemedText type="bigTitle">Login to your account</ThemedText>
              <ThemedText type="gray">
                Please sign in to your account
              </ThemedText>
            </ThemedViewV>

            <ThemedViewV>
              <ThemedText>Phone Number</ThemedText>
              <ThemedTextInput
                placeholder="Enter Your Phone Number"
                keyboardType="number-pad"
              />
            </ThemedViewV>

            <ThemedViewV>
              <ThemedButton
                title="Get OTP"
                type="solid"
                onPress={handleLogin}
                style={{ elevation: 9, marginBottom: 5 }}
              />
              <ThemedText
                type="semiBold"
                style={{ alignSelf: "center", paddingVertical: 5 }}
              >
                Don't have an account?{" "}
                <ThemedText
                  type="link"
                  href="/(screens)/auth/signup"
                  style={{ color: "#ffa500" }}
                >
                  Register
                </ThemedText>
              </ThemedText>
            </ThemedViewV>
          </ThemedViewV>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedViewV>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
  },
  imageBackground: {
    height: 400,
    alignItems: "center",
  },
  image1: {
    width: 500,
    height: 500,
    resizeMode: "contain",
    marginTop: 30,
    marginLeft: 30,
  },
  image2: {
    position: "absolute",
    width: 200,
    height: 200,
    resizeMode: "contain",
    left: -60,
    top: -50,
    opacity: 0.5,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: Spacing.padding * 2,
    marginVertical: 35,
    gap: 25,
  },
});
