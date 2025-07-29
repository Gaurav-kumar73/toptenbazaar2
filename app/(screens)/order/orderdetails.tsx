import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Spacing } from '@/constants/Spacing'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Orderdetails() {
    return (
        <ThemedViewV style={styles.mainContainer}>
            <Stack.Screen options={{ title: "Order #TOPTEN6789764" }} />

            <ThemedViewV>

            </ThemedViewV>
        </ThemedViewV>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: Spacing.padding * 2,
    },
}) 