import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedTextInput } from '@/components/blazingUI/ThemedTextInput'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Spacing } from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function EditAddress() {
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
                <ThemedText type="subtitle">Address</ThemedText>
                <ThemedText type="subtitle">{"   "}</ThemedText>
            </ThemedViewH>


            <ThemedViewV type='spaceBetween' style={{marginVertical:15}}>
                <ThemedViewV style={{ marginVertical: 35, gap: 10 }}>
                    <ThemedViewV>
                        <ThemedText>Address</ThemedText>
                        <ThemedTextInput placeholder='Enter Your Full Address' />
                    </ThemedViewV>
                    <ThemedViewV>
                        <ThemedText>Landmark</ThemedText>
                        <ThemedTextInput placeholder='Enter Your Landmark' />
                    </ThemedViewV>
                    <ThemedViewV>
                        <ThemedText>City</ThemedText>
                        <ThemedTextInput placeholder='Enter Your City' />
                    </ThemedViewV>
                    <ThemedViewV>
                        <ThemedText>State</ThemedText>
                        <ThemedTextInput placeholder='Enter Your State' />
                    </ThemedViewV>
                    <ThemedViewV>
                        <ThemedText>Pincode</ThemedText>
                        <ThemedTextInput placeholder='Enter Your Pincode' />
                    </ThemedViewV>
                </ThemedViewV>

                <ThemedButton title='Save' />
            </ThemedViewV>
        </ThemedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: Spacing.padding * 2 },
})