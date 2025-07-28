import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedSafeAreaViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'center' | 'spaceBetween' | 'scroll';
  style?: StyleProp<ViewStyle>;
};

export function ThemedSafeAreaView({
  lightColor,
  darkColor,
  type = 'default',
  style,
  children,
  ...otherProps
}: ThemedSafeAreaViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  const layoutStyle = (() => {
    switch (type) {
      case 'center':
        return styles.center;
      case 'spaceBetween':
        return styles.spaceBetween;
      case 'scroll':
        return styles.scroll;
      case 'default':
      default:
        return styles.default;
    }
  })();

  return (
    <SafeAreaView
      style={[{ backgroundColor }, layoutStyle, style]}
      {...otherProps}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    // alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  spaceBetween: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  scroll: {
    flexGrow: 1,
    padding: 16,
  },
});
