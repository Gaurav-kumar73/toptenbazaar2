import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/blazingUI/ThemedText';
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedViewH>
      <TouchableOpacity
        // style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name="chevron-forward"
          size={18}
          weight="medium"
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText type="semiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedViewH style={styles.content}>{children}</ThemedViewH>}
    </ThemedViewH>
  );
}

const styles = StyleSheet.create({
  
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
