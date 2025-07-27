import { ThemedButton } from "@/components/blazingUI/ThemedButton";
import { ThemedCheckbox } from "@/components/blazingUI/ThemedCheckbox";
import { ThemedText } from "@/components/blazingUI/ThemedText";
import { ThemedTextInput } from "@/components/blazingUI/ThemedTextInput";
import { ThemedViewV } from "@/components/blazingUI/ThemedViewV";
import { Spacing } from "@/constants/Spacing";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function Signup() {
  const [checked, setChecked] = useState(false);

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
              <ThemedText type="bigTitle">Create your new account</ThemedText>
              <ThemedText type="gray">
                Enter your details to create new account
              </ThemedText>
            </ThemedViewV>

            <ThemedViewV>
              <ThemedText>Phone Number</ThemedText>
              <ThemedTextInput
                placeholder="Enter Your Phone Number"
                keyboardType="number-pad"
              />
              <ThemedText style={{ marginTop: 8 }}>Full Name</ThemedText>
              <ThemedTextInput placeholder="Enter Your Full Name" />
              <ThemedCheckbox
                label="I Agree with Terms of Service and Privacy Policy"
                checked={checked}
                onChange={setChecked}
                style={{ marginTop: 8 }}
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
                Already have an account?{" "}
                <ThemedText
                  type="link"
                  href="/(screens)/auth/login"
                  style={{ color: "#ffa500" }}
                >
                  Login
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
    height: 300,
    alignItems: "center",
  },
  image1: {
    width: 500,
    height: 300,
    resizeMode: "contain",
    marginTop: 30,
    marginLeft: 30,
  },
  image2: {
    position: "absolute",
    width: 180,
    height: 180,
    resizeMode: "contain",
    left: -60,
    top: -50,
    opacity: 0.5,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: Spacing.padding * 2,
    marginVertical: 35,
    gap: 20,
  },
});
