import { CountdownTimer } from "@/components/blazingUI/CountdownTimer";
import OTPInput from "@/components/blazingUI/OtpInput";
import { ThemedButton } from "@/components/blazingUI/ThemedButton";
import { ThemedText } from "@/components/blazingUI/ThemedText";
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

export default function OtpConfirm() {
  const [otp, setOtp] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [expired, setExpired] = useState(false);

  const { width } = useWindowDimensions();
  // Clamp the width between 300 and 600
  const clampedWidth = Math.min(Math.max(width, 300), 600);

  const handleExpire = () => setExpired(true);

  const handleResend = () => {
    // TODO: call your resend API here
    setExpired(false);
    setResetKey((k) => k + 1); // triggers timer reset
  };

  function resendCode (){

  }

  function handleLogin() {
    router.replace("/(tabs)");
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
              <ThemedText type="bigTitle">Enter OTP</ThemedText>
              <ThemedText type="gray">
                Enter the verification code we send you on: 976*****78
              </ThemedText>
            </ThemedViewV>

            <ThemedViewV>
              <OTPInput onCodeFilled={(code) => setOtp(code)} />
              <CountdownTimer
                duration={300}
                onExpire={handleExpire}
                resetKey={resetKey}
              />
              <ThemedText
                style={{ alignSelf: "center", paddingVertical: 5 }}
              >
                Didn't receive code?{" "}
                <ThemedText
                  onPress={resendCode}
                  style={{ color: "#ffa500" }}
                >
                  Resend
                </ThemedText>
              </ThemedText>
              
            </ThemedViewV>

            <ThemedButton
              title="Login"
              type="solid"
              onPress={handleLogin}
              style={{ elevation: 9, marginBottom: 5 }}
            />
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
