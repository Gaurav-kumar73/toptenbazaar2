import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedSafeAreaView } from '@/components/blazingUI/ThemedSafeAreaView'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedTextInput } from '@/components/blazingUI/ThemedTextInput'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function EditProfile() {
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
                <ThemedText type="subtitle">Personal Details</ThemedText>
                <ThemedText type="subtitle">{""}</ThemedText>
            </ThemedViewH>

            <ThemedViewV type='center2' style={{ marginVertical: 35, width: 150, height: 150, alignSelf:"center"}}>
                <Image source={require("@/assets/appImages/user.png")} style={styles.image} />
                <Ionicons name='camera' size={32} style={styles.cameraIcon}/>
            </ThemedViewV>

            <ThemedViewV style={{ marginVertical: 35,gap:10 }}>
                <ThemedViewV>
                    <ThemedText>Full Name</ThemedText>
                    <ThemedTextInput placeholder='Enter Your Full Name' />
                </ThemedViewV>
                <ThemedViewV>
                    <ThemedText>Phone</ThemedText>
                    <ThemedTextInput placeholder='Enter Your Phone Number' />
                </ThemedViewV>
                <ThemedViewV>
                    <ThemedText>Email</ThemedText>
                    <ThemedTextInput placeholder='Enter Your Email' />
                </ThemedViewV>
            </ThemedViewV>

            <ThemedButton title='Save Details'/>
        </ThemedSafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: Spacing.padding * 2 },
    image: { width: 150, height: 150, resizeMode: "cover", borderRadius: 150 },
    cameraIcon:{color:Colors.light.secondary, position:"absolute", bottom:-0, right:15}
})