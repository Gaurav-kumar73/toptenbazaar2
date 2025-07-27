import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Spacing } from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const notificationArray = [
    { id: 1, status: "offer", title: "30% Special Discount!", message: "Special promotion only valid today" },
    { id: 2, status: "completed", title: "Your Order Has Been Taken by the Driver", message: "Recentyl" },
    { id: 3, status: "canceled", title: "Your Order Has Been Canceled", message: "Special promotion only valid today" },
    { id: 4, status: "canceled", title: "Special Offer! 60% Off", message: "19 Jun 2023" },
    { id: 5, status: "offer", title: "30% Special Discount!", message: "Special offer for new account, valid until 20 Nov 2022" },
    { id: 6, status: "offer", title: "Special Offer! 60% Off", message: "Special promotion only valid today" },
    { id: 7, status: "canceled", title: "30% Special Discount!", message: "Special promotion only valid today" },
]

const getIconByStatus = (status: string) => {
    switch (status) {
        case 'offer':
            return { name: 'pricetag', color: '#f39c12' }; // Yellow
        case 'completed':
            return { name: 'checkmark-done-circle', color: '#27ae60' }; // Green
        case 'canceled':
            return { name: 'close-circle', color: '#e74c3c' }; // Red
        default:
            return { name: 'notifications', color: '#7f8c8d' }; // Grey fallback
    }
};

export default function Notifications() {
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
                <ThemedText type="subtitle">Notification</ThemedText>
                <ThemedText>{""}</ThemedText>
            </ThemedViewH>

            <ThemedViewV style={styles.notificationContainer}>
                {notificationArray.map((item) => {
                    const { name, color } = getIconByStatus(item.status);
                    return (
                        <ThemedViewH key={item.id}>
                            <Ionicons
                                name={name as any}
                                size={22}
                                color={color}
                                style={styles.icon}
                            />
                            <ThemedViewV style={{ paddingHorizontal: 6 }}>
                                <ThemedText type='semiBold'>{item.title}</ThemedText>
                                <ThemedText type='gray'>{item.message}</ThemedText>
                            </ThemedViewV>
                        </ThemedViewH>
                    );
                })}

            </ThemedViewV>
        </ThemedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { padding: Spacing.padding * 2 },
    notificationContainer: { padding: 5, gap: 10 },
    icon: { backgroundColor: "#f2f3f2", borderRadius: 50, padding: 10 }
})