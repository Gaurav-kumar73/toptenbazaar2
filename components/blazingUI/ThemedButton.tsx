import { useThemeColor } from '@/hooks/useThemeColor';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  type PressableProps,
} from 'react-native';

export type ThemedButtonProps = PressableProps & {
  title: string;
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'outline' | 'solid' | 'link';
  size?: 'sm' | 'md' | 'lg';
};

export function ThemedButton({
  title,
  lightColor,
  darkColor,
  type = 'default',
  size = 'md',
  style,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'primary');
  const textColor = useThemeColor({}, 'text');

  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return {
          paddingVertical: 6,
          paddingHorizontal: 12,
          fontSize: 14,
        };
      case 'lg':
        return {
          paddingVertical: 16,
          paddingHorizontal: 24,
          fontSize: 18,
        };
      case 'md':
      default:
        return {
          paddingVertical: 12,
          paddingHorizontal: 16,
          fontSize: 16,
        };
    }
  };

  const { paddingVertical, paddingHorizontal, fontSize } = getSizeStyle();

  const getButtonStyle = () => {
    const commonButtonStyle = {
      paddingVertical,
      paddingHorizontal,
    };

    switch (type) {
      case 'solid':
        return {
          button: [styles.buttonBase, commonButtonStyle, { backgroundColor }],
          text: [styles.textBase, { color: '#fff', fontSize }],
        };
      case 'outline':
        return {
          button: [
            styles.buttonBase,
            commonButtonStyle,
            {
              borderColor: backgroundColor,
              borderWidth: 1,
              backgroundColor: 'transparent',
            },
          ],
          text: [styles.textBase, { color: backgroundColor, fontSize }],
        };
      case 'link':
        return {
          button: [styles.linkButton, commonButtonStyle],
          text: [styles.linkText, { color: backgroundColor, fontSize }],
        };
      default:
        return {
          button: [styles.buttonBase, commonButtonStyle, { backgroundColor }],
          text: [styles.textBase, { color: '#fff', fontSize }],
        };
    }
  };

  const { button, text } = getButtonStyle();

  return (
    <TouchableOpacity activeOpacity={0.7} style={[button, style]} {...rest}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontWeight: '600',
  },
  linkButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  linkText: {
    fontWeight: '500',
  },
});
