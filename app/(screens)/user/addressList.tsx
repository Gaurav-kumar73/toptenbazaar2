import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function AddressList() {
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
                <ThemedText type="subtitle">Addresses</ThemedText>
                <ThemedText type="subtitle">{"   "}</ThemedText>
            </ThemedViewH>

            <ThemedViewV type='spaceBetween' style={{ marginVertical: 15}}>

                <ThemedViewH type='spaceBetween' style={{ alignItems: 'flex-start',}}>
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
                            <ThemedText>
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
                        <ThemedIcon
                            icon={Ionicons as any}
                            name="trash"
                            type="ghost"
                            lightColor='#e60000'
                            darkColor='#e60000'
                            onPress={() => { }}
                        />
                    </ThemedViewV>
                </ThemedViewH>


                <ThemedButton title='Add New Address' onPress={() => router.push("/(screens)/user/editAddress")} />
            </ThemedViewV>
        </ThemedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: Spacing.padding * 2 },
    iconContainer: {
        backgroundColor: "#ffd699",
        borderRadius: 5,
        padding: 14,
    },
})