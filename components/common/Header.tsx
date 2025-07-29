import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemedIcon } from '../blazingUI/ThemedIcon'
import { ThemedText } from '../blazingUI/ThemedText'
import { ThemedViewH } from '../blazingUI/ThemedViewH'

export default function Header() {
    return (
        <ThemedViewH type="spaceBetween">
            <ThemedIcon
                icon={Ionicons as any}
                name="chevron-back"
                type="ghost"
                onPress={() => { router.back() }}
            />
            <ThemedText type="subtitle">Categories</ThemedText>
            <ThemedText>{"   "}</ThemedText>
        </ThemedViewH>
    )
}

const styles = StyleSheet.create({})