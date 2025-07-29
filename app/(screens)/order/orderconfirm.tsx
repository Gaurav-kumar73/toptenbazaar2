import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Spacing } from '@/constants/Spacing'
import { Image } from 'expo-image'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Orderconfirm() {
    return (
        <ThemedSafeAreaView style={styles.container}>
            <ThemedViewV type='center2' style={{ flex: 1, marginBottom: 20 }}>
                <Stack.Screen options={{ headerShown: false }} />
                <Image source={require("@/assets/appImages/orderconfirm.png")} style={styles.image} />
                <ThemedText type='title'>Order Confirmed!</ThemedText>
                <ThemedText>Your order has been confirmed!</ThemedText>
            </ThemedViewV>

            <ThemedViewV style={{ gap: 10 }}>
                <ThemedButton type='outline' title='Go to Orders' onPress={() => router.push("/(screens)/order/myorder")} />
                <ThemedButton title='Continue Shopping' onPress={() => router.push("/(tabs)")} />
            </ThemedViewV>
        </ThemedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "space-between", padding: Spacing.padding * 2 },
    image: { width: 300, height: 300, resizeMode: "contain" }
})