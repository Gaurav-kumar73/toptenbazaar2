import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useRef, useState } from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from "react-native";

type OTPInputProps = {
  codeLength?: number;
  onCodeFilled?: (code: string) => void;
  onChange?: (code: string) => void;
  keyboardType?: KeyboardTypeOptions;
};

export default function OTPInput({
  codeLength = 4,
  onCodeFilled,
  onChange,
  keyboardType = "number-pad",
}: OTPInputProps) {
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(""));
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const borderColor = useThemeColor({}, "icon");
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const placeholderColor = useThemeColor({}, "gray");

  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus();
  };

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];

    if (text.length > 1) {
      const chars = text.slice(0, codeLength).split("");
      for (let i = 0; i < codeLength; i++) {
        newCode[i] = chars[i] || "";
      }
      setCode(newCode);
      onChange?.(newCode.join(""));
      if (newCode.every((digit) => digit !== "")) {
        onCodeFilled?.(newCode.join(""));
      }
      return;
    }

    newCode[index] = text;
    setCode(newCode);
    onChange?.(newCode.join(""));

    if (text && index < codeLength - 1) {
      focusInput(index + 1);
    }

    if (newCode.every((digit) => digit !== "")) {
      onCodeFilled?.(newCode.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      const newCode = [...code];
      if (newCode[index] === "") {
        if (index > 0) {
          focusInput(index - 1);
        }
      } else {
        newCode[index] = "";
        setCode(newCode);
        onChange?.(newCode.join(""));
      }
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: codeLength }).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputsRef.current[index] = ref)}
          value={code[index]}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType={keyboardType}
          maxLength={1}
          style={[
            styles.input,
            {
              borderColor,
              backgroundColor,
              color: textColor,
            } as TextStyle,
          ]}
          placeholder=""
          placeholderTextColor={placeholderColor}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  input: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
  },
});


// usage
//  const [otp, setOtp] = useState("");
{/* <OTPInput onCodeFilled={(code) => setOtp(code)} /> */}
