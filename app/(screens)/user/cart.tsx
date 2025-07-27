import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Spacing } from '@/constants/Spacing'
import { useCartStore } from '@/context/useCartStore'
import { Ionicons } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <ThemedSafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ThemedViewH type="spaceBetween">
        <ThemedIcon
          icon={Ionicons as any}
          name="chevron-back"
          type="ghost"
          onPress={() => { router.back() }}
        />
        <ThemedText type="subtitle">My Cart</ThemedText>
        <ThemedText>{""}</ThemedText>
      </ThemedViewH>


      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ThemedViewH style={styles.itemContainer} lightColor='#f2f2f2' darkColor='#404040'>
            <Image source={item.image} style={styles.image} />

            <ThemedViewV type='spaceBetween' style={{flex:1}} lightColor='#f2f2f2' darkColor='#404040'>
              <ThemedText style={{paddingHorizontal:2}} numberOfLines={1}>{item.name}</ThemedText>
              <ThemedText>₹{item.price} x {item.quantity}</ThemedText>

              
            </ThemedViewV>

          </ThemedViewH>
        )}
        ListEmptyComponent={
          <ThemedText style={{ marginTop: 20, textAlign: 'center' }}>
            Your cart is empty.
          </ThemedText>
        }
      />

      {items.length > 0 && (
        <View style={styles.footer}>
          <ThemedText type="subtitle">Total: ₹{total}</ThemedText>
          <ThemedButton title="Clear Cart" onPress={clearCart} />
        </View>
      )}
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.padding * 2,
    gap: 20,
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 6,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#c6ebcd"
  },
 
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
});
