import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import {
  TextInput as RNTextInput,
  StyleProp,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'default' | 'rounded' | 'underline';
  style?: StyleProp<ViewStyle>;
};

export function ThemedTextInput({
  lightColor,
  darkColor,
  variant = 'default',
  style,
  ...rest
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  const textColor = useThemeColor({}, 'text');
  const borderColor = useThemeColor({}, 'icon');

  let variantStyle = styles.default;

  switch (variant) {
    case 'rounded':
      variantStyle = styles.rounded;
      break;
    case 'underline':
      variantStyle = styles.underline;
      break;
    case 'default':
    default:
      variantStyle = styles.default;
  }

  return (
    <RNTextInput
      style={[
        {
          backgroundColor,
          color: textColor,
          borderColor,
        },
        variantStyle,
        style,
      ]}
      placeholderTextColor={borderColor}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  rounded: {
    height: 48,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  underline: {
    height: 48,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});


// ==========================
// simple

// import React from 'react';
// import {
//   TextInput as RNTextInput,
//   StyleSheet,
//   TextInputProps,
// } from 'react-native';
// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedTextInputProps = TextInputProps & {
//   lightColor?: string;
//   darkColor?: string;
// };

// export function ThemedTextInput({
//   lightColor,
//   darkColor,
//   style,
//   ...rest
// }: ThemedTextInputProps) {
//   const backgroundColor = useThemeColor(
//     { light: lightColor, dark: darkColor },
//     'background'
//   );
//   const textColor = useThemeColor({}, 'text');
//   const borderColor = useThemeColor({}, 'icon');

//   return (
//     <RNTextInput
//       style={[
//         styles.input,
//         {
//           backgroundColor,
//           color: textColor,
//           borderColor,
//         },
//         style,
//       ]}
//       placeholderTextColor={borderColor}
//       {...rest}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 48,
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     fontSize: 16,
//   },
// });

