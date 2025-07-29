import ParallaxScrollViewForItem from '@/components/blazingUI/ParallaxScrollViewForItem'
import { ThemedButton } from '@/components/blazingUI/ThemedButton'
import { ThemedIcon } from '@/components/blazingUI/ThemedIcon'
import { ThemedText } from '@/components/blazingUI/ThemedText'
import { ThemedViewH } from '@/components/blazingUI/ThemedViewH'
import { ThemedViewV } from '@/components/blazingUI/ThemedViewV'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Item() {

    return (
        <ThemedViewV style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style='light' />

            <ParallaxScrollViewForItem
                headerBackgroundColor={{
                    light: Colors.light.primary,
                    dark: Colors.dark.primary,
                }}
                headerImage={<Image
                    source={require("@/assets/appImages/tomato.png")}
                    style={styles.image}
                />}
                headerOverlay={<Ionicons name='chevron-back' size={22} style={styles.icon} color={"000"} onPress={() => router.back()} />}

            >

                {/* Body Content */}
                <ThemedViewV style={styles.bodyContainer}>
                    <ThemedViewV style={styles.padding}>
                        <ThemedText style={styles.tag}>Vegetables</ThemedText>
                        <ThemedText type='title'>Fresh Tomato (Tamatar)</ThemedText>
                        <ThemedViewH style={{ gap: 5 }}>
                            <ThemedText type='subtitle' style={{ color: Colors.light.primary }}>₹ 45</ThemedText>
                            <ThemedText type='gray'>/kg</ThemedText>
                            <ThemedText style={{ textDecorationLine: "line-through", marginLeft: 5 }}>₹65</ThemedText>
                        </ThemedViewH>
                    </ThemedViewV>

                    <ThemedViewV style={styles.descriptionContainer}>
                        <ThemedText style={styles.description}>Description</ThemedText>
                    </ThemedViewV>

                    <ThemedText style={styles.padding}>The tomato is a fruit, commonly red in color, though yellow, orange, green, and other varieties are also grown. In India, it is widely cultivated and used in everyday cooking. All cultivated tomatoes are domesticated forms of the wild species Solanum lycopersicum, originally native to western South America, but now an integral part of Indian agriculture and cuisine. </ThemedText>
                    <ThemedText style={styles.padding}>The tomato is a fruit, commonly red in color, though yellow, orange, green, and other varieties are also grown. In India, it is widely cultivated and used in everyday cooking. All cultivated tomatoes are domesticated forms of the wild species Solanum lycopersicum, originally native to western South America, but now an integral part of Indian agriculture and cuisine.</ThemedText>
                </ThemedViewV>
            </ParallaxScrollViewForItem >

            <ThemedViewH type='spaceBetween' style={styles.addtocartContainer}>
                <ThemedViewH style={{ gap: 10 }}>
                    <ThemedIcon
                        icon={AntDesign as any}
                        name="minus"
                        type="outline"
                        style={styles.icon2}
                        onPress={() => { }} />
                    <ThemedText>4</ThemedText>
                    <ThemedIcon
                        icon={AntDesign as any}
                        name="plus"
                        type="outline"
                        style={styles.icon2}
                        onPress={() => { }} />
                </ThemedViewH>

                <ThemedButton title='Add to Cart' />
            </ThemedViewH>

        </ThemedViewV>
    )
}

const styles = StyleSheet.create({
    bodyContainer: { top: -25, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: "hidden", paddingBottom: 100, },
    icon: { position: "absolute", top: 50, left: 20, backgroundColor: "#fff", borderRadius: 50, padding: 5 },
    image: { width: "100%", height: "100%", resizeMode: "cover" },
    tag: { width: 100, backgroundColor: "#b3ffb3", color: "#008000", paddingHorizontal: 8, borderRadius: 8, marginTop: 20 },
    padding: { paddingHorizontal: Spacing.padding * 2 },
    descriptionContainer: { borderBottomColor: Colors.light.gray, borderBottomWidth: 0.5, marginVertical: 10, marginBottom:15 },
    description: { color: Colors.light.secondary, marginHorizontal: Spacing.padding * 2, borderBottomColor: Colors.light.secondary, borderBottomWidth: 2.5, 
        width: 83,
     },
    icon2: {
        padding: 2,
        borderRadius: 50,
        borderColor: "#d9d9d9"
    },
    addtocartContainer: {
        paddingHorizontal: Spacing.padding * 2,
        paddingBottom: 45,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 120,
        borderTopWidth: 1,
        borderColor: "#ccc",
    }
})