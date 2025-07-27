import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useEffect, useRef, useState } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type CountdownTimerProps = {
  /** seconds to count down from (default 300 = 5 min) */
  duration?: number;
  /** called once when timer hits 0 */
  onExpire?: () => void;
  /** change this value to force a reset */
  resetKey?: any;
  /** style override */
  style?: StyleProp<TextStyle>;
  /** prefix label, e.g., "Resend in" */
  label?: string;
};

export function CountdownTimer({
  duration = 300,
  onExpire,
  resetKey,
  style,
  label = "Time remaining",
}: CountdownTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // theme color for text
  const textColor = useThemeColor({}, "text");

  // reset when resetKey OR duration changes
  useEffect(() => {
    setSecondsLeft(duration);
  }, [resetKey, duration]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [duration, resetKey]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <Text style={[styles.timer, { color: textColor }, style]}>
      {label}: {mm}:{ss}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});

// usage
//  const [otp, setOtp] = useState("");
//   const [resetKey, setResetKey] = useState(0);
//   const [expired, setExpired] = useState(false);

//   const handleExpire = () => setExpired(true);

//   const handleResend = () => {
//     // TODO: call your resend API here
//     setExpired(false);
//     setResetKey((k) => k + 1); // triggers timer reset
//   };

//   <OTPInput onCodeFilled={(code) => setOtp(code)} />
//       <CountdownTimer
//         duration={300}
//         onExpire={handleExpire}
//         resetKey={resetKey}
//         label="Resend in"
//       />

//       {expired ? (
//         <ThemedText type="link" onPress={handleResend}>
//           Resend Code
//         </ThemedText>
//       ) : (
//         <ThemedText type="gray">You can resend after timer ends.</ThemedText>
//       )}
