import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { useCartStore } from '@/context/useCartStore'
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router, Stack } from 'expo-router'
import React from 'react'
import { FlatList, Image, StyleSheet } from 'react-native'

export default function Cart() {
  const { items, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCartStore();

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

            <ThemedViewV type='spaceBetween' style={{ flex: 1 }} lightColor='#f2f2f2' darkColor='#404040'>
              <ThemedText type='semiBold' numberOfLines={1}>{item.name}</ThemedText>
              <ThemedText>₹{item.price}</ThemedText>

              <ThemedViewH type='spaceBetween' lightColor='#f2f2f2' darkColor='#404040'>
                <ThemedViewH style={{ gap: 10 }} lightColor='#f2f2f2' darkColor='#404040'>
                  <ThemedIcon
                    icon={AntDesign as any}
                    name="minus"
                    type="outline"
                    style={styles.icon}
                    onPress={() => decreaseQuantity(item.id)} />
                  <ThemedText>{item.quantity}</ThemedText>
                  <ThemedIcon
                    icon={AntDesign as any}
                    name="plus"
                    type="outline"
                    style={styles.icon}
                    onPress={() => increaseQuantity(item.id)} />
                </ThemedViewH>
                <ThemedIcon
                  icon={Ionicons as any}
                  name="trash"
                  type="ghost"
                  lightColor='#e60000' darkColor='#e60000'
                  onPress={() => removeFromCart(item.id)} />
              </ThemedViewH>
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
        <ThemedViewV>
          <ThemedButton title="Clear Cart" type='link' size='sm' onPress={clearCart} />

          <ThemedViewV style={styles.footer}>
            <ThemedText type='subtitle'>Payment Summary</ThemedText>
            <ThemedViewH type='spaceBetween'>
              <ThemedText>Total Items ({items.length})</ThemedText>
              <ThemedText type='semiBold'>₹{" "}{total}</ThemedText>
            </ThemedViewH>
            <ThemedViewH type='spaceBetween'>
              <ThemedText>Delivery Fee</ThemedText>
              <ThemedText type='semiBold'>free</ThemedText>
            </ThemedViewH>
            <ThemedViewH type='spaceBetween'>
              <ThemedText>Discount</ThemedText>
              <ThemedText type='semiBold'>₹{" "}45</ThemedText>
            </ThemedViewH>
            <ThemedViewH type='spaceBetween'>
              <ThemedText>Total Amount</ThemedText>
              <ThemedText type='semiBold' style={{color:Colors.light.primary}}>₹{" "}{total - 45 }</ThemedText>
            </ThemedViewH>
          </ThemedViewV>

          <ThemedButton title="Order Now" />
        </ThemedViewV>
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
    alignItems: "stretch"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: "#c6ebcd"
  },
  icon: {
    padding: 2,
    borderRadius: 50,
    borderColor: "#d9d9d9"
  },
  footer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    padding: 10,
    marginBottom:12,
    gap:2
  },
});
