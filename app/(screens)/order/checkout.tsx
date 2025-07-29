import { ThemedButton } from '@/components/blazingUI/ThemedButton';
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon';
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView';
import { ThemedText } from '@/components/blazingUI/ThemedText';
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH';
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV';
import { Colors } from '@/constants/Colors';
import { Spacing } from '@/constants/Spacing';
import { useCartStore } from '@/context/useCartStore';
import { Feather, Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import { router, Stack } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

export default function Checkout() {
    const { items } = useCartStore();

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <ThemedSafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <ThemedViewV >
                <ThemedViewH type="spaceBetween">
                    <ThemedIcon
                        icon={Ionicons as any}
                        name="chevron-back"
                        type="ghost"
                        onPress={() => { router.back() }}
                    />
                    <ThemedText type="subtitle">Checkout</ThemedText>
                    <ThemedText>{"       "}</ThemedText>
                </ThemedViewH>

                <ThemedViewV>
                    <ThemedText type='subtitle'>Item Details</ThemedText>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ThemedViewH style={styles.itemContainer} lightColor='#f2f2f2' darkColor='#404040'>
                                <Image source={item.image} style={styles.image} />
                                <ThemedViewV style={{ flex: 1 }} lightColor='#f2f2f2' darkColor='#404040'>
                                    <ThemedText type='semiBold' numberOfLines={2}>{item.name}</ThemedText>
                                    <ThemedText>₹{item.price}</ThemedText>
                                </ThemedViewV>

                            </ThemedViewH>
                        )}
                        ListEmptyComponent={
                            <ThemedText style={{ marginTop: 20, textAlign: 'center' }}>
                                Your cart is empty.
                            </ThemedText>
                        }
                    />
                </ThemedViewV>

                <ThemedViewV>
                    <ThemedText type='subtitle'>Delivery Address</ThemedText>
                    <ThemedViewH type='spaceBetween' style={{ alignItems: 'flex-start', }}>
                        {/* Left: Icon + Address */}
                        <ThemedViewH style={{ flex: 1, gap: 10 }}>
                            <Ionicons
                                name="location-outline"
                                size={24}
                                color={Colors.light.secondary}
                                style={styles.iconContainer}
                            />
                            <ThemedViewV style={{ flex: 1 }}>
                                <ThemedText type='semiBold'>Delhi Kirti Nagar</ThemedText>
                                <ThemedText numberOfLines={2}>
                                    1234, Block A, Near Central Park, Connaught Place, New Delhi - 110001, India
                                </ThemedText>
                            </ThemedViewV>
                        </ThemedViewH>

                        {/* Right: Edit + Trash */}
                        <ThemedViewV style={{ alignItems: 'flex-end', gap: 5 }}>
                            <ThemedIcon
                                icon={Feather as any}
                                name="edit"
                                type="ghost"
                                size={20}
                                lightColor='#008000'
                                darkColor='#008000'
                                onPress={() => { }}
                            />
                        </ThemedViewV>
                    </ThemedViewH>
                </ThemedViewV>

            </ThemedViewV>

            <ThemedViewV>
                <ThemedViewV style={{padding:8}}>
                    <ThemedText type='subtitle'>Payment Method</ThemedText>
                    <ThemedViewH type='spaceBetween'>
                        <ThemedText>Pay on Delivery</ThemedText>
                        <MaterialIcons name="radio-button-checked" size={24} color={Colors.light.secondary} />
                    </ThemedViewH>
                </ThemedViewV>

                <ThemedViewV style={styles.footer}>
                    <ThemedText type='subtitle'>Payment Summary</ThemedText>
                    <ThemedViewH type='spaceBetween'>
                        <ThemedText>Total Items ({items.length})</ThemedText>
                        <ThemedText type='semiBold'>₹{" "}{total}</ThemedText>
                    </ThemedViewH>
                </ThemedViewV>

                <ThemedButton title='Place Order' onPress={()=>router.push("/(screens)/order/orderconfirm")}/>
            </ThemedViewV>

        </ThemedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacing.padding * 2,
        justifyContent: "space-between",
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
    iconContainer: {
        backgroundColor: "#ffd699",
        borderRadius: 5,
        padding: 14,
    },
    footer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 16,
        padding: 10,
        marginBottom: 12,
        gap: 2
    },
})