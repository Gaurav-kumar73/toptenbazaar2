/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */


import { Colors } from '@/constants/Colors';
import { useAppTheme } from '@/context/ThemeContext';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useAppTheme(); // ← direct theme
  const colorFromProps = props[theme];

  return colorFromProps ?? Colors[theme][colorName];
}

