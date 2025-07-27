import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

type IconComponentType = React.ComponentType<{
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
}>;

export type ThemedIconButtonProps = {
  icon: IconComponentType;
  name: string;
  size?: number;
  lightColor?: string;
  darkColor?: string;
  backgroundLight?: string;
  backgroundDark?: string;
  type?: 'default' | 'outline' | 'ghost' | 'circle' | 'link';
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle | ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export function ThemedIcon({
  icon: Icon,
  name,
  size = 24,
  lightColor,
  darkColor,
  backgroundLight,
  backgroundDark,
  type = 'default',
  style,
  iconStyle,
  onPress,
}: ThemedIconButtonProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const backgroundColor = useThemeColor(
    { light: backgroundLight, dark: backgroundDark },
    'icon'
  );

  const containerStyle: StyleProp<ViewStyle>[] = [styles.base];

  switch (type) {
    case 'outline':
      containerStyle.push({
        borderColor: backgroundColor,
        borderWidth: 1,
        backgroundColor: 'transparent',
      });
      break;
    case 'ghost':
      containerStyle.push({ backgroundColor: 'transparent' });
      break;
    case 'circle':
      containerStyle.push({
        backgroundColor,
        borderRadius: 999,
        width: size + 16,
        height: size + 16,
        justifyContent: 'center',
        alignItems: 'center',
      });
      break;
    case 'link':
      // no background or padding
      break;
    case 'default':
    default:
      containerStyle.push({ backgroundColor });
      break;
  }

  if (type !== 'link' && type !== 'circle') {
    containerStyle.push(styles.padded);
  }

  return (
    <TouchableOpacity
      style={[...containerStyle, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon name={name} size={size} color={color} style={iconStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padded: {
    padding: 5,
  },
});

// usage
{/* <ThemedIcon
  icon={Ionicons as any}
  name="chevron-back"
  type="ghost"
  onPress={() => { router.back() }}
/> */}